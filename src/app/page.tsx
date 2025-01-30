import { Quiz } from "@/components/quiz";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full">
      <AnimatePresence mode="wait">
        <Quiz />
      </AnimatePresence>
    </main>
  );
}
