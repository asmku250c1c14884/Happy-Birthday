import React, { useState } from 'react';
import './Gate.css';

const Gate = ({ onUnlock }) => {
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleUnlock = () => {
        const normalizedInput = name.trim().toLowerCase();
        // Check if input contains 'victorya', 'victoria', or related sister/akka names
        const validNames = ['victorya', 'victoria', 'viktorya', 'viktoria', 'vicky', 'akka'];
        const isMatch = validNames.some(valid => normalizedInput.includes(valid));

        if (isMatch) {
            onUnlock();
        } else {
            setError('சரியான பேரை type பண்ணுங்க அக்கா! (Victorya) 💖');
            setTimeout(() => setError(''), 3500);
        }
    };

    return (
        <div className="gate-overlay">
            <div className="gate-content">
                <div className="gate-header">
                    <h1 className="gate-title">Surprise For Akka ✨</h1>
                    <p className="gate-subtitle">உங்க பேரை type பண்ணி சர்ப்ரைஸை open பண்ணுங்க அக்கா! 🎁</p>
                </div>
                
                <div className="gate-input-group">
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name (Victorya)..."
                        className="gate-input"
                        onKeyDown={(e) => e.key === 'Enter' && handleUnlock()}
                        autoFocus
                    />
                    {error && <p className="gate-error">{error}</p>}
                </div>

                <button className="gate-button" onClick={handleUnlock}>
                    Unlock Surprise 🎁
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
