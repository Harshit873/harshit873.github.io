import React, { useEffect, useRef } from 'react';

declare const tsParticles: any;

const ParticlesBackground: React.FC = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    const init = async () => {
      if (typeof tsParticles !== 'undefined' && document.getElementById('tsparticles')) {
        try {
          await tsParticles.load({
            id: 'tsparticles',
            options: {
              fpsLimit: 120,
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    value_area: 1200,
                  },
                },
                color: {
                  value: ['#00F5D4', '#7000FF'],
                },
                shape: {
                  type: 'circle',
                },
                opacity: {
                  value: 0.3,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                  }
                },
                size: {
                  value: 1.5,
                  random: true,
                  anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.5,
                    sync: false
                  }
                },
                links: {
                  color: '#00F5D4',
                  distance: 180,
                  enable: true,
                  opacity: 0.15,
                  width: 0.5,
                  triangles: {
                    enable: true,
                    opacity: 0.02
                  }
                },
                move: {
                  enable: true,
                  speed: 0.8,
                  direction: 'none',
                  out_mode: 'bounce',
                  attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                  }
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: 'grab',
                  },
                  onclick: {
                    enable: true,
                    mode: 'push'
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 220,
                    links: {
                      opacity: 0.4
                    }
                  },
                  push: {
                    particles_nb: 4
                  }
                },
              },
              detectRetina: true,
            },
          });
          initialized.current = true;
        } catch (error) {
          console.warn('Particles failed to initialize:', error);
        }
      }
    };

    const timeout = setTimeout(init, 100);
    return () => clearTimeout(timeout);
  }, []);

  return <div id="tsparticles" className="fixed inset-0 pointer-events-none z-0" />;
};

export default ParticlesBackground;