import { Link } from 'react-router-dom';

import styles from './Linkage.module.css'

const Linkage = ({ text, Icon, href }) => {
    return (
        <Link to={href} className={styles.link}>
            <Icon className={styles.icon} />
            {text && <span className={styles.text}>{text}</span>}
        </Link>
    );
};

export default Linkage;