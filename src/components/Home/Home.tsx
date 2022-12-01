import {Link} from "react-router-dom";

import './styleHome.css'

const Home = () => {
  return (
      <div className='container_home'>
          <span>Hello !!!</span>
          <Link className={'home_link'} to={'/root'}>Get started</Link>
      </div>
  )
}

export default Home
