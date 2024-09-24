
// Constants Importing
import { sidebarSections } from "../constants";

// Dependensies Importing
import { Fragment, useState } from "react";

// Components Importing
import { SideBarLink } from "./SideBar";
import { GrayLine } from "./index";

// Assets Importing
import { DownArrowIcon, SubscriptionsIcon, UpArrowIcon } from '../assets';

const LargeSidebar = ({ isLargeScreenOpened }) => {
    const defaultVisibleLinks = 7;
    const [ subsSecCollapsed, setSubsSecCollapsed ] = useState(true);

    return (
        <div className={ `w-[240px] sidebar-height flex-col overflow-y-hidden hover:overflow-y-auto max-w-[240px] p-0 m-0 sidebar-scrollbar top-[54px] ${isLargeScreenOpened ? 'lg:flex' : 'lg:hidden'}` } style={ { scrollbarWidth: 'thin', scrollbarGutter: 'stable' } }>
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
    );
};

export default LargeSidebar;