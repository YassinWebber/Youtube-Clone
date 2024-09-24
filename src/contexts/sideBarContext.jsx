import { createContext, useContext, useState } from "react";

const sideBarContext = createContext(null);

export const useSideBarContext = () => {
    const value = useContext(sideBarContext);

    if (!sideBarContext) throw Error('Cannot use Sidebar Context outside the Provider!');

    return value;
};

const isSmallScreen = () => {
    return window.innerWidth <= 1024;
};

export const SideBarProvider = ({ children }) => {
    const [ isSmallScreenOpened, setIsSmallScreenOpened ] = useState(false);
    const [ isLargeScreenOpened, setIsLargeScreenOpened ] = useState(true);

    const toggle = () => {
        if (isSmallScreen()) {
            setIsSmallScreenOpened(s => !s);
            console.log(`SmallScreenState: ${isSmallScreenOpened}`);
        } else {
            setIsLargeScreenOpened(l => !l);
            console.log(`LargeScreenState: ${isLargeScreenOpened}`);
        }
    };

    const close = () => {
        if (isSmallScreen()) {
            setIsSmallScreenOpened(false);
        } else {
            setIsLargeScreenOpened(false);
        }
    };

    return (
        <sideBarContext.Provider value={ {
            toggle,
            isSmallScreenOpened,
            isLargeScreenOpened,
            setIsSmallScreenOpened,
            setIsLargeScreenOpened,
            close
        } }>
            { children }
        </sideBarContext.Provider>
    );
};