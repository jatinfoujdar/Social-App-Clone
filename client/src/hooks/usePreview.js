import React, { useState } from 'react'
import useShowToast from './useShowToast';

const usePreview = () => {
    const [imgUrl,setImgUrl] = useState(null);
    const showToast = useShowToast()

    const handleImageChange = (e) =>{
        const file = e.target.files[0];
        // console.log(file);
        if(file && file.type.startsWith("image/")){
          const reader = new FileReader();

          reader.onloadend = ()=>{
            setImgUrl(reader.result);
          }
          reader.readAsDataURL(file);
        }else{
          showToast("Invalid Image Type","Please select Image file" ,"error")
          setImgUrl(null)
        }
    }
    console.log(imgUrl);
  return {
     handleImageChange, imgUrl
  }
}

export default usePreview