import React from "react";

const Input = ({
    placeholder,
    handler,
    type,
    error,
    value,
}) => {
    const label =
        type === "email"
            ? "Email Address"
            : type === "password"
                ? "Password"
                : type === "age"
                    ? "Age"
                    : "Username";

    const inputType =
        type === "age" ? "number" : type === "username" ? "text" : type;

    return (
        <div className="mb-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">
                {label}
            </label>

            <input
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handler(e.target.value, type)}
                className={`w-full rounded-xl border bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 focus:bg-white focus:ring-4 ${error
                        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                        : "border-slate-200 focus:border-[#123c73] focus:ring-blue-100"
                    }`}
            />

            {error && (
                <p className="mt-1.5 text-xs font-medium text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;