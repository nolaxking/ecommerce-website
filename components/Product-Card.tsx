'use client'


import { usePathname,useSearchParams } from 'next/navigation'
export type productsProps = {
  products: Array<any>;
};

function ProductCard(props: productsProps) {
  const pathname = usePathname()



console.log( pathname )




  const data = props.products;
  return (
    <>
    <h1 className="text-3xl font-bold">{pathname}</h1>
    <div className="flex justify-between w-full">
     <label className="label">Sort By:</label>
      <select className="select select-bordered w-full max-w-xs">
      
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
      </div>
      {data.map((products) => {
        return (
          <div
            key={products.id}
            className="card h-96 w-96 m-3 bg-base-100 shadow-xl image-full"
          >
            <figure>
              <img
                src={products.imageUrl}
                className="flex-grow"
                alt="products"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title ">{products.name}</h2>

              <div className="card-actions ">
                <button className="btn btn-primary">Buy Now</button>
                <h2>Price</h2>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
