import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CouponCategory from "../pages/CouponCategory";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import MyProfile from "../pages/MyProfile";
import About from "../pages/About";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TopBrands from "../components/TopBrands";
import BrandDetails from "../pages/BrandDetails";
import PrivateRoute from "./PrivateRoute";
import Letter from "../pages/Letter";
import Fest from "../pages/Fest";
import Forget from "../pages/Forget";
import UpdateProfile from "../pages/UpdateProfile";
import AddReview from "../pages/AddReview";
import AllReviews from "../pages/AllReviews";
import ReviewDetails from "../pages/ReviewDetails";
import MyReviews from "../pages/MyReviews";
import UpdateReview from "../pages/UpdateReview";
import MyWatchList from "../pages/MyWatchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://assignment-10-atiqur-server.vercel.app/reviewsHome"),
      },
      {
        path: "/topBrands",
        element: <TopBrands></TopBrands>,
      },
      {
        path: "/addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/allReviews",
        element: <AllReviews></AllReviews>,
        loader: () =>
          fetch("https://assignment-10-atiqur-server.vercel.app/reviews"),
      },

      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-atiqur-server.vercel.app/review/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateReview></UpdateReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/myWatchList",
        element: (
          <PrivateRoute>
            <MyWatchList></MyWatchList>
          </PrivateRoute>
        ),
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/letter",
        element: <Letter></Letter>,
      },
      {
        path: "/fest",
        element: <Fest></Fest>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      {
        path: "/auth/forget",
        element: <Forget></Forget>,
      },
      {
        path: "/auth/update",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
  {
    path: "/review/:id",
    element: (
      <PrivateRoute>
        <ReviewDetails></ReviewDetails>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://assignment-10-atiqur-server.vercel.app/review/${params.id}`
      ),
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
  ,
]);

export default router;
