import { AiFillPieChart, FiUser, BiSolidUserPin, GiThreeFriends, LiaVideoSolid } from '@/data/icons/icons'

export const Data = {
    sidebar: [
        {
            icon: <AiFillPieChart />,
            title: "Dashboard",
            link: '/'
        },
        {
            icon: <FiUser />,
            title: "User",
            sub: [
                {
                    icon: <BiSolidUserPin />,
                    title: "Profile",
                    link: '/user/profile/overview'
                },
                {
                    icon: <GiThreeFriends />,
                    title: "Friends",
                    link: '/user/friends'
                },
                {
                    icon: <LiaVideoSolid />,
                    title: "Videos",
                    link: '/user/videos'
                },
            ]
        },
        {
            icon: <AiFillPieChart />,
            title: "Dashboard",
            link: '/'
        },
    ],
}