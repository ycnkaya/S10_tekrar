import {REQUEST, SUCCESS, ERROR} from './productActions'
  
  const initialState = {
    products: [], // uzaktan gelen urunler burada tutulacak
    loading: false, // su an istek suruyor mu
    error: null, // hata varsa burada tutulacak
  };
  
  export function productReducer(state = initialState, action) {
    switch (action.type) {
      case REQUEST:
        return {
          ...state,
          loading: true, // UI'da "yukleniyor" gosterebilmek icin
          error: null, // yeni istekte eski hatayi sifirliyoruz
        };
  
      case SUCCESS:
        return {
          ...state,
          loading: false, // istek tamamlandi
          products: action.payload, // API verisini state'e yaziyoruz
        };
  
      case ERROR:
        console.log(ERROR);
        return {
          ...state,
          loading: false, // hata olsa da istek bitti
          error: action.payload, // hata mesajini UI'da gosterecegiz
        };
  
      default:
        return state;
    }
  }