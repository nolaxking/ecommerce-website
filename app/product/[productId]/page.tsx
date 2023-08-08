import Product from "@/components/Product";
import { prisma } from "../../../lib/db";
import { Metadata } from "next";
import ProductVariant from "@/components/ProductVariant";
import { productConfig } from "@/utils/get-productConfig";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

async function page({ params }: ProductPageProps) {
  const productId = params.productId.replace(/%20/g, " ");
  

const  config = await productConfig(productId)

  
console.log(config)
  return (
    <>
      <div className="flex flex-col items-center  w-screen border-gray-600 border  rounded-md ml-10 justify-center min-h-screen py-2">
<ProductVariant config={config} productId={productId}  />
      </div>
    </>
  );
}

export default page;
