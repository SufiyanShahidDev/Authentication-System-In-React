import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        age: "",
    });

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        age: "",
    });

    const handleChange = (value, field) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));

        // Clear error when user starts typing
        setErrors((prev) => ({
            ...prev,
            [field]: "",
        }));
    };

    const registerHandler = () => {
        let newErrors = {
            username: "",
            email: "",
            password: "",
            age: "",
        };

        let isValid = true;

        // Username validation
        if (!form.username.trim()) {
            newErrors.username = "Username is required";
            isValid = false;
        } else if (form.username.trim().length < 3) {
            newErrors.username = "Username must be at least 3 characters";
            isValid = false;
        }

        // Email validation - same pattern as Login.jsx
        if (!form.email.trim()) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        // Password validation - same as Login.jsx
        if (!form.password.trim()) {
            newErrors.password = "Password is required";
            isValid = false;
        } else if (form.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            isValid = false;
        }

        // Age validation
        if (!form.age.trim()) {
            newErrors.age = "Age is required";
            isValid = false;
        } else if (
            Number(form.age) < 1 ||
            Number(form.age) > 100
        ) {
            newErrors.age = "Age must be between 1 and 100";
            isValid = false;
        }

        setErrors(newErrors);

        // Stop if validation fails
        if (!isValid) {
            return;
        }

        console.log("Registration successful...", form);

        alert("Registration successful!");
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
                                Create your new account.
                            </h1>

                            <p className="mt-5 max-w-md text-base leading-7 text-blue-100">
                                Register your details and get started with your dashboard.
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

                            {/* Heading */}
                            <div className="mb-8">
                                <p className="text-sm font-bold uppercase tracking-wider text-[#123c73]">
                                    Get Started
                                </p>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    Create Account
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Enter your information to create your account.
                                </p>
                            </div>

                            {/* Username */}
                            <Input
                                placeholder="Enter your username"
                                handler={handleChange}
                                type="username"
                                value={form.username}
                                error={errors.username}
                            />

                            {/* Email */}
                            <Input
                                placeholder="Enter your email address"
                                handler={handleChange}
                                type="email"
                                value={form.email}
                                error={errors.email}
                            />

                            {/* Password */}
                            <Input
                                placeholder="Enter your password"
                                handler={handleChange}
                                type="password"
                                value={form.password}
                                error={errors.password}
                            />

                            {/* Age */}
                            <Input
                                placeholder="Enter your age"
                                handler={handleChange}
                                type="age"
                                value={form.age}
                                error={errors.age}
                            />

                            {/* Register Button */}
                            <Button
                                title="Create Account"
                                handler={registerHandler}
                            />

                            {/* Divider */}
                            <div className="my-7 flex items-center gap-4">
                                <div className="h-px flex-1 bg-slate-200"></div>

                                <span className="text-xs font-medium text-slate-400">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-slate-200"></div>
                            </div>

                            {/* Login Link */}
                            <p className="text-center text-sm text-slate-500">
                                Already have an account?{" "}

                                <Link
                                    to="/"
                                    className="font-semibold text-[#123c73] transition hover:text-[#0d2f5c]"
                                >
                                    Login
                                </Link>
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;