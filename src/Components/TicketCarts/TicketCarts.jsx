import React from "react";
import bgImage1 from "../../assets/vector1.png";
import bgImage2 from "../../assets/vector2.png";
import { Ticket } from "lucide-react";

const TicketCarts = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* In Progress Card */}
        <div className="relative bg-linear-to-bl from-[#9F62F2] to-[#632EE3] rounded-2xl shadow-lg overflow-hidden">
          <img
            src={bgImage1}
            alt=""
            className="absolute left-0 top-0 h-full object-contain"
          />
          <img
            src={bgImage2}
            alt=""
            className="absolute right-0 top-0 h-full object-contain"
          />
          <div className="relative text-white p-6 md:py-16 flex flex-col justify-between items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">In-Progress</h2>
            <p className="text-2xl md:text-4xl font-bold">{inProgressCount}</p>
          </div>
        </div>

        {/* Resolved Card */}
        <div className="relative bg-linear-to-bl from-[#54CF68] to-[#00827A] rounded-2xl shadow-lg overflow-hidden">
          <img
            src={bgImage1}
            alt=""
            className="absolute left-0 top-0 h-full object-contain"
          />
          <img
            src={bgImage2}
            alt=""
            className="absolute right-0 top-0 h-full object-contain"
          />
          <div className="relative text-white p-6 md:py-16 flex flex-col justify-between items-center gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Resolved</h2>
            <p className="text-2xl md:text-4xl font-bold">{resolvedCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCarts;
