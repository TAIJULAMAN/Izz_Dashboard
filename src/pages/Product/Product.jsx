import { ConfigProvider, Modal, Table } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack, IoAddOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Product() {
  const navigate = useNavigate();

  const [dataSource, setDataSource] = useState([
    { key: "1", name: "Crown Full Ceramic", type: "Crown", price: 250.0 },
    { key: "2", name: "Implant Abutment", type: "Implant", price: 320.5 },
    { key: "3", name: "Clear Aligner Set", type: "Orthodontics", price: 899.99 },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", type: "", price: "" });

  const openEdit = (row) => {
    setSelectedProduct({ ...row });
    setIsEditOpen(true);
  };
  const closeEdit = () => {
    setIsEditOpen(false);
    setSelectedProduct(null);
  };
  const saveEdit = () => {
    if (!selectedProduct) return;
    setDataSource((prev) => prev.map((r) => (r.key === selectedProduct.key ? selectedProduct : r)));
    setIsEditOpen(false);
    setSelectedProduct(null);
  };

  const openDelete = (row) => {
    setSelectedProduct(row);
    setIsDeleteOpen(true);
  };
  const confirmDelete = () => {
    if (!selectedProduct) return;
    setDataSource((prev) => prev.filter((r) => r.key !== selectedProduct.key));
    setIsDeleteOpen(false);
    setSelectedProduct(null);
  };
  const cancelDelete = () => {
    setIsDeleteOpen(false);
    setSelectedProduct(null);
  };

  const openAdd = () => {
    setNewProduct({ name: "", type: "", price: "" });
    setIsAddOpen(true);
  };
  const closeAdd = () => {
    setIsAddOpen(false);
  };
  const saveAdd = () => {
    if (!newProduct.name || !newProduct.type || newProduct.price === "") {
      alert("Please fill in Product Name, Product Type and Product Price");
      return;
    }
    const priceNum = Number(newProduct.price);
    if (Number.isNaN(priceNum) || priceNum < 0) {
      alert("Please enter a valid non-negative price");
      return;
    }
    const row = { key: Date.now().toString(), name: newProduct.name, type: newProduct.type, price: priceNum };
    setDataSource((prev) => [row, ...prev]);
    setIsAddOpen(false);
    setNewProduct({ name: "", type: "", price: "" });
  };

  const currency = (n) =>
    new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(Number(n || 0));

  const columns = [
    { title: "No", dataIndex: "key", key: "no", width: 80 },
    { title: "Product Name", dataIndex: "name", key: "name" },
    { title: "Product Type", dataIndex: "type", key: "type" },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
      render: (value) => <span className="font-medium">{currency(value)}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2">
          <button className="" onClick={() => openEdit(record)}>
            <FiEdit2 className="text-[#6BB43A] w-8 h-8 cursor-pointer rounded-md" />
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
        <h1 className="text-white text-2xl font-bold">Product</h1>
        <button
          type="button"
          onClick={openAdd}
          className="ml-auto bg-white text-[#6BB43A] px-3 py-1 rounded-md font-semibold flex items-center gap-2 hover:opacity-95 transition"
        >
          <IoAddOutline className="w-4 h-4" />
          Add Product
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
        <Table dataSource={dataSource} columns={columns} pagination={{ pageSize: 10 }} scroll={{ x: "max-content" }} />

        {/* Add Modal */}
        <Modal open={isAddOpen} onCancel={closeAdd} footer={null} centered>
          <div className="p-1">
            <h3 className="text-xl font-bold mb-4">Add Product</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct((s) => ({ ...s, name: e.target.value }))}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
                <input
                  type="text"
                  value={newProduct.type}
                  onChange={(e) => setNewProduct((s) => ({ ...s, type: e.target.value }))}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Product Price</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct((s) => ({ ...s, price: e.target.value }))}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button onClick={closeAdd} className="bg-gray-500 text-white font-semibold px-6 py-2 rounded-md">
                Cancel
              </button>
              <button onClick={saveAdd} className="bg-[#6BB43A] text-white font-semibold px-6 py-2 rounded-md">
                Save
              </button>
            </div>
          </div>
        </Modal>

        {/* Edit Modal */}
        <Modal open={isEditOpen} onCancel={closeEdit} footer={null} centered>
          {selectedProduct && (
            <div className="p-1">
              <h3 className="text-xl font-bold mb-4">Edit Product</h3>
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                  <input
                    type="text"
                    value={selectedProduct.name}
                    onChange={(e) => setSelectedProduct((s) => ({ ...s, name: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Type</label>
                  <input
                    type="text"
                    value={selectedProduct.type}
                    onChange={(e) => setSelectedProduct((s) => ({ ...s, type: e.target.value }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Price</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={selectedProduct.price}
                    onChange={(e) => setSelectedProduct((s) => ({ ...s, price: Number(e.target.value || 0) }))}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#6BB43A]"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-6">
                <button onClick={closeEdit} className="bg-gray-500 text-white font-semibold px-6 py-2 rounded-md">
                  Cancel
                </button>
                <button onClick={saveEdit} className="bg-[#6BB43A] text-white font-semibold px-6 py-2 rounded-md">
                  Save
                </button>
              </div>
            </div>
          )}
        </Modal>

        {/* Delete Modal */}
        <Modal open={isDeleteOpen} onCancel={cancelDelete} footer={null} centered>
          <div className="flex flex-col justify-center items-center py-8">
            <h1 className="text-2xl text-center text-[#6BB43A]">Are you sure?</h1>
            <p className="text-base text-center mt-4">Do you want to delete this product?</p>
            <div className="text-center pt-6 w-full flex justify-center gap-3">
              <button onClick={cancelDelete} className="bg-gray-500 text-white font-semibold py-2 px-5 rounded-md">
                Cancel
              </button>
              <button onClick={confirmDelete} className="bg-[#6BB43A] text-white font-semibold py-2 px-5 rounded-md">
                Confirm
              </button>
            </div>
          </div>
        </Modal>
      </ConfigProvider>
    </div>
  );
}
