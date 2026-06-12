import { useQuery, useMutation, useQueryClient} from '@tanstack/react-query';
import {getProductsFromApi} from '../api/productApi'

export default function ProductsTansTack(){

    const {
        data = [],
        isPending,
        isError,
        error,
        refetch,
        isFetching,
        isLoading
    } = useQuery({
        queryKey: ['products', 'urunler'],
        queryFn: getProductsFromApi,
        staleTime: 1000 * 60
    });


    if(isLoading) return <p>Yükleniyor...</p>;
    if(error) return <p>{error}</p>;

    return<>
    {
        data.map(item => (
            <li>{item.name}</li>
        ))
    }
    </>;
}