import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const BASEURL = 'https://fakestoreapi.com/products'
export const getAll = createAsyncThunk('getAll', async () => {
    const res = await axios.get(BASEURL)
    return res.data
})


export const getOne = createAsyncThunk('getOne', async (id) => {
    const res = await axios.get(`${BASEURL}/${id}`)
    return res.data
})
export const post = createAsyncThunk('post', async (newData) => {
    const res = await axios.post(BASEURL, newData)
    return res.data
})
export const edit = createAsyncThunk('edit', async ({ newData, id }) => {
    const res = await axios.put(`${BASEURL}/${id}`, newData)
    return res.data
})
export const deleteData = createAsyncThunk('deleteData', async (id) => {
    const res = await axios.delete(`${BASEURL}/${id}`)
    return res.data
})

const dataSlice = createSlice({
    name: "dataSlice",
    initialState: {
        data: [],
        originalData: [],
        filteredData: [],
        oneDataLoading: false,
        oneData: {},
        loading: false,
        error: ""
    },
    reducers: {

        searchData: (state, action) => {
            const searchData = action.payload?.trim().toLowerCase()
            if (searchData == '') {
                state.data = [...state.originalData]
            } else {
                const searching = state.filteredData.filter(item => item.title.trim().toLowerCase().includes(searchData));
                state.data = [...searching]
            }
        },
        sortData: (state, action) => {
            const sorted = action.payload;
            if (sorted === 'df') {
                state.data = [...state.originalData];
            } else if (sorted === 'A-Z') {
                const sortAz = state.filteredData.sort((a, b) => a.title.localeCompare(b.title));
                state.data = [...sortAz];
            } else if (sorted === 'Z-A') {
                const sortZa = state.filteredData.sort((a, b) => b.title.localeCompare(a.title));
                state.data = [...sortZa];
            } else if (sorted === '0-9') {
                const sort09 = state.filteredData.sort((a, b) => a.price - b.price);
                state.data = [...sort09];
            } else if (sorted === '9-0') {
                const sort90 = state.filteredData.sort((a, b) => b.price - a.price);
                state.data = [...sort90];
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAll.pending, (state, action) => {
            state.loading = true
            state.error = ""
        }).addCase(getAll.fulfilled, (state, action) => {
            state.loading = false
            state.error = ""
            state.data = action.payload
            state.originalData = action.payload
            state.filteredData = action.payload
        }).addCase(getAll.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            toast.error("Something Wrong ,Please Try Again")
        })


        builder.addCase(getOne.pending, (state, action) => {
            state.oneDataLoading = true
            state.error = ""
        }).addCase(getOne.fulfilled, (state, action) => {
            state.oneDataLoading = false
            state.error = ""
            state.oneData = action.payload
        }).addCase(getOne.rejected, (state, action) => {
            state.oneDataLoading = false
            state.error = action.payload
            toast.error("Something Wrong ,Please Try Again")
        })

        builder.addCase(post.pending, (state, action) => {
            state.loading = true
            state.error = ""
        }).addCase(post.fulfilled, (state, action) => {
            state.loading = false
            state.error = ""
            state.data.push(action.payload)
            state.originalData.push(action.payload)
            state.filteredData.push(action.payload)
        }).addCase(post.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            toast.error("Something Wrong ,Please Try Again")
        })

        builder.addCase(edit.pending, (state, action) => {
            state.loading = true
            state.error = ""
        }).addCase(edit.fulfilled, (state, action) => {
            state.loading = false
            state.error = ""
            state.data = [...state.data.filter((item) => item.id != action.payload.id), action.payload]

            
            state.originalData = [...state.originalData.filter((item) => item.id != action.payload.id), action.payload]
            state.filteredData = [...state.filteredData.filter((item) => item.id != action.payload.id), action.payload]
        }).addCase(edit.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            toast.error("Something Wrong ,Please Try Again")
        })


        builder.addCase(deleteData.pending, (state, action) => {
            state.loading = true
            state.error = ""
        }).addCase(deleteData.fulfilled, (state, action) => {
            state.loading = false
            state.error = ""
            state.data = [...state.data.filter((item) => item.id != action.payload.id)]
            state.originalData = [...state.originalData.filter((item) => item.id != action.payload.id)]
            state.filteredData = [...state.filteredData.filter((item) => item.id != action.payload.id)]
        }).addCase(deleteData.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            toast.error("Something Wrong ,Please Try Again")
        })
    }
})




export const { searchData ,sortData} = dataSlice.actions

export default dataSlice.reducer