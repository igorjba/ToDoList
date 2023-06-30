import './styles.css';
import logoImage from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';

export function Header() {

    function logout() {
        localStorage.removeItem('token')
    }

    return (
        <header className='header'>
            <div className="container header-container">
                <img src={logoImage} alt="Logo da Cubos Academy" />
                <nav className='navigation'>
                    <span>Igor | </span>
                    <NavLink to='/todos' className="navigation__item" >Tarefas</NavLink>
                    <NavLink to='/about' className='navigation__item' >Sobre</NavLink>
                    <NavLink onClick={logout} to='/' className='navigation__item' >Sair</NavLink>
                </nav>
            </div>
        </header>
    )
}
