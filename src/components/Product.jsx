import { useSelector, useDispatch } from 'react-redux';

import {productThunk} from '../redux/productThunk';

export default function Products(){

    const {products, loading, error} = useSelector((state) => state.productR);

    const dispatch = useDispatch();

    if(loading) return <p>Yükleniyor...</p>;
    if(error) return <p>{error}</p>;

    return(<><h3>Merhaba {products.length}</h3>
    <button onClick={() => dispatch(productThunk())}>Ürünleri Getir</button>
    <ul>
    {
        products.map(item => (
            <li>{item.name}</li>
        ))
    }
    </ul>
    </>);
}