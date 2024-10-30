import {createSlice} from '@reduxjs/toolkit';

const savedShopSlice = createSlice({
  name: 'saved',
  initialState: [],
  reducers: {
    handleSaveShop: (state: any, action: any) => {
      const shopExists = state.some(
        (item: any) => item.name === action.payload.name,
      );
      if (shopExists) {
        return state.filter((item: any) => item.name !== action.payload.name);
      } else {
        return [...state, action.payload];
      }
    },
  },
});

export const {handleSaveShop} = savedShopSlice.actions;

export default savedShopSlice.reducer;
