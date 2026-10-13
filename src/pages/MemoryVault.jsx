import React, { useState } from 'react';
import './MemoryVault.css';
import orihime from '../assets/orihime.jpg';
import mewmew from '../assets/mewmew.gif';
import balloon1 from '../assets/balloon1.png';

const MemoryVault = () => {
    const [selectedMemory, setSelectedMemory] = useState(null);

    const memories = [
        {
            id: 1,
            title: "Home Minister Akka",
            tag: "கெத்தான அக்கா 🌸",
            icon: "👑",
            short: "வீட்ல யார் என்ன சொன்னாலும் அக்கா பேச்சு தான் எப்பவும் சட்டம்!",
            full: "சின்ன வயசுல இருந்து இப்போ வரைக்கும் நம்ம வீட்ல யார் என்ன சொன்னாலும் அக்காவுக்குனு ஒரு தனி கெத்து உண்டு. உங்க முடிவு தான் எப்பவும் family-ல top!",
            date: "Sweet Memories"
        },
        {
            id: 2,
            title: "சின்ன சண்டை & சமாதானம்",
            tag: "Fun Moments 🥳",
            icon: "🧁",
            short: "சின்ன சின்ன சண்டை, ஆனா அடுத்த நிமிஷமே சிரிச்சு பேசிப்போம்...",
            full: "நம்ம ரெண்டு பேருக்கும் சின்ன சின்ன விஷயத்துக்கு சண்டை வரும், ஆனா அடுத்த நிமிஷமே எதுவும் நடக்காத மாதிரி ஒன்னா பேசி சிரிப்போம் பாருங்க... அதுதான் நம்ம sibling bond!",
            date: "Sibling Combo"
        },
        {
            id: 3,
            title: "Super Guide",
            tag: "Best Advice 💡",
            icon: "🌟",
            short: "எந்த குழப்பமா இருந்தாலும் அக்காகிட்ட பேசினா தீர்வு கிடைக்கும்...",
            full: "வாழ்க்கைல எதாவது யோசனை இல்லனா குழப்பம் வரும்போது, அக்காகிட்ட ஒரு வார்த்தை கேட்டா போதும். ரொம்ப அழகா நிதானமா சரியான வழி சொல்லுவீங்க.",
            date: "Life Guidance"
        },
        {
            id: 4,
            title: "Treat & Snacks Partner",
            tag: "ஜாலியான நேரம் 🎈",
            icon: "🍕",
            short: "நல்ல சாப்பாடு, ஸ்நாக்ஸ், ஜாலியான அரட்டைக்கு அக்கா தான் best!",
            full: "வீட்ல யாருக்கும் தெரியாம ஸ்நாக்ஸ் சாப்பிடுறதுல இருந்து, சினிமா பாக்குறது வரைக்கும் நம்ம combo எப்பவுமே செம fun & happy!",
            date: "Happy Days"
        },
        {
            id: 5,
            title: "பாசக்கார அக்கா",
            tag: "Caring Sister 💖",
            icon: "🌸",
            short: "வெளில காட்டிக்கலைனாலும் தம்பி மேல அக்காவுக்கு எக்கச்சக்க அக்கறை...",
            full: "வெளில காட்டிக்காம அமைதியா இருந்தாலும், தம்பி நல்லா இருக்கானா, சாப்பிட்டானானு கவனிச்சுக்குற உங்க அன்பு எப்பவுமே எனக்கு ரொம்ப ஸ்பெஷல் அக்கா.",
            date: "Family Love"
        },
        {
            id: 6,
            title: "எப்பவும் உங்க தம்பி",
            tag: "Always With You 🤝",
            icon: "🤝",
            short: "எந்த காலத்துலயும் உங்க தம்பி சஞ்சீவ் உங்களுக்கு துணையா இருப்பேன்...",
            full: "எப்பவும் இதே மாதிரி ஒற்றுமையா, ஜாலியா, சந்தோஷமா இருப்போம் அக்கா! உங்க தம்பி நான் எப்பவும் உங்களுக்கு சப்போர்ட்டா இருப்பேன்!",
            date: "Sanjeev ❤️"
        }
    ];

    return (
        <div className="memory-vault-page">
            <div className="vault-header">
                <span className="vault-badge">📸 SIBLING MEMORY CORNER</span>
                <h1 className="vault-title">அக்காவும் தம்பியும் - Sweet Memories ✨</h1>
                <p className="vault-subtitle">
                    நம்ம வாழ்க்கையோட சில ஜாலியான மற்றும் அழகான நினைவுகள்!
                </p>
            </div>

            {/* Polaroid Scrapbook Grid */}
            <div className="polaroid-grid">
                {memories.map((mem, index) => (
                    <div 
                        key={mem.id} 
                        className={`polaroid-card polaroid-tilt-${(index % 4) + 1}`}
                        onClick={() => setSelectedMemory(mem)}
                    >
                        <div className="washi-tape"></div>
                        <div className="polaroid-photo">
                            <span className="polaroid-icon">{mem.icon}</span>
                            <span className="polaroid-tag">{mem.tag}</span>
                        </div>
                        <div className="polaroid-caption">
                            <h3 className="polaroid-title">{mem.title}</h3>
                            <p className="polaroid-text">{mem.short}</p>
                            <span className="polaroid-action">Tap பண்ணி படிங்க 💌</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Memory Modal Popup */}
            {selectedMemory && (
                <div className="memory-modal-overlay" onClick={() => setSelectedMemory(null)}>
                    <div className="memory-modal-card" onClick={(e) => e.stopPropagation()}>
                        <button className="memory-modal-close" onClick={() => setSelectedMemory(null)}>✕</button>
                        
                        <div className="memory-modal-header">
                            <span className="memory-modal-tag">{selectedMemory.tag}</span>
                            <h2 className="memory-modal-title">{selectedMemory.title}</h2>
                        </div>

                        <div className="memory-modal-body">
                            <p className="memory-modal-text">{selectedMemory.full}</p>
                        </div>

                        <div className="memory-modal-footer">
                            <img src={mewmew} alt="Cute mascot" className="memory-cat-img" />
                            <div>
                                <span className="memory-author">அன்புடன் சஞ்சீவ்</span>
                                <span className="memory-date">{selectedMemory.date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MemoryVault;
