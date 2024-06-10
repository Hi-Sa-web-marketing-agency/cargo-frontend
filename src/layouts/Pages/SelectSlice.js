
import { createSlice } from "@reduxjs/toolkit";



const  initialState= {
  selectedItem: null,
  sender: {
    name: '',
    street:'',
    city:'',
    state:'',
    country:'',
    mobile:'',
    postal:'',


},
receiver: {
    name: '',
    street:'',
    city:'',
    state:'',
    country:'',
    mobile:'',
    postal:'',
},

sender_proof: {
  name: '',
  street:'',
  city:'',
  state:'',
  country:'',
  mobile:'',
  postal:'',
  passport_no:'',
  document_item:'',
  document:null,
  documentPreview:null
},

reciever_proof: {
  name: '',
  street:'',
  city:'',
  state:'',
  country:'',
  mobile:'',
  postal:'',
  passport_no:'',
  document_item:'',
  document:null,
  documentPreview:null

},

}

const selectedValueSlice = createSlice({
  name: "selectedValue",
  initialState,
  reducers: {
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
      state.filtersCleared = false;
    },

    updateSender(state, action) {
      state.sender = { ...state.sender, ...action.payload };
  },
    updateReceiver(state, action) {
      state.receiver = { ...state.receiver, ...action.payload };
  },
  updateSenderProof(state, action) {
    state.sender_proof = { ...state.sender_proof, ...action.payload };
  },
  updateRecieverProof(state, action) {
    state.reciever_proof = { ...state.reciever_proof, ...action.payload };
  },
  resetForm(state) {
    Object.assign(state, initialState);
},

          
},
},
);


console.log(selectedValueSlice,'slice_____________=======================');

export const { selectedValue,setSelectedItem, updateSender, updateReceiver,updateRecieverProof,updateSenderProof, resetForm} = selectedValueSlice.actions;
export default selectedValueSlice.reducer;