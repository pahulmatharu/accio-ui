
// action interfaces
export interface IActionPayload<P> {
  readonly type: string;
  readonly payload: P;
}
export interface IAction {
  readonly type: string;
}
