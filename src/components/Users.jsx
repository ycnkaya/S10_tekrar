import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/userActions';

function Users() {
  const users = useSelector((state) => state.userR);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const user = {
      id: 1,
      name: 'Nehir Kaya',
    };

    dispatch(addUser(user));
  };

  return (
    <>
      <h3>Toplam Kullanıcı: {users.users.length}</h3>
      <button onClick={handleAddUser}>Kullanıcı Ekle</button>
      <p>Eklenen kullanıcı: {users.users[0]?.name}</p>
    </>
  );
}

export default Users;
