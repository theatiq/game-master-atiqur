import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "./Loading";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
// import { CopyToClipboard } from "react-copy-to-clipboard";
// import toast from "react-hot-toast";

const ReviewDetails = () => {
  const { user, setUser, logOut, createUserGoogle } = useContext(AuthContext);
  const reviews = useLoaderData();
  const { id } = useParams();
  const { _id, title, review, rating, year, genres, image } = reviews;
  const email = user.email;
  const userName = user.displayName;

  const watchList = {
    _id,
    title,
    review,
    rating,
    year,
    genres,
    image,
    email,
    userName,
  };
  //   const [brand, setBrand] = useState(null);

  //   useEffect(() => {
  //     const singleBrand = allBrands.find((brand) => brand.id === id);
  //     setBrand(singleBrand);
  //   }, [id, allBrands]);
  const handleAddWatchList = () => {
    fetch("https://assignment-10-atiqur-server.vercel.app/watchList", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(watchList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Successfully added to Watch List",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  if (!review) return <Loading></Loading>;

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="w-11/12 mx-auto mt-10 my-10">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="lg:flex items-center mb-5">
            <img
              src={image}
              alt={image}
              className="w-64 h-64 mr-6 rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-blue-950">{title}</h1>
              <p className="text-gray-600">{review}</p>
              <p className="mt-2 text-lg font-medium">
                Category: <span className="text-blue-600">{genres}</span>
              </p>
              <p className="mt-2 text-lg font-medium">
                Rating: <span className="text-blue-600">{rating}</span>
              </p>
              <p className="text-gray-600">Name: {userName}</p>
              <p className="text-gray-600">Email: {email}</p>
              <button onClick={handleAddWatchList} className="btn">
                Add to Watch List
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ReviewDetails;
