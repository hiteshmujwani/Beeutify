import {combineReducers} from 'redux';
import savedShopSlice from './slice/SavedShopSlice';
import filterSlice from './slice/FilterSlice';
import shopSlice from './slice/ShopSlice'
import userSlice from './slice/userSlice'

const rootReducer = combineReducers({
  saved: savedShopSlice,
  filter: filterSlice,
  shops: shopSlice,
  user: userSlice
});

export default rootReducer;
