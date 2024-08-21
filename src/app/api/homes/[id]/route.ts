import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET a specific home entry by id
export async function GET(request: NextRequest, { params }: any) {
  const { id } = params;
  const home = await prisma.home.findUnique({
    where: { id: Number(id) },
  });

  if (!home) {
    return NextResponse.json({ error: "Home not found" }, { status: 404 });
  }

  return NextResponse.json(home);
}

// UPDATE a specific home entry by id
export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params;
  const { tagline, h1, h2, h3, content } = await request.json();

  const updatedHome = await prisma.home.update({
    where: { id: Number(id) },
    data: {
      tagline,
      h1,
      h2,
      h3,
      content,
    },
  });

  return NextResponse.json(updatedHome);
}

// DELETE a specific home entry by id
export async function DELETE(request: NextRequest, { params }: any) {
  const { id } = params;

  const deletedHome = await prisma.home.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(deletedHome);
}
