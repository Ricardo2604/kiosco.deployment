import Head from 'next/head'
import Sildebar from '../components/Sildebar'
import Pasos from '../components/Pasos';
import { ToastContainer } from 'react-toastify';
import Modal from "react-modal"
import useQuiosco from '../hooks/UseQuiosco';
import ModalProducto from '../components/ModalProducto';


//hoja de estilos de toastify:
import 'react-toastify/dist/ReactToastify.css'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');


export default function Layout({children, pagina}) {
    const {modal} = useQuiosco()
  
    return (
      <>
        <Head>
            <title>Cafe - {pagina}</title>
            <meta name='description' content='Quiosco Cafeteria'/>
        </Head>
        <div className="md:flex">
          
          {/* Sidebar */}
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5  p-4">
                <Sildebar/>
            </aside>

          {/* Contenido */}
            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
              <div className='p-10 mt-10'>
                <Pasos />
                {children}
              </div>                
            </main>
        </div>
        {modal && (
          <Modal
            isOpen={modal}
            style={customStyles}
          >
            <ModalProducto/>            
          </Modal>

        )}

        <ToastContainer/>
      </>
    )
  }