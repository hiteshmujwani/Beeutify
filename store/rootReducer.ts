import {combineReducers} from 'redux';
import savedShopSlice from './slice/SavedShopSlice';
import filterSlice from './slice/FilterSlice';

const rootReducer = combineReducers({
  saved: savedShopSlice,
  filter: filterSlice,
});

export default rootReducer;
