import { configureStore } from "@reduxjs/toolkit";

import todoSLice from "../features/todo/todoSLice";


export const store = configureStore({
    reducer:todoSLice
})