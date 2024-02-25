import React from "react";

const Skeleton = () => {
  return (
    <div className="flex items-center justify-center  scale-150 ">
      <div className=" p-4 rounded-xl shadow-2xl w-[80%] max-w-[500px] ">
        <div className="relative h-60 mb-4 rounded-xl flex justify-center items-center bg-white/50 animate-pulse">
          {/* <svg
            className="w-10 h-10 text-secondary dark:primary"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg> */}
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-white/50 rounded-full mb-4"></div>
          <div className="h-3 bg-white/50 rounded-full mb-3"></div>
          <div className="h-3 bg-white/50 rounded-full mb-3"></div>
          <div className="h-3 bg-white/50 rounded-full mb-3"></div>
          <div className="h-3 bg-white/50 rounded-full mb-3"></div>
          <div className="h-3 bg-white/50 rounded-full mb-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
