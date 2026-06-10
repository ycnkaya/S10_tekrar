//import { useReducer } from 'react';
//import { cartReducer, initialState } from '../redux/cartReducer';

import { useSelector, useDispatch } from 'react-redux';
import { addItem } from '../redux/cartActions';

function Cart() {
  //const [state, dispatch] = useReducer(cartReducer, initialState);

  const cart = useSelector((state) => state.cartR);
  const dispatch = useDispatch();

  const urunEkle = () => {
    const urun = {
      id: 1,
      name: 'Bilgisayar',
      price: 2000,
    };

    dispatch(addItem(urun));
  };

  return (
    <>
      <h3>Sepet: {cart.total}</h3>
      <button onClick={urunEkle}>Ürün Ekle</button>
    </>
  );
}

export default Cart;
