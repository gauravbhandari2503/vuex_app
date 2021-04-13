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
        <button v-if="checkoutStatus === null || checkoutStatus === 'fail' " @click="checkout">Checkout</button>
        <p v-if="checkoutStatus"> {{checkoutStatus}} </p>
    </div>    
</template>

<script>

import {mapState,mapGetters, mapActions} from 'vuex'

export default {
    methods:{
        ...mapActions({
            checkout : 'checkout'
        })
    },
    computed: {
        ...mapGetters({
            products : 'cartProducts',
            total : 'cartTotal'
        }),

        ...mapState({
            checkoutStatus : 'checkoutStatus'
        })
    }
}
</script>