import Blog1 from "~/assets/blog-1.jpg"
import Blog2 from "~/assets/blog-2.jpg"
import Blog3 from "~/assets/blog-3.jpg"

export const blogDataMock = [
  {
    id: 1,
    image: Blog1,
    title: 'Bài viết số 1',
    content: 'Đây là đoạn giới thiệu ngắn gọn về nội dung bài viết. Nội dung 1...'
  },
  {
    id: 2,
    image: Blog2,
    title: 'Bài viết số 2',
    content: 'Đây là đoạn giới thiệu ngắn gọn về nội dung bài viết. Nội dung 2...'
  },
  {
    id: 3,
    image: Blog3,
    title: 'Bài viết số 3',
    content: 'Đây là đoạn giới thiệu ngắn gọn về nội dung bài viết. Nội dung 3...'
  }
]

export const allBlogPosts = Array.from({ length: 100 }, (_, i) => {
  const images = [Blog1, Blog2, Blog3]
  return {
    id: i + 1,
    image: images[i % images.length],
    title: `Bài viết số ${i + 1}`,
    content: `Đây là đoạn giới thiệu ngắn gọn về nội dung bài viết số ${i + 1}. Nội dung thú vị đang chờ bạn khám phá...`
  }
})
