import { useState } from 'react';

interface CardsProps {
  title: string;
  pharagraph?: string;
  src?: string;
}

export function Cards({ src, title, pharagraph }: CardsProps) {
  const [color, setColor] = useState<string>();

  function handleChangeColor(newColor: string) {
    setColor(newColor);
  }

  return (
    <div className={`flex flex-col items-center w-72 h-96 text-center border rounded-4xl p-5 relative ${color}`}>
      <img src={src} alt={title} className='w-44 h-44 object-contain' />
      <h1 className='text-base/tight line-clamp-2 mt-3'>{title}</h1>
      <p>{pharagraph}</p>
      {/* <div className='flex gap-3 absolute bottom-5'>
        <button
          className='bg-red-400 p-2 rounded-md cursor-pointer'
          onClick={() => handleChangeColor('bg-white')}
        >
          Quitar
        </button>
        <button
          className='bg-gray-200 p-2 rounded-md cursor-pointer'
          onClick={() => handleChangeColor('bg-yellow-400')}
        >
          Agregar Color
        </button>
      </div> */}
    </div>
  )
}
