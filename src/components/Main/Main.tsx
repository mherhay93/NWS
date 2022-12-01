import './styleMain.css'
import {useSelector} from "react-redux";
import {IDataCategories, ITypeCats} from "../../types/dataCategoriesType";

const Main = () => {
    const {cats} = useSelector((state:IDataCategories):any => state?.dataCategories)
    
  return (
      <div className='main_container'>
          {cats[0] && cats[0].map((item:ITypeCats)=> <img className='main_items' key={item.id} src={item.url} alt="img"/>)}
      </div>
  )
}

export default Main
