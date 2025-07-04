import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between">
            <Link href="/" className="font-bold text-xl">
              💰 Finance Tracker
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/?showForm=true" className="hover:underline">
                Add Transaction
              </Link>
            </div>
          </div>
        </nav>
        <main className="p-4 max-w-4xl mx-auto space-y-6">{children}</main>
      </body>
    </html>
  );
}
