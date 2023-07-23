const redux = require('redux')
const createstore=redux.createStore
const BUY_CAKE="Buy-cake"
const RETURN_CAKE="Return-cake"

const initialState= {
    no_of_cakes:10,
    flavour:"vanilla"
}

const buy_cake = () => {
    return {
        type:BUY_CAKE,
        quantity:1
    }
}

const return_cake = () => {
    return {
        type:RETURN_CAKE,
        quantity:1
    }
}

const reducer_fun = (state=initialState,action) => {
    switch(action.type){
        case("Buy-cake"):
          return {
            ...state,
            no_of_cakes:state.no_of_cakes-action.quantity
          }

          case ("Return-cake"):
            return {
                ...state,
                no_of_cakes:state.no_of_cakes+action.quantity
            }

            default:
                return state
    }
}

const store = createstore(reducer_fun)
const unsubscribe = store.subscribe(()=>{
    console.log('state',store.getState());
})

store.dispatch(buy_cake())
store.dispatch(return_cake())
unsubscribe()