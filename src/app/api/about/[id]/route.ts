import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Handle GET request to fetch a specific About entry
export async function GET(request: NextRequest) {
  const { id } = request.nextUrl.pathname.split("/").pop(); // Extract id from URL
  const about = await prisma.about.findUnique({
    where: { id: Number(id) },
    include: {
      content: true,
      why: true,
      featured: true,
    },
  });

  if (about) {
    return NextResponse.json(about);
  } else {
    return NextResponse.json(
      {
        message: "About entry not found.",
      },
      { status: 404 }
    );
  }
}

// Handle PUT request to update a specific About entry
export async function PUT(request: NextRequest) {
  const { id } = request.nextUrl.pathname.split("/").pop(); // Extract id from URL
  const body = await request.json();
  const { content, why, featured, ...aboutData } = body;

  const updatedAbout = await prisma.about.update({
    where: { id: Number(id) },
    data: {
      ...aboutData,
      content: {
        deleteMany: {}, // Clear existing content before adding new ones
        create: content,
      },
      why: {
        deleteMany: {}, // Clear existing why entries before adding new ones
        create: why,
      },
      featured: {
        deleteMany: {}, // Clear existing featured entries before adding new ones
        create: featured,
      },
    },
    include: {
      content: true,
      why: true,
      featured: true,
    },
  });

  return NextResponse.json(updatedAbout);
}

// Handle DELETE request to remove a specific About entry
export async function DELETE(request: NextRequest) {
  const { id } = request.nextUrl.pathname.split("/").pop(); // Extract id from URL

  const deletedAbout = await prisma.about.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json(deletedAbout);
}
