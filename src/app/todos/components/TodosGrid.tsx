"use client";

import { Todo } from "@/generated/prisma/client";
import { TodosItem } from "./TodosItem";

import * as api from "@/app/todos/helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {
  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const updateTodo = await api.updateTodo(id, complete);
    router.refresh();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodosItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
