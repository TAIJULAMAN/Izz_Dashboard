import { ConfigProvider, Table } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import {
  IoChevronBack,
  IoAddOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoCloudUploadOutline,
} from "react-icons/io5";

export default function CreateAdmin() {
  const navigate = useNavigate();

  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      no: "1",
      name: "John Admin",
      email: "john@tdk.com",
      password: "********",
      designation: "Super Admin",
    },
    {
      key: "2",
      no: "2",
      name: "Jane Admin",
      email: "jane@tdk.com",
      password: "********",
      designation: "Admin",
    },
    {
      key: "3",
      no: "3",
      name: "Sam Manager",
      email: "sam@tdk.com",
      password: "********",
      designation: "Admin",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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
    const nextNo = String(dataSource.length + 1);
    const newRow = {
      key: nextNo,
      no: nextNo,
      name: form.name,
      email: form.email,
      password: "********",
      designation: "Admin",
    };
    setDataSource((prev) => [newRow, ...prev]);
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
    setImagePreview("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Password", dataIndex: "password", key: "password" },
    { title: "Designation", dataIndex: "designation", key: "designation" },
  ];

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
        <h1 className="text-white text-2xl font-bold">Create Admin</h1>
        <button
          type="button"
          onClick={() => navigate("/add-admin")}
          className="ml-auto bg-white text-[#6BB43A] px-3 py-1 rounded-md font-semibold flex items-center gap-2 hover:opacity-95 transition"
        >
          <IoAddOutline className="w-4 h-4" />
          Add Admin
        </button>
      </div>

      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#6BB43A",
              headerColor: "rgb(255,255,255)",
              cellFontSize: 16,
              headerSplitColor: "#6BB43A",
            },
            Pagination: {
              colorPrimaryBorder: "#6BB43A",
              colorBorder: "#6BB43A",
              colorPrimaryHover: "#6BB43A",
              colorTextPlaceholder: "#6BB43A",
              itemActiveBgDisabled: "#6BB43A",
              colorPrimary: "#6BB43A",
            },
          },
        }}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 10 }}
          scroll={{ x: "max-content" }}
        />
      </ConfigProvider>
    </div>
  );
}
