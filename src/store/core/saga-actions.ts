import { IAction } from "models/store/action";

export const LOGOUT = 'APP/CORE/LOGOUT';
export const logout = (): IAction => {
  return {
    type: LOGOUT,
  };
};
