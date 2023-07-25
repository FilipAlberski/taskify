import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCredentials,
  setLoading,
} from '../redux/slices/authSlice';
import { useGetUserDetailsQuery } from '../services/authService';

const Header = () => {
  const { userInfo, userToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Automatically authenticate user if token is found
  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    pollingInterval: 900000, // 15 mins
    skip: !userToken,
  });

  useEffect(() => {
    if (data) {
      dispatch(setCredentials(data));
    }
  }, [data, dispatch]);
};

export default Header;
