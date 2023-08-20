import { createSlice } from '@reduxjs/toolkit';
import { Profile } from 'models/profile';
import { IActionPayload } from 'models/store/action';
import { ICoreState } from 'models/store/state';

export const initialState: ICoreState = {
  user: undefined,
};

const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setUser(state: ICoreState, action: IActionPayload<Profile | undefined>) {
      state.user = action.payload;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const {
  setUser,
} = coreSlice.actions;

// Export the slice reducer as the default export
export default coreSlice.reducer;
