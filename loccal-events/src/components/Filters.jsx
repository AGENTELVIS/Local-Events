import { useState, useEffect } from "react";

const Filters = ({ events, onFilter }) => {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const types = [...new Set(events.map((e) => e.type))];
  const dates = [...new Set(events.map((e) => e.date))];
  const locations = [...new Set(events.map((e) => e.location))];


  const filterEvents = (typeVal, dateVal, locationVal) => {
    let filtered = events;

    if (typeVal) filtered = filtered.filter((e) => e.type === typeVal);
    if (dateVal) filtered = filtered.filter((e) => e.date === dateVal);
    if (locationVal) filtered = filtered.filter((e) => e.location === locationVal);

    onFilter(filtered);
  };


  useEffect(() => {
    filterEvents(type, date, location);
  }, [type, date, location]);

  return (
    <div className="flex gap-4 mb-5">
      
      <select
        className="border p-3 "
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="" className="dark:bg-neutral-700">All Types</option>
        {types.map((t) => (
          <option key={t} value={t} className="dark:bg-neutral-700">
            {t}
          </option>
        ))}
      </select>


      <select
        className="border p-2 "
        value={date}
        onChange={(e) => setDate(e.target.value)}
      >
        <option value="" className="dark:bg-neutral-700">All Dates</option>
        {dates.map((d) => (
          <option key={d} value={d} className="dark:bg-neutral-700">
            {d}
          </option>
        ))}
      </select>


      <select
        className="border p-2 "
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="" className="dark:bg-neutral-700">All Locations</option>
        {locations.map((l) => (
          <option key={l} value={l} className="dark:bg-neutral-700">
            {l}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
