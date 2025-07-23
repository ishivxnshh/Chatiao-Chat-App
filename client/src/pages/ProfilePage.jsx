import React, { useState } from 'react'
import assets from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ProfilePage = () => {

  const [selectedImg, setSelectedImg] = useState(null)
  const navigate = useNavigate()
  const [name, setName] = useState('Martin Johnson')
  const [bio, setBio] = useState('Hi Everyone, I am using Chatiao')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className='min-h-screen bg-cover bg-no-repeat flex items-center justify-center'>
        <div className='w-5/6 max-w-2xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex items-center justify-between max-sm:flex-col-reverse rounded-lg'>

          {/* ---------Left Side--------- */}
          <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 p-10 flex-1'>
            <h3 className='text-lg'>Profile Details</h3>
            <label htmlFor="avatar" className='flex items-center gap-3 cursor-pointer'>
              <input onChange={(e) => setSelectedImg(e.target.files[0])} type="file" id="avatar" accept='.png, .jpeg, .jpg' hidden/>
              <img src={selectedImg ? URL.createObjectURL(selectedImg) : assets.avatar_icon} alt="" className={`w-12 h-12 ${selectedImg && 'rounded-full'}`} />
              upload profile image
            </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your name' className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'/>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)}  placeholder='Write profile bio' rows={4} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'></textarea>

            <button type='submit' className='bg-gradient-to-r from-purple-400 to-violet-600 text-white py-2 rounded-full text-lg cursor-pointer'>Update Profile</button>
          </form>

          {/* ---------Right Side--------- */}
          <img src={assets.logo_icon} alt="" className='max-w-44 aspect-square rounded-full mx-10 max-sm:mt:10' />
        
        </div>
    </div>
  )
}

export default ProfilePage