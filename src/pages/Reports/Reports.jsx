import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import { IoSearch, IoChevronBack } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";
import { BiMessage } from "react-icons/bi";
import { LuMessageSquareText } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function Reports() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const showModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const showViewModal = (user) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };
  const handleViewCancel = () => {
    setIsViewModalOpen(false);
    setSelectedUser(null);
  };
  const dataSource = [
    {
      key: "1",
      no: "1",
      reportFrom: "John Doe",
      reportReason: "Harassment in comments.",
      reportTo: "Emily Johnson",
      type: "Harassment",
    },
    {
      key: "2",
      no: "2",
      reportFrom: "Jane Smith",
      reportReason: "Spam links posted.",
      reportTo: "Michael Wilson",
      type: "Spam/Scam",
    },
    {
      key: "3",
      no: "3",
      reportFrom: "Robert Brown",
      reportReason: "Fake event details.",
      reportTo: "Lucas Hall",
      type: "Fake Information",
    },
    {
      key: "4",
      no: "4",
      reportFrom: "Olivia Thomas",
      reportReason: "Explicit images shared.",
      reportTo: "William Anderson",
      type: "Adult Content",
    },
    {
      key: "5",
      no: "5",
      reportFrom: "James Martinez",
      reportReason: "Political misinformation.",
      reportTo: "News Feed",
      type: "Fake Information",
    },
    {
      key: "6",
      no: "6",
      reportFrom: "Sophia Taylor",
      reportReason: "Impersonation attempt.",
      reportTo: "User Profile",
      type: "Identity Theft",
    },
    {
      key: "7",
      no: "7",
      reportFrom: "Ethan Harris",
      reportReason: "Offensive language.",
      reportTo: "Group Chat",
      type: "Abusive Content",
    },
    {
      key: "8",
      no: "8",
      reportFrom: "Charlotte Clark",
      reportReason: "Crypto spam.",
      reportTo: "Dashboard",
      type: "Spam/Scam",
    },
    {
      key: "9",
      no: "9",
      reportFrom: "Henry Young",
      reportReason: "Extremist content.",
      reportTo: "News Section",
      type: "Harmful Content",
    },
    {
      key: "10",
      no: "10",
      reportFrom: "Harper King",
      reportReason: "Violent images.",
      reportTo: "Gallery",
      type: "Violence",
    },
  ];

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Report From",
      key: "reportFrom",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={`https://avatar.iran.liara.run/public/${record.key}`}
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
          />
          <div className="flex flex-col gap-[2px]">
            <span className="leading-none">{record.reportFrom}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Reason",
      dataIndex: "reportReason",
      key: "reportReason",
    },
    {
      title: "Reported To",
      key: "reportTo",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={`https://avatar.iran.liara.run/public/${record.key}`}
            className="w-10 h-10 object-cover rounded-full"
            alt="User Avatar"
          />
          <div className="flex flex-col gap-[2px]">
            <span className="leading-none">{record.reportTo}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <button className="" onClick={() => navigate("/chat")}>
            <LuMessageSquareText className=" w-10 h-10 cursor-pointer rounded-md" />
          </button>

          <button className="" onClick={() => showViewModal(record)}>
            <FaRegEye className="text-[#6BB43A] w-10 h-10 cursor-pointer rounded-md" />
          </button>
          <button className="" onClick={() => showModal(record)}>
            <RiDeleteBin6Line className="text-red-500 w-10 h-10 cursor-pointer rounded-md" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="bg-[#6BB43A] px-5 py-3 rounded-md mb-3 flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:opacity-90 transition"
          aria-label="Go back"
        >
          <IoChevronBack className="w-6 h-6" />
        </button>
        <h1 className="text-white text-2xl font-bold">Reports</h1>
      </div>

      <ConfigProvider
        theme={{
          components: {
            InputNumber: {
              activeBorderColor: "#6BB43A",
            },
            Pagination: {
              colorPrimaryBorder: "#6BB43A",
              colorBorder: "#6BB43A",
              colorPrimaryHover: "#6BB43A",
              colorTextPlaceholder: "#6BB43A",
              itemActiveBgDisabled: "#6BB43A",
              colorPrimary: "#6BB43A",
            },
            Table: {
              headerBg: "#6BB43A",
              headerColor: "rgb(255,255,255)",
              cellFontSize: 16,
              headerSplitColor: "#6BB43A",
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
        {/* Delete Modal */}
        <Modal
          open={isModalOpen}
          centered
          onCancel={handleCancel}
          footer={null}
        >
          <div className="flex flex-col justify-center items-center py-10">
            <h1 className="text-3xl text-center text-[#6BB43A]">
              Are you sure!
            </h1>
            <p className="text-xl text-center mt-5">
              Do you want to delete this user profile?
            </p>
            <div className="text-center py-5 w-full">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#6BB43A] text-white font-semibold w-1/3 py-3 px-5 rounded-lg"
              >
                CONFIRM
              </button>
            </div>
          </div>
        </Modal>

        {/* View Modal */}
        <Modal
          open={isViewModalOpen}
          centered
          onCancel={handleViewCancel}
          footer={null}
          width={800}
          className="report-view-modal"
        >
          {selectedUser && (
            <div className="relative">
              {/* Header with gradient background */}
              <div className="bg-gradient-to-r from-[#6BB43A] to-[#5EA233] p-6 -m-6 mb-6 rounded-t-lg">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img
                      src={`https://avatar.iran.liara.run/public/${selectedUser.key}`}
                      alt={selectedUser.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
                    />
                    <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-red-500">
                      REPORT
                    </div>
                  </div>
                  <div className="text-white">
                    <h2 className="text-3xl font-bold mb-2">
                      Report #{selectedUser.no.padStart(4, "0")}
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        Report From: {selectedUser.reportFrom}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        Report To: {selectedUser.reportTo}
                      </span>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        Type: {selectedUser.type}
                      </span>
                    </div>
                    <p className="text-white/90">Status: Under Review</p>
                  </div>
                </div>
              </div>

              {/* Content sections */}
              <div className="space-y-6">
                {/* Report Information */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#6BB43A] rounded-full"></div>
                    Report Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <span className="text-red-600 text-lg">⚠️</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-600">
                            Reason
                          </h4>
                          <p className="text-lg font-semibold text-gray-800">
                            {selectedUser.reportReason}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-600 text-lg">📋</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-600">
                            Report Type
                          </h4>
                          <p className="text-lg font-semibold text-gray-800">
                            {selectedUser.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reporter & Additional Info */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#6BB43A] rounded-full"></div>
                    Participants
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 text-lg">👤</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-600">
                            Report From
                          </h4>
                          <p className="text-lg font-semibold text-gray-800">
                            {selectedUser.reportFrom}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600 text-lg">📩</span>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-600">
                            Report To
                          </h4>
                          <p className="text-lg font-semibold text-gray-800">
                            {selectedUser.reportTo}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Report Description */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#6BB43A] rounded-full"></div>
                    Report Description
                  </h3>
                  <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Report Details:</strong>{" "}
                      {selectedUser.reportReason}
                      <br />
                      <br />
                      <strong>Location:</strong> This incident was reported to
                      the {selectedUser.reportTo}.
                      <br />
                      <br />
                      <strong>Category:</strong> This report has been classified
                      as "{selectedUser.type}". Further investigation is
                      required to determine the appropriate action.
                    </p>
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

export default Reports;
