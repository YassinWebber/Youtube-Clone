import {
    MultichoicesIcon, GoogleIcon, AccountsIcon, SignOutIcon, YoutubeStudioIcon, PurchasesIcon, PersonalDataIcon, DarkAppearanceIcon, LanguagesIcon, ProtectionIcon, PlanetIcon, KeyboardIcon, SettingsIcon, QuestionMarkIcon, FeedbackIcon, VideoIcon, LiveIcon, HomeIcon, ActivedHomeIcon, ShortsIcon, ActivedShortsIcon, SubscriptionsIcon, ActivedSubscriptionsIcon, RotatedArrowIcon, HistoryIcon, ActivedHistoryIcon, PlaylistIcon, ActivedPlaylistIcon, YourVideosIcon, WatchLaterIcon, ActivedWatchLaterIcon, LikedVideosIcon, ActivedLikedVideosIcon,
    TrendingIcon, ActivedTrendingIcon, MusicIcon, ActivedMusicIcon, ActivedLiveIcon, ControllerIcon, ActivedControllerIcon, SportsIcon, ActivedSportsIcon, ColoredYoutubeIcon, ColoredYoutubeStudioIcon, ColoredYoutubeMusicIcon, ColoredYoutubeKidsIcon, FlagIcon, ActivedFlagIcon, ActivedSettingsIcon, VideosIcon, ActivedVideosIcon,
} from "../assets/index";

import ProfilePic from '../../public/pictures/profile-pic.jpg';

export const profileDropMenu = [
    {
        name: "account-management",
        id: 1,
        content: [
            {
                icon: GoogleIcon,
                label: 'Google Account',
                id: 1,
            },
            {
                icon: AccountsIcon,
                label: 'Switch account',
                id: 2,
                multichoices: true, MultichoicesIcon,
            },
            {
                icon: SignOutIcon,
                label: 'Sign out',
                id: 3,
            },
        ]
    },
    {
        name: 'account-businesses',
        id: 2,
        content: [
            {
                icon: YoutubeStudioIcon,
                label: 'Youtube Studio',
                id: 1,
            },
            {
                icon: PurchasesIcon,
                label: 'Purchases and membershipsa',
                id: 2,
            }
        ]
    },
    {
        name: 'account-general-settings',
        id: 3,
        content: [
            {
                icon: PersonalDataIcon,
                label: 'Your data in YouTube',
                id: 1,
            },
            {
                icon: DarkAppearanceIcon,
                label: 'Appearance: Dark',
                id: 2,
                multichoices: true,
                MultichoicesIcon,
            },
            {
                icon: LanguagesIcon,
                label: 'Language: English',
                id: 3,
                multichoices: true,
                MultichoicesIcon,
            },
            {
                icon: ProtectionIcon,
                label: 'Restricted Mode: Off',
                id: 4,
                multichoices: true,
                MultichoicesIcon,
            },
            {
                icon: PlanetIcon,
                label: 'Location: Egypt',
                id: 5,
                multichoices: true,
                MultichoicesIcon,
            },
            {
                icon: KeyboardIcon,
                label: 'Keyboard shortcuts',
                id: 6,
            },
        ]
    },
    {
        name: 'account-settings',
        id: 4,
        content: [
            {
                icon: SettingsIcon,
                label: 'Settings',
            },
        ],
    },
    {
        name: 'user-feedback',
        id: 5,
        content: [
            {
                icon: QuestionMarkIcon,
                label: 'Help',
                id: 1,
            },
            {
                icon: FeedbackIcon,
                label: 'Send feedback',
                id: 2,
            }
        ]
    }
];

export const videos = [
    {
        videoTitle: '',
        videoUploadHistory: '',
        videoAuthorUserName: '',
        videoAuthorProfilePic: '',
        videoThumbnail: '',
        videoViewsCount: '',
        videoLikesCount: ''
    }

];

