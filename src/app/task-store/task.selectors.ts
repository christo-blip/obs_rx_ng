import { createFeatureSelector, createSelector } from "@ngrx/store";
import { taskState } from "./task.state";
import { Task } from "../models/task_model";

export const selectTasksstate = createFeatureSelector<taskState>('tasks');

export const selectAllTasks = createSelector(
    selectTasksstate,
    (state:taskState) => state.tasks ////
)

export const selectIcompleteTasksCount = createSelector(
    selectAllTasks,
    tasks => tasks.filter(t =>t!.completed).length ////
);