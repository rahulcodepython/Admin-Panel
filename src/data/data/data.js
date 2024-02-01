import { BiHomeSmile } from "@/data/icons/icons";

export const Data = {
    sidebar: [
        {
            name: 'Dashboard',
            navItem: [
                {
                    title: "Dashboards",
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    sub: [
                        {
                            title: "CRM",
                            to: "/dashboard/default",
                        },
                        {
                            title: "Analytics",
                            to: "/dashboard/analytics",
                        },
                        {
                            title: "eCommerce",
                            to: "/dashboard/ecommerce",
                        },
                    ]
                }
            ]
        },
        {
            name: 'Apps',
            heading: 'Apps & Pages',
            navItem: [
                {
                    title: 'Calendar',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    to: '/calendar',
                },
                {
                    title: 'Invoice',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    sub: [
                        {
                            title: 'List',
                            to: '/invoice/list',
                        },
                        {
                            title: 'Preview',
                            to: '/invoice/preview',
                        },
                        {
                            title: 'Edit',
                            to: '/invoice/edit',
                        },
                        {
                            title: 'Add',
                            to: '/invoice/add',
                        }
                    ]
                },
                {
                    title: 'User',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    sub: [
                        {
                            title: 'List',
                            to: '/user/list',
                        },
                        {
                            title: 'View',
                            to: '/user/view',
                        }
                    ]
                },
                {
                    title: 'Roles & Permissions',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    sub: [
                        {
                            title: 'Roles',
                            to: '/roles-permissions/roles',
                        },
                        {
                            title: 'Permissions',
                            to: '/roles-permissions/permissions',
                        }
                    ]
                },
                {
                    title: 'Pages',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    sub: [
                        {
                            title: 'User Profile',
                            to: '/pages/authentication',
                        },
                        {
                            title: 'Account Settings',
                            to: '/pages/coming-soon',
                        },
                        {
                            title: 'FAQ',
                            to: '/pages/error',
                        },
                        {
                            title: 'Pricing',
                            to: '/pages/faq',
                        },
                        {
                            title: 'Miscellaneous',
                            to: '/pages/miscellaneous',
                            sub: [
                                {
                                    title: 'Comming Soon',
                                    to: '/pages/miscellaneous/coming-soon',
                                },
                                {
                                    title: 'Under Maintenance',
                                    to: '/pages/miscellaneous/maintenance',
                                },
                                {
                                    title: 'Not Authorize - 401',
                                    to: '/pages/miscellaneous/error',
                                },
                                {
                                    title: 'Page Not Found - 404',
                                    to: '/pages/miscellaneous/not-found',
                                },
                            ]

                        }
                    ]
                },
                {
                    title: 'Auth Pages',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    sub: [
                        {
                            title: 'Login',
                            sub: [
                                {
                                    title: 'Login v1',
                                    to: '/auth/login',
                                },
                                {
                                    title: 'Login v2',
                                    to: '/auth/login',
                                },
                            ]
                        },
                        {
                            title: 'Register',
                            sub: [
                                {
                                    title: 'Register v1',
                                    to: '/auth/register',
                                },
                                {
                                    title: 'Register v2',
                                    to: '/auth/register',
                                },
                                {
                                    title: 'Register Multi Steps',
                                    to: '/auth/register',
                                },
                            ]
                        },
                        {
                            title: 'Verify Email',
                            sub: [
                                {
                                    title: 'Verify Email v1',
                                    to: '/auth/register',
                                },
                                {
                                    title: 'Verify Email v2',
                                    to: '/auth/register',
                                },
                            ]
                        },
                        {
                            title: 'Forgot Password',
                            sub: [
                                {
                                    title: 'Forgot Password v1',
                                    to: '/auth/forgot-password',
                                },
                                {
                                    title: 'Forgot Password v2',
                                    to: '/auth/forgot-password',
                                },
                            ]
                        },
                        {
                            title: 'Reset Password',
                            sub: [
                                {
                                    title: 'Reset Password v1',
                                    to: '/auth/reset-password',
                                },
                                {
                                    title: 'Reset Password v2',
                                    to: '/auth/reset-password',
                                },
                            ]
                        },
                        {
                            title: 'Two Steps',
                            sub: [
                                {
                                    title: 'Two Steps v1',
                                    to: '/auth/lock-screen',
                                },
                                {
                                    title: 'Two Steps v2',
                                    to: '/auth/lock-screen',
                                },
                            ]
                        },
                    ]
                },
                {
                    title: 'Wizard Examples',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    sub: [
                        {
                            title: 'Checkout',
                            to: '/wizard/checkout',
                        },
                        {
                            title: 'Property Listing',
                            to: '/wizard/property-listing',
                        },
                        {
                            title: 'Create Deal',
                            to: '/wizard/create-deal',
                        }
                    ]
                },
                {
                    title: 'Dialog Examples',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    to: '/dialog',
                },
                {
                    title: 'Widgets Examples',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    sub: [
                        {
                            title: 'Advance',
                            to: '/widgets/general',
                        },
                        {
                            title: 'Statistic',
                            to: '/widgets/chart',
                        },
                        {
                            title: 'Chart',
                            to: '/widgets/list',
                        },
                        {
                            title: 'Gamification',
                            to: '/widgets/list',
                        }
                    ]
                }
            ],
        },
        {
            name: 'UI Elements',
            heading: 'Forms & Tables',
            navItem: [
                {
                    title: 'Form Layouts',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    to: '/form-layouts',
                },
                {
                    title: 'Form Wizard',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    to: '/form-wizard',
                },
                {
                    title: 'React Tables',
                    icon: <BiHomeSmile className="w-[22px] h-[22px]" />,
                    to: '/react-tables',
                }
            ]
        }
    ]
};