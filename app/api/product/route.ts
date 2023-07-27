
//import prisma from '@/lib/db';
import prisma from '@/lib/db';
import { NextResponse } from 'next/server';



export async function GET(request: Request) {

 const data = await prisma.product.findMany();

 return NextResponse.json(data);
}

