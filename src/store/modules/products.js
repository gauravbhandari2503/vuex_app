import shop from "@/api/shop"

export default {
    state : {
        products : [] 
    },
    actions : {
        fetchProducts(context){
            return new Promise((resolve) => {
              shop.getProducts(products => {
                context.commit('setProducts',products)
                resolve()
              })
            })
        }
    },
    getters : {
        availableProducts(state){
            return state.products.filter(product => product.inventory > 0)
        },
    },
    modules : {

    },
    mutations : {
        setProducts(state, products){  
            state.products = products
        },
      
        decreamentProductInventory(state,product){
            product.inventory--
        },
    }
}