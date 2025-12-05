import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export function Layouts() {
  return (
    <>
      <header className='p-10 bg-gray-100'>
        <nav>
          <ul className='flex items-center gap-2'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/food">food</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer className='p-20 bg-gray-500'></footer>
    </>
  )
}
