import {Action} from "@ngrx/store";

export enum todoActionsType {
  create = '[TODO] create todo item'
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create
  constructor(public payload: string) {

  }
}

export type TodoActions = TodoCreateAction;
