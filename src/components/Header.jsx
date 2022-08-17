import logo from '../static/logo.svg'


export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="sportsee logo"/>
      <nav className='nav'>
        <ul className='nav__list'>
          <li className='nav__list-item'>Accueil</li>
          <li className='nav__list-item'>Profil</li>
          <li className='nav__list-item'>Réglage</li>
          <li className='nav__list-item'>Communauté</li>
        </ul>
      </nav>
    </header>
  );
}
