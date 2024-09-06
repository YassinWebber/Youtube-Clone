// Dependencies Importing
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';

// Assets Importing
import { DownArrowIcon, SubscriptionsIcon, UpArrowIcon } from '../assets';

// Constants Importing
import { sidebarSections, collapsedSideBarLinks } from '../constants';

// Components Importing
import { GrayLine } from './index';
import { Fragment } from 'react';

// Contexts Importing
import { SideBarContext } from '../contexts/sideBarContext';

const SideBarLink = ({ label, icon, activedIcon, path, onClickFunction, isNewVideosChecked, i, j }) => {

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

const SideBar = ({ isSidebarCollapsed, isSmallScreenSidebarCollapsed }) => {

    const defaultVisibleLinks = 7;
    const [ subsSecCollapsed, setSubsSecCollapsed ] = useState(true);

    const location = useLocation();

    const getIcon = (path, DefaultIcon, ActiveIcon) => {
        return location.pathname === path ? ActiveIcon : DefaultIcon;
    };

    return (
        <>
            <div className={ `${!isSidebarCollapsed ? 'flex' : 'hidden'} w-[240px] sidebar-height flex-col overflow-y-hidden hover:overflow-y-auto max-w-[240px] p-0 m-0 sidebar-scrollbar top-[54px]` } style={ { scrollbarWidth: 'thin', scrollbarGutter: 'stable' } }>
                { sidebarSections.map((section, i) => (
                    <Fragment key={ i }>
                        <div className={ `w-full p-3` } >
                            { section.hasTitle && <h2 className="text-white px-3 font-semibold text-md my-1">{ section.title }</h2> }

                            { section.links.slice(0, section.title === 'Subscriptions' ? (!subsSecCollapsed ? undefined : defaultVisibleLinks) : undefined).map((link, j) => (

                                <SideBarLink label={ link.label } icon={ link.icon } activedIcon={ link.activedIcon } path={ link.path } i={ i } j={ j } isNewVideosChecked={ link.isNewVideosChecked } key={ link.label + j } />

                            )) }
                            { section.title === 'Subscriptions' && section.links.length > defaultVisibleLinks &&
                                <>
                                    { !subsSecCollapsed && <SideBarLink label={ `All subscriptions` } icon={ SubscriptionsIcon } activedIcon={ SubscriptionsIcon } path={ `/all-subscriptions` } /> }

                                    <SideBarLink label={ `Show more` } icon={ !subsSecCollapsed ? UpArrowIcon : DownArrowIcon } onClickFunction={ () => setSubsSecCollapsed(prev => !prev) } />
                                </>
                            }
                        </div>
                        { i !== sidebarSections.length - 1 ? <GrayLine classNames={ `${i === 0 ? 'ml-3' : ''}` } /> : '' }
                    </Fragment>
                )) }
                <GrayLine />
                <div className="w-full p-3">
                    <p className="p-3 text-white text-md">Made by: &copy; Yassin</p>
                </div>
            </div>

            <div className={ `${isSidebarCollapsed || isSmallScreenSidebarCollapsed ? 'flex' : 'hidden'} sidebar-height w-[72px] px-[4px] flex-col gap-1` }>
                { collapsedSideBarLinks.map((link, i) => (
                    <Link className={ `w-full flex flex-col gap-1 items-center pt-4 pb-[14px] rounded-xl hover:bg-white/10 transition` } to={ link.path } key={ link.label }>
                        <img className="w-6" src={ getIcon(link.path, link.icon, link.activedIcon) } />
                        <p className="text-center text-[10px] text-white">{ link.label }</p>
                    </Link>
                )) }
            </div>

        </>
    );
};

export default SideBar;