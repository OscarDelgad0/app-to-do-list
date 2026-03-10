import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'


export async function GET(request: Request) { 

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            {description: 'Piedra del alma', prueba: 'prueba-1'},
            {description: 'Piedra del poder', prueba: 'prueba-1'},
            {description: 'Piedra del tiempo', prueba: 'prueba-1'},
            {description: 'Piedra del realidad', prueba: 'prueba-1'},
        ]
    })


  return NextResponse.json({
    message: 'Seed executed',
  })
}