// import { use } from 'react';

import { Cards } from '../components/ui/Cards';
import { Cover } from '../components/ui/Cover';
// import { getAllProducts } from '../services';
import { useAllProducts } from '../hooks/useAllProducts';

// const productsPromise = getAllProducts();

export function Home() {
  // const products = use(productsPromise);
  const { data } = useAllProducts();

  return (
    <section className='flex flex-col justify-center items-center p-10'>
      <Cover title='Listado de Productos' />
      <div className='flex flex-wrap justify-center gap-5 mt-20'>
        {data?.map((product: any) => (
          <Cards
            key={product.id}
            src={product.image}
            title={product.title}
          // pharagraph={product.description}
          />
        ))}
      </div>
    </section>
  );
}