import React from "react";
// import caldenderImage from "../assets/ri_calendar-line.png";
import caldenderImage from "../../assets/ri_calendar-line.png";


 const TicketCard = ({ ticeking }) => {
  const statusColors = {
    Open: {
      bg: "bg-green-100 text-green-600",
      dot: "bg-green-600",
    },
    "In Progress": {
      bg: "bg-yellow-100 text-yellow-600",
      dot: "bg-yellow-600",
    },
    Resolved: {
      bg: "bg-gray-100 text-gray-600",
      dot: "bg-gray-600",
    },
  };

  const priorityColors = {
    "HIGH-PRIORITY": "text-red-500",
    "LOW-PRIORITY": "text-green-500",
    "MEDIUM-PRIORITY": "text-yellow-500",
  };

  return (
    <div
      // onClick={() => handleAddToInProgress(ticeking)}
      className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <h3 className="font-semibold text-gray-800">{ticeking.title}</h3>

        <span
          className={`flex items-center gap-2 text-sm px-3 py-1 rounded-full 
          ${statusColors[ticeking.status]?.bg}`}
        >
          <div
            className={`rounded-full h-3 w-3 
            ${statusColors[ticeking.status]?.dot}`}
          ></div>
          {ticeking.status}
        </span>
      </div>

      <p className="text-sm text-gray-600">{ticeking.description}</p>

      <div className="flex justify-between items-center text-xs text-gray-500">
        <div className="flex gap-3">
          <span className="text-gray-400">#{ticeking.id}</span>
          <span
            className={`font-semibold ${
              priorityColors[ticeking.priority] || "text-gray-600"
            }`}
          >
            {ticeking.priority}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span>{ticeking.customer}</span>
          <img src={caldenderImage} alt="Calender" className="w-3 h-3" />
          <span>{ticeking.createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
