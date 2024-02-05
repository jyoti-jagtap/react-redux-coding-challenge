import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../services/users.model';
// Define the initial state using that type
const initialState: IUser[] = [];

export const usersSlice = createSlice({
  name: 'selectedUsers',
  initialState,
  reducers: {
    saveUsers: (state = initialState, action) => {
      return [...action.payload];
    },
    removeUser: (state, action) => {
      let index = state.findIndex((d) => d.id === action.payload.id);
      state.splice(index, 1);
    }
  }
});
// Action creators are generated for each case reducer function
export const { saveUsers, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
