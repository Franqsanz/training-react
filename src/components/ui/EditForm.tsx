import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

import { useUpdateProduct } from '../../hooks/useUpdateProducts';

const productSchema = z.object({
  title: z.string().min(3, 'El título debe tener al menos 3 caracteres'),
  price: z.number().min(0.1, 'El precio debe ser mayor o igual a 0.1'),
  description: z.string().min(10, 'La descripción debe tener al menos 10 caracteres'),
  category: z.string().min(2, 'La categoría debe tener al menos 2 caracteres'),
  image: z.url('Debe ser una URL válida')
});

export type ProductFormData = z.infer<typeof productSchema>;

interface EditFormProps {
  id: number;
  initialData: ProductFormData;
  onClose: () => void;
}

export function EditForm({ id, initialData, onClose }: EditFormProps) {
  const { mutate, isPending } = useUpdateProduct();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData,
  });

  useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  function onSubmit(body: ProductFormData) {
    mutate(
      { id, body },
      {
        onSuccess: () => {
          toast.success('Producto actualizado')
          onClose(); // cerrar modal
        },
        onError: (error: any) => {
          const message =
            error?.response?.data?.message ||
            error?.message ||
            'Ocurrió un error al actualizar el producto';

          toast.error(message)
        },
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-xl space-y-6 z-20">
      <div>
        <label className="block text-sm font-medium mb-1">Título *</label>
        <input
          type="text"
          {...register('title')}
          className={`w-full border px-3 py-2 rounded ${errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.title && <p className="text-red-600 text-sm">{errors.title.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Precio *</label>
        <input
          type="number"
          step="0.01"
          {...register('price', { valueAsNumber: true })}
          className={`w-full border px-3 py-2 rounded ${errors.price ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.price && <p className="text-red-600 text-sm">{errors.price.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Descripción *</label>
        <textarea
          rows={6}
          {...register('description')}
          className={`w-full border px-3 py-2 rounded resize-none ${errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.description && (
          <p className="text-red-600 text-sm">{errors.description.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Categoría *</label>
        <input
          type="text"
          {...register('category')}
          className={`w-full border px-3 py-2 rounded ${errors.category ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.category && <p className="text-red-600 text-sm">{errors.category.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">URL de la Imagen *</label>
        <input
          type="text"
          {...register('image')}
          className={`w-full border px-3 py-2 rounded ${errors.image ? 'border-red-500' : 'border-gray-300'
            }`}
        />
        {errors.image && <p className="text-red-600 text-sm">{errors.image.message}</p>}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600 transition"
      >
        {isPending ? 'Editando...' : 'Guardar cambios'}
      </button>
    </form>
  );
}
