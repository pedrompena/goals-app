import styles from './Header.module.css'
import { ReactComponent as ProfileSVG } from '../../img/profile.svg' 
import { ReactComponent as LogoSVG } from '../../img/logo.svg'
import Linkage from './Linkage';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <LogoSVG className={styles.logo}/>
                <a href="/" className={styles.title}>Goals App</a>
            </div>
            <nav>
                <Linkage href="/profile" Icon={ProfileSVG}/>
            </nav>
        </header>
    );
};

export default Header;
