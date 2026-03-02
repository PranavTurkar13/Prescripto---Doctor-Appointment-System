import React, { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    img: assets.profile_pic,
    name: "Edward Vincent",
    email: "richardjameswap@gmail.com",
    phone: "+1 123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2004-07-13",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 flex justify-center">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-lg p-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8">

          <img
            src={userData.img}
            alt="profile"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />

          <div className="flex-1 space-y-4 text-center md:text-left">
            {isEdit ? (
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="text-2xl font-semibold border-b outline-none w-full"
              />
            ) : (
              <h2 className="text-2xl font-bold text-gray-800">
                {userData.name}
              </h2>
            )}

            <button
              onClick={() => setIsEdit(!isEdit)}
              className="px-6 py-2 bg-primary text-white rounded-xl hover:opacity-90 transition"
            >
              {isEdit ? "Save Profile" : "Edit Profile"}
            </button>
          </div>
        </div>

        <hr className="my-8" />

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">

          {/* Email */}
          <div>
            <p className="text-sm font-medium text-gray-500">Email</p>
            {isEdit ? (
              <input
                type="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="mt-1 w-full border rounded-lg px-3 py-2"
              />
            ) : (
              <p>{userData.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <p className="text-sm font-medium text-gray-500">Phone</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                className="mt-1 w-full border rounded-lg px-3 py-2"
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <p className="text-sm font-medium text-gray-500">Address</p>
            {isEdit ? (
              <>
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line1: e.target.value,
                      },
                    }))
                  }
                  className="mt-1 w-full border rounded-lg px-3 py-2 mb-2"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: {
                        ...prev.address,
                        line2: e.target.value,
                      },
                    }))
                  }
                  className="w-full border rounded-lg px-3 py-2"
                />
              </>
            ) : (
              <p>
                {userData.address.line1} <br />
                {userData.address.line2}
              </p>
            )}
          </div>

          {/* Gender */}
          <div>
            <p className="text-sm font-medium text-gray-500">Gender</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                className="mt-1 w-full border rounded-lg px-3 py-2"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>

          {/* DOB */}
          <div>
            <p className="text-sm font-medium text-gray-500">Birthday</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                className="mt-1 w-full border rounded-lg px-3 py-2"
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;