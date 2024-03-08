import React, { useEffect, useState } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import NoChatSelected from './NoChatSelected';
import useConversation from '../../zustand/useConversation';

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {

        return () => {
            setSelectedConversation(null); // clear on unmount
        };
    }, []);

    return (
        <div className='md:min-w-[450px] flex flex-col max-w-[450px]'>
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header */}
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='text-gray-300 pr-0.5'>To: </span>
                        <span className='text-gray-200 font-bold'>{selectedConversation.fullName}</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}

        </div>
    )
}

export default MessageContainer;