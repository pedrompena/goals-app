import { Link } from 'react-router-dom';

import styles from './Goals.module.css'

const Goal = ({ id, icon, events, period, details, complete, goal }) => {
    return (
        <Link to={`/list/${id}`} className={styles.goal + ' card'}>
            <div className='flex items-center'>
                <div className={styles.icon}>{icon}</div>
                <p className='text-xl ml-5 mr-10'>{events}
                    <sub className='text-xs text-gray-500 ml-1'>/ {period}</sub>
                </p>
                <p>{details}</p>
            </div>
            <div className='flex'>
                <div className='relative m-2 mx-5'>
                    <p className='text-center'>{complete} of {goal}</p>
                    <div className={styles.bar1}>
                        <div style={{ width: `${Math.round((complete / goal) * 100)}%` }} className={styles.bar2}></div>
                    </div>
                </div>
                <button className='button button--gray'>Complete</button>
            </div>
        </Link>
    );
};
 
export default Goal;