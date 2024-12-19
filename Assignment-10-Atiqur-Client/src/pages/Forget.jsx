import React, { useContext } from "react";
import { EmailContext } from "../providers/EmailProvider";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";

const Forget = () => {
  const [email] = useContext(EmailContext);
  const { handleForgot } = useContext(AuthContext); // Access email from context
  const handleReset = () => {
    if (!email) {
      toast.error("Please provide a valid email");
      return;
    } else {
      handleForgot(email).then(() => {
        toast.success("Reset Link sent to your email.");
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Password Recovery
        </h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              defaultValue={email} // Prefill email
              readOnly // Make it read-only if desired
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="button"
              onClick={handleReset}
              className="btn btn-neutral rounded-none"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forget;
