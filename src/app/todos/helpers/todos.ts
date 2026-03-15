import { Todo } from "@prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean,
): Promise<Todo> => {
  //   const body = { complete };

  //   console.log("Body->", body);
  //   console.log("Body->", JSON.stringify(body));

  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify({ complete: complete }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  console.log(todo);

  return todo;
};
