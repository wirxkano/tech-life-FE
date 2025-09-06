import { useParams, useNavigate } from "react-router-dom";
import { allBlogPosts } from "~/data/mockdata";
import { Button } from "~/components/ui/button";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = allBlogPosts.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl text-red-500 font-semibold">
          Bài viết không tồn tại
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 px-4">
      {/* Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>
          <p className="text-gray-700 leading-relaxed">
            {blog.content}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
            dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>

          <div className="mt-8">
            <Button
              variant="outline"
              onClick={() => navigate("/blog")}
              className="rounded-full"
            >
              ← Quay lại Blog
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
