
import { FunctionComponent, ReactNode, useState } from 'react';
import { HeaderNormalized } from '@common/types/header';
import { BurgerMenu } from '@layouts/components/burger-menu/burger-menu';
import { Header } from '@layouts/components/header/header';

interface Props {
    headerData: HeaderNormalized,
    title: string,
    children: ReactNode | ReactNode[]
}

export const DefaultLayout: FunctionComponent<Props> = ({ headerData, title, children }) => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => setOpenDrawer(prevState => !prevState);

    return (
        <div>
            {headerData && <Header isOpenDrawer={openDrawer} toggleDrawer={toggleDrawer} title={title} />}
            <main>
                {headerData && <BurgerMenu data={headerData} isOpenDrawer={openDrawer} onClose={toggleDrawer} />}
                {children}
            </main>
        </div>
    );
}
