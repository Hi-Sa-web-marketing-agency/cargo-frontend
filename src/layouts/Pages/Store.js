import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
// import thunk from 'redux-thunk'; // Import Redux Thunk

import selectedItem from './SelectSlice'


export default configureStore({
    reducer: {
      
        selectedValue: selectedItem,
    
  

    },
    // middleware: [...getDefaultMiddleware(), thunk],
})