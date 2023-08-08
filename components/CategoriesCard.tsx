"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export type categoryProps = {
  category: Array<any>;
};

function CategoryCard(props: categoryProps) {
 // Use the useParams hook from React Router to get the parameters from the URL
const params = useParams();

// Get the category data from the props
const data = props.category;

// Get the category name from the URL parameters
const Id = Object.values(params);

// Log the category name to the console
console.log(Id[1]);

// Filter the category data to find the category with the matching name
const cateFilter = data.filter((cat) => {
  // If the category name matches the URL parameter, return the category
  if (Id[1] === cat.categoryName) {
    return cat;
  } else {
    // If the category name does not match the URL parameter, return the category name
    return cat.categoryName == Id;
  }
});


  //looped render for category
  const iterateCategories = (dat: any) => {
    // Initialize an empty array to store the product elements
    const productElements = [];
  
    // Loop through each category in the data
    for (const category of dat) {
      // If the category has a "product" property
      if (category.product) {
        // Get the products for the category
        const products = category.product;
        // Loop through each product and add it to the product elements array
        for (const prod of products) {
          productElements.push(
            // Wrap the product element in a Link component with the product name as the href
        <Link href={`/product/${prod.name}`} prefetch={true}>
              <div
                key={prod.id}
                className="card h-96 w-96 m-3 bg-base-100 shadow-xl image-full"
              >
                {/* Display the product image */}
                <figure>
                  <img src={prod.imageUrl} className="flex-grow" alt="products" />
                </figure>
                {/* Display the product name */}
                <div className="card-body">
                  <h2 className="card-title">{prod.name}</h2>
                </div>
              </div>
            </Link>
          );
        }
      }
  
      // If the category has a "currentCategory" property
      if (category.currentCategory) {
        // Get the subcategories for the category
        const subcategories = category.currentCategory;
        // Loop through each subcategory
        for (const subcategory of subcategories) {
          // Get the products for the subcategory
          const products = subcategory.product;
          // If the products property is an array
          if (Array.isArray(products)) {
            // Loop through each product and add it to the product elements array
            for (const prod of products) {
              productElements.push(
                // Wrap the product element in a Link component with the product name as the href
                <Link href={`/product/${prod.name}`}>
                  <div
                    key={prod.id}
                    className="card h-96 w-96 m-3 bg-base-100 shadow-xl image-full"
                  >
                    {/* Display the product image */}
                    <figure>
                      <img src={prod.imageUrl} className="flex-grow" alt="products" />
                    </figure>
                    {/* Display the product name */}
                    <div className="card-body">
                      <h2 className="card-title">{prod.name}</h2>
                    </div>
                  </div>
                </Link>
              );
            }
          }
        }
      }
    }
  
    // Return the product elements array
    return productElements;
  };
  //Looped render from subcategory

  /*const iterateP = cateFilter.map((cat) =>
  cat.product.map((prod: any) => {
    return (
      <Link href={`/product/${prod.name}`}>
        <div
          key={prod.id}
          className="card h-96 w-96 m-3 bg-base-100 shadow-xl image-full"
        >
          <figure>
            <img src={prod.imageUrl} className="flex-grow" alt="products" />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{prod.name}</h2>
          </div>
        </div>
      </Link>
    );
  })
  
);*/

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
      {iterateCategories(cateFilter)}
    </>
  );
}

export default CategoryCard;
