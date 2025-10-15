import React, { useEffect, useState } from 'react';

const ParticleEffects = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '#00BFFF' : '#FF0080'
    });

    const initialParticles = Array.from({ length: 30 }, createParticle);
    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles(prev => {
        const updated = prev.map(p => ({
          ...p,
          y: p.y > window.innerHeight ? 0 : p.y + p.speed,
          x: p.x + Math.sin(p.y * 0.01) * 0.5
        })).filter(p => p.y < window.innerHeight + 100);

        if (Math.random() > 0.7 && updated.length < 50) {
          updated.push(createParticle());
        }

        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particles-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            opacity: particle.opacity,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default ParticleEffects;