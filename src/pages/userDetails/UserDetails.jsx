import { ConfigProvider, Modal, Table, Select } from "antd";
import { useMemo, useState } from "react";
import { IoSearch, IoChevronBack, IoAddOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { MdBlock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";

function UserDetails() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // block modal
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [roleFilter, setRoleFilter] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  // const showModal = () => {
  //   setIsModalOpen(true);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const showViewModal = (user) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };
  const handleViewCancel = () => {
    setIsViewModalOpen(false);
    setSelectedUser(null);
  };
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      fullName: "John Doe",
      role: "Dentist",
      clinic: "Downtown Dental Clinic",
      email: "john@example.com",
      phone: "+1 987 654 3210",
      joined: "2024-01-12",
    },
    {
      key: "2",
      fullName: "Emma Smith",
      role: "Practice Nurse",
      clinic: "Smile Care Clinic",
      email: "emma@example.com",
      phone: "+1 987 654 3211",
      joined: "2024-03-28",
    },
    {
      key: "3",
      fullName: "Liam Johnson",
      role: "Practice Manager",
      clinic: "Healthy Teeth Clinic",
      email: "liam@example.com",
      phone: "+1 987 654 3212",
      joined: "2024-06-15",
    },
    {
      key: "4",
      fullName: "Olivia Brown",
      role: "Lab Technician",
      clinic: "City Dental Center",
      email: "olivia@example.com",
      phone: "+1 987 654 3213",
      joined: "2024-08-02",
    },
    {
      key: "5",
      fullName: "Noah Davis",
      role: "Lab Manager",
      clinic: "Prime Smiles",
      email: "noah@example.com",
      phone: "+1 987 654 3214",
      joined: "2024-09-10",
    },
    {
      key: "6",
      fullName: "Sophia Miller",
      role: "Dentist",
      clinic: "Bright Smile Hub",
      email: "sophia@example.com",
      phone: "+1 987 654 3215",
      joined: "2024-11-19",
    },
    {
      key: "7",
      fullName: "James Wilson",
      role: "Practice Manager",
      clinic: "Downtown Dental Clinic",
      email: "james@example.com",
      phone: "+1 987 654 3216",
      joined: "2025-01-05",
    },
    {
      key: "8",
      fullName: "Isabella Moore",
      role: "Practice Nurse",
      clinic: "Healthy Teeth Clinic",
      email: "isabella@example.com",
      phone: "+1 987 654 3217",
      joined: "2025-02-21",
    },
    {
      key: "9",
      fullName: "Benjamin Taylor",
      role: "Lab Technician",
      clinic: "Prime Smiles",
      email: "benjamin@example.com",
      phone: "+1 987 654 3218",
      joined: "2025-03-03",
    },
    {
      key: "10",
      fullName: "Mia Anderson",
      role: "Dentist",
      clinic: "City Dental Center",
      email: "mia@example.com",
      phone: "+1 987 654 3219",
      joined: "2025-04-12",
    },
  ]);
  const columns = [
    {
      title: "No",
      key: "no",
      width: 70,
      render: (_, _r, index) => index + 1,
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (value, record) => (
        <div className="flex items-center gap-3">
          <img
            src={`https://avatar.iran.liara.run/public/${record.key}`}
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
          />
          <span className="leading-none">{value}</span>
        </div>
      ),
    },
    { title: "Role", dataIndex: "role", key: "role" },
    { title: "Clinic", dataIndex: "clinic", key: "clinic" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Phone No", dataIndex: "phone", key: "phone" },
    { title: "Joined Date", dataIndex: "joined", key: "joined" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <button className="" onClick={() => openEdit(record)}>
            <FiEdit2 className="text-[#74AA2E] w-10 h-10 cursor-pointer rounded-md" />
          </button>
          <button className="" onClick={() => openBlock(record)}>
            <MdBlock className="text-red-500 w-10 h-10 cursor-pointer rounded-md" />
          </button>
          <button className="" onClick={() => showViewModal(record)}>
            <FaRegEye className="text-[#74AA2E] w-10 h-10 cursor-pointer rounded-md" />
          </button>
        </div>
      ),
    },
  ];

  const filteredData = useMemo(() => {
    const q = (searchQuery || "").toLowerCase().trim();
    return dataSource.filter((r) => {
      const matchRole = roleFilter ? r.role === roleFilter : true;
      const matchQuery = q
        ? [r.fullName, r.email, r.phone, r.clinic, r.role]
            .filter(Boolean)
            .some((v) => String(v).toLowerCase().includes(q))
        : true;
      return matchRole && matchQuery;
    });
  }, [dataSource, roleFilter, searchQuery]);

  const openEdit = (row) => {
    setEditUser({ ...row });
    setIsEditOpen(true);
  };
  const closeEdit = () => {
    setIsEditOpen(false);
    setEditUser(null);
  };
  const saveEdit = () => {
    if (!editUser) return;
    setDataSource((prev) =>
      prev.map((r) => (r.key === editUser.key ? editUser : r))
    );
    setIsEditOpen(false);
    setEditUser(null);
  };

  const openBlock = (row) => {
    setSelectedUser(row);
    setIsModalOpen(true);
  };

  const confirmBlock = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <div className="bg-[#74AA2E] px-4 md:px-5 py-3 rounded-md mb-3 flex flex-wrap md:flex-nowrap items-start md:items-center gap-2 md:gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:opacity-90 transition"
          aria-label="Go back"
        >
          <IoChevronBack className="w-6 h-6" />
        </button>
        <h1 className="text-white text-xl sm:text-2xl font-bold">User Management</h1>
        {/* Mobile search */}
        <div className="relative w-full md:hidden mt-1">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search users..."
            className="w-full bg-white text-[#0D0D0D] placeholder-gray-500 pl-10 pr-3 py-2 rounded-md focus:outline-none"
          />
          <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </div>
        <div className="ml-0 md:ml-auto flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
          <div className="relative hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search users..."
              className="bg-white text-[#0D0D0D] placeholder-gray-500 pl-10 pr-3 py-2 rounded-md focus:outline-none"
            />
            <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
          <ConfigProvider
            theme={{
              components: {
                Select: {
                  controlHeightLG: 44,
                  controlPaddingHorizontal: 12,
                  optionPadding: 10,
                  borderRadiusLG: 8,
                },
              },
            }}
          >
            <Select
              placeholder="Select role"
              value={roleFilter}
              onChange={setRoleFilter}
              size="large"
              className="w-full md:w-auto md:min-w-[220px]"
              style={{ minWidth: 220 }}
              popupMatchSelectWidth={false}
              dropdownStyle={{ paddingTop: 8, paddingBottom: 8 }}
              options={[
                { label: "Dentist", value: "Dentist" },
                { label: "Lab Manager", value: "Lab Manager" },
                { label: "Practice Manager", value: "Practice Manager" },
                { label: "Practice Nurse", value: "Practice Nurse" },
                { label: "Lab Technician", value: "Lab Technician" },
                { label: "Blocked Users", value: "Blocked" },
              ]}
            />
          </ConfigProvider>
          <button
            type="button"
            onClick={() => navigate('/create-user')}
            className="bg-white text-[#74AA2E] px-3 py-2 rounded-md font-semibold flex items-center justify-center gap-2 hover:opacity-95 transition w-full md:w-auto"
          >
            <IoAddOutline className="w-4 h-4" />
            Create User
          </button>
        </div>
      </div>

      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              activeBorderColor: "#00c0b5",
            },
            Pagination: {
              colorPrimaryBorder: "#00c0b5",
              colorBorder: "#00c0b5",
              colorPrimaryHover: "#00c0b5",
              colorTextPlaceholder: "#00c0b5",
              itemActiveBgDisabled: "#00c0b5",
              colorPrimary: "#00c0b5",
            },
            Table: {
              headerBg: "#74AA2E",
              headerColor: "rgb(255,255,255)",
              cellFontSize: 16,
              headerSplitColor: "#74AA2E",
            },
          },
        }}
      >
        <Table
          dataSource={filteredData}
          columns={columns}
          pagination={{ pageSize: 10 }}
          scroll={{ x: "max-content" }}
        />
        {/* Block Modal */}
        <Modal
          open={isModalOpen}
          centered
          onCancel={handleCancel}
          footer={null}
        >
          <div className="flex flex-col justify-center items-center py-10">
            <h1 className="text-3xl text-center text-[#74AA2E]">Block User</h1>
            <p className="text-xl text-center mt-5">
              {selectedUser
                ? `Do you want to block ${selectedUser.fullName}?`
                : `Do you want to block this user?`}
            </p>
            <div className="text-center py-5 w-full flex justify-center gap-3">
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white font-semibold py-3 px-5 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmBlock}
                className="bg-[#74AA2E] text-white font-semibold py-3 px-5 rounded-lg"
              >
                Block
              </button>
            </div>
          </div>
        </Modal>

        {/* Edit Modal */}
        <Modal open={isEditOpen} onCancel={closeEdit} footer={null} centered>
          {editUser && (
            <div className="p-1">
              <h3 className="text-xl font-bold mb-4">Edit User</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={editUser.fullName}
                    onChange={(e) =>
                      setEditUser((s) => ({ ...s, fullName: e.target.value }))
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#74AA2E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                  <Select
                    className="w-full"
                    value={editUser.role}
                    onChange={(val) => setEditUser((s) => ({ ...s, role: val }))}
                    options={[
                      { label: "Dentist", value: "Dentist" },
                      { label: "Lab Manager", value: "Lab Manager" },
                      { label: "Practice Manager", value: "Practice Manager" },
                      { label: "Practice Nurse", value: "Practice Nurse" },
                      { label: "Lab Technician", value: "Lab Technician" },
                      { label: "Blocked", value: "Blocked" },
                    ]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Clinic
                  </label>
                  <input
                    type="text"
                    value={editUser.clinic}
                    onChange={(e) =>
                      setEditUser((s) => ({ ...s, clinic: e.target.value }))
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#74AA2E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={editUser.email}
                    onChange={(e) =>
                      setEditUser((s) => ({ ...s, email: e.target.value }))
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#74AA2E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone No
                  </label>
                  <input
                    type="text"
                    value={editUser.phone}
                    onChange={(e) =>
                      setEditUser((s) => ({ ...s, phone: e.target.value }))
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#74AA2E]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Joined Date
                  </label>
                  <input
                    type="date"
                    value={editUser.joined}
                    onChange={(e) =>
                      setEditUser((s) => ({ ...s, joined: e.target.value }))
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#74AA2E]"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button
                  onClick={closeEdit}
                  className="bg-gray-500 text-white font-semibold px-6 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={saveEdit}
                  className="bg-[#74AA2E] text-white font-semibold px-6 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </Modal>

        {/* View Modal */}
        <Modal
          open={isViewModalOpen}
          centered
          onCancel={handleViewCancel}
          footer={null}
          width={800}
          className="user-view-modal"
        >
          {selectedUser && (
            <div className="relative">
              {/* Header with green gradient */}
              <div className="bg-gradient-to-r from-[#74AA2E] to-[#5F8C22] p-6 -m-6 mb-6 rounded-t-lg">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img
                      src={`https://avatar.iran.liara.run/public/${selectedUser.key}`}
                      alt={selectedUser.fullName}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                  </div>
                  <div className="text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      {selectedUser.fullName}
                    </h2>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {selectedUser.clinic}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        Joined: {selectedUser.joined}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                  <div className="text-gray-600 text-sm">Email</div>
                  <div className="text-lg font-semibold">
                    {selectedUser.email}
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                  <div className="text-gray-600 text-sm">Phone No</div>
                  <div className="text-lg font-semibold">
                    {selectedUser.phone}
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                  <div className="text-gray-600 text-sm">Role</div>
                  <div className="text-lg font-semibold">{selectedUser.role}</div>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                  <div className="text-gray-600 text-sm">Clinic</div>
                  <div className="text-lg font-semibold">
                    {selectedUser.clinic}
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                  <div className="text-gray-600 text-sm">Joined Date</div>
                  <div className="text-lg font-semibold">
                    {selectedUser.joined}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex justify-end items-center mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handleViewCancel}
                  className="bg-gray-500 text-white font-semibold px-8 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>
      </ConfigProvider>
    </div>
  );
}

export default UserDetails;
