import BookForm from "./BookForm";

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
  if ( !props.open ) return <></>;
  return (
    <div 
        onClick={ props.onClose } 
        className='fixed w-full h-full flex overflow-auto z-1 
        justify-center align-middle bg-gray-300 bg-opacity-25'
    >
        <div
            className='max-w-300px w-2/5 fixed flex z-1 mt-5 bg-white shadow-xl'
            onClick={(e) => {
                e.stopPropagation()
            }}
        >   
            <div className='w-full flex flex-col'>
                <div className='flex flex-row space-apart'>
                    <p className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
                    onClick={props.onClose}>
                        x
                    </p>
                </div>
                <div className='flex flex-col items-center text-center p-2'>
                    <BookForm id={ props.id } onClose={props.onClose}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal