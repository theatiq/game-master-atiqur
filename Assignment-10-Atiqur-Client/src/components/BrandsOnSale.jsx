import React from "react";

const BrandsOnSale = ({ brand }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={brand.brand_logo}
          alt="Brand Logo"
          className="rounded-xl h-[200px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{brand.brand_name}</h2>
        <p>Total Coupons: {brand.coupons.length}</p>
        <p>Category: {brand.category}</p>
      </div>
    </div>
  );
};

export default BrandsOnSale;

{
  /* <div className="">
<div className="card bg-primary text-primary-content h-[180px]">
  <div className="card-body">
    <h2 className="card-title">{brand.brand_name}</h2>
    <p>{brand.description}</p>
    <p>Rating: {brand.rating}</p>
  </div>
</div>
</div> */
}
