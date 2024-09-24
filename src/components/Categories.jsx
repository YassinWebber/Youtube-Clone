// Data Fetching
import PopulerCategories from '../data/populerCategories';

// Dependencies Importing
import { useEffect, useRef, useState } from 'react';

// Assets Importing
import { LeftArrowIcon, RightArrowIcon } from '../assets';

const Categories = () => {

    const [ activedCategoryId, setActivedCategoryId ] = useState(1);
    const [ isRightVisible, setIsRightVisible ] = useState(true);
    const [ isLeftVisible, setIsLeftVisible ] = useState(false);
    const [ translate, setTranslate ] = useState(0);

    const categoriesContainerRef = useRef();

    const TRANSLATE_VALUE = 200;

    useEffect(() => {

        const container = categoriesContainerRef.current;

        const observer = new ResizeObserver(() => {
            if (container == null) return;

            setIsLeftVisible(translate > 0);
            setIsRightVisible(translate + container.clientWidth < container.scrollWidth);
        });

        observer.observe(categoriesContainerRef.current);

        return () => {
            observer.disconnect();
        };
    }, [ translate ]);


    return (
        <div className="relative h-full overflow-x-hidden max-w-screen" ref={ categoriesContainerRef }>

            { isLeftVisible &&
                <div className="bg-gradient-to-r from-[#0f0f0f] from-50% z-[999] to-transparent w-[100px] h-full absolute flex items-center top-0 left-0">
                    <button
                        className="bg-[#0f0f0f] rounded-full p-2 hover:bg-[#3f3f3f] z-50"
                        onClick={ () => {
                            setTranslate(translate => {
                                if (categoriesContainerRef.current == null) return;
                                const newTranslate = translate - TRANSLATE_VALUE;
                                if (newTranslate <= 0) return 0;
                                return newTranslate;
                            });
                        } }
                    >
                        <img src={ LeftArrowIcon } />
                    </button>
                </div>
            }

            <div className="flex items-center h-full gap-3 transition-all" style={ { transform: `translateX(-${translate}px)` } }>
                { PopulerCategories.map((category) => (
                    <div
                        className={ `py-[.4rem] px-3 rounded-lg bg-[#272727] transition cursor-pointer ${activedCategoryId === category.id ? 'bg-[#f1f1f1] hover:bg-white' : 'hover:bg-[#3f3f3f]'}` }
                        key={ category.id }
                        onClick={ () => setActivedCategoryId(category.id) }
                    >
                        <p className={ `text-sm font-semibold whitespace-nowrap select-none ${activedCategoryId === category.id ? 'text-[#0f0f0f]' : 'text-white'}` } >
                            { category.name }
                        </p>
                    </div>
                ))
                }
            </div>

            { isRightVisible &&

                <div className="bg-gradient-to-l from-[#0f0f0f] to-transparent from-50% w-[80px] h-full absolute flex items-center top-0 right-0 justify-end">
                    <button
                        className="bg-[#0f0f0f] rounded-full p-2 hover:bg-[#3f3f3f]"
                        onClick={ () => {
                            setTranslate(translate => {
                                if (categoriesContainerRef.current == null) return;
                                const newTranslate = translate + TRANSLATE_VALUE;
                                const edge = categoriesContainerRef.current.scrollWidth;
                                const width = categoriesContainerRef.current.clientWidth;
                                if (newTranslate + width >= edge) {
                                    return edge - width;
                                }
                                return newTranslate;
                            });
                        } }
                    >
                        <img src={ RightArrowIcon } />
                    </button>
                </div>

            }

        </div >
    );
};

export default Categories;