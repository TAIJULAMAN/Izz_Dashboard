import { ConfigProvider, Modal, Table, Select } from "antd";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import PageHeading from "../../components/PageHeading/PageHeading";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";

const { Option } = Select;

function EventManagement() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedEventType, setSelectedEventType] = useState("all");
    const [selectedCategory, setSelectedCategory] = useState("all");

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
    const dataSource = [
        {
            key: "1",
            no: "1",
            name: "React Summit 2025",
            image: "https://i.ibb.co.com/3Ypr4Q7T/Group-290463.png",
            owner: "Jane Cooper",
            type: "upcoming",
            category: "reactsummit@example.com",
            location: "New York, USA",
        },
        {
            key: "2",
            no: "2",
            name: "AI & Machine Learning Expo",
            image: "https://i.ibb.co.com/bMzdpML5/Group-290462.png",
            owner: "Liam Johnson",
            type: "completed",
            category: "aimlexpo@example.com",
            location: "Los Angeles, USA",
        },
        {
            key: "3",
            no: "3",
            name: "Startup Grind Conference",
            image: "https://i.ibb.co.com/nNqLGvXs/Group-290458-1.png",
            owner: "Sophia Davis",
            type: "ongoing",
            category: "startupgrind@example.com",
            location: "San Francisco, USA",
        },
        {
            key: "4",
            no: "4",
            name: "Tech Innovators Meetup",
            image: "https://i.ibb.co.com/2Yp1Wccv/Group-290459.png",
            owner: "Ethan Wilson",
            type: "upcoming",
            category: "techmeetup@example.com",
            location: "Seattle, USA",
        },
        {
            key: "5",
            no: "5",
            name: "Cloud Computing World",
            image: "https://i.ibb.co.com/pvmXxyJc/Group-290458.png",
            owner: "Ava Martinez",
            type: "completed",
            category: "cloudworld@example.com",
            location: "Chicago, USA",
        },
        {
            key: "6",
            no: "6",
            name: "JavaScript Developers Conference",
            image: "https://i.ibb.co.com/3Ypr4Q7T/Group-290463.png",
            owner: "James Anderson",
            type: "upcoming",
            category: "jsconf@example.com",
            location: "Boston, USA",
        },
        {
            key: "7",
            no: "7",
            name: "Digital Marketing Summit",
            image: "https://i.ibb.co.com/3Ypr4Q7T/Group-290463.png",
            owner: "Charlotte Thomas",
            type: "ongoing",
            category: "dmsummit@example.com",
            location: "Miami, USA",
        },
        {
            key: "8",
            no: "8",
            name: "E-commerce Growth Expo",
            image: "https://i.ibb.co.com/pvmXxyJc/Group-290458.png",
            owner: "Benjamin Lee",
            type: "completed",
            category: "ecomexpo@example.com",
            location: "Houston, USA",
        },
        {
            key: "9",
            no: "9",
            name: "Data Science & Analytics Forum",
            image: "https://i.ibb.co.com/2Yp1Wccv/Group-290459.png",
            owner: "Amelia Hall",
            type: "upcoming",
            category: "datascienceforum@example.com",
            location: "Denver, USA",
        },
        {
            key: "10",
            no: "10",
            name: "Cybersecurity Essentials Workshop",
            image: "https://i.ibb.co.com/3Ypr4Q7T/Group-290463.png",
            owner: "Lucas Allen",
            type: "completed",
            category: "cyberworkshop@example.com",
            location: "San Diego, USA",
        },
        {
            key: "11",
            no: "11",
            name: "Blockchain & Web3 Conference",
            image: "https://source.unsplash.com/800x600/?blockchain,web3&sig=11",
            owner: "Harper Scott",
            type: "upcoming",
            category: "blockchainconf@example.com",
            location: "Austin, USA",
        },
        {
            key: "12",
            no: "12",
            name: "Product Management Bootcamp",
            image: "https://source.unsplash.com/800x600/?product,management&sig=12",
            owner: "Henry Green",
            type: "ongoing",
            category: "pmbootcamp@example.com",
            location: "Orlando, USA",
        },
        {
            key: "13",
            no: "13",
            name: "UI/UX Design Summit",
            image: "https://source.unsplash.com/800x600/?ui,ux,design&sig=13",
            owner: "Evelyn Baker",
            type: "completed",
            category: "uiuxsummit@example.com",
            location: "Dallas, USA",
        },
        {
            key: "14",
            no: "14",
            name: "Mobile App Hackathon",
            image: "https://source.unsplash.com/800x600/?mobile,app,hackathon&sig=14",
            owner: "Sebastian Nelson",
            type: "upcoming",
            category: "apphackathon@example.com",
            location: "Phoenix, USA",
        },
        {
            key: "15",
            no: "15",
            name: "Cloud Security Expo",
            image: "https://source.unsplash.com/800x600/?cloud,security&sig=15",
            owner: "Victoria Carter",
            type: "completed",
            category: "cloudsec@example.com",
            location: "Atlanta, USA",
        },
        {
            key: "16",
            no: "16",
            name: "VR & AR Developers Meetup",
            image: "https://source.unsplash.com/800x600/?vr,ar,developers&sig=16",
            owner: "David Mitchell",
            type: "upcoming",
            category: "vrarmeetup@example.com",
            location: "San Jose, USA",
        },
        {
            key: "17",
            no: "17",
            name: "Next.js Global Conference",
            image: "https://source.unsplash.com/800x600/?nextjs,conference&sig=17",
            owner: "Grace Roberts",
            type: "ongoing",
            category: "nextjsconf@example.com",
            location: "Portland, USA",
        },
        {
            key: "18",
            no: "18",
            name: "Healthcare Tech Innovation Forum",
            image: "https://source.unsplash.com/800x600/?healthcare,innovation&sig=18",
            owner: "Elijah Phillips",
            type: "completed",
            category: "healthtechforum@example.com",
            location: "Washington, USA",
        },
        {
            key: "19",
            no: "19",
            name: "Python Developers Summit",
            image: "https://source.unsplash.com/800x600/?python,developers&sig=19",
            owner: "Scarlett Evans",
            type: "upcoming",
            category: "pythonsummit@example.com",
            location: "Baltimore, USA",
        },
        {
            key: "20",
            no: "20",
            name: "Digital Health Conference",
            image: "https://source.unsplash.com/800x600/?digital,health&sig=20",
            owner: "Carter Edwards",
            type: "completed",
            category: "digitalhealth@example.com",
            location: "Philadelphia, USA",
        },
        {
            key: "21",
            no: "21",
            name: "DevOps World Summit",
            image: "https://source.unsplash.com/800x600/?devops,summit&sig=21",
            owner: "Penelope Stewart",
            type: "ongoing",
            category: "devopsworld@example.com",
            location: "Minneapolis, USA",
        },
        {
            key: "22",
            no: "22",
            name: "AI in Finance Forum",
            image: "https://source.unsplash.com/800x600/?ai,finance&sig=22",
            owner: "Wyatt Morris",
            type: "upcoming",
            category: "aifinance@example.com",
            location: "Charlotte, USA",
        },
        {
            key: "23",
            no: "23",
            name: "Gaming Expo & Esports Fest",
            image: "https://source.unsplash.com/800x600/?gaming,esports&sig=23",
            owner: "Zoey Bell",
            type: "completed",
            category: "gamingfest@example.com",
            location: "Las Vegas, USA",
        },
        {
            key: "24",
            no: "24",
            name: "Figma Design Hackathon",
            image: "https://source.unsplash.com/800x600/?figma,hackathon&sig=24",
            owner: "Nathan Cook",
            type: "upcoming",
            category: "figmahack@example.com",
            location: "San Antonio, USA",
        },
        {
            key: "25",
            no: "25",
            name: "Big Data & AI World",
            image: "https://source.unsplash.com/800x600/?bigdata,ai&sig=25",
            owner: "Hannah Bailey",
            type: "completed",
            category: "bigdataai@example.com",
            location: "Columbus, USA",
        },
        {
            key: "26",
            no: "26",
            name: "Agile Project Management Summit",
            image: "https://source.unsplash.com/800x600/?agile,project&sig=26",
            owner: "Joshua Rivera",
            type: "ongoing",
            category: "agilesummit@example.com",
            location: "Nashville, USA",
        },
        {
            key: "27",
            no: "27",
            name: "Open Source Contributors Meetup",
            image: "https://source.unsplash.com/800x600/?opensource,developers&sig=27",
            owner: "Lily Kelly",
            type: "upcoming",
            category: "opensourcemeet@example.com",
            location: "Kansas City, USA",
        },
        {
            key: "28",
            no: "28",
            name: "SaaS Founders Networking Event",
            image: "https://source.unsplash.com/800x600/?saas,networking&sig=28",
            owner: "Owen Ward",
            type: "completed",
            category: "saasfounders@example.com",
            location: "Salt Lake City, USA",
        },
        {
            key: "29",
            no: "29",
            name: "Content Creators Expo",
            image: "https://source.unsplash.com/800x600/?content,creators&sig=29",
            owner: "Aria Torres",
            type: "upcoming",
            category: "contentexpo@example.com",
            location: "Tampa, USA",
        },
        {
            key: "30",
            no: "30",
            name: "AI Robotics Hackathon",
            image: "https://source.unsplash.com/800x600/?ai,robotics&sig=30",
            owner: "Dylan Foster",
            type: "completed",
            category: "airobotics@example.com",
            location: "Pittsburgh, USA",
        },
    ];



    const columns = [
        {
            title: "No",
            dataIndex: "no",
            key: "no",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (_, record) => (
                <img
                    src={record.image}
                    className="w-20 h-10 object-cover"
                    alt="User Avatar"
                />
            ),
        },
        {
            title: "Name",
            key: "name",
            render: (_, record) => (
                <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-[2px]">
                        <span className="leading-none">{record.name}</span>

                    </div>
                </div>
            ),
        },
        {
            title: "Owner",
            dataIndex: "owner",
            key: "owner",
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
        },
        {
            title: "Category",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "Location",
            dataIndex: "location",
            key: "location",
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <div className="flex gap-2">
                    <button className="" onClick={() => showViewModal(record)}>
                        <FaRegEye className="text-[#00c0b5] w-10 h-10 cursor-pointer rounded-md" />
                    </button>
                    <button className="" onClick={showModal}>
                        <RiDeleteBin6Line className="text-red-400 w-10 h-10 cursor-pointer rounded-md" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="my-5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                <PageHeading title="Event Management" />
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

                    {/* Event Type Dropdown */}
                    <Select
                        value={selectedEventType}
                        onChange={setSelectedEventType}
                        className="w-full sm:w-[180px]"
                        placeholder="Event Type"
                        style={{ height: '48px' }}
                    >
                        <Option value="all">All Types</Option>
                        <Option value="upcoming">Upcoming</Option>
                        <Option value="ongoing">Ongoing</Option>
                        <Option value="completed">Completed</Option>
                    </Select>

                    {/* Categories Dropdown */}
                    <Select
                        value={selectedCategory}
                        onChange={setSelectedCategory}
                        className="w-full sm:w-[200px]"
                        placeholder="Categories"
                        style={{ height: '48px' }}
                    >
                        <Option value="all">All Categories</Option>
                        <Option value="technology">Technology</Option>
                        <Option value="business">Business</Option>
                        <Option value="design">Design</Option>
                        <Option value="marketing">Marketing</Option>
                        <Option value="healthcare">Healthcare</Option>
                        <Option value="finance">Finance</Option>
                        <Option value="education">Education</Option>
                        <Option value="gaming">Gaming</Option>
                    </Select>
                    {/* Search Input */}
                    <div className="relative w-full sm:w-[300px]">
                        <input
                            type="text"
                            placeholder="Search events..."
                            className="border border-[#e5eaf2] py-3 pl-12 pr-4 outline-none w-full rounded-md"
                        />
                        <span className="text-gray-500 absolute top-0 left-0 h-full px-3 flex items-center justify-center cursor-pointer">
                            <IoSearch className="text-[1.3rem]" />
                        </span>
                    </div>

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
                        Select: {
                            colorPrimary: "#00c0b5",
                            colorPrimaryHover: "#00a89b",
                            controlOutline: "rgba(0, 192, 181, 0.2)",
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
                            Do you want to delete this event?
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
                            {/* Header with gradient background */}
                            <div className="bg-gradient-to-r from-[#00c0b5] to-[#00a89b] p-6 -m-6 mb-6 rounded-t-lg">
                                <div className="flex items-center gap-6">
                                    <div className="relative">
                                        <img
                                            src={selectedUser.image}
                                            alt={selectedUser.name}
                                            className="w-[200px] h-24 rounded-lg border-4 border-white shadow-lg object-cover"
                                        />
                                        <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold text-white ${selectedUser.type === 'upcoming' ? 'bg-blue-500' :
                                            selectedUser.type === 'ongoing' ? 'bg-green-500' : 'bg-gray-500'
                                            }`}>
                                            {selectedUser.type.toUpperCase()}
                                        </div>
                                    </div>
                                    <div className="text-white">
                                        <h2 className="text-3xl font-bold mb-2">{selectedUser.name}</h2>
                                        <div className="flex items-center gap-3 mb-2">
                                        </div>
                                        <p className="text-white/90">Managed by {selectedUser.owner}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content sections */}
                            <div className="space-y-6">
                                {/* Event Information */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#00c0b5] rounded-full"></div>
                                        Event Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                    <span className="text-blue-600 text-lg">👤</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-600">Event Owner</h4>
                                                    <p className="text-lg font-semibold text-gray-800">{selectedUser.owner}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                                    <span className="text-purple-600 text-lg">🏷️</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-600">Category</h4>
                                                    <p className="text-lg font-semibold text-gray-800">{selectedUser.category}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Location & Status */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#00c0b5] rounded-full"></div>
                                        Location & Status
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                                    <span className="text-green-600 text-lg">📍</span>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-600">Location</h4>
                                                    <p className="text-lg font-semibold text-gray-800">{selectedUser.location}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${selectedUser.type === 'upcoming' ? 'bg-blue-100' :
                                                    selectedUser.type === 'ongoing' ? 'bg-green-100' : 'bg-gray-100'
                                                    }`}>
                                                    <span className={`text-lg ${selectedUser.type === 'upcoming' ? 'text-blue-600' :
                                                        selectedUser.type === 'ongoing' ? 'text-green-600' : 'text-gray-600'
                                                        }`}>
                                                        {selectedUser.type === 'upcoming' ? '🕒' :
                                                            selectedUser.type === 'ongoing' ? '▶️' : '✅'}
                                                    </span>
                                                </div>
                                                <div>
                                                    <h4 className="text-sm font-medium text-gray-600">Event Status</h4>
                                                    <p className="text-lg font-semibold text-gray-800 capitalize">{selectedUser.type}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Event Statistics */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-[#00c0b5] rounded-full"></div>
                                        Event Statistics
                                    </h3>
                                    <div className="grid grid-cols-3 gap-4">
                                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                                            <div className="text-2xl font-bold text-blue-600 mb-1">
                                                {selectedUser.type === 'upcoming' ? '150' :
                                                    selectedUser.type === 'ongoing' ? '89' : '234'}
                                            </div>
                                            <div className="text-sm text-blue-700">Registered</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl text-center">
                                            <div className="text-2xl font-bold text-green-600 mb-1">
                                                {selectedUser.type === 'upcoming' ? '0' :
                                                    selectedUser.type === 'ongoing' ? '67' : '198'}
                                            </div>
                                            <div className="text-sm text-green-700">Attended</div>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl text-center">
                                            <div className="text-2xl font-bold text-purple-600 mb-1">
                                                {selectedUser.type === 'completed' ? '4.7' : 'N/A'}
                                            </div>
                                            <div className="text-sm text-purple-700">Rating</div>
                                        </div>
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

export default EventManagement;
