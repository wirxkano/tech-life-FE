import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Giới thiệu", path: "/about" },
    // { name: "Đăng nhập", path: "/login" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
        >
          My Digital Life
        </Link>

        <div className="flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
                    : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
