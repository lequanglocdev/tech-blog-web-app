/* eslint-disable no-unused-vars */

import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthGg from "../components/AuthGg";
import image from "../../public/blog.png"
const Register = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Không được để trống");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      setLoading(false);
      if (res.ok) {
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleForcus = () => {
    setErrorMessage(null);
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
        {/* left */}
        <div className="flex-1">
          <Link>
            <img
              src={image}
              className="w-52"
            />
          </Link>
          <p className="text-sm">
            Chào mừng đến với cộng đồng của chúng tôi! Ở đây không chỉ là một
            nơi để chia sẻ những suy nghĩ và trải nghiệm của bạn. Hãy cùng chúng
            tôi trải nghiệm hành trình của kiến thức và chia sẻ.
            <br />
            <p className="text-red-600 text-base dark:text-cyan-500">
              Đăng ký ngay bây giờ để bắt đầu!
            </p>
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Họ tên của bạn" />
              <TextInput
                type="text"
                placeholder="Tên"
                id="username"
                onFocus={handleForcus}
                onChange={handleOnChange}
              />
              {/* {errorMessage && <div className="text-rose-700 text-sm bg-teal-200 w-full p-1 rounded-md">{errorMessage}</div>} */}
            </div>

            <div>
              <Label value="emailcủa bạn" />
              <TextInput
                type="text"
                placeholder="Email"
                id="email"
                onChange={handleOnChange}
              />
              {/* {errorMessage && <div className="text-rose-700 text-sm bg-teal-200 w-full p-1 rounded-md">{errorMessage}</div>} */}
            </div>

            <div>
              <Label value="mật khẩu của bạn" />
              <TextInput
                type="password"
                placeholder="Mật khẩu"
                id="password"
                onChange={handleOnChange}
              />
              {/* {errorMessage && <div className="text-rose-700 text-sm bg-teal-200 w-full p-1 rounded-md">{errorMessage}</div>} */}
            </div>
            <Button gradientDuoTone="purpleToBlue" outline type="submit">
              Đăng ký
            </Button>
            <AuthGg />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Đã có tài khoản</span>
            <Link to="/login" className="text-blue-500">
              Đăng nhập
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
