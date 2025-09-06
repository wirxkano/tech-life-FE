import { useState } from "react";
import { allBlogPosts } from "~/data/mockdata";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import Pagination from "~/components/Pagination";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

export default function Blog() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const blogsPerPage = 5;

  const totalPages = Math.ceil(allBlogPosts.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogPosts.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 mt-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <h1 className="text-3xl text-blue-700 font-bold">Tất cả Bài Viết</h1>

        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 pl-12 pr-4 py-4 rounded-2xl bg-white/90 backdrop-blur-sm border-0 focus:ring-2 focus:ring-blue-300 text-gray-800 placeholder-gray-500 shadow-xl"
        />
      </div>

      <div className="flex flex-col gap-6">
        {currentBlogs.map((blog) => (
          <Card
            key={blog.id}
            className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl text-blue-600 font-bold mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-700 mb-4">{blog.content}</p>
              <Button
                className="bg-blue-700"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                Đọc thêm
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
