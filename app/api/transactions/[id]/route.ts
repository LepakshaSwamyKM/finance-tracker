import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Transaction } from "@/models/transaction";

export async function PUT(req: Request, { params }: any) {
  await connectDB();
  const data = await req.json();
  const txn = await Transaction.findByIdAndUpdate(params.id, data, {
    new: true,
  });
  return NextResponse.json(txn);
}

export async function DELETE(req: Request, { params }: any) {
  await connectDB();
  await Transaction.findByIdAndDelete(params.id);
  return NextResponse.json({ success: true });
}
