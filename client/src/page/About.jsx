const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            Giới Thiệu Trang Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Blog này được tôi học tạo ra như một dự án cá nhân để chia sẻ
              những bài viết hay nói xoay quanh về lĩnh vực công nghệ thông tin
              những công nghệ mới, ngôn ngữ và chia sẽ kinh nghiệm.
            </p>
            <p>
              Bạn sẽ tìm thấy các bài viết hay hàng tuần về vì vậy hãy nhớ quay
              lại thường xuyên để cập nhật nội dung mới! Bạn cũng có thể thích
              bình luận của người khác và trả lời chúng. Chúng tôi tin rằng một
              cộng đồng những người học hỏi có thể giúp đỡ lẫn nhau phát triển
              và cải thiện.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
