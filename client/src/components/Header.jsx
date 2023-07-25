import { useSelector, useDispatch } from 'react-redux';
import { useGetUserDetailsQuery } from '../services/authService';

const Header = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  console.log(data); // user object

  return <header>{children}</header>;
};
export default Header;
