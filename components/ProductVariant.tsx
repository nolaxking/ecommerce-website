"use client";
import { useState } from "react";
export type ProductVariantProps = {
  config: Array<any>;
  productId: string;
};

function ProductVariant(props: ProductVariantProps) {
  const { config, productId } = props;

  const data = config.map((item: any) => {
    return item;
  });

  console.log(data);

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const handleVariantChange = (event: { target: { value: any; }; }) => {
    const variantId = event.target.value;
    const variant = product.variants.find((v) => v.id === variantId);
    setSelectedVariant(variant);
  };
const proItem = config.map((item: any) => {})
  return (
    <div>
      <h1>{productId}</h1>
      <p>{product.description}</p>
      <img src={selectedVariant.image} alt={selectedVariant.name} />
      <form>
        <label>
          Color:
          <select
            name="color"
            value={selectedVariant.attributes.color}
            onChange={handleVariantChange}
          >
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </label>
        <label>
          Size:
          <select
            name="size"
            value={selectedVariant.attributes.size}
            onChange={handleVariantChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </label>
        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
}

export default ProductVariant;
