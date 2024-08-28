import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, content } = await request.json();
  const post = await prisma.post.create({
    data: { title, content },
  });
  return NextResponse.json(post);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  const post = await prisma.post.delete({
    where: { id: Number(id) },
  });
  return NextResponse.json(post);
}

export async function PUT(request: Request) {
  const { id, title, content } = await request.json();
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: { title, content },
  });
  return NextResponse.json(post);
}