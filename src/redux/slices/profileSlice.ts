import { createSlice } from "@reduxjs/toolkit";
import DataPerso from "@/data/dataPerso";

const profileSlice = createSlice({
   name: "contactsCards",
   initialState: DataPerso.contactsCardsData,
   reducers: {},
});

export default profileSlice.reducer;
