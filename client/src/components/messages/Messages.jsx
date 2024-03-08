import React, { useEffect, useRef } from 'react';
import Message from './Message';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
    const { messages, loading } = useGetMessages();
    useListenMessages();
    const lastMessageRef = useRef();

    useEffect(() => {
        if (lastMessageRef.current) {
            lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, loading])


    return (
        <div className='px-4 flex-1 overflow-auto pb-4 z-10'>
            {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={`skeleton-${i}`} />)}
            {!loading && messages.length === 0 && (
                <p className='text-center py-4'>Send a message to start the conversation</p>
            )}
            {!loading && messages.length > 0 && (
                messages.map((message, i) => (
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))
            )}
        </div>
    )
}

export default Messages;