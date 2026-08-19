import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const Register = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        username: "",
        age: "",
    });

    const handleChange = (value, field) => {
        console.log("mera function chalaa ->", value);

        setForm((prev) => ({ ...prev, [field]: value }));
    };

    const RegisterHandler = () => {
        console.log("Register kerdia user ko...", form);
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
                                Create your new account.
                            </h1>

                            <p className="mt-5 max-w-md text-base leading-7 text-blue-100">
                                Register your details and start using your dashboard.
                            </p>
                        </div>

                        <div className="space-y-3 text-sm text-blue-50">
                            <div className="flex items-center gap-3">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                                    ✓
                                </span>
                                Simple registration
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                                    ✓
                                </span>
                                Clean dashboard
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                                    ✓
                                </span>
                                React Router navigation
                            </div>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="p-6 sm:p-10 lg:p-12">
                        <div className="mx-auto max-w-md">
                            <div className="mb-7">
                                <p className="text-sm font-semibold text-blue-600">
                                    GET STARTED
                                </p>

                                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                                    Create Account
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Fill in your information to create your account.
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

                            <Input
                                placeholder={"Enter your age"}
                                handler={handleChange}
                                type={"age"}
                            />

                            <Input
                                placeholder={"Enter your username"}
                                handler={handleChange}
                                type={"username"}
                            />

                            <Button title={"Register"} handler={RegisterHandler} />

                            <p className="mt-6 text-center text-sm text-slate-500">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-semibold text-blue-600 transition hover:text-blue-700"
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