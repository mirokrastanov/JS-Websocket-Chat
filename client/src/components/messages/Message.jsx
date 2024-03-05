import React from 'react';

const Message = () => {

    // TODO - replace static placeholders with actual values
    let [
        chatClassName, profilePic, bubbleBgColor,
        shakeClass, message, formattedTime
    ] = [
            'chat-end', 'https://ui-avatars.com/api/?name=john+cena&bold=true&background=random',
            'bg-blue-500', '', { message: 'Hey, John!' }, '12:03'
        ];


    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div>
    )
}

export default Message;