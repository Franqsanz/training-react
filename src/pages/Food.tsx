import React from 'react'

import { Cards } from '../components/ui/Cards'
import { Cover } from '../components/ui/Cover'

export function Food() {
  return (
    <>
      <section className='flex flex-col justify-center items-center p-10'>
        <Cover title='Ruta 2' />
        {/* <section className='flex flex-wrap gap-5 mt-20'>
          <Cards title="Ambar" pharagraph='Soy el color ambar' />
          <Cards title="Azul" pharagraph='Soy el color azul' />
          <Cards title="Verde" pharagraph='Soy el color verde' />
        </section> */}
      </section>
    </>
  )
}
