"use client";

import { useParams } from "next/navigation";
import { it } from "node:test";

export type categoryProps = {
  category: Array<any>;
};

function CategoryCard(props: categoryProps) {
  const params = useParams();
  const data = props.category;
  const Id = Object.values(params);
console.log(Id[1])
  const cateFind = data.filter((cat) => {
    if(Id[1] === cat.categoryName){
      return cat
    }
    else {
      return cat.categoryName == Id
    
    } 

    
  }
    );
console.log(cateFind)
  const iterateProducts = (dat: any) => {
    const productElements = [];
  
    for (const category of dat) {
      for (const subcategory of category.currentCategory) {
        const products = subcategory.product;
  
        if (Array.isArray(products)) {
          // If the "product" property is an array
          for (const product of products) {
            productElements.push(
              <div key={product.name} className="card h-96 w-96 m-3 bg-base-100 shadow-xl image-full">
                <figure>
                  <img src={product.imageUrl} className="flex-grow" alt="products" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    <h2>Price: {product.price}</h2>
                  </div>
                </div>
              </div>
            );
          }      
        }
      }
    }
  
    return productElements;
  };
 


















  return (
    <>
      <h1 className="text-3xl font-bold">{Id}</h1>
      <div className="flex justify-between w-full">
        <label className="label">Sort By:</label>
        <select className="select select-bordered w-full max-w-xs">
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>
      {iterateProducts(cateFind)}
    </>
  );
}

export default CategoryCard;
