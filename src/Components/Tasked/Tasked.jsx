import React from "react";

const Tasked = ({handleComplete, inProgressTasked, resolvedTasked}) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-3">Tasked Status</h2>

      {inProgressTasked.length > 0 ? (
        inProgressTasked.map((tasked) => (
          <div
            key={tasked.id}
            className="bg-white p-4 rounded-md shadow shadow-gray-300 mb-4"
          >
            <h4 className="text-lg font-medium mb-2">{tasked.title}</h4>
            <button
              onClick={() => handleComplete(tasked.id)}
              className="bg-green-600 w-full py-2.5 rounded-md text-white cursor-pointer"
            >
              Complete
            </button>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-600">No In Progress tasked</p>
      )}

      <div className="mt-5">
        <h3 className="text-xl font-semibold mb-2">Resolved Tasked</h3>
        {resolvedTasked.length > 0 ? (
          resolvedTasked.map((tasked) => (
            <div key={tasked.id} className="bg-[#E0E7FF] p-4 rounded-md mb-4">
              <h4 className="text-lg font-medium">{tasked.title}</h4>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-600">No resolved tasks yet.</p>
        )}
      </div>
    </div>
  );
};

export default Tasked;
