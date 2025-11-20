import React from "react";

const Dash = () => {
  return (
    <>
      <div className="flex flex-row p-4 border-black">
        <div className="flex flex-col rounded-lg  justify-center items-center p-5 border-dashed text-slate-600 border-slate-400  cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-plus size-11 transition-all duration-300 p-2.5 bg-gradient-to-br from-indigo-300 to-indigo-500  text-white rounded-full"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
          <p>Create Resume</p>
        </div>
      </div>
    </>
  );
};

export default Dash;
