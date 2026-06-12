import axios from 'axios';

export const getProductsFromApi = async () => {
    
    try{
        const response = await axios.get('/products.json');

        if(response.status !== 200) console.log('Ürün alınamadı!');
        return response.data;
    }
    catch(err){
        console.log(err);
    }
};