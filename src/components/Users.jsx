import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../redux/userActions';

const customers = [
  { id: 1, name: 'Nehir Kaya', segment: 'Premium' },
  { id: 2, name: 'Mert Demir', segment: 'Yeni Uye' },
  { id: 3, name: 'Elif Yalçın', segment: 'Sadık Müşteri' },
];

function Users() {
  const users = useSelector((state) => state.userR);
  const dispatch = useDispatch();

  const handleAddUser = (user) => {
    const exists = users.users.find((item) => item.id === user.id);

    if (!exists) {
      dispatch(addUser(user));
    }
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="section-label">Müşteriler</p>
          <h2>Hızlı seçim</h2>
        </div>
        <span className="panel-badge">{users.users.length} kayıt</span>
      </div>

      <div className="customer-list">
        {customers.map((customer) => {
          const exists = users.users.some((item) => item.id === customer.id);

          return (
            <article className="customer-row" key={customer.id}>
              <div>
                <strong>{customer.name}</strong>
                <p>{customer.segment}</p>
              </div>
              <button
                className="primary-button"
                onClick={() => handleAddUser(customer)}
                disabled={exists}
              >
                {exists ? 'Eklendi' : 'Ekle'}
              </button>
            </article>
          );
        })}
      </div>

    </section>
  );
}

export default Users;
