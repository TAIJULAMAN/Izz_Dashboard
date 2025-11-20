import { useMemo, useState } from "react";

function Coupon() {
  const [form, setForm] = useState({
    code: "SAVE20",
    discountType: "Percentage",
    discountValue: "20",
    startDate: "2024-01-15",
    endDate: "2024-01-30",
    usageLimit: "100",
    eligibleUsers: "Buyers, Sellers",
    active: true,
  });

  const [coupons, setCoupons] = useState([
    { code: "SAVE20", type: "Percentage", dateRange: "Jan 15, 2026", totalUses: 100, remaining: 100 },
    { code: "New Year", type: "Percentage", dateRange: "Jan 15, 2026", totalUses: 10, remaining: 45 },
    { code: "Wel Come", type: "Percentage", dateRange: "Jan 15, 2026", totalUses: 50, remaining: 52 },
  ]);

  const canSubmit = useMemo(() => form.code && form.discountType && form.discountValue, [form]);

  const onChange = (key, value) => setForm((p) => ({ ...p, [key]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setCoupons((prev) => [
      {
        code: form.code,
        type: form.discountType,
        dateRange: `${new Date(form.startDate).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })} - ${new Date(form.endDate).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}`,
        totalUses: Number(form.usageLimit) || 0,
        remaining: Number(form.usageLimit) || 0,
      },
      ...prev,
    ]);
  };

  return (
    <div className="space-y-4">
      <div className="bg-[#111827] px-4 md:px-5 py-3 rounded-md">
        <h1 className="text-white text-xl sm:text-2xl font-bold">Coupon Management</h1>
      </div>

      <div className="border rounded-lg p-4">
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Coupon Code</label>
            <input value={form.code} onChange={(e) => onChange("code", e.target.value)} className="border rounded-md px-3 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Discount Type</label>
            <input value={form.discountType} onChange={(e) => onChange("discountType", e.target.value)} className="border rounded-md px-3 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Discount Value</label>
            <input value={form.discountValue} onChange={(e) => onChange("discountValue", e.target.value)} className="border rounded-md px-3 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Start Date</label>
            <input type="date" value={form.startDate} onChange={(e) => onChange("startDate", e.target.value)} className="border rounded-md px-3 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">End Date</label>
            <input type="date" value={form.endDate} onChange={(e) => onChange("endDate", e.target.value)} className="border rounded-md px-3 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Usage Limit</label>
            <input value={form.usageLimit} onChange={(e) => onChange("usageLimit", e.target.value)} className="border rounded-md px-3 py-2" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Eligible Users</label>
            <input value={form.eligibleUsers} onChange={(e) => onChange("eligibleUsers", e.target.value)} className="border rounded-md px-3 py-2" />
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Set Active Status</span>
            <button type="button" onClick={() => onChange("active", !form.active)} className={`w-10 h-6 rounded-full p-1 transition ${form.active ? "bg-emerald-500" : "bg-gray-300"}`}>
              <span className={`block w-4 h-4 bg-white rounded-full transition ${form.active ? "translate-x-4" : "translate-x-0"}`} />
            </button>
          </div>
          <div className="md:col-span-2">
            <button type="submit" disabled={!canSubmit} className="px-5 py-2 rounded-md bg-[#111827] text-white font-semibold disabled:opacity-50">Save Coupon</button>
          </div>
        </form>
      </div>

      <div className="border rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3">Coupons</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left">
                <th className="border-y px-3 py-2">Coupon Code</th>
                <th className="border-y px-3 py-2">Discount</th>
                <th className="border-y px-3 py-2">Date Range</th>
                <th className="border-y px-3 py-2">Total Uses</th>
                <th className="border-y px-3 py-2">Remaining Use</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((c) => (
                <tr key={c.code}>
                  <td className="border-b px-3 py-2">{c.code}</td>
                  <td className="border-b px-3 py-2">{c.type}</td>
                  <td className="border-b px-3 py-2">{c.dateRange}</td>
                  <td className="border-b px-3 py-2">{c.totalUses}</td>
                  <td className="border-b px-3 py-2">{c.remaining}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Coupon;
