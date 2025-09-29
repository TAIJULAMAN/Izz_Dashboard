import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoAddOutline, IoChevronBack } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

export default function LabManagment() {
  const navigate = useNavigate();

  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "Alpha Dental Lab",
      email: "alpha@lab.com",
      joined: "2024-02-10",
      users: 12,
    },
    {
      key: "2",
      name: "Bright Smiles Lab",
      email: "bright@lab.com",
      joined: "2024-05-22",
      users: 7,
    },
    {
      key: "3",
      name: "CrownWorks Studio",
      email: "crown@lab.com",
      joined: "2024-09-14",
      users: 19,
    },
  ]);

  const [selectedLab, setSelectedLab] = useState(null);
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const openView = (lab) => {
    setSelectedLab(lab);
    setIsViewOpen(true);
  };
  const closeView = () => {
    setIsViewOpen(false);
    setSelectedLab(null);
  };

  const openEdit = (lab) => {
    setSelectedLab({ ...lab });
    setIsEditOpen(true);
  };
  const closeEdit = () => {
    setIsEditOpen(false);
    setSelectedLab(null);
  };
  const saveEdit = () => {
    if (!selectedLab) return;
    setDataSource((prev) =>
      prev.map((r) => (r.key === selectedLab.key ? selectedLab : r))
    );
    setIsEditOpen(false);
    setSelectedLab(null);
  };

  const openDelete = (lab) => {
    setSelectedLab(lab);
    setIsDeleteOpen(true);
  };
  const confirmDelete = () => {
    if (!selectedLab) return;
    setDataSource((prev) => prev.filter((r) => r.key !== selectedLab.key));
    setIsDeleteOpen(false);
    setSelectedLab(null);
  };
  const cancelDelete = () => {
    setIsDeleteOpen(false);
    setSelectedLab(null);
  };

  const columns = [
    { title: "No", dataIndex: "key", key: " " },
    { title: "Lab Name", dataIndex: "name", key: "name" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Joined Date", dataIndex: "joined", key: "joined" },
    {
      title: "Assign Users",
      dataIndex: "users",
      key: "users",
      render: (value) => (
        <span className="px-3 py-1 rounded-full text-sm bg-green-50 text-[#6BB43A] font-medium">
          {value}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <button className="" onClick={() => openEdit(record)}>
            <FiEdit2 className="text-[#6BB43A] w-8 h-8 cursor-pointer rounded-md" />
          </button>
          <button className="" onClick={() => openView(record)}>
            <FaRegEye className="text-[#6BB43A] w-8 h-8 cursor-pointer rounded-md" />
          </button>
          <button className="" onClick={() => openDelete(record)}>
            <RiDeleteBin6Line className="text-red-500 w-8 h-8 cursor-pointer rounded-md" />
          </button>
        </div>
      ),
    },
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
        <h1 className="text-white text-2xl font-bold">Lab Management</h1>
        <button
          type="button"
          onClick={() => navigate("/add-lab")}
          className="ml-auto bg-white text-[#6BB43A] px-3 py-1 rounded-md font-semibold flex items-center gap-2 hover:opacity-95 transition"
        >
          <IoAddOutline className="w-4 h-4" />
          Add Lab
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

        {/* View Modal */}
        <Modal open={isViewOpen} onCancel={closeView} footer={null} centered>
          {selectedLab && (
            <div className="-m-6">
              <div className="bg-[#6BB43A] text-white px-6 py-4 rounded-t-md">
                <h3 className="text-xl font-bold">{selectedLab.name}</h3>
                <p className="text-white/90">Joined: {selectedLab.joined}</p>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Email</span>
                  <span className="font-medium">{selectedLab.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Assigned Users</span>
                  <span className="font-medium">{selectedLab.users}</span>
                </div>
              </div>
              <div className="flex justify-end px-6 pb-4">
                <button
                  onClick={closeView}
                  className="bg-gray-500 text-white font-semibold px-6 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>

        {/* Edit Modal */}
        <Modal open={isEditOpen} onCancel={closeEdit} footer={null} centered>
          {selectedLab && (
            <div className="p-1">
              <h3 className="text-xl font-bold mb-4">Edit Lab</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Lab Name
                  </label>
                  <input
                    type="text"
                    value={selectedLab.name}
                    onChange={(e) =>
                      setSelectedLab((s) => ({ ...s, name: e.target.value }))
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={selectedLab.email}
                    onChange={(e) =>
                      setSelectedLab((s) => ({ ...s, email: e.target.value }))
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Joined Date
                    </label>
                    <input
                      type="date"
                      value={selectedLab.joined}
                      onChange={(e) =>
                        setSelectedLab((s) => ({
                          ...s,
                          joined: e.target.value,
                        }))
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Assign Users
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={selectedLab.users}
                      onChange={(e) =>
                        setSelectedLab((s) => ({
                          ...s,
                          users: Number(e.target.value || 0),
                        }))
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                    />
                  </div>
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
                  className="bg-[#6BB43A] text-white font-semibold px-6 py-2 rounded-md"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </Modal>

        {/* Delete Modal */}
        <Modal
          open={isDeleteOpen}
          onCancel={cancelDelete}
          footer={null}
          centered
        >
          <div className="flex flex-col justify-center items-center py-8">
            <h1 className="text-2xl text-center text-[#6BB43A]">
              Are you sure?
            </h1>
            <p className="text-base text-center mt-4">
              Do you want to delete this lab?
            </p>
            <div className="text-center pt-6 w-full flex justify-center gap-3">
              <button
                onClick={cancelDelete}
                className="bg-gray-500 text-white font-semibold py-2 px-5 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-[#6BB43A] text-white font-semibold py-2 px-5 rounded-md"
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
}
