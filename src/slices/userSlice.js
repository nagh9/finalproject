import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

export const signUp = createAsyncThunk(
  'users/signUp',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${apiUrl}/users`, userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const login = createAsyncThunk(
    'users/login',
    async (userData, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${apiUrl}/sessions`, userData);
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const usersSlice = createSlice({
    name: 'users',
    initialState: {
      signUpStatus: 'idle',
      loginStatus: 'idle',
      user: null,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(signUp.pending, (state) => {
          state.signUpStatus = 'loading';
          state.error = null;
        })
        .addCase(signUp.fulfilled, (state) => {
          state.signUpStatus = 'succeeded';
        })
        .addCase(signUp.rejected, (state, action) => {
            state.signUpStatus = 'failed';
            state.error = action.payload;
          })
          .addCase(login.pending, (state) => {
            state.loginStatus = 'loading';
            state.error = null;
          })
          .addCase(login.fulfilled, (state, action) => {
            state.loginStatus = 'succeeded';
            state.user = action.payload;
          })
          .addCase(login.rejected, (state, action) => {
            state.loginStatus = 'failed';
            state.error = action.payload;
          });

      },
    });
    
    export default usersSlice.reducer;