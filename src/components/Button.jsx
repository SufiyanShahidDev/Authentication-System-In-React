import React from "react";

const Button = ({ title, handler }) => {
    return (
        <button
            onClick={handler}
            className="mt-3 w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-100 transition duration-200 hover:bg-blue-700 hover:shadow-blue-200 active:scale-[0.98] cursor-pointer"
        >
            {title}
        </button>
    );
};

export default Button;