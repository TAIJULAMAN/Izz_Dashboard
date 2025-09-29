import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import PageHeading from "../../components/PageHeading/PageHeading";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

function Interactivity() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [editTitle, setEditTitle] = useState("");
    const [addTitle, setAddTitle] = useState("");

    const showModal = () => {
        setIsModalOpen(true);
    };
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

    const showEditModal = (user) => {
        setSelectedUser(user);
        setEditTitle(user.title);
        setIsEditModalOpen(true);
    };
    const handleEditCancel = () => {
        setIsEditModalOpen(false);
        setSelectedUser(null);
        setEditTitle("");
    };

    const handleEditSubmit = () => {
        console.log('Edit data:', { id: selectedUser.key, title: editTitle });
        setIsEditModalOpen(false);
        setSelectedUser(null);
        setEditTitle("");
    };

    const showAddModal = () => {
        setIsAddModalOpen(true);
    };
    const handleAddCancel = () => {
        setIsAddModalOpen(false);
        setAddTitle("");
    };

    const handleAddSubmit = () => {
        console.log('Add data:', { title: addTitle });
        setIsAddModalOpen(false);
        setAddTitle("");
    };
    const dataSource = [
        {
            key: "1",
            no: "1",
            title: "Allow photo/video uploads",

        },
        {
            key: "2",
            no: "2",
            title: "Enable event gallery",

        },
        {
            key: "3",
            no: "3",
            title: "Enable social sharing",

        },
        {
            key: "4",
            no: "4",
            title: "live streamin",

        }
    ];
    const columns = [
        {
            title: "No",
            dataIndex: "no",
            key: "no",
        },
        {
            title: "Title",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div className="flex gap-2">
                    <button className="" onClick={() => showEditModal(record)}>
                        <FiEdit className="text-[#00c0b5] w-10 h-10 cursor-pointer rounded-md" />
                    </button>
                    <button className="" onClick={showModal}>
                        <RiDeleteBin6Line className="text-red-400 w-10 h-10 cursor-pointer rounded-md" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="my-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <PageHeading title="Interactivity" />
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative w-full sm:w-[300px]">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="border border-[#e5eaf2] py-3 pl-12 pr-4 outline-none w-full rounded-md"
                        />
                        <span className="text-gray-500 absolute top-0 left-0 h-full px-3 flex items-center justify-center cursor-pointer">
                            <IoSearch className="text-[1.3rem]" />
                        </span>
                    </div>
                    <button
                        onClick={showAddModal}
                        className="bg-gradient-to-r from-[#00c0b5] to-[#00a89b] text-white border-none hover:from-[#00a89b] hover:to-[#009688] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6 py-3 rounded-md font-semibold whitespace-nowrap"
                    >
                        + Add New
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
                            headerBg: "#00c0b5",
                            headerColor: "rgb(255,255,255)",
                            cellFontSize: 16,
                            headerSplitColor: "#00c0b5",
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
                        <h1 className="text-3xl text-center text-[#00c0b5]">
                            Are you sure!
                        </h1>
                        <p className="text-xl text-center mt-5">
                            Do you want to delete this Interactivity ?
                        </p>
                        <div className="text-center py-5 w-full">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-[#00c0b5] text-white font-semibold w-1/3 py-3 px-5 rounded-lg"
                            >
                                CONFIRM
                            </button>
                        </div>
                    </div>
                </Modal>

                {/* Edit Modal */}
                <Modal
                    open={isEditModalOpen}
                    centered
                    onCancel={handleEditCancel}
                    footer={null}
                    width={500}
                    title="Edit Interactivity Item"
                >
                    {selectedUser && (
                        <div className="py-4">
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-semibold text-gray-700">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    value={editTitle}
                                    onChange={(e) => setEditTitle(e.target.value)}
                                    placeholder="Enter title"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#00c0b5] focus:ring-2 focus:ring-[#00c0b5]/20 transition-all"
                                />
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                                <button
                                    onClick={handleEditCancel}
                                    className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleEditSubmit}
                                    className="px-6 py-2 bg-gradient-to-r from-[#00c0b5] to-[#00a89b] text-white rounded-lg hover:from-[#00a89b] hover:to-[#009688] transition-all transform hover:scale-105 shadow-lg"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    )}
                </Modal>

                {/* Add Modal */}
                <Modal
                    open={isAddModalOpen}
                    centered
                    onCancel={handleAddCancel}
                    footer={null}
                    width={500}
                    title="Add New Interactivity Item"
                >
                    <div className="py-4">
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-semibold text-gray-700">
                                Title
                            </label>
                            <input
                                type="text"
                                value={addTitle}
                                onChange={(e) => setAddTitle(e.target.value)}
                                placeholder="Enter title"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-[#00c0b5] focus:ring-2 focus:ring-[#00c0b5]/20 transition-all"
                            />
                        </div>
                        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                            <button
                                onClick={handleAddCancel}
                                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleAddSubmit}
                                className="px-6 py-2 bg-gradient-to-r from-[#00c0b5] to-[#00a89b] text-white rounded-lg hover:from-[#00a89b] hover:to-[#009688] transition-all transform hover:scale-105 shadow-lg"
                            >
                                Add Item
                            </button>
                        </div>
                    </div>
                </Modal>
            </ConfigProvider>
        </>
    );
}

export default Interactivity;