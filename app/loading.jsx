import React from "react";

export default function LoadingPage() {
  return (
    <div className="my-[20%] mx-[50%]">
      <div
        class=" inline-block text-blue-500  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span class="m-8 absolute!-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
      </div>
    </div>
  );
}
