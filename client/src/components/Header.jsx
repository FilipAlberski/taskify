import { useSelector, useDispatch } from 'react-redux';
import { useGetUserDetailsQuery } from '../redux/services/userApi';

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // automatically authenticate user if token is found
  const { data, isFetching } = useGetUserDetailsQuery('userDetails', {
    // perform a refetch every 15mins
    pollingInterval: 900000,
  });

  console.log(data); // user object

  return <header>{/* header markup */}</header>;
};
export default Header;
