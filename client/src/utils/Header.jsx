// components/Header.js
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setCredentials } from '../redux/slices/authSlice';
import { useGetUserDetailsQuery } from '../services/authService';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    pollingInterval: 900000, // 15mins
  });
  console.log(data);

  useEffect(() => {
    if (data) dispatch(setCredentials(data));
  }, [data, dispatch]);
};
export default Header;
