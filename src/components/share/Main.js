import { ReactComponent as ListSVG } from '../../img/list.svg'
import { ReactComponent as AddSVG } from '../../img/add.svg'
import Linkage from './Linkage'
import styles from './Main.module.css'

const Main = ({ children }) => {
    return (
        <div className={styles.container}>
            <aside className={styles.aside}>
                <Linkage href="/list" text="Goals list" Icon={ListSVG} />
                <Linkage href="/add" text="Add new goal" Icon={AddSVG}/>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
};

export default Main;

