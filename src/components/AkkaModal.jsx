import React, { useEffect } from 'react';
import './AkkaModal.css';
import mewmew from '../assets/mewmew.gif';

const AkkaModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const fireConfettiBlast = () => {
        if (typeof window.confetti === 'function') {
            window.confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            setTimeout(() => {
                window.confetti({
                    particleCount: 60,
                    angle: 60,
                    spread: 60,
                    origin: { x: 0.1, y: 0.7 }
                });
                window.confetti({
                    particleCount: 60,
                    angle: 120,
                    spread: 60,
                    origin: { x: 0.9, y: 0.7 }
                });
            }, 250);
        }
    };

    if (!isOpen) return null;

    const reasons = [
        {
            icon: '🌸',
            title: '1. Family Pillar (குடும்பத்தின் தூண்)',
            desc: "வீட்ல எல்லா விஷயத்துலயும் பொறுப்பா முன்னாடி நின்னு குடும்பத்தை வழிநடத்துற அக்கா!"
        },
        {
            icon: '💡',
            title: '2. Super Guide (சரியான ஆலோசனை)',
            desc: "வாழ்க்கைல எந்த குழப்பமா இருந்தாலும் அக்காகிட்ட ஒரு வார்த்தை பேசினா உடனே தெளிவு கிடைக்கும்."
        },
        {
            icon: '🧁',
            title: '3. Fun & Sibling Laughs (சிரிப்பும் அரட்டையும்)',
            desc: "அக்காகிட்ட பேச ஆரம்பிச்சா சிரிப்புக்கும் ஜாலிக்கும் பஞ்சமே இருக்காது, செம combo!"
        },
        {
            icon: '👑',
            title: '4. Style & Dignity (கெத்து & கம்பீரம்)',
            desc: "நம்ம குடும்பத்துக்கே தனி அழகும், மரியாதையும், பெருமையும் நம்ம விக்டோரியா அக்கா தான்!"
        },
        {
            icon: '💖',
            title: "5. World's Best Sister",
            desc: "எப்பவும் தம்பி மேல காட்டும் பாசத்துக்கும் அக்கறைக்கும் ரொம்ப நன்றி அக்கா!"
        }
    ];

    return (
        <div className="akka-modal-overlay" onClick={onClose}>
            <div className="akka-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="akka-modal-close" onClick={onClose} aria-label="Close modal">
                    ✕
                </button>

                <div className="akka-modal-header">
                    <div className="akka-crown-badge">👑 QUEEN VICTORIA 👑</div>
                    <h2 className="akka-modal-title">நம்ம Victoria Akka தான் எப்பவும் கெத்து! 👑💖</h2>
                    <p className="akka-modal-subtitle">தம்பி சஞ்சீவ் சொல்லும் 5 உண்மைகள்</p>
                </div>

                <div className="akka-reasons-list">
                    {reasons.map((item, index) => (
                        <div key={index} className="akka-reason-card">
                            <div className="akka-reason-icon">{item.icon}</div>
                            <div className="akka-reason-text">
                                <h3 className="akka-reason-heading">{item.title}</h3>
                                <p className="akka-reason-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="akka-modal-footer">
                    <div className="akka-mew-container">
                        <img src={mewmew} alt="Cute cat wishing birthday" className="akka-mew-gif" />
                        <span className="akka-mew-text">Happy Birthday Victoria Akka! 🐾🎂</span>
                    </div>

                    <button className="akka-blast-btn" onClick={fireConfettiBlast}>
                        🎉 Shower Confetti 💖
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AkkaModal;
