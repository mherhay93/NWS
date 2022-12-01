import './styleCategoryes.css'
import useFetchCategories from "../../apiHook/useDataCategories";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {IDataCategories, ITypeCategories} from "../../types/dataCategoriesType";

const Categories = () => {
    const fetchDataCategories = useFetchCategories()
    
    useEffect(() => {
        fetchDataCategories()
    }, [])
    
    const {dataCategories} = useSelector((state:IDataCategories):any => state.dataCategories)

    return (
        <div className='categories_container'>
            {
                dataCategories[0] && dataCategories[0].map((item:ITypeCategories) => <span key={item.id}>{item.name}</span>)
            }
        </div>
    )
}

export default Categories
