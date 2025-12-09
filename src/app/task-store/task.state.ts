import { Task } from "../models/task_model";
export interface taskState{
tasks: Task[];
}

export const initialState: taskState={
    tasks:[]
}