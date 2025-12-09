import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task_model';

export const addTask = createAction(
 '[Tasks Page] Add Task',
 props<{task : Task}>()   
)

export const removeTask = createAction(
    '[Task Page] Remove Task',
    props<{taskId: string}>()
)

export const toggleTaskCompletion = createAction(
    '[Tasks Page] toggle task Completion',
    props<{taskId : string}>()
)