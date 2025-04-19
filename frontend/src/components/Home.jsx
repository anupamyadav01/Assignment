import React from "react";
import { FaCog, FaTimes } from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Michael Holz",
    role: "Admin",
    status: "Active",
    dateCreated: "04/10/2013",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Paula Wilson",
    role: "Publisher",
    status: "Active",
    dateCreated: "05/08/2014",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Antonio Moreno",
    role: "Publisher",
    status: "Suspended",
    dateCreated: "11/05/2015",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Mary Saveley",
    role: "Reviewer",
    status: "Active",
    dateCreated: "06/09/2016",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Martin Sommer",
    role: "Moderator",
    status: "Inactive",
    dateCreated: "12/08/2017",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Active":
      return "text-green-600 bg-green-100";
    case "Suspended":
      return "text-red-600 bg-red-100";
    case "Inactive":
      return "text-yellow-600 bg-yellow-100";
    default:
      return "";
  }
};

const Home = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-xl">
      <table className="min-w-full text-sm text-left">
        <thead className="border-b-2">
          <tr className="text-gray-700 font-semibold">
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Date Created</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-50 transition-all"
            >
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3 flex items-center gap-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-blue-600 hover:underline cursor-pointer">
                  {user.name}
                </span>
              </td>
              <td className="px-4 py-3">{user.dateCreated}</td>
              <td className="px-4 py-3">{user.role}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    user.status
                  )}`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-3 flex gap-2">
                <button className="text-blue-600 hover:text-blue-800 text-xl">
                  <FaCog />
                </button>
                <button className="text-red-600 hover:text-red-800 text-xl">
                  <FaTimes />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4 space-x-2 text-sm text-gray-600">
        <button className="px-2 py-1 border rounded hover:bg-gray-100">
          Previous
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`px-3 py-1 border rounded hover:bg-blue-50 ${
              page === 3 ? "bg-blue-600 text-white border-blue-600" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button className="px-2 py-1 border rounded hover:bg-gray-100">
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
