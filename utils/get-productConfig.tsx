import prisma from "@/lib/db";
import { cache } from "react";

export const revalidate = 3600;

export const productConfig = cache(async (productId: string) => {
  const config = await prisma.productConfiguration.findMany({
    where: {
      productItem: {
        product: { name: productId },
      },
    },
    include: {
      ProductVariantOption: true,
      productItem: true,
    },
  });
  return config;
});
