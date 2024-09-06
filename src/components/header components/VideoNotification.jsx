import { Link } from 'react-router-dom';
import ProfilePic from '../../../public/pictures/profile-pic.jpg';
import { data } from 'autoprefixer';

import ThreeDots from '../../assets/header assets/three-dots.svg';

const VideoNotification = ({ videoRecomendationType, videoTitle, videoAuthorUserName, videoAuthorProfilePic, videoUploadHistory, videoThumbnail, videoIsOpened }) => {

    return (
        <div className="py-4 pl-5 w-full hover:bg-white/10">


            <Link className="flex w-full relative">

                <div className="flex items-center top-0 absolute">
                    { !videoIsOpened &&
                        <span className="w-[5px] h-[5px] bg-[#3ea6ff] rounded-[50%] -ml-3 mr-2" />
                    }

                    <div className="min-w-[48px] min-h-[48px] rounded-full overflow-hidden">

                        <Link>
                            <img
                                src={ videoAuthorProfilePic }
                                width={ 48 }
                                height={ 48 }
                            />
                        </Link>
                    </div>

                </div>


                <div className="flex flex-col gap-2 ml-16 max-w-[240px] font-[500]">
                    <h3 className="text-[#e7e7e7] text-sm">{ videoAuthorUserName } { videoRecomendationType.label } { videoRecomendationType.premierTimeLeft }: { videoTitle }</h3>
                    <p className="text-[#9c9c9c] text-sm font-[500]">{ 22 - videoUploadHistory } hours ago</p>
                </div>

                <div className="ml-3 min-w-[86px] min-h-[64px] overflow-hidden">
                    <img
                        src={ videoThumbnail }
                        alt="thumbnail"
                        width={ 86 }
                        className="rounded-lg"
                    />
                </div>

                <div className='flex w-[40px] h-[40px] items-center justify-center -mt-2 ml-1 rounded-full hover:bg-white/5'>
                    <img
                        src={ ThreeDots } alt="three-dots"
                        width={ 24 }
                        height={ 24 }
                        className="min-w-[24px] min-h-[24px]"
                    />
                </div>

            </Link>
        </div>
    );
};

export default VideoNotification;