
import { useState } from 'react';
import { BurgerMenu } from '../components/burger-menu/burger-menu.js';
import { Header } from '../components/header/header.js';

import styles from './default-layout.module.scss'

export const DefaultLayout = ({ headerData, title, children }) => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => setOpenDrawer(prevState => !prevState);

    return ( 
        <div className={styles.layout}>
            <Header data={headerData} isOpenDrawer={openDrawer} toggleDrawer={toggleDrawer} title={title} />
            <main>
                {headerData && <BurgerMenu data={headerData} isOpenDrawer={openDrawer} onClose={toggleDrawer} />}
                {children}
            </main>
        </div>
     );
}
 