import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  loading: false,
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { openModal, closeModal, setLoading } = appointmentSlice.actions;
export default appointmentSlice.reducer;