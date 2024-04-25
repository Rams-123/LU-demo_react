import { useState, useCallback } from "react";
import Header from "../components/Header";
import SocialMediaLogin from "../components/SocialMediaLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/sign-in-page");
  }, [navigate]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection={false}
      />
      <main className="flex justify-center items-center py-20">
        <div className="max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-lg shadow-md overflow-hidden w-full md:w-3/4 lg:w-1/2">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6">Create Account</h2>
            <form className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Email address"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                />
                <img
                  src="/iconaccount.svg"
                  alt="Email icon"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  width="20"
                  height="20"
                />
              </div>
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                />
                <img
                  src="/iconpassword.svg"
                  alt="Password icon"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  width="20"
                  height="20"
                />
              </div>

              <button className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600">
                Login
              </button>
            </form>
            <div className="text-center mt-6">
              <SocialMediaLogin
                orSignUpWith="Or sign up with"
                image1="/image-15@2x.png"
                image2="/image-21@2x.png"
              />
              <div
                className="mt-4 text-gray-700 cursor-pointer hover:underline"
                onClick={onIAlreadyHaveClick}
              >
                I already have an account.{" "}
                <span className="text-blue-500">Login</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-8 bg-white text-gray-700 text-center">
        <div className="container mx-auto">
          <div className="text-sm">
            © 2023 Localhost, Inc. All Rights Reserved
          </div>
          <div className="mt-2 flex justify-center space-x-4">
            <div className="text-blue-500 hover:underline cursor-pointer">
              Privacy Policy
            </div>
            <div className="text-blue-500 hover:underline cursor-pointer">
              Terms & Conditions
            </div>
            <div className="text-blue-500 hover:underline cursor-pointer">
              Contact us
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
