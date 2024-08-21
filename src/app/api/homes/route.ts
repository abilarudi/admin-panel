import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET all home entries
export async function GET() {
  const homes = await prisma.home.findMany();
  return NextResponse.json(homes);
}

// POST a new home entry
export async function POST(request: NextRequest) {
  const { tagline, h1, h2, h3, content } = await request.json();

  const newHome = await prisma.home.create({
    data: {
      tagline,
      h1,
      h2,
      h3,
      content,
    },
  });

  return NextResponse.json(newHome);
}
