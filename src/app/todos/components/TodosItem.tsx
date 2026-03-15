"use client";

import styles from "./TodoItem.module.css";

import { Todo } from "@/generated/prisma/client";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodosItem = ({ todo, toggleTodo }: Props) => {
  return (
    <div
      className={`${todo.complete ? styles.todoDone : styles.todoPending} sm:flex-row sm:gap-0`}
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
        <div
          onClick={() => toggleTodo(todo.id, !todo.complete)}
          className={`flex p-2 rounded-md cursor-pointer hover:bg-opacity-60 ${todo.complete ? "bg-blue-100" : "bg-red-100"}`}
        >
          {todo.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:left-0">{todo.description}</div>
      </div>
    </div>
  );
};
