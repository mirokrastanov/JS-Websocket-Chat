import React, { useState } from 'react';
import { BsSend } from "react-icons/bs";
import useSendMessage from '../../hooks/useSendMessage';
import toast from 'react-hot-toast';

const MessageInput = () => {
    const [messageInput, setMessageInput] = useState('');
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!messageInput) {
            toast.error('You can\'t send empty messages');
            return;
        }

        const res = await sendMessage(messageInput);
        if (res === 'success') setMessageInput('');

    };

    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='w-full relative'>
                <input
                    id='msgInput' name='msgInput' type='text' placeholder='Send a messageInput...'
                    className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
                    value={messageInput} onChange={(e) => setMessageInput(e.target.value)} />
                <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                    {loading ? <div className='loading loading-spinner'></div> : <BsSend />}
                </button>
            </div>
        </form>
    )
}

export default MessageInput;