import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux";
import { chooseTitle, chooseAuthor, chooseFormat, chooseDate, chooseEdition, chooseLength, chooseISBN } from "../redux/slices/RootSlice";

// interfaces

interface BookFormProps {
  id?: string[]
  onClose: () => void;
}

const BookForm = (props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.title } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      // use dispatch to update our state in our store
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseFormat(data.format));
      dispatch(chooseDate(data.release_date));
      dispatch(chooseEdition(data.edition));
      dispatch(chooseLength(data.print_length));
      dispatch(chooseISBN(data.isbn));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title"><p className='text-start ml-3'>Title</p></label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <span className='text-left grid gap-2 grid-cols-2 grid-rows-3'>
          {/* <span><p className='ml-3'>Title</p><Input {...register('title')} name='title' placeholder='Title'/></span> */}
          <span><p className='ml-3'>Author</p><Input {...register('author')} name='author' placeholder='Author'/></span>
          <span><p className='ml-3'>Format</p><Input {...register('format')} name='format' placeholder='Format'/></span>
          <span><p className='ml-3'>Release Date</p><Input {...register('release_date')} name='release_date' placeholder='Release Date'/></span>
          <span><p className='ml-3'>Edition</p><Input {...register('edition')} name='edition' placeholder='Edition'/></span>
          <span><p className='ml-3'>Print Length</p><Input {...register('print_length')} name='print_length' placeholder='Print Length'/></span>
          <span><p className='ml-3'>ISBN</p><Input {...register('isbn')} name='isbn' placeholder='ISBN'/></span>
        </span>
        <div className='flex p-1'>
          <Button
            className='flex justify-start m-2 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm