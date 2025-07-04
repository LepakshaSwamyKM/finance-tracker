import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Transaction } from "@/models/transaction";

export async function GET() {
  await connectDB();
  const transactions = await Transaction.find();
  return NextResponse.json(transactions);
}

export async function POST(req: Request) {
  const data = await req.json();
  await connectDB();
  const txn = await Transaction.create(data);
  return NextResponse.json(txn);
}
