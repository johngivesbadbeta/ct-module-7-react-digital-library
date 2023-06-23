import Button from "./Button"
import Input from "./Input"

import { useForm } from "react-hook-form"
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux";
import { chooseTitle, chooseAuthor, chooseFormat, chooseDate } from "../redux/slices/RootSlice";

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
    console.log(data);
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.title } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      // use dispatch to update our state in our store
      dispatch(chooseTitle(data.title));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseFormat(data.format));
      dispatch(chooseDate(data.release_date));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='title'>Title</label>
          <Input {...register('title')} name='title' placeholder='Title' />
        </div>
        <div>
          <label htmlFor='author'>Author</label>
          <Input {...register('author')} name='author' placeholder='Author' />
        </div>
        <div>
          <label htmlFor='format'>Format</label>
          <Input {...register('format')} name='format' placeholder='Format' />
        </div>
        <div>
          <label htmlFor='release_date'>Release Date</label>
          <Input {...register('release_date')} name='release_date' placeholder='Release Date' />
        </div>
        <div className='flex p-1'>
          <Button
            className='flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white'
            >
              Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm