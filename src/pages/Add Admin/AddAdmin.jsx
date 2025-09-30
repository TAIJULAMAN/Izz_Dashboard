import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack, IoEyeOutline, IoEyeOffOutline, IoCloudUploadOutline } from "react-icons/io5";

export default function AddAdmin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [showPass, setShowPass] = useState({ new: false, confirm: false });
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert("Admin created successfully (demo)\n\n" + JSON.stringify({ name: form.name, email: form.email }, null, 2));
    navigate(-1);
  };

  return (
    <div className="p-5">
      {/* Header */}
      <div className="bg-[#111827] px-5 py-3 rounded-md mb-3 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:opacity-90 transition"
          aria-label="Go back"
        >
          <IoChevronBack className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl font-bold">Add Admin</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-md shadow border border-gray-200 p-5 mb-5">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="abc@gmail.com"
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">New Password</label>
              <div className="relative">
                <input
                  type={showPass.new ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="********"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((s) => ({ ...s, new: !s.new }))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPass.new ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Confirm New Password</label>
              <div className="relative">
                <input
                  type={showPass.confirm ? "text" : "password"}
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  placeholder="********"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((s) => ({ ...s, confirm: !s.confirm }))}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPass.confirm ? <IoEyeOffOutline /> : <IoEyeOutline />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Profile Image</label>
            <div
              className="w-full border border-gray-300 rounded-md px-4 py-8 flex flex-col items-center justify-center text-gray-500 bg-gray-50"
              onClick={() => fileInputRef.current?.click()}
              role="button"
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="h-24 w-24 rounded-full object-cover" />
              ) : (
                <>
                  <IoCloudUploadOutline className="w-8 h-8 mb-2" />
                  <span>Upload Image</span>
                </>
              )}
              <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </div>
          </div>

          <div className="pt-2">
            <button type="submit" className="w-full bg-[#111827] text-white font-semibold py-3 rounded-md">
              Create Admin
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
