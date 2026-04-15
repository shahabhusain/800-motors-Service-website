import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer from '../slice/authAppoitmentModelSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentReducer,
  },
});