const videoRecomendationTypes = {
    forYou: {
        label: "For you"
    },
    newUpload: {
        label: "uploaded"
    },
    premiering: {
        premieringNow: {
            label: "premiering now"
        },
        willPremier: {
            label: "premiering in",
            premierTimeLeft: '30 minutes'
        }
    },
    live: {
        label: "is live"
    }
};

export const notificationVideos = [
    {
        videoTitle: 'How To Start a Cashflow Business From Zero (2024)',
        videoUploadHistory: '19',
        videoAuthorUserName: 'Imad Gadzhi',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/XDA6ig1JeTk6W84g4ipe4LhkWsghnDjq1Zuod27XxRrLkthoLBC3gj_zxQcop1kSBzw3BKIj=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/M8ea_6JbBCY/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.newUpload,
        videoIsOpened: false,
        videoId: 1,
    },
    {
        videoTitle: "『DON'T CARE』-「ANDREW TATE EDIT 」",
        videoUploadHistory: '17',
        videoAuthorUserName: 'REALWORLDTUTOR',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/t-1tVJiV1V9lO5INaXP6DKMCOwNoL7oK0VsgZapgdSzHx3-f4nIPSE8UtMPbMf769YsFhy8l=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/f3xsXsoL3tc/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.forYou,
        videoIsOpened: true,
        videoId: 2,
    },
    {
        videoTitle: 'لصوص لكن شرفاء',
        videoUploadHistory: '16',
        videoAuthorUserName: 'New Media Academy Life',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/9UmxWVBc8ENWNEI0SvKotYZ7JdCEWNmA9gZtv64uKQQMW1rxkhiSdqGK53OdNlhKRox6oc61cQ=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/opQIQ5Xhkb4/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.premiering.premieringNow,
        videoIsOpened: false,
        videoId: 3,
    },
    {
        videoTitle: 'لصوص لكن شرفاء',
        videoUploadHistory: '16',
        videoAuthorUserName: 'New Media Academy Life',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/9UmxWVBc8ENWNEI0SvKotYZ7JdCEWNmA9gZtv64uKQQMW1rxkhiSdqGK53OdNlhKRox6oc61cQ=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/opQIQ5Xhkb4/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.premiering.willPremier,
        videoIsOpened: true,
        videoId: 4,
    },
    {
        videoTitle: 'Only The Best Developers Understand How This Works',
        videoUploadHistory: '14',
        videoAuthorUserName: 'Web Dev Simplified',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/WqNqeMjd28I/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.newUpload,
        videoIsOpened: false,
        videoId: 5,
    },
    {
        videoTitle: 'مدينة عربية عريقة مبنية داخل فوهة بركان - عدن اليمن 🇾🇪 Yemen',
        videoUploadHistory: '13',
        videoAuthorUserName: 'Joe HaTTab',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/96CYBF7jrMfaFOYsiKRCUvBj_MHw1mytQyPo-SItjAn-LkrUO77ZVusowBiyGa5PrXtmnic9=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/75HKGq4T1AU/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.newUpload,
        videoIsOpened: true,
        videoId: 6,
    },
    {
        videoTitle: 'تسلا 2 | الدحيح',
        videoUploadHistory: '11',
        videoAuthorUserName: 'New Media Academy Life',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/9UmxWVBc8ENWNEI0SvKotYZ7JdCEWNmA9gZtv64uKQQMW1rxkhiSdqGK53OdNlhKRox6oc61cQ=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/25o4-Tl-B58/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.premiering.premieringNow,
        videoIsOpened: false,
        videoId: 7,
    },
    {
        videoTitle: 'Ex-OpenAI genius launches new “Super Intelligence” company',
        videoUploadHistory: '11',
        videoAuthorUserName: 'Fireship',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/ytc/AIdro_mKzklyPPhghBJQH5H3HpZ108YcE618DBRLAvRUD1AjKNw=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/hUrrHPVHeLM/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.forYou,
        videoIsOpened: true,
        videoId: 8,
    },
    {
        videoTitle: 'تسلا 2 | الدحيح',
        videoUploadHistory: '11',
        videoAuthorUserName: 'New Media Academy Life',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/9UmxWVBc8ENWNEI0SvKotYZ7JdCEWNmA9gZtv64uKQQMW1rxkhiSdqGK53OdNlhKRox6oc61cQ=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/25o4-Tl-B58/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.premiering.willPremier,
        videoIsOpened: false,
        videoId: 9,
    },
    {
        videoTitle: 'إزاي تعمل شركة قيمتها ملايين بالحب؟ بودكاست دروس',
        videoUploadHistory: '5',
        videoAuthorUserName: 'دروس أونلاين',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/ytc/AIdro_mKx9HUsJSG7Fgg_TKvf4W-Q0ZPCAz7KE1uou2xCxdShY4=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/fhZm-hwV_mQ/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.newUpload,
        videoIsOpened: true,
        videoId: 10,
    },
    {
        videoTitle: 'المستوى التاني من كورس الويب مجانا',
        videoUploadHistory: '1',
        videoAuthorUserName: 'It Legend',
        videoAuthorProfilePic: 'https://yt3.ggpht.com/LbauxrYEoqQ92QAcZmxv4g7Fmhcis1mSxiMrlA5wwUvPU10A_dOw02qQ-i4mq5nwBEZJDffMqg=s88-c-k-c0x00ffffff-no-rj',
        videoThumbnail: 'https://i.ytimg.com/vi/HGniYjfD0f8/hqdefault.jpg',
        videoRecomendationType: videoRecomendationTypes.forYou,
        videoIsOpened: false,
        videoId: 11,
    },
];

