import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart';
import Users from './components/Users';
import Product from './components/Product';
import ProductsTansTack from './components/ProductsTansTack';
import { deleteItem } from './redux/cartActions';
import { deleteUser } from './redux/userActions';

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartR);
  const users = useSelector((state) => state.userR);
  const cartItemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <main className="app-shell">
      <section className="topbar">
        <div>
          <p className="eyebrow">Nova Market</p>
          <h1>Mini e-ticaret paneli</h1>
        </div>

        <div className="topbar-summary">
          <div className="mini-stat mini-stat-cart" tabIndex="0">
            <span>Sepet</span>
            <strong>{cart.total.toLocaleString('tr-TR')} TL</strong>
            <div className="summary-popup">
              <div className="summary-popup-header">
                <span>Sepet özeti</span>
                <strong>{cartItemCount} ürün</strong>
              </div>

              {cart.items.length === 0 ? (
                <p className="muted-copy">Sepet şu an boş.</p>
              ) : (
                <div className="summary-popup-list">
                  {cart.items.map((item) => (
                    <article className="summary-popup-item" key={item.id}>
                      <div>
                        <strong>{item.name}</strong>
                        <p>
                          {item.quantity} adet x {item.price.toLocaleString('tr-TR')} TL
                        </p>
                      </div>
                      <button
                        className="popup-remove-button"
                        onClick={() => dispatch(deleteItem(item.id))}
                      >
                        Kaldır
                      </button>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="mini-stat mini-stat-cart" tabIndex="0">
            <span>Müşteri</span>
            <strong>{users.users.length}</strong>
            <div className="summary-popup">
              <div className="summary-popup-header">
                <span>Kayıtlı müşteriler</span>
                <strong>{users.users.length} kişi</strong>
              </div>

              {users.users.length === 0 ? (
                <p className="muted-copy">Henüz müşteri eklenmedi.</p>
              ) : (
                <div className="summary-popup-list">
                  {users.users.map((user) => (
                    <article className="summary-popup-item" key={user.id}>
                      <div>
                        <strong>{user.name}</strong>
                        <p>{user.segment}</p>
                      </div>
                      <button
                        className="popup-remove-button"
                        onClick={() => dispatch(deleteUser(user.id))}
                      >
                        Sil
                      </button>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="content-grid">
        <Cart />
        <Users />
        <ProductsTansTack/>
      </section>
    </main>
  );
}

export default App;
