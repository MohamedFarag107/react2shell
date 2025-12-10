"use server";

import { todos } from "@/data";

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export async function getTodos(): Promise<Todo[]> {
  
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve(todos);
    }, 1000)
  );
}
