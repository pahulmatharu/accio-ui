import { createSelector } from 'reselect';
import { Profile } from 'models/profile';
import { ICoreState, RootState } from 'models/store/state';

export const selectCoreSlice = (state: RootState): ICoreState => state.core;

export const selectUser = createSelector(
  selectCoreSlice,
  (state: ICoreState) => state.user,
);

export const selectUserInitials = createSelector(
  selectUser,
  (user: Profile | undefined) => {
    if (user) {
      return `${user.firstName.charAt(0)}${user.lastName.charAt(
        0,
      )}`.toUpperCase();
    }
    return '';
  },
);
