import {Action} from "@ngrx/store";
import {Todo} from "../../model/todo";

export enum todoActionsType {
  create = '[TODO] create todo item'
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create
  constructor(public payload: Todo) {

  }
}

export type TodoActions = TodoCreateAction;
