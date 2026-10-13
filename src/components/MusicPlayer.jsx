import React, { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioCtxRef = useRef(null);
    const isPlayingRef = useRef(false);
    const timeoutIdsRef = useRef([]);

    // Melodic notes for "Happy Birthday" (Music Box Chime Tone)
    // Notes: [Frequency, duration in seconds, pause after in seconds]
    const melody = [
        // Happy Birthday to you
        { freq: 392.00, dur: 0.35, delay: 0.1 },  // G4
        { freq: 392.00, dur: 0.25, delay: 0.05 }, // G4
        { freq: 440.00, dur: 0.6, delay: 0.05 },  // A4
        { freq: 392.00, dur: 0.6, delay: 0.05 },  // G4
        { freq: 523.25, dur: 0.6, delay: 0.05 },  // C5
        { freq: 493.88, dur: 1.1, delay: 0.2 },   // B4

        // Happy Birthday to you
        { freq: 392.00, dur: 0.35, delay: 0.1 },  // G4
        { freq: 392.00, dur: 0.25, delay: 0.05 }, // G4
        { freq: 440.00, dur: 0.6, delay: 0.05 },  // A4
        { freq: 392.00, dur: 0.6, delay: 0.05 },  // G4
        { freq: 587.33, dur: 0.6, delay: 0.05 },  // D5
        { freq: 523.25, dur: 1.1, delay: 0.2 },   // C5

        // Happy Birthday dear Victoria Akka
        { freq: 392.00, dur: 0.35, delay: 0.1 },  // G4
        { freq: 392.00, dur: 0.25, delay: 0.05 }, // G4
        { freq: 783.99, dur: 0.6, delay: 0.05 },  // G5
        { freq: 659.25, dur: 0.6, delay: 0.05 },  // E5
        { freq: 523.25, dur: 0.6, delay: 0.05 },  // C5
        { freq: 493.88, dur: 0.6, delay: 0.05 },  // B4
        { freq: 440.00, dur: 0.9, delay: 0.2 },   // A4

        // Happy Birthday to you
        { freq: 698.46, dur: 0.35, delay: 0.1 },  // F5
        { freq: 698.46, dur: 0.25, delay: 0.05 }, // F5
        { freq: 659.25, dur: 0.6, delay: 0.05 },  // E5
        { freq: 523.25, dur: 0.6, delay: 0.05 },  // C5
        { freq: 587.33, dur: 0.6, delay: 0.05 },  // D5
        { freq: 523.25, dur: 1.4, delay: 0.8 },   // C5
    ];

    const playTone = (ctx, freq, duration) => {
        if (!ctx || ctx.state === 'closed') return;
        const now = ctx.currentTime;

        // Primary bell oscillator (Triangle)
        const osc1 = ctx.createOscillator();
        osc1.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, now);

        // Harmonics oscillator (Sine 2x for bell chime)
        const osc2 = ctx.createOscillator();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 2, now);

        // Gain envelope
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, now);
        // Fast attack
        gainNode.gain.linearRampToValueAtTime(0.18, now + 0.03);
        // Sweet bell decay
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration + 0.6);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + duration + 0.65);
        osc2.stop(now + duration + 0.65);
    };

    const stopPlayback = () => {
        isPlayingRef.current = false;
        setIsPlaying(false);
        timeoutIdsRef.current.forEach(id => clearTimeout(id));
        timeoutIdsRef.current = [];
    };

    const scheduleMelody = () => {
        if (!isPlayingRef.current) return;
        if (!audioCtxRef.current) {
            audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        let accumulatedTime = 0;
        melody.forEach((note) => {
            const timerId = setTimeout(() => {
                if (isPlayingRef.current) {
                    playTone(ctx, note.freq, note.dur);
                }
            }, accumulatedTime * 1000);
            timeoutIdsRef.current.push(timerId);
            accumulatedTime += note.dur + note.delay;
        });

        // Loop after song finishes
        const loopTimerId = setTimeout(() => {
            if (isPlayingRef.current) {
                scheduleMelody();
            }
        }, (accumulatedTime + 1.2) * 1000);
        timeoutIdsRef.current.push(loopTimerId);
    };

    const startPlayback = () => {
        stopPlayback();
        isPlayingRef.current = true;
        setIsPlaying(true);
        scheduleMelody();
    };

    const togglePlay = () => {
        if (isPlaying) {
            stopPlayback();
        } else {
            startPlayback();
        }
    };

    // Auto-start music smoothly after unlocking (user already clicked unlock)
    useEffect(() => {
        const timer = setTimeout(() => {
            startPlayback();
        }, 1200);

        return () => {
            stopPlayback();
            clearTimeout(timer);
        };
    }, []);

    return (
        <div className="music-player-container">
            <button 
                onClick={togglePlay} 
                className={`music-btn ${isPlaying ? 'music-playing' : ''}`}
                title={isPlaying ? "Mute Birthday Song" : "Play Birthday Song"}
                aria-label="Toggle Birthday Melody"
            >
                <div className="music-disc">
                    <span className="music-icon">🎵</span>
                </div>
                <div className="music-info">
                    <span className="music-title">Akka's Birthday Melody</span>
                    <span className="music-status">{isPlaying ? 'Playing 🎶' : 'Tap to Play ▶'}</span>
                </div>
                <div className={`music-waves ${isPlaying ? 'active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
    );
};

export default MusicPlayer;
