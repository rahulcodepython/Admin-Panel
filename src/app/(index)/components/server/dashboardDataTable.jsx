"use client"
import React from 'react'
import { BiUpArrowAlt, BiDownArrowAlt, LuFilterX, LuFilter, BiChevronRight, BiChevronLeft, BsEyeSlash, BsEye } from '@/data/icons'
import { Tooltip } from 'react-tooltip'

const DashboardDataTable = () => {
    const itemsPerPage = 4;

    const [header, setHeader] = React.useState([
        {
            name: "name",
            icon: {
                arrow: "up",
                dots: true
            }
        },
        {
            name: "email",
            icon: {
                arrow: "down",
                dots: true
            }
        },
        {
            name: "roll",
            icon: {
                arrow: "up",
                dots: true
            }
        },
        {
            name: "status",
            icon: {
                arrow: "up",
                dots: true
            }
        },
    ])

    const [data, setData] = React.useState([
        {
            id: 1,
            name: "Rahul Das",
            email: "rd21102004@gmail.com",
            roll: "maintainer",
            status: "active"
        },
        {
            id: 2,
            name: "Sneha Dutta",
            email: "sneha@gmail.com",
            roll: "author",
            status: "active"
        },
        {
            id: 3,
            name: "Arpita Das",
            email: "arpita@gmail.com",
            roll: "editor",
            status: "pending"
        },
        {
            id: 4,
            name: "Pradip Das",
            email: "pradip@gmail.com",
            roll: "subscriber",
            status: "pending"
        },
        {
            id: 5,
            name: "Ashish Das",
            email: "sashish@gmail.com",
            roll: "subscriber",
            status: "inactive"
        },
        {
            id: 6,
            name: "Tatini Das",
            email: "tatini@gmail.com",
            roll: "maintainer",
            status: "inactive"
        },
        {
            id: 7,
            name: "Tatini Das",
            email: "tatini@gmail.com",
            roll: "maintainer",
            status: "inactive"
        },
        {
            id: 8,
            name: "Tatini Das",
            email: "tatini@gmail.com",
            roll: "maintainer",
            status: "inactive"
        },
        {
            id: 9,
            name: "Tatini Das",
            email: "tatini@gmail.com",
            roll: "maintainer",
            status: "inactive"
        },
        {
            id: 10,
            name: "Tatini Das",
            email: "tatini@gmail.com",
            roll: "maintainer",
            status: "inactive"
        },
        {
            id: 11,
            name: "Tatini Das",
            email: "tatini@gmail.com",
            roll: "maintainer",
            status: "inactive"
        },
        {
            id: 12,
            name: "Tatini Das",
            email: "tatini@gmail.com",
            roll: "maintainer",
            status: "inactive"
        },
        {
            id: 13,
            name: "Tatini Das",
            email: "tatini@gmail.com",
            roll: "maintainer",
            status: "inactive"
        },
    ])

    const [showData, setShowData] = React.useState(data)
    const [showHeader, setShowHeader] = React.useState(header)
    const [page, setPage] = React.useState(1)
    const [showAllData, setShowAllData] = React.useState(false)
    const [filtered, setFiltered] = React.useState(false)
    const [showPage, setShowPage] = React.useState(false)

    const updateHeader = (item, arrow) => {
        const newHeader = header.map((value) => {
            if (value.name === item.name) {
                return {
                    ...value,
                    icon: {
                        ...value.icon,
                        arrow: arrow,
                    },
                };
            }
            return value;
        })

        setHeader(newHeader)
        setShowHeader(newHeader)
    }

    const sortDataASC = (value) => {
        let sortedData = []

        if (value === "name") {
            sortedData = [...showData].sort((a, b) => a.name.localeCompare(b.name));
        }
        else if (value === "email") {
            sortedData = [...showData].sort((a, b) => a.email.localeCompare(b.email));
        }
        else if (value === "roll") {
            sortedData = [...showData].sort((a, b) => a.roll.localeCompare(b.roll));

        }
        else if (value === "status") {
            sortedData = [...showData].sort((a, b) => a.status.localeCompare(b.status));
        }

        setShowData(sortedData);
    };

    const sortDataDESC = (value) => {
        let sortedData = []

        if (value === "name") {
            sortedData = [...showData].sort((a, b) => b.name.localeCompare(a.name));
        }
        else if (value === "email") {
            sortedData = [...showData].sort((a, b) => b.email.localeCompare(a.email));
        }
        else if (value === "roll") {
            sortedData = [...showData].sort((a, b) => b.roll.localeCompare(a.roll));

        }
        else if (value === "status") {
            sortedData = [...showData].sort((a, b) => b.status.localeCompare(a.status));
        }

        setShowData(sortedData);
    };

    const changeToASC = (item) => {
        updateHeader(item, "up")
        sortDataASC(item.name)
    }

    const changeToDESC = (item) => {
        updateHeader(item, "down")
        sortDataDESC(item.name)
    };

    const calculatePages = () => {
        const totalItems = data.length;
        return Math.ceil(totalItems / itemsPerPage);
    }

    const getDataForPage = (pageNumber, dataArray, itemsPerPage) => {
        const startIndex = (pageNumber - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return dataArray.slice(startIndex, endIndex);
    }

    React.useEffect(() => {
        setShowData(getDataForPage(page, data, itemsPerPage));
        setShowPage(true);
    }, [page])

    return (
        showPage && <div className='w-full col-span-12 flex flex-col justify-between gap-2'>
            <div className='bg-item-primary p-4 rounded-md flex justify-between items-center gap-4 text-white'>
                <div className='flex items-center justify-center gap-4'>
                    <select className='bg-transparent border-b-2 border-white focus:outline-none w-40'>
                        <option>hi</option>
                        <option>hi</option>
                        <option>hi</option>
                        <option>hi</option>
                    </select>
                    <input type='text' className='bg-transparent border-b-2 border-white focus:outline-none px-2' />
                </div>
                <div className='flex items-center justify-end gap-4'>
                    <div className='flex items-center justify-center gap-4'>
                        <div className=''>
                            <Tooltip id="filterx" />
                            <Tooltip id="filter" />
                            {
                                filtered ? <LuFilterX className='cursor-pointer focus:outline-none' onClick={() => {
                                    setFiltered(!filtered)
                                }} data-tooltip-id="filterx" data-tooltip-content="Unfilter" />
                                    :
                                    <LuFilter className='cursor-pointer focus:outline-none' onClick={() => {
                                        setFiltered(!filtered)
                                    }} data-tooltip-id="filter" data-tooltip-content="Filter" />
                            }
                        </div>
                        <div>
                            <Tooltip id="eyeslash" />
                            <Tooltip id="eye" />
                            {
                                showAllData ? <BsEyeSlash className='cursor-pointer focus:outline-none' onClick={() => {
                                    setShowAllData(!showAllData)
                                    setShowData(getDataForPage(1, data, itemsPerPage));
                                    setPage(1)

                                }} data-tooltip-id="eyeslash" data-tooltip-content="Show Limited" />
                                    : <BsEye className='cursor-pointer focus:outline-none' onClick={() => {
                                        setShowAllData(!showAllData)
                                        setShowData(data)
                                    }} data-tooltip-id="eye" data-tooltip-content="Show All" />
                            }
                        </div>
                    </div>
                    {
                        !showAllData && <div className='text-white font-semibold flex items-center justify-end gap-2'>
                            <button disabled={page === 1 ? true : false} onClick={() => { setPage(page - 1) }}>
                                <BiChevronLeft />
                            </button>
                            <div>{page} of {calculatePages()}</div>
                            <button disabled={page === calculatePages() ? true : false} onClick={() => { setPage(page + 1) }}>
                                <BiChevronRight />
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div className='bg-item-primary p-4 rounded-md h-full flex flex-col justify-between'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            {
                                showHeader.map((item, index) => {
                                    return <th key={index} className='uppercase font-bold text-center text-white p-4 group/header border border-white'>
                                        <div className='flex justify-between'>
                                            <span>
                                                {item.name}
                                            </span>
                                            <div className='flex items-center gap-3'>
                                                <div className='cursor-pointer invisible group-hover/header:visible hover:bg-white hover:bg-opacity-10 rounded-full p-1 text-white'>
                                                    {
                                                        item.icon.arrow === 'up' ? <BiUpArrowAlt onClick={() => { changeToDESC(item) }} />
                                                            : item.icon.arrow === 'down' ? <BiDownArrowAlt onClick={() => { changeToASC(item) }} />
                                                                : null
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showData.map((item, index) => {
                                return <tr className='border border-red-500' key={index}>
                                    <td className='border border-white text-white p-4'>{item.name}</td>
                                    <td className='border border-white text-white p-4'>{item.email}</td>
                                    <td className='border border-white text-white p-4'>{item.roll}</td>
                                    <td className='border border-white text-white p-4'>{item.status}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default DashboardDataTable