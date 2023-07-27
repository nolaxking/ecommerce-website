import ProductCard from "@/components/Product-Card";
import prisma from "@/lib/db";

const getProducts = async () => {
  const res = await prisma.product.findMany({
    include: {
      productItem: true,
    },
  });

  return res;
};

export const revalidate = 3600;
async function page() {
  const products = await getProducts();
console.log(products)

  return (
    <div className="flex flex-wrap border-gray-600 border w-full rounded-md ml-10">
      

      <ProductCard products={products} />
    </div>
  );
}

export default page;
