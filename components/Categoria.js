import Image from "next/image"
import UseQuiosco from "../hooks/UseQuiosco"

const Categoria = ({categoria}) => {
  
    const {categoriaActual, handleClickCategoria} = UseQuiosco()
    const {nombre, icono, id} = categoria

  return (
    
    <div  
      className={`${ categoriaActual?.id === id ? 'bg-amber-300' : '' }
      flex items-center gap-4 w-full border border-dark p-5 cursor-pointer hover:bg-amber-300`}
      onClick={()=>handleClickCategoria(id)}
      type="button"      
      >
      <Image
          width={50}
          height={50}
          src={`/assets/img/icono_${icono}.svg`}
          alt="icono de la categoría"
          layout="fixed"
          
      /> 
      
      <div        
        className="text-2xl font-bold hover:cursor-pointer"        
      >
        {nombre}        
      </div>

    </div>
    
  )
}

export default Categoria
