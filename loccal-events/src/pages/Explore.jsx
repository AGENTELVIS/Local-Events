import { useEffect, useState } from "react";
import { Link } from "react-router";
import Filters from "../components/Filters";

const Explore = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => {
        setData(data.events);
        setFilteredEvents(data.events); 
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!data.length) return <div>Loading...</div>;

  return (
    <div className="flex flex-col w-screen">
      <div className="mt-2 p-2 mb-0 flex justify-between"><p className="text-5xl">Events</p>
       <Filters events={data} onFilter={setFilteredEvents} />
      </div>

      

      <div className="w-screen p-2 rounded-2xl mt-0">
        <ul className="grid grid-cols-4 border border-gray-300 p-5 w-full text-center font-semibold">
          <li className="text-left">Date</li>
          <li className="text-left">Title</li>
          <li>Type</li>
          <li>Location</li>
        </ul>

        {filteredEvents.map((event) => (
          <ul
            key={event.id}
            className="grid grid-cols-4 border border-gray-300 p-5 w-full text-center"
          >
            <li className="text-left">{event.date}</li>
            <Link to={`/event/${event.id}`}>
              <li className="text-left hover:text-blue-500 ">
                {event.title}
              </li>
            </Link>
            <li>{event.type}</li>
            <li>{event.location}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Explore;
