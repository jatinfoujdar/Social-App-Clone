import React from 'react'
import UserHeader from '../component/UserHeader'
import UserPost from '../component/userPost'

const UserPage = () => {
  return (
    <>
    <UserHeader/>
    <UserPost likes={1100} replies={112} postImg="/jf.jpg" postTitle="let's work"/>
    <UserPost likes={1200} replies={112} postImg="/post1.png" postTitle="let's work"/>
    <UserPost likes={100} replies={12} postImg="/post2.png" postTitle="let's work"/>
    <UserPost likes={200} replies={122} postImg="/post3.png" postTitle="let's work"/>
    
    </>
  )
}

export default UserPage