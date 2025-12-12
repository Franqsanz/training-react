import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export function Layouts() {
  return (
    <>
      <header className='p-10 bg-gray-100'>
        <div className='flex justify-between'>
          <Link to="/" className='text-lg font-bold'>Ecommerce GoodApps</Link>
          <nav className=''>
            <ul className='flex items-center gap-2'>
              <li>
                <Link to="/" className='hover:underline'>Home</Link>
              </li>
              <li>
                <Link to="/users" className='hover:underline'>Users</Link>
              </li>
              <li>
                <Link to="/new-product" className='hover:underline'>Nuevo Producto</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className='p-20 bg-gray-500'></footer>
    </>
  )
}
