import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();

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

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-slate-100">

            {/* Navbar */}
            <header className="bg-[#0d2f5c]">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-white border-2 bg-white text-lg font-bold text-[#0d2f5c] bprder-white">
                            <img className="rounded-2xl" src="https://avatars.githubusercontent.com/u/224948898?v=4" alt="logo" />
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-white">
                                AuthSystem
                            </h1>

                            <p className="text-xs text-blue-200">
                                User Dashboard
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={logoutHandler}
                        className="cursor-pointer rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-[#0d2f5c] transition hover:bg-blue-50"
                    >
                        Logout
                    </button>

                </div>
            </header>

            {/* Main */}
            <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

                <div className="mb-8">
                    <p className="text-sm font-bold uppercase tracking-wider text-[#123c73]">
                        Dashboard
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900">
                        Welcome back
                    </h2>

                    <p className="mt-2 text-sm text-slate-500">
                        View all users fetched from the API.
                    </p>
                </div>

                {/* Stats */}
                <div className="mb-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-slate-500">
                            Total Users
                        </p>

                        <div className="mt-2 flex items-center justify-between">
                            <h3 className="text-3xl font-bold text-slate-900">
                                {users.length}
                            </h3>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#123c73]">
                                👥
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-slate-500">
                            Manage Users
                        </p>

                        <div className="mt-2 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-green-600">
                                users are showed below
                            </h3>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                                ✓
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-sm font-medium text-slate-500">
                            Login
                        </p>

                        <div className="mt-2 flex items-center justify-between">
                            <h3 className="text-xl font-bold text-[#123c73]">
                                Successful
                            </h3>

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#123c73]">
                                ⚡
                            </div>
                        </div>
                    </div>

                </div>

                {/* Users */}
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h3 className="text-2xl font-bold text-slate-900">
                            All Users
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            User information received from DummyJSON API.
                        </p>
                    </div>

                    <div className="w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-[#123c73]">
                        {users.length} Users
                    </div>

                </div>

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