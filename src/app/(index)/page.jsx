"use client"
import React, { useState, useEffect, useRef } from 'react';

function Page() {
    const [show, setShow] = useState(false);
    const childRef = useRef(null);

    const handleToggle = (event) => {
        (childRef.current && childRef.current.contains(event.target)) ? setShow(pre => true) : setShow(pre => false);
    }

    useEffect(() => {
        document.addEventListener('click', handleToggle);
        return () => {
            document.removeEventListener('click', handleToggle);
        };
    }, [show]);

    return (
        <div>
            <div onClick={() => setShow(pre => !show)} className='w-full bg-red-600'>Parent</div>
            {
                show && <div ref={childRef} className='w-full bg-green-600'>Child</div>
            }
        </div>
    );
}

export default Page;
