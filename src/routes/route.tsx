import {Route, Routes} from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import NotFound from "../components/notFound/NotFound";

const rout = () => {
  return (
      <Routes>
          <Route path={'/'}  element={<Home/>}/>
          <Route path={'/root'} element={<Root/>}/>
          <Route path={'/*'} element={<NotFound/>}/>
      </Routes>
  )
}

export default rout
