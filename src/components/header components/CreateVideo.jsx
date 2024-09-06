// Dependencies Importing
import { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets Importing
import { CreateVideoIcon } from '../../assets/index';

// Constants Importing
import { createVideoDropDown } from '../../constants';

const CreateVideo = ({ openedDropDown, setOpenedDropDown }) => {

    return (
        <div className="">
            <div
                className="hover:bg-[#272727] p-[0.5rem] rounded-full overflow-hidden cursor-pointer transition z-30"
                onClick={ () => (openedDropDown === 0) ? setOpenedDropDown(-1) : setOpenedDropDown(0) }
            >
                <img
                    src={ CreateVideoIcon }
                    width={ 24 }
                    height={ 24 }
                    className="min-w-[24px] min-h-[24px]"
                />
            </div>
            { openedDropDown === 0 &&
                <>
                    <div
                        className="absolute flex flex-col rounded-xl w-[167px] bg-[#282828] py-2"
                    >
                        { createVideoDropDown.map((optionButton, index) => (
                            <Link className="flex items-center gap-4 py-2 px-4 hover:bg-white/10 text-[#f1f1f1] text-sm"
                                key={ index }>
                                <div>
                                    <img src={ optionButton.icon } />
                                </div>
                                { optionButton.label }
                            </Link>
                        )) }
                    </div>
                    <div
                        className="absolute top-0 left-0 w-[98.8vw] h-[100vh] -z-20"
                        onClick={ () => setOpenedDropDown(-1) }
                    />
                </>
            }
        </div>
    );
};

export default CreateVideo;