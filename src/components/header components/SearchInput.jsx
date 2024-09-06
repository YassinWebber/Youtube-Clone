// Assets Importing
import { SearchIcon, XIcon, Mic } from '../../assets/index';

// Dependincies Importing
import { useState, useEffect, useRef } from 'react';

const isRTL = (text) => {
    const rtlRegex = /[\u0591-\u07FF]/;
    return rtlRegex.test(text);
};

const SearchInput = () => {

    const [ searchInpValue, setSearchInpValue ] = useState("");
    const [ inputDirection, setInputDirection ] = useState('ltr');
    const searchInpRef = useRef();
    const [ isSearchInpFocused, setisSearchInpFocused ] = useState(false);

    const [ openedDropDown, setOpenedDropDown ] = useState(-1);

    const handleInputClear = () => {
        setSearchInpValue('');
        setInputDirection('ltr');
        searchInpRef.current.focus();
    };

    useEffect(() => {
        isRTL(searchInpValue.toString()) ? setInputDirection('rtl') : setInputDirection('ltr');
    }, [ searchInpValue ]);

    return (
        <div className="max-sm:hidden flex flex-grow gap-3 h-full items-center w-[55vw] max-w-[1000px] justify-center">
            <div className="flex w-[60%] bg-[#121212] justify-between items-center rounded-full border border-[#303030] h-10">
                <div className={ `relative flex items-center flex-1 rounded-l-full pl-4 h-full ${isSearchInpFocused ? 'border border-[#1c62b9]' : ''}` }>
                    { isSearchInpFocused &&
                        <div className="pr-[0.8rem]">
                            <img
                                src={ SearchIcon }
                                width={ 24 }
                                height={ 24 }
                                className="min-w-[24px] min-h-[24px]"
                            />
                        </div>
                    }

                    <div className="flex w-full">
                        <input
                            type="text"
                            className="w-full placeholder:text-md placeholder:text-[#888888] border-none outline-none text-white text-md bg-transparent"
                            placeholder="Search"
                            value={ searchInpValue }
                            onChange={ e => setSearchInpValue(e.target.value) }
                            style={ { direction: inputDirection } }
                            ref={ searchInpRef }
                            onFocus={ () => setisSearchInpFocused(true) }
                            onBlur={ () => setisSearchInpFocused(false) }
                        />
                    </div>
                    { searchInpValue !== '' &&
                        <div
                            className="flex justify-center items-center rounded-full hover:bg-[#b8b8b850] cursor-pointer -mr-[0.20rem] z-10 p-2"
                            onClick={ handleInputClear }
                        >
                            <img
                                src={ XIcon }
                                alt="x-icon"
                                width={ 24 }
                                height={ 24 }
                                className="min-w-[24px] min-h-[24px]"
                            />
                        </div>
                    }
                </div>

                <button className="flex justify-center items-center min-w-[65px] h-full bg-[#232323] rounded-r-full border-l border-l-[#303030] cursor-pointer">
                    <img
                        src={ SearchIcon }
                        width={ 24 }
                        height={ 24 }
                    />
                </button>
            </div>

            <div className="bg-[#272727] p-[0.5rem] rounded-full hover:bg-[#3D3D3D] cursor-pointer max-md:hidden">
                <img src={ Mic } className="min-w-[24px] min-h-[24px]" width={ 24 } height={ 24 } />
            </div>
        </div>
    );
};

export default SearchInput;