import { useEffect, useState } from "react";
import {useSelector} from 'react-redux'

const DashPost = () => {
  const {createUser} = useSelector((state)=>state.user)
  const [post,setPost] = useState([])
  console.log(post)
  useEffect(()=>{

    const fetchPosts = async() =>{
      try {
        const res = await fetch(`/api/post/getpost?userId=${createUser._id}`)
      const data = await res.json()
      if(res.ok){
        setPost(data.posts)

      }
      } catch (error) {
        console.log(error.message) 
      }

    }
    if(createUser.isAdmin){

      fetchPosts()
    }

  },[createUser._id])
  return (
    <div></div>
  )
};

export default DashPost;
