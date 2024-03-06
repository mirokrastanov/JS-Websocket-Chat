import React, { useEffect } from 'react';
import Conversation from "./Conversation";
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
    const { loading, conversations } = useGetConversations();

    useEffect(() => {
        console.log(conversations);
    }, []);

    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {loading
                ? <span className='loading loading-spinner mx-auto'></span>
                : conversations.length > 0
                    ? <> {conversations.map((conversation, i) => (
                        <Conversation
                            key={conversation._id}
                            conversation={conversation}
                            emoji={getRandomEmoji()}
                            isLast={i === conversations.length - 1}
                        />))} </> : null}
        </div>
    )
}

export default Conversations;