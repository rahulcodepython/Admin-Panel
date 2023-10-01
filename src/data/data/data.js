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
    user: {
        profile: {
            overview: [],
            experience: [
                {
                    title: "Work",
                    data: []
                },
                {
                    title: "University",
                    data: [
                        {
                            title: 'BCA (Bachelor of Computer Application) at Brainware University',
                            subtitle: 'from Aug, 28, 2023 to Present',
                            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptatem?'
                        }
                    ]
                },
                {
                    title: "High School",
                    data: [
                        {
                            title: 'Kalyangarh Vidyamandir',
                            subtitle: 'from Aug, 28, 2023 to Present',
                            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptatem?',
                            visibility: 'private'
                        },
                        {
                            title: 'Kalyangarh Bidhan Chandra Vidyapeeth',
                            subtitle: 'from Aug, 28, 2023 to Present',
                            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptatem?'
                        },
                    ]
                }
            ],
            residence: [
                {
                    title: "Place Lived",
                    data: [
                        {
                            title: 'Kalyangarh, West Bengal',
                            subtitle: 'from Aug, 28, 2023 to Present',
                            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, voluptatem?'
                        }
                    ]
                }
            ],
            details: [
                {
                    title: 'Basic',
                    data: [
                        {
                            title: 'Male',
                            subtitle: 'Gender'
                        },
                        {
                            title: 'October, 21, 2004',
                            subtitle: 'Date Of Birth',
                            visibility: "private"
                        },
                        {
                            title: 'Bengali, English',
                            subtitle: 'Medium'
                        },
                    ]
                },
                {
                    title: 'Contact',
                    data: [
                        {
                            title: '9775150082',
                            subtitle: 'Mobile'
                        },
                        {
                            title: 'rd21102004@gmail.com',
                            subtitle: 'Email'
                        },
                    ]
                },
                {
                    title: 'Social',
                    data: [
                        {
                            title: 'rahul_2004_das',
                            subtitle: 'Instagram'
                        },
                        {
                            title: 'rahulcodepython.vercel.app',
                            subtitle: 'Website'
                        },
                    ]
                }
            ],
            relationship: [
                {
                    title: "Relationship",
                    data: [
                        {
                            title: 'Single',
                        }
                    ]
                },
                {
                    title: "Family Members",
                    data: [
                        {
                            title: "Pradip Das",
                            subtitle: "Father",
                            visibility: "private"
                        }
                    ]
                }
            ],
            about: [
                {
                    title: "About You",
                    data: [
                        {
                            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.'
                        }
                    ]
                },
                {
                    title: "Other Names",
                    data: [
                        {
                            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.',
                            visibility: "private"
                        }
                    ]
                },
                {
                    title: "Favourite Quotes",
                    data: [
                        {
                            title: 'Success is a journey, not a destination.'
                        }
                    ]
                },
            ],
        }
    }
}