import prisma from "@/app/lib/prisma";
import { TodosGrid } from "@/app/todos/components/TodosGrid";
import { NewTodo } from "../../todos/components/NewTodo";

export default async function ResTodoPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
