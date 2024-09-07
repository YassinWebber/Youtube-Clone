// Components Importing
import { SearchInput, CreateVideo, VideosNotification, UserProfile } from "../index";

// Assets Importing
import { BurgerMenu, YoutubeLogo } from "../../assets/index";

// Dependencies Importing
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {

    const [ openedDropDown, setOpenedDropDown ] = useState(-1);

    return (
        <div className="max-w-screen flex justify-between max-h-[54px] overflow-y-hidden items-center bg-[#0f0f0f] sm:px-[16px] px-[24px] flex-grow overflow-x-hidden max-w-screen" style={ { maxWidth: '100vw' } }>
            <div className="flex h-full items-center">
                <div className="p-[0.5rem] rounded-full hover:bg-[#272727]">
                    <img
                        src={ BurgerMenu }
                        className="cursor-pointer min-w-[24px] min-h-[24px] select-none"
                        width={ 24 }
                        height={ 24 }
                    />
                </div>
                <Link to="/" className="sm:ml-1 ml-0">
                    <img
                        src={ YoutubeLogo }
                        width={ 118 }
                        height={ 25 }
                        className="cursor-pointer min-w-[115px] min-h-[25px] select-none"
                    />
                </Link>
            </div>
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