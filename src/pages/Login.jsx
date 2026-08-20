import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (value, field) => {
    console.log("mera function chalaa ->", value);

    setForm((prev) => ({ ...prev, [field]: value }));

    setErrors((prev) => ({
      ...prev,
      [field]: "",
    }));
  };

  const loginHandler = () => {
    let newErrors = {
      email: "",
      password: "",
    };

    let isValid = true;

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      return;
    }

    console.log("login kerdia user ko...", form);

    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-10">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-300 lg:grid-cols-2">

          {/* Left Side */}
          <div className="hidden bg-[#0d2f5c] p-12 lg:flex lg:flex-col lg:justify-between">
            <div>
              <div className="flex h-11 w-11 mb-4 items-center justify-center rounded-2xl border-white border-2 bg-white text-lg font-bold text-[#0d2f5c] bprder-white">
                <img className="rounded-2xl" src="https://avatars.githubusercontent.com/u/224948898?v=4" alt="logo" />
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-200">
                Authentication System
              </p>

              <h1 className="max-w-md text-4xl font-bold leading-tight text-white">
                Welcome back to your account.
              </h1>

              <p className="mt-5 max-w-md text-base leading-7 text-blue-100">
                Sign in to access your dashboard and manage your account.
              </p>
            </div>

            <div className="rounded-2xl border border-blue-300/20 bg-blue-400/10 p-5">
              <p className="text-sm leading-6 text-blue-100">
                Completely made by Sufiyan Shahid Dev.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">

              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-wider text-[#123c73]">
                  Welcome Back
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Login
                </h2>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Enter your email and password to continue.
                </p>
              </div>

              <Input
                placeholder={"Enter your email address"}
                handler={handleChange}
                type={"email"}
                value={form.email}
                error={errors.email}
              />

              <Input
                placeholder={"Enter your password"}
                handler={handleChange}
                type={"password"}
                value={form.password}
                error={errors.password}
              />

              <Button
                title={"Login"}
                handler={loginHandler}
              />

              <div className="my-7 flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200"></div>

                <span className="text-xs font-medium text-slate-400">
                  OR
                </span>

                <div className="h-px flex-1 bg-slate-200"></div>
              </div>

              <p className="text-center text-sm text-slate-500">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-[#123c73] transition hover:text-[#0d2f5c]"
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