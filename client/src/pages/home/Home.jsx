import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContrainer';

const Home = () => {
    return (
        <div className='flex sm:h-[450px] md:h-[550px] rounded-xl overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-600 shadow-sm shadow-slate-700'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home;