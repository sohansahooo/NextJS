// pages/index.js
import React from 'react';

import MainContent from './MainContent/page';
import Sidebar from './SideBar/page';

const HomePage = () => {
    return (
        <div>
            <Sidebar />
            <MainContent />
        </div>
    );
};

export default HomePage;
