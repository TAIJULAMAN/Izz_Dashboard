import { useState } from 'react';
import { SearchOutlined, DeleteOutlined } from '@ant-design/icons';
import { Modal, Pagination } from 'antd';

export default function ChatManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const pageSize = 5;
  
  const [chatGroups, setChatGroups] = useState([
    { id: 1, name: 'Live Jazz Night', totalMembers: '1400+' },
    { id: 2, name: 'Creators Connect', totalMembers: '850+' },
    { id: 3, name: 'Artists Community', totalMembers: '1200+' },
    { id: 4, name: 'Tech Enthusiasts', totalMembers: '2100+' },
    { id: 5, name: 'Music Lovers', totalMembers: '950+' },
    { id: 6, name: 'Photography Club', totalMembers: '780+' },
    { id: 7, name: 'Book Readers', totalMembers: '650+' },
    { id: 8, name: 'Fitness Group', totalMembers: '1100+' },
    { id: 9, name: 'Foodies United', totalMembers: '1350+' },
    { id: 10, name: 'Travel Buddies', totalMembers: '1650+' },
  ]);

  const handleDelete = (group) => {
    setSelectedGroup(group);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    console.log('Deleting chat group:', selectedGroup);
    // Actual delete logic would go here
    setChatGroups(chatGroups.filter(group => group.id !== selectedGroup.id));
    setIsModalOpen(false);
    setSelectedGroup(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedGroup(null);
  };

  const filteredGroups = chatGroups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate pagination
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedGroups = filteredGroups.slice(startIndex, startIndex + pageSize);
  const totalItems = filteredGroups.length;

  return (
    <div className="min-h-screen bg-gray-50 p-4 lg:p-6">
      <div className="mx-auto">
        {/* Header with Search */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">
                Chat Management
              </h1>
              
              {/* Search Bar */}
              <div className="relative w-full sm:w-80">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchOutlined className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Table Header - Hidden on mobile */}
          <div className="hidden md:block border-t border-gray-200">
            <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="col-span-6">Chat Group Name</div>
              <div className="col-span-4">Total member</div>
              <div className="col-span-2 text-center">Action</div>
            </div>
          </div>
        </div>

        {/* Chat Groups List */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {paginatedGroups.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No chat groups found
            </div>
          ) : (
            <>
              {/* Desktop Table View */}
              <div className="hidden md:block">
                {paginatedGroups.map((group, index) => (
                  <div
                    key={group.id}
                    className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <div className="col-span-6 flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {String(startIndex + index + 1).padStart(2, '0')}. {group.name}
                      </span>
                    </div>
                    <div className="col-span-4 flex items-center">
                      <span className="text-sm text-gray-600">{group.totalMembers}</span>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                      <button
                        onClick={() => handleDelete(group)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        aria-label={`Delete ${group.name}`}
                      >
                        <DeleteOutlined className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Card View */}
              <div className="md:hidden">
                {paginatedGroups.map((group, index) => (
                  <div
                    key={group.id}
                    className="p-4 border-b border-gray-200 last:border-b-0"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900 mb-1">
                          {String(startIndex + index + 1).padStart(2, '0')}. {group.name}
                        </h3>
                        <div className="flex items-center text-xs text-gray-500">
                          <span className="font-medium">Total members:</span>
                          <span className="ml-1">{group.totalMembers}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDelete(group)}
                        className="ml-3 p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        aria-label={`Delete ${group.name}`}
                      >
                        <DeleteOutlined className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Pagination */}
        {totalItems > 0 && (
          <div className="mt-6 flex justify-center">
            <Pagination
              current={currentPage}
              pageSize={pageSize}
              total={totalItems}
              onChange={(page) => setCurrentPage(page)}
              showSizeChanger={false}
              className="ant-pagination"
            />
          </div>
        )}

        {/* Empty State when no results */}
        {searchQuery && filteredGroups.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8 mt-6">
            <div className="text-center">
              <SearchOutlined className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-sm font-medium text-gray-900 mb-2">
                No results found
              </h3>
              <p className="text-sm text-gray-500">
                Try searching with different keywords
              </p>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        <Modal
          open={isModalOpen}
          centered
          onCancel={handleCancel}
          footer={null}
          width={400}
        >
          <div className="flex flex-col justify-center items-center py-6">
            <h1 className="text-2xl text-center text-[#00c0b5]">
              Are you sure!
            </h1>
            <p className="text-lg text-center mt-3">
              Do you want to delete the {selectedGroup?.name} group?
            </p>
            <div className="flex justify-center gap-4 py-5 w-full">
              <button
                onClick={handleCancel}
                className="border border-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg"
              >
                CANCEL
              </button>
              <button
                onClick={confirmDelete}
                className="bg-[#00c0b5] text-white font-semibold py-2 px-6 rounded-lg"
              >
                CONFIRM
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}