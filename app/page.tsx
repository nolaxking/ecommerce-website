

import Image from "next/image";
import Link from "next/link";




export default async function Home() {
  return (
<div className="w-full  ">
    <div
      className="hero rounded  ml-2 h-3/6 w-full"
      style={{
        backgroundImage:
          "url('phones.jpg')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">For All Of Your Mobile Tech Needs ! </h1>
         
          <button className="btn btn-primary"><Link href="/products">Get Started</Link> </button>
      </div>
      </div>
    </div>
    <div className="container mx-auto grid grid-cols-3 gap-4 pt-10 ">
    <div className="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Phones</h2>
      
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  <div className="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Watches</h2>
      
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div><div className="card w-96 bg-base-100 shadow-xl image-full">
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Accessories</h2>
      
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>


  </div>
  </div>
  
  );
}
