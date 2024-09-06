
// Components Importing
import { GrayLine, VideoNotification } from '../index';

// Assets Importing
import { Notification, SettingsIcon } from '../../assets/index';

// Dependencies Importing 
import { useState } from 'react';

// Constants Importing
import { notificationVideos } from '../../constants/index';

const VideosNotification = ({ openedDropDown, setOpenedDropDown }) => {

    return (
        <div className="" style={ { direction: 'rtl' } }>
            <div
                className=" hover:bg-[#272727] p-[0.5rem] rounded-full overflow-hidden cursor-pointer transition z-30"
                onClick={ () => (openedDropDown === 1) ? setOpenedDropDown(-1) : setOpenedDropDown(1) }
            >
                <img
                    src={ Notification }
                    width={ 24 }
                    height={ 24 }
                    className="min-w-[24px] min-h-[24px]"
                />
            </div>
            { openedDropDown === 1 &&
                <>
                    <div
                        style={ { direction: 'ltr' } }
                        className="absolute w-[480px] max-h-[1000px] bg-[#282828] rounded-xl overflow-hidden"
                    >
                        <div className="flex w-full justify-between items-center py-1 pl-4 pr-2">
                            <div className="">
                                <h3 className="text-[#f1f1f1] text-md">Notifications</h3>
                            </div>
                            <div className="rounded-full hover:bg-white/5 w-[40px] h-[40px] flex justify-center itmes-center">
                                <img src={ SettingsIcon } width={ 24 } height={ 24 } alt="settings" />
                            </div>
                        </div>

                        <GrayLine />

                        <div className="w-full max-h-[593px] overflow-auto" style={ { scrollbarWidth: 'thin', scrollbarColor: '#717171 transparent' } }>
                            { notificationVideos.map((video, index) => (
                                <VideoNotification key={ index } { ...video } />
                            )) }
                        </div>



                    </div>
                    <div
                        className="absolute top-0 left-0 w-[90vw] h-[100vh] -z-20"
                        onClick={ () => setOpenedDropDown(-1) }
                    />
                </>
            }
        </div>
    );
};

export default VideosNotification;