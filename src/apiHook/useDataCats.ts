import {useDispatch} from "react-redux";
import {constActionType} from "../types/dataCategoriesType";

const useFetchCats = () => {
    const dispatch = useDispatch()
    const fetchDataCats = (idCategories:string) => {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${idCategories}`)
            .then(response => response.json())
            .then(data => dispatch({
                type:constActionType.DATA_CATS,
                payload:data
            }))
            .catch(err => console.error(err));
    }
    return fetchDataCats
}

export default useFetchCats
