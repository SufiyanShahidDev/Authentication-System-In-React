import React from "react";

const Card = ({ data }) => {
    console.log(data);

    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Card Header */}
            <div className="bg-[#0d2f5c] px-5 py-6">
                <div className="flex items-center gap-4">

                    <img
                        src={data.image}
                        alt={data.firstName}
                        className="h-16 w-16 rounded-full border-4 border-white/20 object-cover"
                    />

                    <div className="min-w-0">
                        <h2 className="text-lg font-bold text-white">
                            {data.firstName} {data.lastName}
                        </h2>

                        <p className="text-sm text-blue-200">
                            Username: {data.username}
                        </p>
                    </div>
                </div>
            </div>

            {/* Card Body */}
            <div className="p-5">

                <div className="mb-4">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Email
                    </p>

                    <p className="break-all text-sm font-semibold leading-6 text-slate-800">
                        {data.email}
                    </p>
                </div>

                <div className="mb-4 flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Age
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-800">
                            {data.age}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            ID
                        </p>

                        <p className="mt-1 text-sm font-semibold text-slate-800">
                            #{data.id}
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Password
                    </p>

                    <p className="mt-1 break-all text-sm font-semibold text-slate-800">
                        {data.password}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Card;