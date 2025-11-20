import { useState } from "react";
import { Modal } from "antd";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { FaPen, FaTrash } from "react-icons/fa";

function Gamification() {
  const [xpSettings, setXpSettings] = useState([
    { key: "xpPerAction", label: "Xp per action", value: 10 },
    { key: "review", label: "Review", value: 10 },
    { key: "referral", label: "Referral", value: 10 },
    { key: "challenge", label: "Challenge", value: 10 },
    { key: "bonus", label: "XP Bonus 2P", value: 10 },
    { key: "xpToPoints", label: "xp to points conversion rate", value: 10 },
  ]);

  const [badges, setBadges] = useState([
    { id: 1, name: "Explorer", desc: "1st Booking", active: true },
    { id: 2, name: "Critic", desc: "1st Booking", active: true },
    { id: 3, name: "Connector", desc: "1st Booking", active: true },
    { id: 4, name: "Challenger", desc: "1st Booking", active: true },
  ]);

  const [levels, setLevels] = useState([
    { id: 1, level: "Summer Challenge", range: "100 - 500", benefits: "Discount 5%", status: "50%" },
    { id: 2, level: "Winter Challenge", range: "501 - 1000", benefits: "Priority Access", status: "70%" },
    { id: 3, level: "Festival Challenge", range: "1001 - 2000", benefits: "VIP Perks", status: "55%" },
  ]);

  // Modals state
  const [badgeToDelete, setBadgeToDelete] = useState(null);
  const [levelToDelete, setLevelToDelete] = useState(null);
  const [levelToEdit, setLevelToEdit] = useState(null);
  const [editForm, setEditForm] = useState({ level: "", range: "", benefits: "", status: "" });

  const inc = (idx) =>
    setXpSettings((arr) => arr.map((r, i) => (i === idx ? { ...r, value: r.value + 1 } : r)));
  const dec = (idx) =>
    setXpSettings((arr) => arr.map((r, i) => (i === idx ? { ...r, value: Math.max(0, r.value - 1) } : r)));
  const toggleBadge = (id) =>
    setBadges((arr) => arr.map((b) => (b.id === id ? { ...b, active: !b.active } : b)));
  const askDeleteBadge = (id) => setBadgeToDelete(badges.find((b) => b.id === id) || null);
  const confirmDeleteBadge = () => {
    if (badgeToDelete) setBadges((arr) => arr.filter((b) => b.id !== badgeToDelete.id));
    setBadgeToDelete(null);
  };
  const cancelDeleteBadge = () => setBadgeToDelete(null);

  const askDeleteLevel = (id) => setLevelToDelete(levels.find((l) => l.id === id) || null);
  const confirmDeleteLevel = () => {
    if (levelToDelete) setLevels((arr) => arr.filter((l) => l.id !== levelToDelete.id));
    setLevelToDelete(null);
  };
  const cancelDeleteLevel = () => setLevelToDelete(null);

  const openEditLevel = (lvl) => {
    setLevelToEdit(lvl);
    setEditForm({ level: lvl.level, range: lvl.range, benefits: lvl.benefits, status: lvl.status });
  };
  const cancelEditLevel = () => setLevelToEdit(null);
  const saveEditLevel = () => {
    if (!levelToEdit) return;
    setLevels((arr) =>
      arr.map((l) =>
        l.id === levelToEdit.id
          ? { ...l, level: editForm.level, range: editForm.range, benefits: editForm.benefits, status: editForm.status }
          : l
      )
    );
    setLevelToEdit(null);
  };

  return (
    <div className="space-y-4">
      <div className="bg-[#111827] px-4 md:px-5 py-3 rounded-md">
        <h1 className="text-white text-xl sm:text-2xl font-bold">Gamification Points</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* XP to points conversion rate */}
        <div className="border rounded-lg p-4">
          <h2 className="text-base font-semibold mb-3">XP to points conversion rate</h2>
          <div className="space-y-3">
            {xpSettings.map((row, idx) => (
              <div key={row.key} className="flex items-center justify-between gap-3">
                <span className="text-sm text-[#0D0D0D]">{row.label}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => dec(idx)}
                    className="w-8 h-8 rounded-md border flex items-center justify-center hover:bg-gray-50"
                    aria-label="decrease"
                  >
                    <IoRemoveOutline />
                  </button>
                  <input
                    className="w-16 text-center border rounded-md py-1"
                    value={row.value}
                    onChange={(e) => {
                      const v = Number(e.target.value) || 0;
                      setXpSettings((arr) => arr.map((r, i) => (i === idx ? { ...r, value: v } : r)));
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => inc(idx)}
                    className="w-8 h-8 rounded-md border flex items-center justify-center hover:bg-gray-50"
                    aria-label="increase"
                  >
                    <IoAddOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges & Achievements */}
        <div className="border rounded-lg p-4">
          <h2 className="text-base font-semibold mb-3">Badges & Achievements Management</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {badges.map((b) => (
              <div key={b.id} className="border rounded-lg p-3 flex items-start justify-between">
                <div>
                  <div className="font-semibold">{b.name}</div>
                  <div className="text-xs text-gray-500">{b.desc}</div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleBadge(b.id)}
                    className={`px-2 py-1 rounded text-xs font-medium ${b.active ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-600"}`}
                  >
                    {b.active ? "Active" : "Inactive"}
                  </button>
                  <button
                    type="button"
                    onClick={() => askDeleteBadge(b.id)}
                    className="px-2 py-1 rounded text-xs font-medium bg-red-100 text-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Level & Rewards */}
      <div className="border rounded-lg p-4">
        <h2 className="text-base font-semibold mb-3">Level & Rewards</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left">
                <th className="border-y px-3 py-2">Level</th>
                <th className="border-y px-3 py-2">Xp Range</th>
                <th className="border-y px-3 py-2">Benifits</th>
                <th className="border-y px-3 py-2">Status</th>
                <th className="border-y px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {levels.map((l) => (
                <tr key={l.id}>
                  <td className="border-b px-3 py-2">{l.level}</td>
                  <td className="border-b px-3 py-2">{l.range}</td>
                  <td className="border-b px-3 py-2">{l.benefits}</td>
                  <td className="border-b px-3 py-2">{l.status}</td>
                  <td className="border-b px-3 py-2">
                    <div className="flex items-center gap-3 text-[#111827]">
                      <button type="button" className="hover:opacity-80" aria-label="edit" onClick={() => openEditLevel(l)}>
                        <FaPen />
                      </button>
                      <button type="button" className="hover:text-red-600" aria-label="delete" onClick={() => askDeleteLevel(l.id)}>
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Badge Modal */}
      <Modal
        open={!!badgeToDelete}
        onCancel={cancelDeleteBadge}
        onOk={confirmDeleteBadge}
        okText="Delete"
        okButtonProps={{ danger: true }}
        title="Delete Badge"
      >
        {badgeToDelete && (
          <p>Are you sure you want to delete the badge "{badgeToDelete.name}"?</p>
        )}
      </Modal>

      {/* Delete Level Modal */}
      <Modal
        open={!!levelToDelete}
        onCancel={cancelDeleteLevel}
        onOk={confirmDeleteLevel}
        okText="Delete"
        okButtonProps={{ danger: true }}
        title="Delete Level"
      >
        {levelToDelete && (
          <p>Are you sure you want to delete the level "{levelToDelete.level}"?</p>
        )}
      </Modal>

      {/* Edit Level Modal */}
      <Modal
        open={!!levelToEdit}
        onCancel={cancelEditLevel}
        onOk={saveEditLevel}
        okText="Save"
        title="Edit Level"
      >
        <div className="grid grid-cols-1 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Level</label>
            <input
              className="border rounded-md px-3 py-2"
              value={editForm.level}
              onChange={(e) => setEditForm((p) => ({ ...p, level: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">XP Range</label>
            <input
              className="border rounded-md px-3 py-2"
              value={editForm.range}
              onChange={(e) => setEditForm((p) => ({ ...p, range: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Benefits</label>
            <input
              className="border rounded-md px-3 py-2"
              value={editForm.benefits}
              onChange={(e) => setEditForm((p) => ({ ...p, benefits: e.target.value }))}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Status</label>
            <input
              className="border rounded-md px-3 py-2"
              value={editForm.status}
              onChange={(e) => setEditForm((p) => ({ ...p, status: e.target.value }))}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Gamification;
