"use client"
import React from 'react'
import Modal from 'react-modal';
import { AiOutlineClose, FiEdit } from '@/data/icons/icons'

const EditModalLayout = () => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '0',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'none',
            outline: 'none',
            padding: 0
        },
    };
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(pre => true)} className='bg-white text-black rounded-md px-4 py-2 font-semibold flex items-center justify-center gap-2'>
                <FiEdit />
                <span>
                    Edit
                </span>
            </button>
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(pre => false)} style={customStyles} contentLabel="Edit Modal">
                <div class="relative w-full max-w-2xl max-h-full">
                    <div class="relative bg-white rounded-lg shadow">
                        <div class="flex items-start justify-between p-4 border-b rounded-t">
                            <h3 class="text-xl font-semibold text-gray-900">
                                Terms of Service
                            </h3>
                            <button type="button" onClick={() => setIsOpen(pre => false)} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="defaultModal">
                                <AiOutlineClose />
                            </button>
                        </div>
                        <div class="p-6 space-y-6">
                            <p class="text-base leading-relaxed text-gray-500">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p class="text-base leading-relaxed text-gray-500">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                        <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                            <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I accept</button>
                            <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10">Decline</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default EditModalLayout