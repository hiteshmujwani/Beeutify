import {combineReducers} from 'redux';
import savedShopSlice from './slice/SavedShopSlice';
import filterSlice from './slice/FilterSlice';
import shopSlice from './slice/ShopSlice'

const rootReducer = combineReducers({
  saved: savedShopSlice,
  filter: filterSlice,
  shops: shopSlice
});

export default rootReducer;
