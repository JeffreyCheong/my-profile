import { configureStore } from '@reduxjs/toolkit';
import appState from '../features/appStateSlice';
export const store = configureStore({
    reducer: {
        appState: appState
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;