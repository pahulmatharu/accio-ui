import { createSlice } from '@reduxjs/toolkit';
import { Kit } from 'models/kit';
import { Profile } from 'models/profile';
import { IActionPayload } from 'models/store/action';
import { ICoreState } from 'models/store/state';

export const initialState: ICoreState = {
  user: undefined,
  kits: [],
  selectedKit: undefined,
};

const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setUser(state: ICoreState, action: IActionPayload<Profile | undefined>) {
      state.user = action.payload;
    },
    setKits(state: ICoreState, action: IActionPayload<Kit[]>) {
      state.kits = action.payload;
    },
    setSelectedKit(state: ICoreState, action: IActionPayload<Kit>) {
      state.selectedKit = action.payload;
    },
  },
});

// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { setUser, setKits, setSelectedKit } = coreSlice.actions;

// Export the slice reducer as the default export
export default coreSlice.reducer;
