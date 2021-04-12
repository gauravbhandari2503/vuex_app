<template>
    <div class="jumbotron">
        <h1> Shopping Cart </h1>
        <hr class="my-4">
        <ul>
            <li v-for="(product,index) in products" :key="index">
                {{product.title}} - {{product.price | currency}} - {{product.quantity}}
            </li>
        </ul>
        <p>Total : {{total}} </p>
        <button v-if="$store.state.checkoutStatus === null || $store.state.checkoutStatus === 'fail' " @click="$store.dispatch('checkout')">Checkout</button>
        <p v-if="$store.state.checkoutStatus"> {{$store.state.checkoutStatus}} </p>
    </div>    
</template>

<script>
export default {
    computed: {
        products (){
            return this.$store.getters.cartProducts
        },
         total (){
            return this.$store.getters.cartTotal
        }
    }
}
</script>