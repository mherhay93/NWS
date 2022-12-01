import {Route, Routes} from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";

const rout = () => {
  return (
      <Routes>
          <Route path={'/'}  element={<Home/>}/>
          <Route path={'/root'} element={<Root/>}/>
      </Routes>
  )
}

export default rout
