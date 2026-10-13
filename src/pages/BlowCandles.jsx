import React, { useState } from 'react';
import './BlowCandles.css';
import mewmew from '../assets/mewmew.gif';

const BlowCandles = () => {
    const [candlesLit, setCandlesLit] = useState(true);
    const [wishMade, setWishMade] = useState(false);

    const blowCandles = () => {
        if (!candlesLit) return;
        setCandlesLit(false);

        // Confetti explosion
        if (typeof window.confetti === 'function') {
            window.confetti({
                particleCount: 120,
                spread: 90,
                origin: { y: 0.55 },
                colors: ['#D4AF37', '#ff69b4', '#ffffff', '#ffd700']
            });
            setTimeout(() => {
                window.confetti({
                    particleCount: 80,
                    angle: 60,
                    spread: 65,
                    origin: { x: 0.1, y: 0.6 }
                });
                window.confetti({
                    particleCount: 80,
                    angle: 120,
                    spread: 65,
                    origin: { x: 0.9, y: 0.6 }
                });
            }, 300);
        }

        setTimeout(() => {
            setWishMade(true);
        }, 800);
    };

    const relightCandles = () => {
        setCandlesLit(true);
        setWishMade(false);
    };

    return (
        <div className="blow-candles-page">
            <div className="blow-header">
                <span className="blow-badge">✨ BIRTHDAY WISH TIME ✨</span>
                <h1 className="blow-title">Wish பண்ணிட்டு Candle-அ ஊதுங்க அக்கா! 🎂🕯️</h1>
                <p className="blow-subtitle">
                    {candlesLit 
                        ? "மனசுல ஒரு ஆசைய நெனச்சுட்டு candles-அ tap பண்ணி ஊதுங்க!" 
                        : "அக்கா கேட்டது எல்லாமே சூப்பரா நடக்கும்! ✨"}
                </p>
            </div>

            {/* Cake Display Container */}
            <div className="cake-stage" onClick={blowCandles}>
                <div className="interactive-cake">
                    {/* Candles */}
                    <div className="candles-row">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <div key={num} className="candle-stick">
                                <div className={`candle-flame ${candlesLit ? 'flame-lit' : 'flame-smoke'}`}>
                                    <div className="flame-inner"></div>
                                </div>
                                <div className="candle-wick"></div>
                                <div className="candle-body"></div>
                            </div>
                        ))}
                    </div>

                    {/* Cake Top Tier */}
                    <div className="cake-tier cake-tier-top">
                        <div className="cake-frosting-drips"></div>
                        <div className="cake-cherries">🍒 🍓 🍒 🍓 🍒</div>
                    </div>

                    {/* Cake Middle Tier */}
                    <div className="cake-tier cake-tier-mid">
                        <div className="cake-pattern">👑 VICTORIA 👑</div>
                    </div>

                    {/* Cake Bottom Tier */}
                    <div className="cake-tier cake-tier-bot">
                        <div className="cake-bottom-rim"></div>
                    </div>

                    {/* Cake Plate */}
                    <div className="cake-plate"></div>
                </div>
            </div>

            {/* Action Button */}
            {candlesLit ? (
                <button className="blow-btn" onClick={blowCandles}>
                    💨 Candle-அ ஊதுங்க! 🕯️
                </button>
            ) : (
                <button className="relight-btn" onClick={relightCandles}>
                    ✨ இன்னொரு Wish பண்ண Relight பண்ணுங்க
                </button>
            )}

            {/* Revealed Wish Certificate Scroll */}
            {wishMade && (
                <div className="wish-certificate-card">
                    <div className="certificate-ribbon">👑 WISH SEALED 👑</div>
                    <h2 className="certificate-heading">இனிய பிறந்தநாள் வாழ்த்துகள் அக்கா! 🌟</h2>
                    <p className="certificate-body">
                        "நீங்க ஆசைப்பட்ட நல்ல காரியங்கள் எல்லாமே இந்த வருஷம் சூப்பரா நடக்கணும் அக்கா! 
                        எப்பவும் இதே மாதிரி சந்தோஷமா, ஆரோக்கியமா, சிரிச்சுட்டே இருங்க! 🥳🎂"
                    </p>
                    <div className="certificate-footer">
                        <img src={mewmew} alt="Cute cat wishing" className="certificate-cat" />
                        <span className="certificate-sign">அன்புடன் Sanjeev ❤️</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlowCandles;
