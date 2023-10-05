"use client"
import React from 'react'
import Modal from 'react-modal';
import { AiOutlineClose, FiEdit } from '@/data/icons/icons'
import UserProfileEditForm from './UserProfileEditForm';
import ProfileEditModal from '../server/ProfileEditModal';
import EditButton from '../server/EditViewButton';

const UserProfileEditLayout = () => {
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
            <EditButton setIsOpen={setIsOpen} />
            <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(pre => false)} style={customStyles} contentLabel="Edit Modal">
                <ProfileEditModal setIsOpen={setIsOpen} />
            </Modal>
        </>
    )
}

export default UserProfileEditLayout