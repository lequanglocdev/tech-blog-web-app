/* eslint-disable no-unused-vars */

import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginError, loginStart, loginSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import AuthGg from "../components/AuthGg";
import image from "../../public/blog.png"
const Login = () => {
  const [formData, setFormData] = useState({});
  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(loginError("Không được để trống"));
    }
    try {
      dispatch(loginStart());
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log("data",data)
      if (data.success === false) {
        dispatch(loginError(data.message));
      }
      if (res.ok) {
        dispatch(loginSuccess(data));
        navigate("/");
      }
    } catch (error) {
      dispatch(loginError(errorMessage));
    }
  };
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-6">
        {/* left */}
        <div className="flex-1">
          <Link to="">
            <img
              src={image}
              className="w-48"
            />
          </Link>
          <p className="text-sm ">
            Chào mừng đến với cộng đồng của chúng tôi! Ở đây không chỉ là một
            nơi để chia sẻ những suy nghĩ và trải nghiệm của bạn. Hãy cùng chúng
            tôi trải nghiệm hành trình của kiến thức và chia sẻ.<br/> <p className="text-red-600 text-base dark:text-cyan-500">Đăng nhập ngay
            bây giờ để bắt đầu!</p>
          </p>
        </div>
        {/* right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="emailcủa bạn" />
              <TextInput
                type="email"
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
              Đăng nhập
            </Button>
            <AuthGg />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Chưa có tài khoản</span>
            <Link to="/register" className="text-blue-500">
              Đăng ký
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

export default Login;
