import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/component/TopBar.css';

export const TopBar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = () => {
        setShowDropdown(!showDropdown);
    };

    const handleOptionClick = (path) => {
        navigate(path);
        setShowDropdown(false);
    };

    return (
        <div className="topbar">
            <div className="app-name">Scanner Simulator</div>
            <div className="menu-container">
                <button className="menu-icon" onClick={handleMenuClick}>
                    ☰
                </button>
                {showDropdown && (
                    <div className="dropdown-menu">
                        <div onClick={() => handleOptionClick('/')}>
                            scan
                        </div>
                        <div onClick={() => handleOptionClick('/create')}>
                            Create New Scanner
                        </div>
                        <div onClick={() => handleOptionClick('/settings')}>
                            Settings
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
