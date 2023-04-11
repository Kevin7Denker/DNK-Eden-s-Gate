import { Link } from 'react-router-dom'
import IconWhite from '../../Assets/Img/IconWhite.png'
import './Style/NavBar.scss'

const NavBar = () =>{ 
    return(
        <div className="NavBar">
            <div className="container_nav">
                <div className="container_nav_logo">
                    <div className="logo_image">
                        <img src={IconWhite}/>
                    </div>
                    <div className="logo_text">
                        <h1>Elden's Gate</h1>
                    </div>
                </div>
                <div className="container_nav_options">
                    <Link id='op' to={''}>Sobre</Link>
                    <Link id='op' to={''}>Membros</Link>
                    <Link id='fi' to={''}>Filiar-se</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar