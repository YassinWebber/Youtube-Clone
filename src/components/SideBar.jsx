// Dependencies Importing
import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

// Components Importing
import { CollapsedSidebar, LargeSidebar } from './index';

// Contexts Importing
// import { useSideBarContext } from '../contexts/sideBarContext';

export const SideBarLink = ({ label, icon, activedIcon, path, onClickFunction, isNewVideosChecked, i, j }) => {

    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path
            ? 'bg-white/10 hover:bg-white/20 font-semibold'
            : '';
    };

    const getLabelClass = (path) => {
        return location.pathname === path
            ? 'font-semibold'
            : '';
    };

    const getIcon = (path, DefaultIcon, ActiveIcon) => {
        return location.pathname === path ? ActiveIcon : DefaultIcon;
    };
    return (
        <Link
            className={ `flex px-3 py-[0.5rem] hover:bg-white/10 rounded-xl gap-6 items-center transition overflow-hidden text-ellipsis whitespace-nowrap ${getLinkClass(path)}` }
            to={ path } onClick={ onClickFunction }
        >
            { i === 1 && j === 0 ? (
                <div className="flex gap-2 items-center">
                    <h2 className={ `text-[17px] text-white font-semibold` }>{ label }</h2>
                    <img src={ icon } alt="icon" />
                </div>
            ) : (
                <div className="flex justify-between w-full items-center">
                    <div className="flex gap-6 items-center">
                        <img
                            src={ i === 2 ? icon : getIcon(path, icon, activedIcon) }
                            className={ `w-6 ${i === 2 ? 'rounded-full w-6 h-6' : ''}` }
                            alt="icon"
                        />
                        <h3 className={ `text-white text-sm whitespace-nowrap text-ellipsis max-w-[122px] overflow-hidden ${getLabelClass(path)}` }>{ label }</h3>
                    </div>
                    { i === 2 && isNewVideosChecked && (
                        <span className="w-[5px] h-[5px] bg-[#3ea6ff] rounded-[50%] justify-self-end z-20" />
                    ) }
                </div>
            )
            }
        </Link>);
};

const SideBar = ({ isLargeScreenOpened }) => {

    return (
        <>
            <div className="max-[1024px]:hidden">
                <LargeSidebar isLargeScreenOpened={ isLargeScreenOpened } />
            </div>
            <div>
                <CollapsedSidebar isLargeScreenOpened={ isLargeScreenOpened } />
            </div>
        </>
    );
};

export default SideBar;