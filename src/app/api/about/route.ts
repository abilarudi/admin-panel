import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Handle GET request to fetch About data
export async function GET() {
  try {
    const aboutEntries = await prisma.about.findMany({
      include: {
        content: true,
        why: true,
        featured: true,
      },
    });

    if (!aboutEntries.length) {
      return NextResponse.json(
        { message: "No entries found" },
        { status: 404 }
      );
    }

    return NextResponse.json(aboutEntries);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle POST request to create the initial About entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, why, featured, ...aboutData } = body;

    const newAbout = await prisma.about.create({
      data: {
        ...aboutData,
        content: {
          create: content,
        },
        why: {
          create: why,
        },
        featured: {
          create: featured,
        },
      },
      include: {
        content: true,
        why: true,
        featured: true,
      },
    });

    return NextResponse.json(newAbout);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Handle PUT request to update the About entry
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { content, why, featured, ...aboutData } = body;

    const updatedAbout = await prisma.about.upsert({
      where: { id: 1 },
      update: {
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
      create: {
        ...aboutData,
        content: {
          create: content,
        },
        why: {
          create: why,
        },
        featured: {
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
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
