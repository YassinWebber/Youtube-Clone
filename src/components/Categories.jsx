// Data Fetching
import PopulerCategories from '../data/populerCategories';

// Dependencies Importing
import { useState } from 'react';

// Assets Importing
import { LeftArrowIcon, RightArrowIcon } from '../assets';

const Categories = () => {

    const [ activedCategoryId, setActivedCategoryId ] = useState(1);

    const [ isRightDisplayed ] = useState(false);
    const [ isLeftDisplayed ] = useState(true);

    return (
        <div className="relative h-full overflow-x-hidden max-w-screen" style={ { transform: 'translateX(-0px)', maxWidth: '100vw' } }>

            { !isLeftDisplayed &&
                <div className="bg-gradient-to-r from-[#0f0f0f] to-transparent w-[100px] h-full absolute flex items-center top-0 left-0">
                    <button className="bg-[#0f0f0f] rounded-full p-2 hover:bg-[#3f3f3f] ml-2">
                        <img src={ LeftArrowIcon } />
                    </button>
                </div>
            }

            <div className="flex items-center h-full px-6 gap-3">
                { PopulerCategories.map((category) => (
                    <div
                        className={ `py-[.4rem] px-3 rounded-lg bg-[#272727] transition cursor-pointer ${activedCategoryId === category.id ? 'bg-[#f1f1f1] hover:bg-white' : 'hover:bg-[#3f3f3f]'}` }
                        key={ category.id }
                        onClick={ () => setActivedCategoryId(category.id) }
                    >
                        <p className={ `text-sm font-semibold whitespace-nowrap select-none ${activedCategoryId === category.id ? 'text-[#0f0f0f]' : 'text-white'}` } > { category.name }</p>
                    </div>
                ))
                }
            </div>

            { !isRightDisplayed &&

                <div className="bg-gradient-to-l from-[#0f0f0f] to-transparent w-[100px] h-full absolute flex items-center top-0 right-0 justify-end">
                    <button className="bg-[#0f0f0f] rounded-full p-2 hover:bg-[#3f3f3f] mr-2">
                        <img src={ RightArrowIcon } />
                    </button>
                </div>

            }

        </div >
    );
};

export default Categories;