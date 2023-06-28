import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        title: 'Title',
        author: 'Author',
        format: 'Format',
        release_date: 'Release Date',
        edition: 'Edition',
        print_length: 'Print Length',
        isbn: 'ISBN,'
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload }, // Setting the input to the state.title
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseFormat: (state, action) => { state.format = action.payload }, 
        chooseDate: (state, action) => { state.release_date = action.payload },
        chooseEdition: (state, action) => { state.edition = action.payload },
        chooseLength: (state, action) => { state.print_length = action.payload },
        chooseISBN: (state, action) => { state.isbn = action.payload }, 
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseFormat, chooseDate, chooseEdition, chooseLength, chooseISBN } = rootSlice.actions