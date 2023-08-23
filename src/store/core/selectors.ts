import { createSelector } from 'reselect';
import { ICoreState, RootState } from 'models/store/state';

export const selectCoreSlice = (state: RootState): ICoreState => state.core;

export const selectUser = createSelector(
  selectCoreSlice,
  (state: ICoreState) => state.user,
);

export const selectSelectedKit = createSelector(
  selectCoreSlice,
  (state: ICoreState) => state.selectedKit,
);
