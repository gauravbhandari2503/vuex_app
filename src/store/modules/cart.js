import shop from "@/api/shop"
export default {
    state : {
        cart : [], 
        checkoutStatus: null
    },
    actions : {
        addProductToCart(context,product){
            if(context.getters.productIsInStock(product)){
              const cartItem = context.state.cart.find(item => item.id === product.id)
              if(!cartItem){
                context.commit('pushProductToCart',product.id)
              }
              else{
                context.commit('increamentItemQuantity',cartItem)
              }
              context.commit('decreamentProductInventory',product)
            }
        }, 
      
        checkout(context){
            shop.buyProducts(
              context.state.cart,
              () => {
                context.commit('emptyCart')
                context.commit('setCheckoutStatus','success')
      
              },
              () => {
                context.commit('setCheckoutStatus','fail')
              }
            )
        }
    },
    getters : {
        cartProducts(state,getters,rootState){
            return state.cart.map(cartItem => {
              const product = rootState.products.products.find(product => product.id === cartItem.id)
              return {
                title : product.title ,
                price : product.price ,
                quantity : cartItem.quantity,
              }
            })
          },
          cartTotal(state,getters){
            let total = 0
            getters.cartProducts.forEach(product => {
              total += product.price * product.quantity
            })
            return total 
          },
          productIsInStock(){
            return(product) => {
              return product.inventory > 0
            }
        }
    },

    mutations:{
        pushProductToCart(state,productId){
            state.cart.push({
              id: productId,
              quantity: 1
            })
        },
      
        increamentItemQuantity(state,cartItem){
            cartItem.quantity++
        },

        setCheckoutStatus(state , status){
            state.checkoutStatus = status
        },
      
        emptyCart(state){
            state.cart = []
        },
    }
}