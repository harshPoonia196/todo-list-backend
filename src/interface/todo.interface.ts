export interface ITodo {
  _id: string;
  todo: string;
  completed: boolean;
}
export interface IGetAllToDosParams {
  skip: number;
  limit: number;
}

export interface IGetAllToDosRes {
  toSkip: number;
  hasNext: boolean;
  toDos: ITodo[];
}
