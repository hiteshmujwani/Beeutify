
import { combineReducers } from 'redux';
import savedShopSlice from './slice/SavedShopSlice'; 

const rootReducer = combineReducers({
  saved: savedShopSlice,
});

export default rootReducer;