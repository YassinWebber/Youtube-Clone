// Assets Importing
import ProfilePic from '../../public/pictures/profile-pic.jpg';

// Components Importing
import { Categories } from '../components';

const Home = () => {

    const videoImg = 'https://i.ytimg.com/vi/6ZEdexqVrBs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjC8T1GqVhOuNUC8pxhPE1bBuNsw';

    return (
        <div className="grid grid-rows-[56px_1fr]">
            <div className="bg-[#0f0f0f] row-start-1 row-end-2 sticky top-[54px] overflow-x-hidden" >
                <Categories />
            </div>
            <div className="p-6">
                <div className="grid gap-4 homepage-grid">
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" src={ videoImg } />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 mb-8">
                        <div className="w-full bg-[#919191] rounded-xl overflow-hidden aspect-video">
                            <img className="object-cover rounded-xl" />
                        </div>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full overflow-hidden">
                                <img src={ ProfilePic } />
                            </div>
                            <div className="flex flex-col">
                                <h3 className="font-semibold text-md text-white">How to master React.js</h3>
                                <div className="text-[#a6a6a6] text-sm">
                                    <p>Web Dev Simplfied</p>
                                    <p>2M Views • 1 Month ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;