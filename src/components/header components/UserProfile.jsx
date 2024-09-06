
// Components Importing
import { GrayLine } from '../index';

// Assets Importing
import ProfilePic from '../../../public/pictures/profile-pic.jpg';

// Dependencies Importing
import { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Constants Importing
import { profileDropMenu } from '../../constants/index';

const UserProfile = ({ openedDropDown, setOpenedDropDown }) => {

    return (
        <div className="ml-3 sm:ml-5">
            <div
                className="rounded-full overflow-hidden cursor-pointer mr-[0.8rem] z-30"
                onClick={ () => (openedDropDown === 2) ? setOpenedDropDown(-1) : setOpenedDropDown(2) }
            >
                <img
                    src={ ProfilePic }
                    className="min-w-[32px] min-h-[32px]"
                    width={ 32 }
                    height={ 32 }
                />
            </div>
            { openedDropDown === 2 &&
                <>
                    <div className="absolute bg-[#282828] w-[300px] right-4 rounded-xl text-[#f1f1f1] pt-4 overflow-hidden">
                        <div className="flex gap-5 px-4">
                            <div className="overflow-hidden rounded-full w-9 h-9 mt-1">
                                <img
                                    src={ ProfilePic }
                                    alt="profile-pic"
                                    width={ 36 }
                                    height={ 36 }
                                    className="min-w-[36px] min-h-[36px]"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col">
                                    <h2 className="text-md">Yassin MASHALY</h2>
                                    <h4 className="text-md">@yassinmashaly6820</h4>
                                </div>
                                <div className="mb-4">
                                    <Link
                                        to="/channel/:channelId"
                                        className="text-sm text-[#3B97E6]"
                                    >
                                        View your channel
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <GrayLine />
                        { profileDropMenu.map((category, index) => (
                            <Fragment key={ category.name }>
                                <div className="py-2 flex flex-col">
                                    { category.content.map((btn) => (
                                        <Link
                                            key={ btn.id }
                                            className={ `flex items-center py-[0.39rem] px-4 text-lg font-roboto hover:bg-[#3E3E3E] ${btn.multichoices && 'justify-between'}` }
                                        >
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <img
                                                        src={ btn.icon }
                                                        alt={ btn.label }
                                                        width={ 24 }
                                                        height={ 24 }
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-sm">{ btn.label }</h3>
                                                </div>
                                            </div>
                                            { btn.multichoices &&
                                                <div>
                                                    <img
                                                        src={ btn.MultichoicesIcon }
                                                        width={ 30 }
                                                        height={ 30 }
                                                    />
                                                </div>
                                            }
                                        </Link>
                                    )) }
                                </div>
                                { index !== profileDropMenu.length - 1 && <GrayLine /> }
                            </Fragment>
                        )) }
                    </div>
                    <div
                        className="absolute top-0 left-0 w-[97.9vw] h-[100vh] -z-20"
                        onClick={ () => setOpenedDropDown(-1) }
                    />
                </>
            }
        </div>
    );
};

export default UserProfile;