import React from 'react'

const UserProfileEditForm = () => {
    return (
        <form className="p-6 flex flex-col items-start justify-center gap-8 overflow-y-scroll">
            <div className="flex flex-col items-start justify-center gap-4 w-full">
                <div className='text-lg font-semibold'>
                    Profile Image
                </div>
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div>
            <div className="flex flex-col items-start justify-center gap-4 w-full">
                <div className='text-lg font-semibold'>
                    Banner Image
                </div>
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div>
            <div className='flex flex-col items-start justify-center gap-4'>
                <div className='text-lg font-semibold'>
                    Basic Info
                </div>
                <div class="inputGroup w-full">
                    <input type="text" required="" autocomplete="off" className='w-full' />
                    <label for="name">Name</label>
                </div>
                {/* <div className="form-group-input relative">
                    <input required="" type="text" className="input block w-full border-0 border-b-[1px] focus:border-b-0 focus:outline-none border-[#515151] bg-transparent py-1" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="label text-[#999] absolute -top-0">First Name</label>
                </div>
                <div className="form-group-input relative">
                    <input required="" type="text" className="input block w-full border-0 border-b-[1px] focus:border-b-0 focus:outline-none border-[#515151] bg-transparent py-1" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="label text-[#999] absolute -top-0">Last Name</label>
                </div>
                <div className="form-group-input relative">
                    <input required="" type="text" className="input block w-full border-0 border-b-[1px] focus:border-b-0 focus:outline-none border-[#515151] bg-transparent py-1" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="label text-[#999] absolute -top-0">Description</label>
                </div>
                <div className="form-group-input relative">
                    <input required="" type="text" className="input block w-full border-0 border-b-[1px] focus:border-b-0 focus:outline-none border-[#515151] bg-transparent py-1" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label className="label text-[#999] absolute -top-0">Tags</label>
                </div> */}
            </div>
        </form>
    )
}

export default UserProfileEditForm