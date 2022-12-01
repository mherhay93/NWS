import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import useFetchCategories from "../../apiHook/useDataCategories";
import {IDataCategories, ITypeCategories} from "../../types/dataCategoriesType";
import useDataCats from "../../apiHook/useDataCats";
import {constSettings} from "../../types/settingsTypes";

import './styleCategoryes.css'

const Categories = () => {
    const [id, setId] = useState('1')
    
    const dispatch = useDispatch()
    const fetchDataCategories = useFetchCategories()
    const fetchDataCats = useDataCats()
    
    const {dataCategories} = useSelector((state:IDataCategories):any => state.dataCategories)
    
    const handleId = (item:ITypeCategories) => {
        setId(item.id)
    }
    
    useEffect(() => {
        fetchDataCategories()
        fetchDataCats(id)
        dispatch({
            type:constSettings.ID_CATEGORIES,
            payload:id
        })
    }, [id])
    
    
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
