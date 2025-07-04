import { Suspense } from "react";
import HomeContent from "./HomeContent";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="text-center mt-20 text-gray-500">Loading...</div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
