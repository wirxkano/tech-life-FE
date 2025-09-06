import Navbar from "~/components/Navbar";
import Landing from "~/assets/landing_reflect.jpg";
import { Button } from "~/components/ui/button";
import { blogDataMock } from "~/data/mockdata";
import { Card, CardContent } from "~/components/ui/card";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-gray-800">
      <Navbar />

      <div className="pt-16">
        <header className="relative h-80">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="landing-page"
            src={Landing}
          />

          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              My Digital Life
            </h1>
          </div>
        </header>

        <section className="max-w-4xl mx-auto text-center py-12 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Xin chào, tôi là Huy 👋
          </h2>
          <p className="text-gray-600 leading-relaxed">
            My Digital Life là nơi tôi chia sẻ những trải nghiệm và góc nhìn về
            công nghệ, trí tuệ nhân tạo (AI). Tôi mong muốn đem đến những mẹo
            nhỏ, tip hay để giúp cuộc sống số của bạn trở nên đơn giản và thú vị
            hơn mỗi ngày.
          </p>
        </section>

        {/* Blogs */}
        <section className="max-w-6xl mx-auto px-4 grid gap-6 md:grid-cols-3">
          {blogDataMock.map((blog, i) => (
            <Card
              key={i}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={blog.image}
                alt={`Blog_${blog.id}`}
                className="w-full h-48 object-cover"
              />
              <CardContent
                className="p-4 flex flex-col justify-between h-full cursor-pointer"
                onClick={() => navigate(`/blog/${blog.id}`)}
              >
                <div>
                  <h3 className="text-lg font-bold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{blog.content}</p>
                </div>
                <Button className="mt-auto">Đọc thêm</Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
}
