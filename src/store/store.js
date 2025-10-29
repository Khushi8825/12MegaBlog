<<<<<<< HEAD
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice'
const store =  configureStore({
    reducer: {
        auth: authReducer, 
    }
});

=======
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './authSlice'
const store =  configureStore({
    reducer: {
        auth: authReducer, 
    }
});

>>>>>>> 0b42a430be9d6fef8d718d6e162fcd55bf825e56
export default store