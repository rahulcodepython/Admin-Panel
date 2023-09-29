import { AiFillPieChart, FiUser, BiSolidUserPin, GiThreeFriends, LiaVideoSolid } from '@/data/icons/icons'

export const Data = {
    sidebar: [
        {
            icon: <AiFillPieChart />,
            title: "Dashboard"
        },
        {
            icon: <FiUser />,
            title: "User",
            sub: [
                {
                    icon: <BiSolidUserPin />,
                    title: "Profile"
                },
                {
                    icon: <GiThreeFriends />,
                    title: "Friends"
                },
                {
                    icon: <LiaVideoSolid />,
                    title: "Videos"
                },
            ]
        },
        {
            icon: <AiFillPieChart />,
            title: "Dashboard"
        },
    ],
}