import React, { useState } from 'react';
import { BiLogOut } from "react-icons/bi";

const LogoutBtn = () => {
    const [loading, setLoading] = useState(false); // TODO move to a hook
    const logout = () => { }; // TODO move to a hook

    return (
        <div className='mt-auto'>
            {!loading ? (
                <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
            ) : (
                <span className='loading loading-spinner'></span>
            )}
        </div>
    )
}

export default LogoutBtn;