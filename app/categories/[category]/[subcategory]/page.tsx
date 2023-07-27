import { Suspense } from "react";
import CategoryCard from "@/components/CategoriesCard";
import prisma from "@/lib/db";

const getCategories = async () => {
  const res = await prisma.productCategory.findMany({
    include: {
      product: true,
      currentCategory: {
        include: {
        
              product: true,
           
      },
      },
    },
  });

  return res;
};

async function page() {
  const category = await getCategories();
  
  return (
    <div className="flex flex-wrap border-gray-600 border w-full rounded-md ml-10">
        <Suspense fallback={<div>Loading...</div>}>
        <CategoryCard category={category} />
      </Suspense>
      
    </div>
  );
}

export default page;