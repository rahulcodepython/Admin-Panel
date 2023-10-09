"use client"
import React from 'react'
import Modal from 'react-modal';
import { FiEdit } from '@/data/icons/icons'

const FormEditModal = ({ status, path, item }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const customStyles = {
        content: {
            border: 'none',
            background: 'none',
            borderRadius: '0px',
            outline: '0px',
            padding: '0px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    React.useEffect(() => {
        Modal.setAppElement(document.getElementById('editFormModal'));
    }, [])

    return (
        <div id='editFormModal'>
            <span onClick={() => setIsOpen(pre => true)}>
                <FiEdit className='cursor-pointer' />
            </span>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(pre => false)} style={customStyles} contentLabel="Example Modal">
                <section className="w-full overflow-y-scroll h-[80vh]">
                    <div className="relative flex flex-col w-full rounded-lg bg-gray-100">
                        <div className="p-4 bg-white">
                            <div className="text-center flex items-center justify-between">
                                <h6 className="text-gray-700 text-xl font-bold">
                                    My account
                                </h6>
                                <div className='flex justify-between items-center gap-4'>
                                    {
                                        status === 'update' ? <button className="bg-black text-white hover:bg-gray-100 hover:text-black hover:scale-125 hover:border hover:border-black font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none ease-linear transition-all duration-150" type="button">
                                            Update
                                        </button>
                                            : null
                                    }
                                    <button onClick={() => setIsOpen(pre => false)} className="bg-black text-white hover:bg-gray-100 hover:text-black hover:scale-125 hover:border hover:border-black font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none ease-linear transition-all duration-150" type="button">
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                        <form className="flex flex-col justify-center divide-y-2 gap-4 divide-gray-300 first:divide-y-0 px-4 lg:px-10 py-10">
                            <div className='flex flex-col justify-start gap-8 pt-4 first:pt-0'>
                                <h6 className="text-gray-400 text-sm font-bold uppercase">
                                    {path === 'work' ? 'Work & Education' : path === 'university' ? 'University' : path === 'highschool' ? 'Hign School' : null}
                                </h6>
                                <div className="grid grid-cols-1 gap-4">
                                    {
                                        path === 'work' ? <div className="col-span-1">
                                            <div className="w-full flex flex-col gap-2">
                                                <label className="block uppercase text-gray-600 text-xs font-bold" htmlFor="grid-password">
                                                    Work
                                                </label>
                                                <div className='grid grid-cols-3 gap-4'>
                                                    <input type="text" className="col-span-3 border-0 p-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" placeholder='Company Name' readOnly />
                                                    <input type="text" className="col-span-3 border-0 p-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" placeholder='Description' readOnly />
                                                    <input type="text" className="col-span-3 border-0 p-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" placeholder='Post' readOnly />
                                                    <div className='col-span-1 text-xs flex items-center justify-center gap-4'>
                                                        <span className='flex items-center gap-1 w-full'>
                                                            from
                                                            <input type='date' className='p-3 w-full placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150' />
                                                        </span>
                                                        <span className='flex items-center gap-1 w-full'>
                                                            to
                                                            <input type='date' className='p-3 w-full placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150' />
                                                        </span>
                                                        <span className='flex items-center gap-1 w-full'>
                                                            or
                                                            <button value={'present'} className='p-3 bg-black text-white rounded-lg'>
                                                                Present
                                                            </button>
                                                        </span>
                                                    </div>
                                                    <span className='flex items-center justify-center gap-4 text-sm'>
                                                        <input type='checkbox' />
                                                        I am currently working here
                                                    </span>
                                                    <div className='flex items-center justify-center gap-4'>
                                                        <span className='flex items-center justify-center gap-4 text-sm'>
                                                            <input type='radio' name='access' />
                                                            Public
                                                        </span>
                                                        <span className='flex items-center justify-center gap-4 text-sm'>
                                                            <input type='radio' name='access' />
                                                            Private
                                                        </span>
                                                    </div>
                                                    <div className='col-span-3 text-end'>
                                                        <a href="#_" className="relative text-sm inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                                                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                            </span>
                                                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                            </span>
                                                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                                                Add
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> :
                                            path === 'university' ?
                                                <div className="col-span-1">
                                                    <div className="w-full flex flex-col gap-2">
                                                        <label className="block uppercase text-gray-600 text-xs font-bold" htmlFor="grid-password">
                                                            University
                                                        </label>
                                                        <div className='grid grid-cols-3 gap-4'>
                                                            <input type="text" className="col-span-3 border-0 p-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" placeholder='University Name' readOnly />
                                                            <input type="text" className="col-span-3 border-0 p-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" placeholder='Description' readOnly />
                                                            <input type="text" className="col-span-3 border-0 p-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" placeholder='Course Name' readOnly />
                                                            <div className='col-span-1 text-xs flex items-center justify-center gap-4'>
                                                                <span className='flex items-center gap-1 w-full'>
                                                                    from
                                                                    <input type='date' className='p-3 w-full placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150' />
                                                                </span>
                                                                <span className='flex items-center gap-1 w-full'>
                                                                    to
                                                                    <input type='date' className='p-3 w-full placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150' />
                                                                </span>
                                                                <span className='flex items-center gap-1 w-full'>
                                                                    or
                                                                    <button value={'present'} className='p-3 bg-black text-white rounded-lg'>
                                                                        Present
                                                                    </button>
                                                                </span>
                                                            </div>
                                                            <span className='flex items-center justify-center gap-4 text-sm'>
                                                                <input type='checkbox' />
                                                                Graduated
                                                            </span>
                                                            <div className='flex items-center justify-center gap-4'>
                                                                <span className='flex items-center justify-center gap-4 text-sm'>
                                                                    <input type='radio' name='access' />
                                                                    Public
                                                                </span>
                                                                <span className='flex items-center justify-center gap-4 text-sm'>
                                                                    <input type='radio' name='access' />
                                                                    Private
                                                                </span>
                                                            </div>
                                                            <div className='col-span-3 text-end'>
                                                                <a href="#_" className="relative text-sm inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                                                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                                                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                                    </span>
                                                                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                                    </span>
                                                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                                                        Add
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> :
                                                path === 'highschool' ? <div className="col-span-1">
                                                    <div className="w-full flex flex-col gap-2">
                                                        <label className="block uppercase text-gray-600 text-xs font-bold" htmlFor="grid-password">
                                                            High School
                                                        </label>
                                                        <div className='grid grid-cols-3 gap-4'>
                                                            <input type="text" className="col-span-3 border-0 p-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" placeholder='School Name' readOnly />
                                                            <input type="text" className="col-span-3 border-0 p-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09" placeholder='Description' readOnly />
                                                            <div className='col-span-1 text-xs flex items-center justify-center gap-4'>
                                                                <span className='flex items-center gap-1 w-full'>
                                                                    from
                                                                    <input type='date' className='p-3 w-full placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150' />
                                                                </span>
                                                                <span className='flex items-center gap-1 w-full'>
                                                                    to
                                                                    <input type='date' className='p-3 w-full placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150' />
                                                                </span>
                                                                <span className='flex items-center gap-1 w-full'>
                                                                    or
                                                                    <button value={'present'} className='p-3 bg-black text-white rounded-lg'>
                                                                        Present
                                                                    </button>
                                                                </span>
                                                            </div>
                                                            <span className='flex items-center justify-center gap-4 text-sm'>
                                                                <input type='checkbox' />
                                                                Graduated
                                                            </span>
                                                            <div className='flex items-center justify-center gap-4'>
                                                                <span className='flex items-center justify-center gap-4 text-sm'>
                                                                    <input type='radio' name='access' />
                                                                    Public
                                                                </span>
                                                                <span className='flex items-center justify-center gap-4 text-sm'>
                                                                    <input type='radio' name='access' />
                                                                    Private
                                                                </span>
                                                            </div>
                                                            <div className='col-span-3 text-end'>
                                                                <a href="#_" className="relative text-sm inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-black transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                                                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-black group-hover:h-full"></span>
                                                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                                    </span>
                                                                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                                    </span>
                                                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                                                                        Add
                                                                    </span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div> : null
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </Modal>
        </div>
    )
}

export default FormEditModal