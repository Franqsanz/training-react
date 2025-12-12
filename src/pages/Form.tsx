import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

import { useCreateProducts } from '../hooks/useCreateProducts';

// Esquema de validación con Zod
const productSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  price: z.number().min(0.1, 'El precio debe ser mayor o igual a 0.1'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  category: z.string().min(2, 'La categoría debe tener al menos 2 caracteres'),
  image: z.url('Debe ser una URL válida')
});

type ProductFormData = z.infer<typeof productSchema>;

export function Form() {
  const { mutate, isPending } = useCreateProducts();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: '',
      price: 0.1,
      description: '',
      category: '',
      image: ''
    }
  });

  function onSubmit(body: ProductFormData) {
    mutate(body, {
      onSuccess: () => {
        toast.success('Producto creado')
        reset();
      },
      onError: (error: any) => {
        const message =
          error?.response?.data?.message ||
          error?.message ||
          'Ocurrió un error al crear el producto';

        toast.error(message)
      },
    });
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Nuevo Producto</h2>
            <p className="text-gray-600 mt-2">Completa el formulario con validación Zod + React Hook Form</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Título *
              </label>
              <input
                type="text"
                id="title"
                {...register('title')}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Nombre del producto"
              />
              {errors.title && (
                <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Precio *
              </label>
              <input
                type="number"
                id="price"
                step="0.01"
                {...register('price', { valueAsNumber: true })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${errors.price ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="0.00"
              />
              {errors.price && (
                <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Descripción *
              </label>
              <textarea
                id="description"
                rows={4}
                {...register('description')}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition resize-none ${errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Describe el producto..."
              />
              {errors.description && (
                <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Categoría *
              </label>
              <input
                type="text"
                id="category"
                {...register('category')}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${errors.category ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="Ej: Electrónica, Ropa, etc."
              />
              {errors.category && (
                <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-2">
                URL de la Imagen *
              </label>
              <input
                type="text"
                id="image"
                {...register('image')}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition ${errors.image ? 'border-red-500' : 'border-gray-300'
                  }`}
                placeholder="http://example.com/image.jpg"
              />
              {errors.image && (
                <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 cursor-pointer rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition duration-200"
            >
              {isPending ? 'Guardando...' : 'Guardar Producto'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}