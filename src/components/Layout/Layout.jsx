import Nav_bar from '../Nav_bar';
import Footer from '../Footer';

import { Outlet }  from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <Nav_bar />
        <Outlet />
        <Footer />
        </>
    );
};

export default Layout;