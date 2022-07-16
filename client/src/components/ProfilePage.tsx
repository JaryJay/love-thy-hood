import React from 'react'
// import {  } from "react-icons/fa";

const ProfilePage = ({ user }: { user: any }) => {
  return (
    <div className='gradient-2 h-screen items-center pt-8 text-white'>
      <div className='lg:mx-80 md:mx-40 sm:mx-20 p-8 glass-morphism-1'>
        <div className='flex my-2 p-2'>
          <div className='flex-1 justify-center'>
            {/* profile picture */}
            pfp
          </div>
          <div className='flex-1 w-4/5'>
            Name: joe<br />
            bio: dfkl;aldks;fldhjas
          </div>
        </div>
        <div>
          POSTS POSTS POSTS {user}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