export const createVideoDropDown = [
    {
        icon: VideoIcon,
        label: 'Upload video',
        id: 1,
    },
    {
        icon: LiveIcon,
        label: 'Go live',
        id: 2,
    },
];

export const sidebarSections = [

    {
        hasTitle: false,
        links: [
            {
                icon: HomeIcon,
                activedIcon: ActivedHomeIcon,
                label: 'Home',
                path: '/'
            },
            {
                icon: ShortsIcon,
                activedIcon: ActivedShortsIcon,
                label: 'Shorts',
                path: '/shorts',
            },
            {
                icon: SubscriptionsIcon,
                activedIcon: ActivedSubscriptionsIcon,
                label: 'Subscriptions',
                path: '/subscriptions',
            }
        ]
    },
    {
        hasTitle: false,
        links: [
            {
                icon: RotatedArrowIcon,
                label: 'You',
                path: '/you',
            },
            // {
            //     icon: YourChannelIcon,
            //     activedIcon: YourChannelIcon,
            //     label: 'Your channel',
            //     path: '/@user',
            // },
            {
                icon: HistoryIcon,
                activedIcon: ActivedHistoryIcon,
                label: 'History',
                path: '/history',
            },
            {
                icon: PlaylistIcon,
                activedIcon: ActivedPlaylistIcon,
                label: 'Playlists',
                path: '/playlists',
            },
            {
                icon: YourVideosIcon,
                activedIcon: YourVideosIcon,
                label: 'Your videos',
                path: '/your-videos',
            },
            {
                icon: WatchLaterIcon,
                activedIcon: ActivedWatchLaterIcon,
                label: 'Watch later',
                path: '/watch-later',
            },
            {
                icon: LikedVideosIcon,
                activedIcon: ActivedLikedVideosIcon,
                label: 'Liked videos',
                path: '/liked-videos',
            },
        ]
    },
    {
        hasTitle: true,
        title: 'Subscriptions',
        links: [
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-1',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-2',
                isNewVideosChecked: false
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-3',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-4',
                isNewVideosChecked: false
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-5',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-6',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-7',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-8',
                isNewVideosChecked: false
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-9',
                isNewVideosChecked: false
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-10',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-11',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-12',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-13',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-14',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-15',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-16',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-17',
                isNewVideosChecked: false
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-18',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-19',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-20',
                isNewVideosChecked: false
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-21',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-22',
                isNewVideosChecked: false
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-23',
                isNewVideosChecked: false
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-24',
                isNewVideosChecked: true
            },
            {
                icon: ProfilePic,
                label: 'Youtuber',
                path: '/@youtuber-25',
                isNewVideosChecked: true
            }
        ]
    },
    {
        hasTitle: true,
        title: 'Explore',
        links: [
            {
                icon: TrendingIcon,
                activedIcon: ActivedTrendingIcon,
                label: 'Trending',
                path: '/trending',
            },
            {
                icon: MusicIcon,
                activedIcon: ActivedMusicIcon,
                label: 'Music',
                path: '/music',
            },
            {
                icon: LiveIcon,
                activedIcon: ActivedLiveIcon,
                label: 'Live',
                path: '/live',
            },
            {
                icon: ControllerIcon,
                activedIcon: ActivedControllerIcon,
                label: 'Gaming',
                path: '/gaming',
            },
            {
                icon: SportsIcon,
                activedIcon: ActivedSportsIcon,
                label: 'Sports',
                path: '/sports',
            },
        ]
    },
    {
        hasTitle: true,
        title: 'More from YouTube',
        links: [
            {
                icon: ColoredYoutubeIcon,
                activedIcon: ColoredYoutubeIcon,
                label: 'YouTube Premium',
                path: '/premium',
            },
            {
                icon: ColoredYoutubeStudioIcon,
                activedIcon: ColoredYoutubeStudioIcon,
                label: 'YouTube Studio',
                path: '/youtube-studio',
            },
            {
                icon: ColoredYoutubeMusicIcon,
                activedIcon: ColoredYoutubeMusicIcon,
                label: 'YouTube Music',
                path: '/youtube-music',
            },
            {
                icon: ColoredYoutubeKidsIcon,
                activedIcon: ColoredYoutubeKidsIcon,
                label: 'YouTube Kids',
                path: '/youtube-kids',
            },
        ]
    },
    {
        hasTitle: false,
        links: [
            {
                icon: SettingsIcon,
                activedIcon: ActivedSettingsIcon,
                label: 'Settings',
                path: '/settings',
            },
            {
                icon: FlagIcon,
                activedIcon: ActivedFlagIcon,
                label: 'Report',
                path: '/report',
            },
            {
                icon: QuestionMarkIcon,
                activedIcon: QuestionMarkIcon,
                label: 'Helo',
                path: '/help',
            },
            {
                icon: FeedbackIcon,
                activedIcon: FeedbackIcon,
                label: 'Send feedback',
                path: '/feedback',
            },
        ]
    },
];

