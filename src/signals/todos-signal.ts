import { computed, effect, signal } from '@preact/signals-react';
import { Todo } from '../types';

export const todos = signal(
  localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos') as string)
    : [],
);

effect(() => localStorage.setItem('todos', JSON.stringify(todos.value)));

export const completedTodoCount = computed(
  () => todos.value.filter((todo: Todo) => todo.completed).length,
);
