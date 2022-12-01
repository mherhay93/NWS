import {Link} from "react-router-dom";

import './styleNotFound.css'

const NotFound = () => {
  return (
      <div className='not_found'>
          Page Not Found
          <Link to={'/'}>Home</Link>
      </div>
  )
}

export default NotFound
