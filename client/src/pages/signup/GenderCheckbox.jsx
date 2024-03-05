import React from 'react';

const GenderCheckbox = () => {
    return (
        <div className='flex'>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='text-white'>Male</span>
                    <input type='checkbox' className='checkbox border-gray-400' />
                </label>
            </div>
            <div className='form-control'>
                <label className={`label gap-2 cursor-pointer`}>
                    <span className='text-white'>Female</span>
                    <input type='checkbox' className='checkbox border-gray-400' />
                </label>
            </div>
        </div>
    );
};
export default GenderCheckbox;