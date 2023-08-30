import Layout from '../layout/Layout'
import useQuiosco from '../hooks/UseQuiosco'
import { useState } from 'react';
import Producto from '../components/Producto';
import QuioscoContext from '../context/QuioscoProvider';


export default function Home() {
  
  const { categoriaActual } = useQuiosco();
  
  

  return (
    <Layout pagina={`Menú ${categoriaActual?.nombre}`}>
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>
      {/* CATEGORIAS */}
     
      <div className=' grid gap-4 grid-col-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
        {categoriaActual?.productos?.map(producto => (
          <Producto
            key={producto.id}
            producto={producto}                  
          />      
        ))}
      </div>
    </Layout>
  )
}


