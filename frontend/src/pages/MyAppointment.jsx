import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-12 py-12">

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-10">
        My Appointments
      </h1>

      {/* Appointments List */}
      <div className="space-y-6">

        {doctors.slice(0, 2).map((doc) => (
          <div
            key={doc._id}
            className="bg-white rounded-3xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center md:items-start"
          >

            {/* Doctor Image */}
            <img
              src={doc.image}
              alt={doc.name}
              className="w-32 h-32 object-cover rounded-2xl shadow"
            />

            {/* Doctor Info */}
            <div className="flex-1 text-center md:text-left space-y-2">
              <h2 className="text-xl font-semibold text-gray-800">
                {doc.name}
              </h2>

              <p className="text-gray-600">
                {doc.speciality}
              </p>

              <div className="text-gray-500 text-sm">
                <p className="font-medium text-gray-700">Address:</p>
                <p>{doc.address?.line1}</p>
                <p>{doc.address?.line2}</p>
              </div>

              <p className="text-sm text-gray-700 mt-2">
                <span className="font-medium">Date & Time:</span>{" "}
                25 July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 w-full md:w-auto">
              <button className="px-6 py-2 bg-primary text-white rounded-xl hover:opacity-90 transition">
                Pay Here
              </button>

              <button className="px-6 py-2 border border-red-500 text-red-500 rounded-xl hover:bg-red-50 transition">
                Cancel Appointment
              </button>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default MyAppointment;