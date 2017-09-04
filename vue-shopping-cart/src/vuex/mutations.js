//mutationsType
import {
  CHANGE_STYLE,
  CHANGE_PRICE,
  ADD_ITEM,
  REMOVE_ITEM
} from './mutation-types'

export default{
  [CHANGE_STYLE] (state, args) {
    let [styleName,styleUrl] = args;
    state.iPhone6S.activeStyle = styleName;
    state.iPhone6S.activeStyleUrl = styleUrl
  },
  [CHANGE_PRICE] (state, args) {
    let [storage, price] = args;
    state.iPhone6S.activeStorage = storage;
    state.iPhone6S.price = price;
    state.iPhone6S.isSelected = false
  },
  [ADD_ITEM] (state) {
    const activeStyle = state.iPhone6S.activeStyle === '' ? '银色' : state.iPhone6S.activeStyle;
    const type = activeStyle + '，' +  state.iPhone6S.activeStorage;
    const cartInfo = {
      type: type,
      count:1,
      price: state.iPhone6S.price
    };

    state.cart.push(cartInfo)
  },
  [REMOVE_ITEM] (state, index) {
    state.cart.splice(index,1)
  }
}
