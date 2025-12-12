import { useParams } from 'react-router-dom'

import { Cover } from '../components/ui/Cover'
import { useProductsDetails } from '../hooks/useProductDetails';

export function ProductDetails() {
  const { id } = useParams();
  const { data, isPending } = useProductsDetails(Number(id));

  if (isPending) {
    return (
      <section className='h-[70vh] flex justify-center items-center'>
        <Cover title='Cargando...' />
      </section>
    );
  }

  return (
    <>
      <section className='flex flex-col max-w-7xl m-auto p-10'>
        <div className='bg-gray-300 p-1.5 rounded-xl w-max mb-2 text-sm'>{data?.category}</div>
        <Cover title={data?.title} />
        <section className='flex gap-7 mt-14'>
          <img src={data?.image} alt={data?.title} />
          <div className='flex flex-col gap-3'>
            <span className='text-4xl font-semibold'>$ {data?.price}</span>
            <p>{data?.description}</p>
          </div>
        </section>
      </section>
    </>
  )
}
