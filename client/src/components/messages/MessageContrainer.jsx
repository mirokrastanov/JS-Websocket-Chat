import React, { useState } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import NoChatSelected from './NoChatSelected';

const MessageContainer = () => {
    const [chatSelected, setChatSelected] = useState(false);

    return (
        <div className='md:min-w-[450px] flex flex-col'>
            {!chatSelected ? (
                <NoChatSelected />
            ) : (
                <>
                    {/* Header */}
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </>
            )}

        </div>
    )
}

export default MessageContainer;