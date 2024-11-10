import React, {useState}from 'react'
import axios from 'axios'
import {API_URLS} from '../../../../constants/constant'

function FileUpload({onUpload}) {
  const [file,setFile] = useState()
  const handleUpload = async () => {
    console.log('file upload')
    const formData = new FormData();
    formData.append('image',file)
    const resp = await axios.post(API_URLS.uploadFile,formData,{
      headers:{"Content-Type":"multipart/form-data"}
    })
    console.log(resp)
    onUpload(resp.data.filePath)
    
  }
  const handleChange = (e) => {
    setFile(e.target.files[0])
  }
  return (
    <div>
        <input type="file" name="myfile" onChange={handleChange} accept='image/*'></input>
        <button onClick={handleUpload} type='button'>Upload File</button>
    </div>
  )
}

export default FileUpload