<template>
  <div id="app">
    <Product></Product>
    <hr>
    <ShoppingCart></ShoppingCart>
    <router-view />
  </div>
</template>

<script>
import Product from '@/components/Product.vue'
import ShoppingCart from  '@/components/ShoppingCart.vue'

export default ({
  name:"app",
  components:{
    Product,
    ShoppingCart
  }
})
</script>