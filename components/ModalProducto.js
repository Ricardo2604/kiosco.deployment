import { useState, useEffect } from "react"
import Image from "next/image"
import useQuiosco from "../hooks/UseQuiosco"
import { formatearDinero } from "../helpers"

const ModalProducto = () => {  

    const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco()
    const [cantidad, setCantidad] = useState(1)

    const [edicion, setEdicion] = useState(false)

    useEffect(() => {
        //comprobar si el Modal actual esta en el pedido
        if(pedido.some(pedidoState => pedidoState.id  === producto.id)) {
        const productoEdicion = pedido.find(pedidoState => pedidoState.id  === producto.id)
        
        setEdicion(true)
        setCantidad(productoEdicion.cantidad)
        };
    },[producto, pedido])

    
   

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
            width={300}
            height={400}
            alt={`imagen de producto ${producto.nombre}`}
            src={`/assets/img/${producto?.imagen}.jpg`}
        />
      </div>
      {/* Informacion del Producto */}
        <div className="md:w-2/3"> 

                <div className="flex justify-end">
                    <button
                        onClick={handleChangeModal}
                    >
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" 
                        className="w-6 h-6">
                        <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                    </button>          
                </div>

               
                <h1 className="text-3xl font-bold mt-5 ">
                    {producto.nombre}
                </h1>
                <p className="mt-5 font-black text-5xl text-amber-300"> {formatearDinero(producto.precio)}</p>
                
                <div className="flex gap-4 mt-5">
                    <button
                        type="button"
                        onClick={() =>{
                            if(cantidad <= 1) return
                            setCantidad(cantidad - 1)
                        }}

                    
                    >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="w-7 h-7">
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>

                    <p className="text-3xl">{cantidad}</p>

                    <button 
                            type="button"
                            onClick={() =>{
                                if(cantidad >= 10) return
                                setCantidad(cantidad + 1)
                            }}
                        >
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="w-7 h-7">
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                </div>
                <button
                    type="button"
                    className="bg-indigo-400 hover:bg-indigo-200 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                    onClick={() => 
                        handleAgregarPedido({...producto, cantidad}) //para agregar cantidad en un solo objeto con producto ver tambien handleAgregarPedido
                    }
                >{edicion ? 'Guardar Cambios' : 'Agregar Pedido'}</button>       
        </div>
    </div>
  )
}

export default ModalProducto
