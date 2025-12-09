import React, { use, useEffect, useState } from "react";
import TicketCarts from "../TicketCarts/TicketCarts";
import TicketCard from "../TicketCard/TicketCard";
 import Tasked from "./Tasked/Tasked";
import { toast } from "react-toastify";

const TicketSystem = ({ tiketDataPromise }) => {
  const tiket = use(tiketDataPromise);

  const [data, setData] = useState(tiket);
  const [inProgressTasked, setInProgressTasked] = useState([]);
  const [resolvedTasked, setResolvedTasked] = useState([]);

  useEffect(() => {
    const initialInProgress = tiket.filter((t) => t.status === "In Progress");
    setInProgressTasked(initialInProgress);
  }, [tiket]);

  const handleAddToInProgress = (task) => {
    if (task.status === "Open") {
      const updatedTask = { ...task, status: "In Progress" };
      setData((prev) => prev.map((t) => (t.id === task.id ? updatedTask : t)));
      setInProgressTasked((prev) => [...prev, updatedTask]);
      toast.info(`"${task.title}" added to In Progress`);
    } else if (task.status === "In Progress") {
      toast.warn(`"${task.title}" is already in progress`);
    }
  };

  const handleComplete = (taskedId) => {
    const tasked = inProgressTasked.find((t) => t.id === taskedId);
    if (!tasked) return;

    setInProgressTasked((prev) => prev.filter((t) => t.id !== taskedId));
    setResolvedTasked((prev) => [...prev, tasked]);
    setData((prevData) => prevData.filter((t) => t.id !== taskedId));

    toast.success(`"${tasked.title}" task completed!`);
  };

  return (
    <div className="bg-[#f5f5f5] py-10">
      <TicketCarts
        inProgressCount={inProgressTasked.length}
        resolvedCount={resolvedTasked.length}
      />

      <main>
        <section className="px-6 py-3 md:px-16 lg:px-24 xl:px-32">
          <h2 className="text-2xl font-semibold mb-3">Customer Tickets</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.map((ticket) => (
                  <div
                    key={ticket.id}
                    onClick={() => handleAddToInProgress(ticket)}
                  >
                    <TicketCard ticeking={ticket} />
                  </div>
                ))}
              </div>
            </div>

            <Tasked
              handleComplete={handleComplete}
              resolvedTasked={resolvedTasked}
              inProgressTasked={inProgressTasked}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default TicketSystem;
