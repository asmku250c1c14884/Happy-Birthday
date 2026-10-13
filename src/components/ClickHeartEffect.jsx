import React, { useEffect } from 'react';

const ClickHeartEffect = () => {
    useEffect(() => {
        const icons = ['💖', '👑', '✨', '🎂', '🌸', '⭐', '💝', '🎉'];

        const handlePointerDown = (e) => {
            // Don't spawn if clicking input to avoid distraction
            if (e.target.tagName === 'INPUT') return;

            const x = e.clientX;
            const y = e.clientY;
            const count = 5; // number of burst particles per click

            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                const randomIcon = icons[Math.floor(Math.random() * icons.length)];
                particle.textContent = randomIcon;

                const size = Math.random() * 12 + 18; // 18px to 30px
                const xOffset = (Math.random() - 0.5) * 80;
                const yOffset = -(Math.random() * 80 + 40);
                const rot = (Math.random() - 0.5) * 90;
                const duration = Math.random() * 0.4 + 0.8; // 0.8s to 1.2s

                Object.assign(particle.style, {
                    position: 'fixed',
                    left: `${x}px`,
                    top: `${y}px`,
                    fontSize: `${size}px`,
                    pointerEvents: 'none',
                    zIndex: '99999999',
                    userSelect: 'none',
                    transform: 'translate(-50%, -50%) scale(0.6)',
                    transition: `transform ${duration}s cubic-bezier(0.1, 0.8, 0.3, 1), opacity ${duration}s ease-out`,
                    opacity: '1',
                    filter: 'drop-shadow(0 2px 8px rgba(212, 175, 55, 0.4))',
                });

                document.body.appendChild(particle);

                // Trigger animation on next frame
                requestAnimationFrame(() => {
                    particle.style.transform = `translate(calc(-50% + ${xOffset}px), calc(-50% + ${yOffset}px)) rotate(${rot}deg) scale(1.2)`;
                    particle.style.opacity = '0';
                });

                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, duration * 1000 + 100);
            }
        };

        window.addEventListener('pointerdown', handlePointerDown);
        return () => {
            window.removeEventListener('pointerdown', handlePointerDown);
        };
    }, []);

    return null;
};

export default ClickHeartEffect;
