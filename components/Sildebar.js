import Image from "next/image"
import UseQuiosco from "../hooks/UseQuiosco"
import Categoria from "./Categoria"
import Link from "next/link";


const Sildebar = () => {
    const {categorias} = UseQuiosco()
  return (
    <>
      <Link href="/">
          <Image
          width={200}
          height={100}
          src="/assets/img/logo.svg"
          alt="imagen logotipo"
        />

      </Link>
        

        <nav className="mt-10">
            {categorias.map (categoria =>(
                <Categoria
                    key={categoria.id}
                    categoria={categoria}
                />
                
            ))}

        </nav>




    </>
  )
}

export default Sildebar
