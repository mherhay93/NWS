import {useDispatch} from "react-redux";
import {constActionType} from "../types/dataCategoriesType";

const useFetchCategories = () => {
    const dispatch = useDispatch()
   const fetchDataCategories = () => {
       fetch('https://api.thecatapi.com/v1/categories')
           .then(response => response.json())
           .then(data => dispatch({
               type:constActionType.DATA_CATEGORIES,
               payload:data
           }))
           .catch(err => console.error(err));
   }
   return fetchDataCategories
}

export default useFetchCategories
