import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmout =
      state.totalAmount + action.item.price * action.item.amount;

    const exitstringCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const existingCartItem = state.items[exitstringCartItemIndex];

    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[exitstringCartItemIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
      };

      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmout,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existringCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    const existringCartItem = state.items[existringCartItemIndex];

    const updatedTotalAmout = state.totalAmount - existringCartItem.price;

    let updatedItems;
    if (existringCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        return item.id !== action.id;
      });
    } else {
      const updatedItem = {
        ...existringCartItem,
        amount: existringCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existringCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmout,
    };
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispathCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemHandler = (item) => {
    dispathCartAction({
      type: 'ADD_ITEM',
      item: item,
    });
  };

  const removeItemHandler = (id) => {
    dispathCartAction({
      type: 'REMOVE_ITEM',
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
