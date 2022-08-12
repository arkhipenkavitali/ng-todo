import {Action} from "@ngrx/store";

export enum todoActionsType {
  create = '[TODO] create todo item',
  delete = '[TODO] delete todo item'
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create
  constructor(public payload: string) {

  }
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete
  constructor(public payload: {id: number}) {
  }
}

export type TodoActions = TodoCreateAction | TodoDeleteAction;
