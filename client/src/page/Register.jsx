
import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="min-h-screen mt-20">
    <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
      {/* left */}
      <div className="flex-1">
        <Link to="/">
          <img
            src="https://nqwebdesign.com/wp-content/uploads/2020/01/blog-icon.png"
            className="w-52"
          />
        </Link>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
          voluptas dolorum sunt sed hic commodi. Tempora officiis, placeat
          eaque modi amet vitae cumque! Nulla nam ad suscipit voluptas,
          voluptate voluptatem!
        </p>
      </div>
      {/* right */}
      <div className="flex-1">
        <form className="flex flex-col gap-4">
          <div>
            <Label value="Họ tên của bạn" />
            <TextInput type="text" placeholder="Tên" id="username" />
          </div>

          <div>
            <Label value="emailcủa bạn" />
            <TextInput type="text" placeholder="Email" id="username" />
          </div>

          <div>
            <Label value="mật khẩu của bạn" />
            <TextInput type="text" placeholder="Mật khẩu" id="username" />
          </div>
          <Button gradientDuoTone="purpleToBlue" outline type="submit">
            Đăng ký
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Đã có tài khoản</span>
          <Link to="/login" className="text-blue-500">
            Đăng nhập
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register