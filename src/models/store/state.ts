import { Profile } from "models/profile";

export type RootState = {
  core: ICoreState;
};

export interface ICoreState {
  user: Profile | undefined;
}