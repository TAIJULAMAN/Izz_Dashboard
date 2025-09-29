import { ConfigProvider, Table, Tag, Tooltip } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiFileText, FiPaperclip } from "react-icons/fi";

export default function CaseManagment() {
  const navigate = useNavigate();

  const [dataSource] = useState([
    {
      key: "1",
      clinic: "Downtown Dental Clinic",
      doctor: "Dr. Emily Carter",
      patientRef: "PT-1001",
      status: "In Progress",
      returnDate: "2025-10-05",
    },
    {
      key: "2",
      clinic: "Smile Care Clinic",
      doctor: "Dr. John Smith",
      patientRef: "PT-1002",
      status: "Completed",
      returnDate: "2025-09-30",
    },
    {
      key: "3",
      clinic: "Healthy Teeth Clinic",
      doctor: "Dr. Sarah Lee",
      patientRef: "PT-1003",
      status: "Pending",
      returnDate: "2025-10-12",
    },
  ]);

  const statusColor = (status) => {
    switch (status) {
      case "Completed":
        return "green";
      case "In Progress":
        return "blue";
      case "Pending":
      default:
        return "gold";
    }
  };

  const columns = [
    { title: "No", dataIndex: "key", key: "no", width: 80 },
    { title: "Clinic", dataIndex: "clinic", key: "clinic" },
    { title: "Doctor", dataIndex: "doctor", key: "doctor" },
    { title: "Patient Ref", dataIndex: "patientRef", key: "patientRef" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (value) => <Tag color={statusColor(value)}>{value}</Tag>,
    },
    { title: "Return Date", dataIndex: "returnDate", key: "returnDate" },
    {
      title: "Lab Form",
      key: "labForm",
      align: "center",
      render: () => (
        <Tooltip title="Open Lab Form">
          <button type="button" className="p-2 rounded-md hover:bg-green-50">
            <FiFileText className="w-5 h-5 text-[#6BB43A]" />
          </button>
        </Tooltip>
      ),
    },
    {
      title: "Attachments",
      key: "attachments",
      align: "center",
      render: () => (
        <Tooltip title={`View Attachments`}>
          <button type="button" className="p-2 rounded-md hover:bg-green-50">
            <FiPaperclip className="w-5 h-5 text-[#6BB43A]" />
          </button>
        </Tooltip>
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
        <h1 className="text-white text-2xl font-bold">Case Management</h1>
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