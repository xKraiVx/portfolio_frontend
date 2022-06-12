
import { FunctionComponent, ReactNode, useState } from 'react';
import { BurgerMenu } from '../components/burger-menu/burger-menu';
import { Header } from '../components/header/header';

interface Props {
    headerData: any,
    title: string,
    children: ReactNode | ReactNode[]
}

export const DefaultLayout: FunctionComponent<Props> = ({ headerData, title, children }) => {

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
