"use client";
import React from 'react'
import { useState } from 'react';
import { logIn, logOut, toggleModerator } from '@/redux/features/authSlice';
import { useDispatch } from 'react-redux'
import { AppDispatch, useAppSelector } from '@/redux/store';

const login = () => {
    const [ username, setUsername] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    //from here we're just to take in the input as below and the function taking the city as input,
    //the pass it as parameter into the searchcity reducer.
    //then receive the result through the useSelector

    const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

    const onClickLogin = () => {
        dispatch(logIn(username))
    };
    const onClickToggle = () => {
        dispatch(toggleModerator())
    };
    const onClickLogout = () => {
        dispatch(logOut())
    };
  return (
    <div>
        <input type="text"  onChange={(e) => setUsername(e.target.value)}/>
        <br />
        <button onClick={onClickLogin}> Log In</button>
        <br />
        <button onClick={onClickLogout}>Log out</button>
        <br />
        {isAuth && <button onClick={onClickToggle}> Toggle Moderator Status</button>}
    </div>
  )
}

export default login