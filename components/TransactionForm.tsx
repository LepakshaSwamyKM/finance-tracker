"use client";
import { useEffect, useState } from "react";

interface Props {
  onSubmit: (txn: any) => void;
  initialData?: any;
}

export default function TransactionForm({ onSubmit, initialData }: Props) {
  const [form, setForm] = useState({ amount: "", description: "", date: "" });

  useEffect(() => {
    if (initialData) {
      setForm({
        amount: initialData.amount.toString(),
        description: initialData.description,
        date: initialData.date.split("T")[0],
      });
    }
  }, [initialData]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!form.amount || !form.description || !form.date)
      return alert("All fields required");
    onSubmit({
      amount: parseFloat(form.amount),
      description: form.description,
      date: form.date,
    });
    setForm({ amount: "", description: "", date: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-3 gap-3 bg-white p-4 rounded shadow"
    >
      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
        className="border p-2 rounded focus:outline-blue-500"
      />
      <input
        type="text"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="border p-2 rounded focus:outline-blue-500"
      />
      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="border p-2 rounded focus:outline-blue-500"
      />
      <button
        type="submit"
        className="col-span-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        {initialData ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
}
