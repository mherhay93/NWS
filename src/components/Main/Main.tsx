import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import {ITypeCats} from "../../types/dataCategoriesType";
import {ITypeState} from "../../types/typeState";
import useDataCats from "../../apiHook/useDataCats";

import './styleMain.css'

const Main = () => {
    const [id, setId] = useState('10')
    const {cats} = useSelector((state: ITypeState) => state.dataCategories)
    const {idCategories} = useSelector((state:ITypeState) => state.settings)
    const fetchDataCats = useDataCats()
   
    const handleMore = () => {
    setId((+id + 10).toString() )
    }
    
    useEffect(() => {
        fetchDataCats(idCategories, id)
    }, [idCategories, id])
    
    return (
        <div className='main_container'>
            {cats[0] && cats[0].map((item: ITypeCats) => (
                <img className='main_items' key={item.id} src={item.url} alt="img"/>))}
            <div onClick={handleMore} className='main_button'>more</div>
        </div>
    )
}

export default Main
