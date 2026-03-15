import prisma from "@/app/lib/prisma";
import { TodosGrid } from "@/app/todos/components/TodosGrid";

export default async function ResTodoPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <h1>Restodo page</h1>
      <TodosGrid todos={todos} />
    </div>
  );
}
