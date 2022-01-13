export const initialState = {
  basket: [],
  productList: [],
  selectedProduct: null,
  user: null,
};

export const itemQuantity = (basket) =>
  basket.reduce((acc, curr) => {
    acc[curr.id] = (acc[curr.id] || 0) + 1;
    return acc;
  }, {});

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECTED_PRODUCT":
      return {
        ...state,
        selectedProduct: action.item,
      };

    case "ADD_QUANTITY":
      const addItem = state.basket.find((item) => item.id === action.item.id);
      return {
        ...state,
        basket: [
          ...state.basket.filter((item) => item.id !== action.item.id),
          { ...addItem, quantity: addItem.quantity + 1 },
        ],
      };

    case "REMOVE_QUANTITY":
      const removeItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      return {
        ...state,
        basket: [
          ...state.basket.filter((item) => item.id !== action.item.id),
          {
            ...removeItem,
            quantity: removeItem.quantity > -1 ? removeItem.quantity - 1 : 0,
          },
        ],
      };

    case "ADD_TO_BASKET":
      const item = state.productList.find((item) => item.id === action.id);
      return {
        ...state,
        basket: [
          ...state.basket,
          {
            id: item.id,
            ImageUrl: item.ImageUrl,
            name: item.name,
            price: item.price,
            quantity: item.id === action.id ? state.basket.quantity + 1 : 1,
          },
        ],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in the Basket!!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_Product":
      return {
        ...state,
        productList: [...state.productList, action.ProductList],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
