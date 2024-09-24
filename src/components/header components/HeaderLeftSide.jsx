
// Assets Importing
import { BurgerMenu, YoutubeLogo } from "../../assets/index";

// Dependencies Importing 
import { Link } from 'react-router-dom';

const HeaderLeftSide = ({ toggle }) => {

    return (
        <div className="flex h-full items-center">
            <div className="p-[0.5rem] rounded-full hover:bg-[#272727]" onClick={ () => toggle() }>
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
    );
};

export default HeaderLeftSide;