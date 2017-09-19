import * as types from './mutation-types'
//index actions
// export const changePrice = makeAction('CHANGE_PRICE');
// export const changeStyle = makeAction('CHANGE_STYLE');
// export const addItem = makeAction('ADD_ITEM');
// export const removeItem = makeAction('REMOVE_ITEM');
//
// function makeAction (type) {
//   return ({ dispatch }, ...args) => dispatch(type, ...args)
// }


//  export default{
//   changePrice({ commit },...args){
//     commit(types.CHANGE_PRICE, args)
//   },
//   changeStyle({commit},...args){
//     commit(types.CHANGE_STYLE, args)
//   },
//   addItem({commit},...args){
//     commit(types.ADD_ITEM, args)
//   },
//   removeItem({commit},...args){
//     commit(types.REMOVE_ITEM, args)
//   }
//  }
export default {
    'CHANGE_STYLE':function(store , args){
        return new Promise(function(resolve, reject) {
            store.commit(types.CHANGE_STYLE, args);
            resolve("ok");
        })
    },
    'CHANGE_PRICE':function(store , args){
        return new Promise(function(resolve, reject) {
            store.commit(types.CHANGE_PRICE, args);
            resolve("ok");
        })
    },
    'COUNT_DECREASE':function(store){
        return new Promise(function(resolve, reject) {
            store.commit(types.COUNT_DECREASE);
            resolve("ok");
        })
    },
    'COUNT_INCREASE':function(store){
        return new Promise(function(resolve, reject) {
            store.commit(types.COUNT_INCREASE);
            resolve("ok");
        })
    },
    'ADD_ITEM':function(store , args){
        return new Promise(function(resolve, reject) {
            store.commit(types.ADD_ITEM, args);
            resolve("ok");
        })
    },
    'REMOVE_ITEM':function (store,index) {
        return new Promise(function(resolve, reject) {
            store.commit(types.REMOVE_ITEM, index);
            resolve("ok");
        })
    }
}
