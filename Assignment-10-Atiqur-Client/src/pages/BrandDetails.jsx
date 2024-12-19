import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

const BrandDetails = () => {
  const allBrands = useLoaderData();
  const { id } = useParams();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const singleBrand = allBrands.find((brand) => brand.id === id);
    setBrand(singleBrand);
  }, [id, allBrands]);

  if (!brand) return <p>Loading...</p>;

  const handleCopy = (couponCode) => {
    toast.success(`Copied ${couponCode} to clipboard!`);
  };

  const handleUseNow = () => {
    window.open(brand["shop-Link"], "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto mt-10">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="flex items-center mb-5">
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="w-32 h-32 rounded-full mr-6"
            />
            <div>
              <h1 className="text-3xl font-bold text-blue-950">
                {brand.brand_name}
              </h1>
              <p className="text-gray-600">{brand.description}</p>
              <p className="mt-2 text-lg font-medium">
                Category:{" "}
                <span className="text-blue-600">{brand.category}</span>
              </p>
            </div>
          </div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">
              Coupons
            </h2>
            <ul className="space-y-4">
              {brand.coupons.map((coupon, index) => (
                <li
                  key={index}
                  className="border p-4 rounded-lg bg-gray-50 shadow-sm"
                >
                  <p className="text-lg font-bold text-purple-600">
                    Code: {coupon["coupon-code"]}
                  </p>
                  <p>{coupon.description}</p>
                  <p>
                    <span className="font-semibold">Expires:</span>{" "}
                    {coupon["expiry-date"]}
                  </p>
                  <p>
                    <span className="font-semibold">Condition:</span>{" "}
                    {coupon.condition}
                  </p>
                  <p>
                    <span className="font-semibold">Type:</span>{" "}
                    {coupon.cupon_type}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <CopyToClipboard
                      text={coupon["coupon-code"]}
                      onCopy={() => handleCopy(coupon["coupon-code"])}
                    >
                      <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
                        Copy Code
                      </button>
                    </CopyToClipboard>
                    <button
                      onClick={handleUseNow}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
                    >
                      Use Now
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center mt-5">
            <a
              href={brand["shop-Link"]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 px-4 rounded"
            >
              Visit Shop
            </a>
            {brand.isSaleOn && (
              <span className="text-green-600 font-semibold text-lg">
                Sale is on!
              </span>
            )}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BrandDetails;

// import React, { useEffect, useState } from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { CopyToClipboard } from "react-copy-to-clipboard";

// const BrandDetails = () => {
//   const allBrands = useLoaderData();
//   const { id } = useParams();
//   const [brand, setBrand] = useState(null);

//   useEffect(() => {
//     const singleBrand = allBrands.find((brand) => brand.id === id);
//     setBrand(singleBrand);
//   }, [id, allBrands]);

//   if (!brand) return <p>Loading...</p>; // Handle loading state

//   return (
//     <div>
//       <header>
//         <Navbar />
//       </header>
//       <main className="w-11/12 mx-auto mt-10">
//         <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
//           <div className="flex items-center mb-5">
//             <img
//               src={brand.brand_logo}
//               alt={brand.brand_name}
//               className="w-32 h-32 rounded-full mr-6"
//             />
//             <div>
//               <h1 className="text-3xl font-bold text-blue-950">
//                 {brand.brand_name}
//               </h1>
//               <p className="text-gray-600">{brand.description}</p>
//               <p className="mt-2 text-lg font-medium">
//                 Category:{" "}
//                 <span className="text-blue-600">{brand.category}</span>
//               </p>
//             </div>
//           </div>
//           <div className="mb-5">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-3">
//               Coupons
//             </h2>
//             <ul className="space-y-4">
//               {brand.coupons.map((coupon, index) => (
//                 <li
//                   key={index}
//                   className="border p-4 rounded-lg bg-gray-50 shadow-sm"
//                 >
//                   <p className="text-lg font-bold text-purple-600">
//                     Code: {coupon["coupon-code"]}
//                   </p>
//                   <p>{coupon.description}</p>
//                   <p>
//                     <span className="font-semibold">Expires:</span>{" "}
//                     {coupon["expiry-date"]}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Condition:</span>{" "}
//                     {coupon.condition}
//                   </p>
//                   <p>
//                     <span className="font-semibold">Type:</span>{" "}
//                     {coupon.cupon_type}
//                   </p>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="flex justify-between items-center">
//             <a
//               href={brand["shop-Link"]}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 px-4 rounded"
//             >
//               Visit Shop
//             </a>
//             {brand.isSaleOn && (
//               <span className="text-green-600 font-semibold text-lg">
//                 Sale is on!
//               </span>
//             )}
//           </div>
//         </div>
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// };

// export default BrandDetails;
