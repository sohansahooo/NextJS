// components/Sidebar.js
import React from 'react';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src="/assets/images/my-avatar.png" alt="Richard hanrick" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Richard hanrick">Richard hanrick</h1>
                    <p className="title">Web developer</p>
                </div>
                <button className="info_more-btn">
                    <span>Show Contacts</span>
                    
                </button>
            </div>
            {/* Additional content */}
        </aside>
    );
};

export default Sidebar;
