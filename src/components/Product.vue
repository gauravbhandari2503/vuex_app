<template>
    <div>
        <h1 class="text-center">Product List</h1>
        <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
        <ul v-else>
            <li v-for="(product,index) in products" :key="index" >{{ product.title }} : {{ product.price | currency }}
                <button :disabled="!productIsInStock(product)" class="form-control col-sm-2 " @click="addProductToCart(product)">Add to cart</button>
            </li>
        </ul>
    </div>
</template>

<script>

import {mapState,mapGetters, mapActions} from 'vuex'

export default {
   data() {
       return{
           loading : false
       }
   },
   methods:{
       ...mapActions({
           fetchProducts : 'fetchProducts',
           addProductToCart : 'addProductToCart'
       }),
   },
   computed: {
       ...mapState({
           products : state => state.products.products,
       }),
       ...mapGetters({
           productIsInStock : 'productIsInStock'
       }),
       
   },
   created(){
       this.loading = true
       this.fetchProducts()
       .then(() => this.loading = false)
   }
}
</script>
