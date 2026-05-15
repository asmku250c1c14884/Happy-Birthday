import React, { useState } from 'react';
import './Gate.css';

const Gate = ({ onUnlock }) => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleUnlock = () => {
        const normalizedInput = name.trim().toLowerCase();
        // Check if the input contains 'tamil' (broad check to be user-friendly)
        if (normalizedInput.includes('tamil') || normalizedInput.includes('selvi')) {
            onUnlock();
        } else {
            setError('Please enter the correct name to unlock the surprise!');
            setTimeout(() => setError(''), 3000);
        }
    };

    return (
        <div className="gate-overlay">
            <div className="gate-content">
                <div className="gate-header">
                    <h1 className="gate-title">Surprise Awaits</h1>
                    <p className="gate-subtitle">Please enter your name to unlock the experience</p>
                </div>
                
                <div className="gate-input-group">
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name here..."
                        className="gate-input"
                        onKeyPress={(e) => e.key === 'Enter' && handleUnlock()}
                    />
                    {error && <p className="gate-error">{error}</p>}
                </div>

                <button className="gate-button" onClick={handleUnlock}>
                    Unlock Surprise
                </button>

                <div className="gate-footer">
                    <p>Designed with ❤️ by Sanjeev</p>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="gate-deco gate-deco-1"></div>
            <div className="gate-deco gate-deco-2"></div>
        </div>
    );
};

export default Gate;
