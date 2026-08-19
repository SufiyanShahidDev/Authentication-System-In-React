import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import axios from "axios";

const Home = () => {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        let result = await axios.get("https://dummyjson.com/users");
        console.log(result);

        setUsers(result.data.users);
    };

    useEffect(() => {
        console.log("use effect chalaaa -->");

        getData();
    }, []);

    return (
        <div className="min-h-screen bg-slate-100">
            {/* Navbar */}
            <header className="border-b border-slate-200 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                            A
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-slate-900">
                                AuthSystem
                            </h1>

                            <p className="text-xs text-slate-500">
                                User Dashboard
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/login"
                        className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                        Logout
                    </Link>
                </div>
            </header>

            {/* Dashboard Content */}
            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                {/* Welcome Section */}
                <div className="mb-8">
                    <p className="text-sm font-semibold text-blue-600">
                        DASHBOARD
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                        Welcome back
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        Manage and view all users fetched from the API.
                    </p>
                </div>

                {/* Stats */}
                <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    Total Users
                                </p>

                                <h3 className="mt-2 text-3xl font-bold text-slate-900">
                                    {users.length}
                                </h3>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-blue-600">
                                👥
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    API Status
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-green-600">
                                    Connected
                                </h3>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                                ✓
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-slate-500">
                                    Technology
                                </p>

                                <h3 className="mt-2 text-xl font-bold text-slate-900">
                                    React + Axios
                                </h3>
                            </div>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                                ⚡
                            </div>
                        </div>
                    </div>
                </div>

                {/* Users Section */}
                <div className="mb-5 flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            All Users
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            User information received from DummyJSON API.
                        </p>
                    </div>

                    <div className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                        {users.length} Users
                    </div>
                </div>

                {/* User Cards */}
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {users.map((user) => (
                        <Card key={user.id} data={user} />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;