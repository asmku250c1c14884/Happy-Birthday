import React, { useState } from 'react';
import './SisterAwards.css';
import mewmew from '../assets/mewmew.gif';

const SisterAwards = () => {
    const [claimed, setClaimed] = useState({});

    const awards = [
        {
            id: 1,
            trophy: '🏆',
            category: 'ALL-TIME FAVOURITE',
            title: "World's Best Akka Award",
            citation: "எப்பவும் தம்பியை விட்டுக்கொடுக்காத, பாசமான நம்ம Victoria அக்காவுக்கு இந்த சிறப்பு விருது!"
        },
        {
            id: 2,
            trophy: '👑',
            category: 'STYLE & MASS',
            title: 'Queen of the House Award',
            citation: "வீட்டின் செல்லமும் கெத்தும் எப்பவுமே நம்ம அக்கா தான்! அந்த கம்பீரத்துக்கு ஒரு ராயல் சல்யூட்!"
        },
        {
            id: 3,
            trophy: '💡',
            category: 'INSTANT SOLUTION',
            title: 'Free Life Advice Trophy',
            citation: "எந்த பிரச்சனையா இருந்தாலும் சட்டுனு நல்ல யோசனை சொல்லி வழிநடத்தும் அக்காவுக்கு!"
        },
        {
            id: 4,
            trophy: '🌸',
            category: 'EVERGREEN CHARM',
            title: 'Million Dollar Smile Award',
            citation: "எப்பவும் முகத்துல குறையாத சிரிப்பு மற்றும் பாசமான புன்னகைக்கு இந்த கோப்பை!"
        },
        {
            id: 5,
            trophy: '🥳',
            category: 'SUPER STAR SISTER',
            title: 'All-Rounder Akka Trophy',
            citation: "அன்பு, அறிவு, அழகு, பொறுப்பு எல்லாம் சேர்ந்த நம்ம வீட்டு ஆல்-ரவுண்டர் அக்காவுக்கு!"
        }
    ];

    const handleClaim = (id) => {
        setClaimed((prev) => ({ ...prev, [id]: true }));

        if (typeof window.confetti === 'function') {
            window.confetti({
                particleCount: 70,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#D4AF37', '#ffd700', '#ffffff']
            });
        }
    };

    return (
        <div className="awards-page">
            <div className="awards-header">
                <span className="awards-badge">🏆 OFFICIAL HALL OF FAME</span>
                <h1 className="awards-title">Victoria Akka Awards 👑</h1>
                <p className="awards-subtitle">
                    தம்பி சஞ்சீவ் வழங்கும் ஜாலியான & அன்பான கௌரவ விருதுகள்!
                </p>
            </div>

            <div className="awards-grid">
                {awards.map((award) => {
                    const isClaimed = claimed[award.id];
                    return (
                        <div key={award.id} className={`award-card ${isClaimed ? 'award-claimed' : ''}`}>
                            <div className="award-trophy-box">
                                <span className="award-trophy-icon">{award.trophy}</span>
                                {isClaimed && <span className="award-sparkle-stamp">OFFICIALLY CONFERRED 🌟</span>}
                            </div>
                            <div className="award-content">
                                <span className="award-category">{award.category}</span>
                                <h3 className="award-heading">{award.title}</h3>
                                <p className="award-citation">{award.citation}</p>
                                
                                <button 
                                    className={`award-claim-btn ${isClaimed ? 'claimed-btn' : ''}`}
                                    onClick={() => handleClaim(award.id)}
                                >
                                    {isClaimed ? '⭐ விருது அக்காவுக்கு வழங்கப்பட்டது!' : '🏆 இந்த விருதை ஏத்துக்குங்க ✨'}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="awards-hall-footer">
                <img src={mewmew} alt="Cute cat presenting awards" className="hall-cat" />
                <p className="hall-note">
                    அன்புடன் வழங்கும் தம்பி <strong>சஞ்சீவ் ❤️</strong>
                </p>
            </div>
        </div>
    );
};

export default SisterAwards;
