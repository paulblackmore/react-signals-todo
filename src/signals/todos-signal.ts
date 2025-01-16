import { computed, effect, signal } from '@preact/signals-react';
import {
  getTodosFromLocalStorage,
  setTodosToLocalStorage,
} from '../local-storage/todos-local';
import { Todo } from '../types';

export const todos = signal(getTodosFromLocalStorage());

effect(() => setTodosToLocalStorage(todos.value));

export const completedTodoCount = computed(
  () => todos.value.filter((todo: Todo) => todo.completed).length,
);
