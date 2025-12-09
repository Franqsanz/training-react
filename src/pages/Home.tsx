import { Cards } from '../components/ui/Cards';
import { Cover } from '../components/ui/Cover';
import { useAllProducts } from '../hooks/useAllProducts';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
}

export function Home() {
  const { data, isPending } = useAllProducts();

  if (isPending) {
    return (
      <section className='h-[70vh] flex justify-center items-center'>
        <Cover title='Cargando...' />
      </section>
    );
  }

  return (
    <section className='flex flex-col justify-center items-center p-10'>
      <Cover title='Listado de Productos' />
      <div className='flex flex-wrap justify-center gap-5 mt-20'>
        {data?.map((product: Product) => (
          <Cards
            key={product.id}
            id={product.id}
            href={`/${product.id}`}
            src={product.image}
            title={product.title}
            showBtn={true}
          />
        ))}
      </div>
    </section>
  );
}
