// store/rootReducer.js
import { combineReducers } from 'redux';
import savedShopSlice from './slice/SavedShopSlice'; // Your example slice

const rootReducer = combineReducers({
  saved: savedShopSlice,
});

export default rootReducer;