
//import prisma from '@/lib/db';
import prisma from '@/lib/db';
import { NextResponse } from 'next/server';



export async function GET(request: Request) {

    const res = await prisma.productCategory.findMany({
        include: {
          currentCategory: {
            include: {
             
                  product: true,
               
            
          },
          },
        },
      });

 return NextResponse.json(res);
}

