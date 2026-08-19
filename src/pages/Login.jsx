import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, field) => {
    console.log("mera function chalaa ->", value);

    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const loginHandler = () => {
    console.log("login kerdia user ko...", form);
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200 lg:grid-cols-2">

          {/* Left Section */}
          <div className="hidden bg-blue-600 p-12 lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl font-bold text-blue-600">
                A
              </div>

              <h1 className="max-w-md text-4xl font-bold leading-tight text-white">
                Welcome back to your account.
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-blue-100">
                Login to access your dashboard and manage your account.
              </p>
            </div>

            <div className="rounded-2xl bg-blue-500/50 p-5">
              <p className="text-sm leading-6 text-blue-50">
                Simple, clean and professional authentication interface built
                with React and Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">
              <div className="mb-8">
                <p className="text-sm font-semibold text-blue-600">
                  AUTHENTICATION
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Login
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Enter your details to continue to your account.
                </p>
              </div>

              <Input
                placeholder={"Enter your email address"}
                handler={handleChange}
                type={"email"}
              />

              <Input
                placeholder={"Enter your password"}
                handler={handleChange}
                type={"password"}
              />

              <Button title={"Login"} handler={loginHandler} />

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200"></div>

                <span className="text-xs text-slate-400">OR</span>

                <div className="h-px flex-1 bg-slate-200"></div>
              </div>

              <p className="text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-blue-600 transition hover:text-blue-700"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;