export const sidebarFooterLinks = [
    {
        links: [
            {
                linkName: 'About',
                href: '/about'
            },
            {
                linkName: 'Press',
                href: '/press'
            },
            {
                linkName: 'Copyright',
                href: '/copyright'
            },
            {
                linkName: 'Contact us',
                href: '/contact'
            },
            {
                linkName: 'Creators',
                href: '/creators'
            },
            {
                linkName: 'Advertise',
                href: '/advertise'
            },
            {
                linkName: 'Developers',
                href: '/developers'
            }
        ]
    },
    {
        links: [
            {
                linkName: 'Terms',
                href: '/terms'
            },
            {
                linkName: 'Privacy',
                href: '/about'
            },
            {
                linkName: 'Policy & Safety',
                href: '/policies'
            },
            {
                linkName: 'How Youtube works',
                href: '/howyoutubeworks'
            },
            {
                linkName: 'Test new features',
                href: '/new'
            },
        ]
    },
];

export const collapsedSideBarLinks = [
    {
        icon: HomeIcon,
        activedIcon: ActivedHomeIcon,
        label: 'Home',
        path: '/',
    },
    {
        icon: ShortsIcon,
        activedIcon: ActivedShortsIcon,
        label: 'Shorts',
        path: '/shorts',
    },
    {
        icon: SubscriptionsIcon,
        activedIcon: ActivedSubscriptionsIcon,
        label: 'Subscriptions',
        path: '/subscriptions',
    },
    {
        icon: VideosIcon,
        activedIcon: ActivedVideosIcon,
        label: 'You',
        path: '/you',
    },
];