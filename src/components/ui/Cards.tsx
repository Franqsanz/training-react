import { useState } from 'react';
import { href, Link } from 'react-router-dom';

interface CardsProps {
  title: string;
  pharagraph?: string;
  src?: string;
  href: string;
}

export function Cards({ src, title, pharagraph, href }: CardsProps) {
  const [color, setColor] = useState<string>();

  function handleChangeColor(newColor: string) {
    setColor(newColor);
  }

  return (
    <div className={`flex flex-col items-center w-72 h-96 text-center border rounded-4xl p-5 relative ${color}`}>
      <img src={src} alt={title} className='w-44 h-44 object-contain' />
      <h1 className='text-base/tight line-clamp-2 mt-3'>{title}</h1>
      <p>{pharagraph}</p>
      <div className='flex gap-3 absolute bottom-5'>
        {/* <button
          className='bg-red-400 p-2 rounded-md cursor-pointer'
          onClick={() => handleChangeColor('bg-white')}
        >
          Quitar
        </button> */}
        <Link
          to={href}
          className='bg-green-400 p-2 rounded-md cursor-pointer'
        >
          Ver producto
        </Link>
      </div>
    </div>
  )
}
