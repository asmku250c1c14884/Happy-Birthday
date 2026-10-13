import React, { useState } from 'react';
import './FortuneJar.css';
import mewmew from '../assets/mewmew.gif';

const FortuneJar = () => {
    const [currentBlessing, setCurrentBlessing] = useState(null);
    const [drawCount, setDrawCount] = useState(0);

    const blessingsList = [
        {
            icon: '🌟',
            title: 'முழு வெற்றி & சாதனை',
            note: 'இந்த வருஷம் நீங்க எடுத்து வைக்கிற ஒவ்வொரு அடியும் பெரிய வெற்றியாக அமையட்டும் அக்கா!'
        },
        {
            icon: '🌸',
            title: 'எவர்-கிரீன் புன்னகை & அழகு',
            note: 'எந்த சூழ்நிலையிலும் உங்க முகத்துல இருக்குற அந்த அழகான புன்னகை குறையவே கூடாது!'
        },
        {
            icon: '🎁',
            title: 'சூப்பரான சர்ப்ரைஸ்கள்',
            note: 'இந்த வருஷம் முழுவதும் உங்களுக்கு எதிர்பாராத நல்ல நல்ல சந்தோஷங்களும் பரிசுகளும் வந்து சேரட்டும்!'
        },
        {
            icon: '🕊️',
            title: 'மன அமைதி & சந்தோஷம்',
            note: 'மனசுல எந்த கவலையும் இல்லாம, எப்பவும் நிம்மதியாவும் அமைதியாவும் இருக்க வாழ்த்துகள்!'
        },
        {
            icon: '👑',
            title: 'மதிப்பும் மரியாதையும்',
            note: 'நீங்க போற இடமெல்லாம் உங்களுக்கு அன்பும், தனி மரியாதையும் பெருகட்டும்!'
        },
        {
            icon: '🥳',
            title: 'நாள் முழுக்க சிரிப்பு',
            note: 'ஒவ்வொரு நாளும் ஜாலியா, குடும்பத்தோட சிரிச்சு பேசி சந்தோஷமா வாழ வாழ்த்துகள்!'
        },
        {
            icon: '✈️',
            title: 'ஜாலியான பயணங்கள்',
            note: 'பிடிச்ச இடங்களுக்கு ஜாலியா travel பண்ணி நினைவுகளை சேர்க்க நல்ல வாய்ப்புகள் அமையட்டும்!'
        },
        {
            icon: '🛡️',
            title: 'எப்பவும் தம்பியின் சப்போர்ட்',
            note: 'எந்த நேரத்துலயும் தம்பி சஞ்சீவ் உங்களுக்கு ஒரு நல்ல துணையா எப்பவும் இருப்பேன் அக்கா!'
        },
        {
            icon: '🧁',
            title: 'இனிமையான வாழ்க்கை',
            note: 'வாழ்க்கை முழுக்க கவலைகள் மறைஞ்சு, எப்பவும் இனிமையும் பாசமும் நிறைஞ்சிருக்கட்டும்!'
        },
        {
            icon: '⭐',
            title: 'ஆசைகள் நிறைவேற வாழ்த்துகள்',
            note: 'நீங்க ஆசைப்பட்ட சின்ன சின்ன ஆசைகளும் சீக்கிரமே நிறைவேற வாழ்த்துகள் அக்கா!'
        }
    ];

    const drawBlessing = () => {
        const randomIdx = Math.floor(Math.random() * blessingsList.length);
        setCurrentBlessing(blessingsList[randomIdx]);
        setDrawCount((prev) => prev + 1);

        if (typeof window.confetti === 'function') {
            window.confetti({
                particleCount: 60,
                spread: 60,
                origin: { y: 0.6 },
                colors: ['#D4AF37', '#ff69b4', '#87ceeb']
            });
        }
    };

    return (
        <div className="fortune-page">
            <div className="fortune-header">
                <span className="fortune-badge">🔮 SISTER BLESSING JAR</span>
                <h1 className="fortune-title">அக்காவிற்கான வாழ்த்து ஜாடி ✨</h1>
                <p className="fortune-subtitle">
                    ஜாவ தொட்டு உங்களுக்கான இன்றைய வாழ்த்தை எடுங்க அக்கா!
                </p>
                <div className="draw-counter">
                    எடுத்த வாழ்த்துகள்: <strong>{drawCount}</strong>
                </div>
            </div>

            {/* Glowing Glass Jar */}
            <div className="jar-stage" onClick={drawBlessing}>
                <div className="magic-jar">
                    <div className="jar-lid">
                        <div className="jar-lid-handle"></div>
                    </div>
                    <div className="jar-neck">
                        <div className="jar-ribbon-tie">🎀</div>
                    </div>
                    <div className="jar-body">
                        {/* Floating stars inside */}
                        <div className="star star-1">⭐</div>
                        <div className="star star-2">✨</div>
                        <div className="star star-3">🌟</div>
                        <div className="star star-4">💫</div>
                        <div className="star star-5">💖</div>
                        <div className="jar-label">
                            <span>SISTER BLESSINGS</span>
                        </div>
                    </div>
                </div>
            </div>

            <button className="pull-blessing-btn" onClick={drawBlessing}>
                🔮 வாழ்த்தை எடுங்க! ✨
            </button>

            {/* Revealed Blessing Card */}
            {currentBlessing && (
                <div className="blessing-scroll-card">
                    <div className="scroll-ornament">👑 DEAREST AKKA 👑</div>
                    <div className="scroll-icon">{currentBlessing.icon}</div>
                    <h2 className="scroll-title">{currentBlessing.title}</h2>
                    <p className="scroll-note">"{currentBlessing.note}"</p>
                    <div className="scroll-footer">
                        <img src={mewmew} alt="Cute mascot" className="scroll-cat" />
                        <span>அன்புடன் சஞ்சீவ் ❤️</span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FortuneJar;
