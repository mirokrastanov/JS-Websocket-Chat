import React, { useState } from 'react';
import GenderCheckbox from './GenderCheckbox';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';

const SignUp = () => {
    const [values, setValues] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: 'male',
    });

    const { loading, signUp } = useSignUp();

    const handleCheckbox = (gender) => {
        setValues({ ...values, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(values);
        await signUp(values);
    };

    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-white'>
                    <span className='text-cyan-300'>Chat </span>Sign Up
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2' htmlFor='fullName'>
                            <span className='text-base text-white'>Full Name</span>
                        </label>
                        <input
                            name='fullName' type='text' placeholder='John Doe'
                            className='w-full input input-bordered  h-10'
                            value={values.fullName}
                            onChange={(e) => setValues({ ...values, fullName: e.target.value })} />
                    </div>

                    <div>
                        <label className='label p-2' htmlFor='username'>
                            <span className='text-base text-white'>Username</span>
                        </label>
                        <input name='username' type='text' placeholder='johndoe'
                            className='w-full input input-bordered h-10'
                            value={values.username}
                            onChange={(e) => setValues({ ...values, username: e.target.value })} />
                    </div>

                    <div>
                        <label className='label p-2' htmlFor='password'>
                            <span className='text-base text-white'>Password</span>
                        </label>
                        <input name='password' type='password' placeholder='Minimum 6 characters'
                            className='w-full input input-bordered h-10'
                            value={values.password}
                            onChange={(e) => setValues({ ...values, password: e.target.value })} />
                    </div>

                    <div>
                        <label className='label p-2' htmlFor='confirmPassword'>
                            <span className='text-base text-white'>Confirm Password</span>
                        </label>
                        <input name='confirmPassword' type='password' placeholder='Confirm Password...'
                            className='w-full input input-bordered h-10'
                            value={values.confirmPassword}
                            onChange={(e) => setValues({ ...values, confirmPassword: e.target.value })} />
                    </div>

                    <GenderCheckbox onCheckboxChange={handleCheckbox} selectedGender={values.gender} />

                    <Link to='/login' className='text-sm hover:underline hover:text-cyan-300 mt-1 inline-block p-2'>
                        Already have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 text-white border border-slate-700'
                            disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : 'Sign Up'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;

