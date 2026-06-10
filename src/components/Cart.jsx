//import { useReducer } from 'react';
//import { cartReducer, initialState } from '../redux/cartReducer';

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/cartActions';

const products = [
  { id: 101, name: 'Kablosuz Klavye', price: 1400, category: 'Aksesuar' },
  { id: 102, name: '4K Monitör', price: 8900, category: 'Ekran' },
  { id: 103, name: 'Bluetooth Kulaklık', price: 2400, category: 'Ses' },
  { id: 104, name: 'Webcam', price: 1750, category: 'Ofis' },
];

function Cart() {
  //const [state, dispatch] = useReducer(cartReducer, initialState);

  const cart = useSelector((state) => state.cartR);
  const dispatch = useDispatch();
  const cartItemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  const urunEkle = (product) => {
    dispatch(addItem(product));
  };

  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <p className="section-label">Ürünler</p>
          <h2>Hızlı ekle</h2>
        </div>
        <span className="panel-badge">{cartItemCount} ürün</span>
      </div>

      <div className="catalog-grid">
        {products.map((product) => (
          <article className="catalog-card" key={product.id}>
            <span className="item-tag">{product.category}</span>
            <strong>{product.name}</strong>
            <p>{product.price.toLocaleString('tr-TR')} TL</p>
            <button className="primary-button" onClick={() => urunEkle(product)}>
              Ekle
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Cart;
