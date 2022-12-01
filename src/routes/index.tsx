import { BrowserRouter} from "react-router-dom";
import rout from "./route";

const Routers = () => {
    return (
         <BrowserRouter>
             {rout()}
         </BrowserRouter>
    )
}

export default Routers



