import {createSlice} from "@reduxjs/toolkit";

const entity = createSlice({
  name: 'testEntity',
  initialState: 15,
  reducers: {
    add: (state) => state + 1,
  }
});

export const { add } = entity.actions;
export default entity.reducer;