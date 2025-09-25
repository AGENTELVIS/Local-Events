  import { useEffect, useState } from 'react'
  import { Link, useParams, useNavigate } from 'react-router'

  const Event = () => {
    const { eventID } = useParams()
    const navigate = useNavigate()
    const [event, setEvent] = useState()
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
      fetch("/data.json")
        .then((res) => res.json())
        .then((data) => {
          const foundEvent = data.events.find((e) => String(e.id) === eventID)
          setEvent(foundEvent)
        })
        .catch((err) => console.error("Error fetching data:", err))
    }, [eventID])

    if (!event) return <div>Loading...</div>

    const handleJoin = () => {
      setShowModal(true)

      setTimeout(() => {
        setShowModal(false)
        navigate('/') 
      },2700)
    }

    return (
      <div className="flex flex-col justify-start p-5 text-2xl space-y-5">
        <h1 className="text-6xl font-bold">{event.title}</h1>

        <p className='mt-4'>Host: {event.host}</p>
        <p>Type: {event.type}</p>
        <p>Location: {event.location}</p>
        <p className='flex justify-between'>Date: {event.date}</p>
        <p className=" mb-10">{event.description}</p>
      
          

          <button
            type="button"
            className="border  hover:text-green-700 hover:cursor-pointer "
            onClick={handleJoin}
          >
            Join Event
          </button>
        <button className="border hover:text-indigo-800" >
            <Link to="/">Go Back</Link>
          </button>


        {showModal && (
          <div className="flex-col fixed inset-0 bg-black/30 flex items-center justify-center p-10 ">
            <div className="bg-white dark:bg-neutral-600 p-10 max-w-md w-full text-center rounded-lg shadow-lg ">
              <h2 className="text-2xl font-bold text-green-500">
                Successfully joined the event
              </h2>
              <p className='text-gray-400 mt-5'>Redirecting to Explore...</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  export default Event
