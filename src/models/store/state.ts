import { Kit } from 'models/kit';
import { Profile } from 'models/profile';

export type RootState = {
  core: ICoreState;
};

export interface ICoreState {
  user: Profile | undefined;
  kits: Kit[];
  selectedKit: Kit | undefined;
}
