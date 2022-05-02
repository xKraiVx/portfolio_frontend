
import { useState } from 'react';
import { BurgerMenu } from '../components/burger-menu/burger-menu.js';
import { Header } from '../components/header/header.js';

export const DefaultLayout = ({ headerData, title, children }) => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => setOpenDrawer(prevState => !prevState);

    return ( 
        <div>
            {headerData && <Header data={headerData} isOpenDrawer={openDrawer} toggleDrawer={toggleDrawer} title={title} />}
            <main>
                {headerData && <BurgerMenu data={headerData} isOpenDrawer={openDrawer} onClose={toggleDrawer} />}
                {children}
            </main>
        </div>
     );
}
 