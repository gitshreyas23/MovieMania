import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="text-center mt-20 text-3xl">
      User ID: {id}
      <br />
      <button
        className="px-6 py-2 bg-blue-600 text-white mt-5 rounded-lg"
        onClick={() => navigate("/dashboard/profile")}
      >
        Login
      </button>
    </div>
  );
};

export default User;
