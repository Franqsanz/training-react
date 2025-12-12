import { useState } from 'react';
import { Cards } from '../components/ui/Cards';
import { Cover } from '../components/ui/Cover';
import { useAllProducts } from '../hooks/useAllProducts';
import { EditForm } from '../components/ui/EditForm';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  description: string;
}

export function Home() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { data, isPending } = useAllProducts();

  if (isPending) {
    return (
      <section className='h-[70vh] flex justify-center items-center'>
        <Cover title='Cargando...' />
      </section>
    );
  }

  return (
    <>
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
              onEdit={() => {
                setSelectedProduct(product);
                setOpen(true);
              }}
            />
          ))}
        </div>
      </section>
      {open && selectedProduct && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-xl w-2xl flex flex-col justify-center items-center">
            <EditForm
              id={selectedProduct.id}
              initialData={{
                title: selectedProduct.title,
                description: selectedProduct.description,
                category: selectedProduct.category,
                price: selectedProduct.price,
                image: selectedProduct.image,
              }}
              onClose={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
