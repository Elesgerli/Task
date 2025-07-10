import { configureStore } from "@reduxjs/toolkit";

import dataSlice from './slices/dataSlices';
const store = configureStore({
    reducer: {
        datas: dataSlice
    }
})


export default store