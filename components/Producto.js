import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/UseQuiosco";

const Producto = ({producto}) => {
    const { handleSetProducto, handleChangeModal} = useQuiosco()
    const {imagen, nombre, precio}  = producto
    
  return (
    <div className='border p-3'>
        <div className="mx-12 mt-5" >
        <Image 
            src={`/assets/img/${imagen}.jpg`} 
            alt={`Imagen Platillo ${nombre}`}
            width={200}
            height={400}
            
        />
        </div>
        <div className="p-3">
            <h3 className=" text-center text-2xl font-bold">{nombre}</h3>
            
            <p className=" text-center mt-5 font-black text-4xl text-amber-400">
                {formatearDinero(precio)}
            </p>

            <button 
                type="button" 
                className="bg-indigo-600 hover:bg-indigo-400 text-white w-full mt-5 p-3 uppercase font-bold"
                onClick={() => {
                    handleChangeModal()
                    handleSetProducto(producto)
                    } 
                }
            >
                Agregar
            </button>
        </div>
    </div>
  )
}

export default Producto
