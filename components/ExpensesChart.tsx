"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ExpensesChart({
  transactions,
}: {
  transactions: any[];
}) {
  const data = Object.values(
    transactions.reduce((acc: any, txn: any) => {
      const month = new Date(txn.date).toLocaleString("default", {
        month: "short",
      });
      acc[month] = acc[month] || { month, total: 0 };
      acc[month].total += txn.amount;
      return acc;
    }, {})
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Monthly Expenses</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#60A5FA" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
