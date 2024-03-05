import React from 'react';
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-white'>
                    <span className='text-cyan-300'>Chat </span>Sign Up
                </h1>

                <form>
                    <div>
                        <label className='label p-2' htmlFor='fullname'>
                            <span className='text-base text-white'>Full Name</span>
                        </label>
                        <input name='fullname' type='text' placeholder='John Doe' className='w-full input input-bordered  h-10' />
                    </div>

                    <div>
                        <label className='label p-2' htmlFor='username'>
                            <span className='text-base text-white'>Username</span>
                        </label>
                        <input name='username' type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
                    </div>

                    <div>
                        <label className='label p-2' htmlFor='password'>
                            <span className='text-base text-white'>Password</span>
                        </label>
                        <input
                            name='password'
                            type='password'
                            placeholder='Enter Password...'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <div>
                        <label className='label p-2' htmlFor='confirmPassword'>
                            <span className='text-base text-white'>Confirm Password</span>
                        </label>
                        <input
                            name='confirmPassword'
                            type='password'
                            placeholder='Confirm Password...'
                            className='w-full input input-bordered h-10'
                        />
                    </div>

                    <GenderCheckbox />

                    <a className='text-sm hover:underline hover:text-cyan-300 mt-1 inline-block p-2' href='#'>
                        Already have an account?
                    </a>

                    <div>
                        <button className='btn btn-block btn-sm mt-2 text-white border border-slate-700'>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;

