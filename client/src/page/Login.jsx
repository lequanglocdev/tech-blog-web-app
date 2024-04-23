/* eslint-disable no-unused-vars */

import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
const Login = () => {

  const [formData,setFormData] = useState({})
  const [errorMessage,setErrorMessage] = useState(null)
  const [loading,setLoading] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = async(e) =>{
    e.preventDefault()
      if( !formData.email || !formData.password){
        return setErrorMessage("Không được để trống")
      }
      try {
        const res = await fetch("/api/auth/login",{
          method: "POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(formData)
        })
        const data = await res.json()
        console.log("data",data)
        if(res.ok){
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }
  }
  const handleOnChange = (e) =>{
      setFormData({...formData , [e.target.id]: e.target.value.trim()})
  }
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
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        
          <div>
            <Label value="emailcủa bạn" />
            <TextInput type="text" placeholder="Email" id="email"  onChange={handleOnChange} />
          </div>

          <div>
            <Label value="mật khẩu của bạn" />
            <TextInput type="password" placeholder="Mật khẩu" id="password"  onChange={handleOnChange} />
          </div>
          <Button gradientDuoTone="purpleToBlue" outline type="submit">
            Đăng ký
          </Button>
        </form>
        <div className="flex gap-2 text-sm mt-5">
          <span>Chưa có tài khoản</span>
          <Link to="/register" className="text-blue-500">
            Đăng ký
          </Link>
        </div>
        {
          errorMessage && (
            <Alert/>
          )
        }
      </div>
    </div>
  </div>
  )
}

export default Login