import React from 'react'
import UserProfileEditForm from '../client/UserProfileEditForm'
import { AiOutlineClose } from '@/data/icons/icons'

const ProfileEditModal = ({ setIsOpen }) => {
    return (
        <div class="relative w-[50rem] h-[50rem]">
            <div class="relative bg-white rounded-lg shadow">
                <div class="flex items-start justify-between p-4 border-b rounded-t">
                    <h3 class="text-xl font-semibold text-gray-900">
                        Edit Profile
                    </h3>
                    <button type="button" onClick={() => setIsOpen(pre => false)} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center" data-modal-hide="defaultModal">
                        <AiOutlineClose />
                    </button>
                </div>
                <UserProfileEditForm />
            </div>
        </div>
    )
}

export default ProfileEditModal