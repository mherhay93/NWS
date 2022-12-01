import './styleCategoryes.css'
import useFetchCategories from "../../apiHook/useDataCategories";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {IDataCategories, ITypeCategories} from "../../types/dataCategoriesType";
import useDataCats from "../../apiHook/useDataCats";

const Categories = () => {
    const [id, setId] = useState('1')
    const fetchDataCategories = useFetchCategories()
    const fetchDataCats = useDataCats()
    useEffect(() => {
        fetchDataCategories()
        fetchDataCats(id)
    }, [id])
    
    const handleId = (item:ITypeCategories) => {
        setId(item.id)
    }
    
    const {dataCategories} = useSelector((state:IDataCategories):any => state.dataCategories)

    return (
        <div className='categories_container'>
            {
                dataCategories[0] && dataCategories[0].map((item:ITypeCategories) => (
                    <span onClick={() => handleId(item)} className={item.id === id ? 'categories_item_active' : 'categories_item'} key={item.id}>{item.name}</span>
                ))
            }
        </div>
    )
}

export default Categories
