import React from "react";

const Button = ({ title, handler }) => {
    return (
        <button
            onClick={handler}
            className="mt-2 w-full rounded-xl bg-[#123c73] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-100 transition duration-200 hover:bg-[#0d2f5c] hover:shadow-blue-200 active:scale-[0.98] cursor-pointer"
        >
            {title}
        </button>
    );
};

export default Button;