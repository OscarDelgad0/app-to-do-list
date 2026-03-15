import prisma from "@/app/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

interface Segments {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | null> => {
  const todo = await prisma.todo.findFirst({ where: { id } });
  return todo;
};

const putSchema = yup.object({
  complete: yup.boolean().optional(),
  description: yup.string().optional(),
  prueba: yup.string().optional(),
});

export async function GET(request: Request, { params }: Segments) {
  const { id } = params;
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id ${id} no existe` },
      { status: 404 },
    );
  }

  return NextResponse.json(todo);
}

export async function PUT(request: Request, { params }: Segments) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo) {
    return NextResponse.json(
      { message: `Todo con id ${id} no existe` },
      { status: 404 },
    );
  }

  try {
    const body = await request.json();
    const { complete, description, prueba } = await putSchema.validate(body);

    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { complete, description, prueba },
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
}
