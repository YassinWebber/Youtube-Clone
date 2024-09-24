// Constants Importing 
import { collapsedSideBarLinks } from "../constants";

// Dependencies Importing
import { Link, useLocation } from "react-router-dom";

// Contexts Importing 
import { useSideBarContext } from "../contexts/sideBarContext";

const CollapsedSidebar = () => {
    const { isLargeScreenOpened } = useSideBarContext();

    const location = useLocation();

    const getIcon = (path, DefaultIcon, ActiveIcon) => {
        return location.pathname === path ? ActiveIcon : DefaultIcon;
    };

    return (
        <div className={ `flex sidebar-height w-[72px] px-[4px] flex-col gap-1 ${isLargeScreenOpened ? 'lg:hidden' : 'lg:flex'} ` }>
            { collapsedSideBarLinks.map((link) => (
                <Link className={ `w-full flex flex-col gap-1 items-center pt-4 pb-[14px] rounded-xl hover:bg-white/10 transition` } to={ link.path } key={ link.label }>
                    <img className="w-6" src={ getIcon(link.path, link.icon, link.activedIcon) } />
                    <p className="text-center text-[10px] text-white">{ link.label }</p>
                </Link>
            )) }
        </div>
    );
};

export default CollapsedSidebar;