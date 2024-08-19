import { useSearchParams } from 'react-router-dom';
import { paramsProps } from './types';
import { useGetAllProductsQuery } from '../Redux/Features/productAPiSlice';

function Filter() {
    const [searchParams] = useSearchParams();
    const keyword = searchParams.get('keyword') || '';
    const params: paramsProps = { keyword };
    console.log(params);

    const { data: product } = useGetAllProductsQuery(params);
    console.log(product);
    return <div className="flex justify-center items-center h-screen ">Filter</div>;
}
export default Filter;
