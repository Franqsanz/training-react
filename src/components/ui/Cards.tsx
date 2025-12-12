import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { useDeleteProducts } from '../../hooks/useDeleteProducts';
import { EditForm } from './EditForm';

interface CardsProps {
  id: number;
  title: string;
  pharagraph?: string;
  src?: string;
  href: string;
  showBtn: boolean;
  onEdit: () => void;
}

export function Cards({ id, src, title, pharagraph, href, showBtn = true, onEdit }: CardsProps) {
  // const [open, setOpen] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const { mutate, isPending, error, isSuccess } = useDeleteProducts();

  function handleDelete(id: number) {
    mutate(id);
  }

  useEffect(() => {
    if (isSuccess) {
      alert('El producto ha sido borrado correctamente');
    }
  }, [isSuccess]);

  return (
    <>
      <div className='flex flex-col items-center w-72 h-96 text-center border rounded-4xl p-5 relative'>
        <img src={src} alt={title} className='w-44 h-44 object-contain' />
        <h1 className='text-base/tight line-clamp-2 mt-3'>{title}</h1>
        <p>{pharagraph}</p>
        {error && (
          <p className='text-red-500 text-sm mt-2'>
            Ocurrió un error al borrar
          </p>
        )}
        <div className='flex gap-3 absolute bottom-5'>
          {showBtn && (
            <button
              className='bg-red-400 p-2 rounded-md cursor-pointer disabled:opacity-50'
              onClick={() => handleDelete(id)}
              disabled={isPending}
            >
              {isPending ? 'Borrando...' : 'Borrar'}
            </button>
          )}
          <button
            className='bg-yellow-400 p-2 rounded-md cursor-pointer'
            onClick={onEdit}
          >
            Editar
          </button>
          <Link
            to={href}
            className='bg-green-400 p-2 rounded-md cursor-pointer'
          >
            Ver producto
          </Link>
        </div>
      </div>
    </>
  );
}
