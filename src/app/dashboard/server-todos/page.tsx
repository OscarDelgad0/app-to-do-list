import prisma from "@/app/lib/prisma";
import { TodosGrid } from "@/app/todos/components/TodosGrid";
import { NewTodo } from "../../todos/components/NewTodo";

export const metadata = {
  title: "Listado de Todos",
  descripton: "SEO title",
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <div>
        <div className="w-full px-3 mx-5 mb-5">
          <NewTodo />
        </div>
        <TodosGrid todos={todos} />
      </div>
    </>
  );
}
