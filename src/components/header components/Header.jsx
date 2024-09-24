// Components Importing
import { HeaderLeftSide, SearchInput, CreateVideo, VideosNotification, UserProfile } from "../index";

// Dependencies Importing
import { useState } from 'react';

const Header = ({ toggle }) => {

    const [ openedDropDown, setOpenedDropDown ] = useState(-1);

    return (
        <div className="max-w-screen flex justify-between max-h-[54px] overflow-y-hidden items-center bg-[#0f0f0f] sm:px-[16px] px-[24px] flex-grow overflow-x-hidden max-w-screen" style={ { maxWidth: '100vw' } }>

            <HeaderLeftSide toggle={ toggle } />

            <SearchInput />
            <div className="flex items-center gap-1">
                <CreateVideo openedDropDown={ openedDropDown } setOpenedDropDown={ setOpenedDropDown } />
                <VideosNotification openedDropDown={ openedDropDown } setOpenedDropDown={ setOpenedDropDown } />
                <UserProfile openedDropDown={ openedDropDown } setOpenedDropDown={ setOpenedDropDown } />
            </div>
        </div>
    );
};

export default Header;