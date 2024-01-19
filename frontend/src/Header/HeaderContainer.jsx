import React from 'react'

const HeaderContainer = () => {
  return (
    <header className='bg-slate-600 flex justify-around text-xl'>
      <div className='p-4'>
        Saransh Saini
      </div>
      <div>
        <ul className='flex gap-3'>
          <li className='p-4 hover:bg-white'>Home</li>
          <li className='p-4 hover:bg-white'>About me</li>
          <li className='p-4 hover:bg-white'>Contact</li>
          <li className='p-4 hover:bg-white'>Blog</li>
          <li className='p-4 hover:bg-white'>Portfolio</li>
          <li className='p-4 hover:bg-white'>Login/Logout</li>
        </ul>
      </div>
    </header>
  )
}

export default HeaderContainer