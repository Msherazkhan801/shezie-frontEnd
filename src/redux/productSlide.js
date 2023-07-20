import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

const initialState = {
  productList: [],
  cartItem: [],
  searchResults: [],
  orderdProducts: [],
  
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },
    addCartItem: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);
      if (check) {
        toast('Already Item in Cart');
      } else {
        toast('Item Add successfully');
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total: total },
        ];
      }
    },
    resetCart: (state, action) => {
      state.cartItem = [];
    },
    deleteCartItem: (state, action) => {
      toast('one Item Delete');
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
      console.log(index);
    },
    deleteorderItem: (state, action) => {
      toast('one Item Delete');
      const index = state.orderdProducts.findIndex(
        (el) => el._id === action.payload
      );
      state.orderdProducts.splice(index, 1);
      console.log(index);
    },
    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const qtyInc = ++qty;
      state.cartItem[index].qty = qtyInc;

      const price = state.cartItem[index].price;
      const total = price * qtyInc;

      state.cartItem[index].total = total;
    },
    searchProduct: (state, action) => {
      const searchTerm = action.payload;
      state.searchResults = state.productList.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    orderdProduct: (state, action) => {
    
      state.orderdProducts = [...action.payload];
    },
    approvedProduct: (state, action) => {
      const updatedOrder = action.payload; 
          const indexToUpdate = state.orderdProducts.findIndex(item => item._id === updatedOrder._id);
       
      if (indexToUpdate !== -1) {
        const updatedProducts = state.orderdProducts.map((item, index) => {
          if (index === indexToUpdate) {
            return { ...item, ...updatedOrder };
          }
          return item;
        });
    
        state.orderdProducts = updatedProducts;
      }
    },    
    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const qtyDec = ++qty;
        state.cartItem[index].qty = qtyDec;

        const price = state.cartItem[index].price;
        const total = price * qtyDec;

        state.cartItem[index].total = total;
      }
    },
  },
});

export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
  searchProduct,
  orderdProduct,
  deleteorderItem,
  approvedProduct,
  resetCart,
} = productSlice.actions;

export default productSlice.reducer;