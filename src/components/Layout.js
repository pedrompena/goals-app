import Header from './share/Header'
import Main from './share/Main'
import Footer from './share/Footer'

import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}
 
export default Layout;