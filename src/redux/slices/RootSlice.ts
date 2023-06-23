import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        title: 'Title',
        author: 'Author',
        format: 'Format',
        release_date: 'Release Date',
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload }, // Setting the input to the state.title
        chooseAuthor: (state, action) => { state.author = action.payload },
        chooseFormat: (state, action) => { state.format = action.payload }, 
        chooseDate: (state, action) => { state.release_date = action.payload }, 
    }
})

export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseFormat, chooseDate } = rootSlice.actions