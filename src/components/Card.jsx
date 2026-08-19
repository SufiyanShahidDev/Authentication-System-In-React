import React from "react";

const Card = ({ data }) => {
    console.log(data);

    return (
        <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                    {data.username?.charAt(0)?.toUpperCase() || "U"}
                </div>

                <div>
                    <h2 className="text-lg font-bold text-slate-800">
                        {data.username}
                    </h2>

                    <p className="text-sm text-slate-500">
                        User ID: {data.id}
                    </p>
                </div>
            </div>

            <div className="space-y-3 border-t border-slate-100 pt-4">
                <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-slate-500">
                        Email
                    </span>

                    <span className="max-w-[190px] truncate text-right text-sm font-semibold text-slate-800">
                        {data.email}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-500">
                        Age
                    </span>

                    <span className="text-sm font-semibold text-slate-800">
                        {data.age}
                    </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-medium text-slate-500">
                        Password
                    </span>

                    <span className="text-sm font-semibold text-slate-800">
                        {data.password}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Card;