import { NextResponse } from 'next/server';
import { PrismaClient as PrismaClient2 } from '../../../../node_modules/@prisma-db-2/client'

const prisma2 = new PrismaClient2();

export async function GET() {
  const feed = await prisma2.posts.findMany({
    orderBy: {
        createdAt: 'desc', // Load most recent posts first
    },
});
  return NextResponse.json(feed);
}

export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();
    
    if (prisma2)
      if (!title || !content) {
        return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
      }
    const post = await prisma2.posts.create({
      data: { title, content },
    });
    return NextResponse.json(post);
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: 'An error occurred while creating the post' }, { status: 500 });
  }
}

// export async function DELETE(request: Request) {
//   const { id } = await request.json();
//   const post = await prisma.post.delete({
//     where: { id: Number(id) },
//   });
//   return NextResponse.json(post);
// }

// export async function PUT(request: Request) {
//   const { id, title, content } = await request.json();
//   const post = await prisma.post.update({
//     where: { id: Number(id) },
//     data: { title, content },
//   });
//   return NextResponse.json(post);
// }