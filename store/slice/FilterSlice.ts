import {createSlice} from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'saved',
  initialState: {
    selectedService: {},
    selectedRating: {},
    selectedDistance: {},
  },
  reducers: {
    setSelectedService: (state: any, action: any) => {
      state.selectedService = action.payload;
    },
    setSelectedRating: (state: any, action: any) => {
      state.selectedRating = action.payload;
    },
    setSelectedDistance: (state: any, action: any) => {
      state.selectedDistance = action.payload;
    },
  },
});

export const {setSelectedDistance, setSelectedRating, setSelectedService} =
  filterSlice.actions;

export default filterSlice.reducer;
