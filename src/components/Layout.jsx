import { Outlet } from "react-router-dom";
import Navbar from "~/components/Navbar";
import { Footer } from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6D8F7] to-[#D6F0FF] text-gray-800">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
