import { createSlice } from "@reduxjs/toolkit";

const INITIAL_GAUGE_VALUE = 50;

const gaugeSlice = createSlice({
  name: "gauge",
  initialState: { value: INITIAL_GAUGE_VALUE },
  reducers: {
    setGaugeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGaugeValue } = gaugeSlice.actions;
export default gaugeSlice.reducer;
