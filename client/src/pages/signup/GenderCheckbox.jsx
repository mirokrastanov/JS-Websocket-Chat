import React from 'react';

const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {

    return (
        <div className='flex'>
            <div className='form-control'>
                <label htmlFor='male'
                    className={`label gap-2 cursor-pointer ${selectedGender === 'male' ? 'selected' : ''}`}>
                    <span className='text-white'>Male</span>
                    <input id='male' name='male' type='checkbox' className='checkbox border-gray-400'
                        checked={selectedGender === 'male'}
                        onChange={() => onCheckboxChange('male')} />
                </label>
            </div>
            <div className='form-control'>
                <label htmlFor='female'
                    className={`label gap-2 cursor-pointer ${selectedGender === 'female' ? 'selected' : ''}`}>
                    <span className='text-white'>Female</span>
                    <input id='female' name='female' type='checkbox' className='checkbox border-gray-400'
                        checked={selectedGender === 'female'}
                        onChange={() => onCheckboxChange('female')} />
                </label>
            </div>
        </div>
    );
};
export default GenderCheckbox;