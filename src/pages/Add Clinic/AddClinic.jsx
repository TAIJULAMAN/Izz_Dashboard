import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";

export default function AddClinic() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", joined: "", users: 0 });

  const save = (e) => {
    e.preventDefault();
    const { name, email, joined, users } = form;
    if (!name || !email || !joined) {
      alert("Please fill in Clinic Name, Email and Joined Date");
      return;
    }
    alert(
      "Clinic created successfully (demo)\n\n" +
        JSON.stringify({ name, email, joined, users }, null, 2)
    );
    navigate(-1);
  };

  return (
    <div className="p-5">
      <div className="bg-[#6BB43A] px-5 py-3 rounded-md mb-3 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:opacity-90 transition"
          aria-label="Go back"
        >
          <IoChevronBack className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl font-bold">Add Clinic</h1>
      </div>

      <form onSubmit={save} className="bg-white rounded-md shadow border border-gray-200 p-5">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Clinic Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Downtown Dental Clinic"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="clinic@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Joined Date</label>
              <input
                type="date"
                value={form.joined}
                onChange={(e) => setForm({ ...form, joined: e.target.value })}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Assign Users</label>
              <input
                type="number"
                min="0"
                value={form.users}
                onChange={(e) => setForm({ ...form, users: Number(e.target.value || 0) })}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
              />
            </div>
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full bg-[#6BB43A] text-white font-semibold py-3 rounded-md">
              Create Clinic
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
