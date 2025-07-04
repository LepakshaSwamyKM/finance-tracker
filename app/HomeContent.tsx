"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import ExpensesChart from "../components/ExpensesChart";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomeContent() {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [editTxn, setEditTxn] = useState<any | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  const showForm = searchParams.get("showForm") === "true";

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const res = await fetch("/api/transactions");
      if (!res.ok) throw new Error("Failed to fetch transactions");
      const data = await res.json();
      setTransactions(data);
    } catch (err: any) {
      console.error(err);
      toast.error("Could not load transactions. Please try again later.");
    }
  };

  const handleSubmit = async (txn: any) => {
    if (!txn.amount || !txn.date || !txn.description) {
      toast.error("All fields are required.");
      return;
    }
    try {
      if (editTxn) {
        const res = await fetch(`/api/transactions/${editTxn._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(txn),
        });
        if (!res.ok) throw new Error("Update failed");
        toast.success("Transaction updated successfully!");
        setEditTxn(null);
      } else {
        const res = await fetch("/api/transactions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(txn),
        });
        if (!res.ok) throw new Error("Creation failed");
        toast.success("Transaction added successfully!");
      }
      fetchTransactions();
      router.replace("/");
    } catch (err: any) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/transactions/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      toast.success("Transaction deleted.");
      fetchTransactions();
    } catch (err: any) {
      console.error(err);
      toast.error("Could not delete transaction.");
    }
  };

  return (
    <div className="space-y-6">
      <ToastContainer position="top-center" autoClose={3000} />

      <section className="bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-lg shadow text-center">
        <h2 className="text-3xl font-bold mb-2">Track Your Finances</h2>
        <p className="text-lg text-gray-700">
          A simple and beautiful way to manage your personal expenses.
        </p>
      </section>

      <AnimatePresence>
        {showForm && (
          <motion.section
            id="add"
            key="form"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <TransactionForm onSubmit={handleSubmit} initialData={editTxn} />
          </motion.section>
        )}
      </AnimatePresence>

      <ExpensesChart transactions={transactions} />

      <TransactionList
        transactions={transactions}
        onDelete={handleDelete}
        onEdit={(txn) => {
          setEditTxn(txn);
          router.push("/?showForm=true");
        }}
        renderActions={(txn) => (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setEditTxn(txn);
                router.push("/?showForm=true");
              }}
              className="px-3 py-1 text-sm rounded bg-yellow-500 text-white hover:bg-yellow-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(txn._id)}
              className="px-3 py-1 text-sm rounded bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        )}
      />
    </div>
  );
}
