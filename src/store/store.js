import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { viewEmployee } from "../services/viewEmployee";
import { viewTask } from "../services/viewTask";
export const store = configureStore({
  reducer: {
    [viewEmployee.reducerPath]: viewEmployee.reducer,
    [viewTask.reducerPath]: viewTask.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(viewEmployee.middleware, viewTask.middleware),
});
setupListeners(store.dispatch);
