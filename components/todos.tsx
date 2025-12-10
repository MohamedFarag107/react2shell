"use client";

import { use } from "react";
import { Todo } from "./get-todos";
export type TodosProps = {
  getTodos: Promise<Todo[]>;
};
export const Todos = ({ getTodos }: TodosProps) => {
  const todos = use(getTodos);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <main className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold text-black dark:text-zinc-50">
          Todos
        </h1>
        <div className="grid gap-4">
          {todos.slice(0, 1).map((todo) => (
            <div
              key={todo.id}
              className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                  className="mt-1 h-5 w-5 cursor-pointer rounded border-zinc-300 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-zinc-600"
                />
                <div className="flex-1">
                  <p
                    className={`text-base ${
                      todo.completed
                        ? "text-zinc-500 line-through dark:text-zinc-500"
                        : "text-zinc-900 dark:text-zinc-100"
                    }`}
                  >
                    {todo.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    User ID: {todo.userId} • Todo ID: {todo.id}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          Showing {todos.length} todos from JSONPlaceholder API
        </p>
      </main>
    </div>
  );
};
