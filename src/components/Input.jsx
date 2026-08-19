import React from "react";

const Input = ({ placeholder, handler, type }) => {
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
            <label className="mb-2 block text-sm font-medium text-slate-700">
                {label}
            </label>

            <input
                type={inputType}
                placeholder={placeholder}
                onChange={(e) => handler(e.target.value, type)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-800 outline-none transition duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />
        </div>
    );
};

export default Input;