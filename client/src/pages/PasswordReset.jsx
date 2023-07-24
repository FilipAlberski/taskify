import { useParams } from 'react-router-dom';

const PasswordReset = () => {
  const { userId, token } = useParams();

  return <div>PasswordReset</div>;
};

export default PasswordReset;
