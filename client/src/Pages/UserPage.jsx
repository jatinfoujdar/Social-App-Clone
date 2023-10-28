import React, { useEffect, useState } from 'react'
import UserHeader from '../component/UserHeader'
import UserPost from '../component/userPost'
import { useParams } from 'react-router-dom';
import useShowToast from '../hooks/useShowToast';

const UserPage = () => {
  const [user,setUser] = useState(null);
  const {username} = useParams();
  const showToast = useShowToast();

  useEffect(()=>{
    const getUser = async()=>{
      try {
        const res = await fetch(`/api/users/profile/${username}`)
        const data = await res.json()
        // console.log(data);
        if(data.error){
          showToast("Error",data.error,"error");
          return;
        }
        setUser(data)
      } catch (error) {
        console.log("Error",error,"error");
      }
    }
    getUser();
  },[username,showToast]);

  if(!user){
    return null;
  }

  return (
    <>
    <UserHeader user={user}/>
    <UserPost likes={1100} replies={112} postImg="/jf.jpg" postTitle="let's work"/>
    <UserPost likes={1200} replies={112} postImg="/post1.png" postTitle="let's work"/>
    <UserPost likes={100} replies={12} postImg="/post2.png" postTitle="let's work"/>
    <UserPost likes={200} replies={122} postImg="/post3.png" postTitle="let's work"/>
    
    </>
  )
}

export default UserPage