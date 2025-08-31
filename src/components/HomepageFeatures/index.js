// src/components/HomepageFeatures/index.js
import React from 'react';
import Link from '@docusaurus/Link';

export default function HomepageFeatures() {
  return (
    <section>
      <div className="container margin-vert--lg">
        {/* Usando Flexbox directo */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between'
        }}>
          {/* Sección 1 */}
          <div style={{ 
            flex: '1 1 280px', 
            minWidth: '280px',
            maxWidth: 'calc(25% - 0.75rem)'
          }}>
            <div className="card" style={{ height: '100%', padding: '1rem', textAlign: 'center' }}>
              <img 
                src="img/cercania.png" 
                alt="CERCANÍA"
                style={{ 
                  width: '90%', 
                  maxWidth: '150px',
                  height: 'auto',
                  marginBottom: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  display: 'block',
                  margin: '0 auto 1.5rem auto'
                }}
              />
              <h3 style={{ marginBottom: '0.5rem' }}>CERCANÍA</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Tu vecin@ inmobiliari@ se encuentra a 5 minutos.
              </p>
            </div>
          </div>

          {/* Sección 2 */}
          <div style={{ 
            flex: '1 1 280px', 
            minWidth: '280px',
            maxWidth: 'calc(25% - 0.75rem)'
          }}>
            <div className="card" style={{ height: '100%', padding: '1rem', textAlign: 'center' }}>
              <img 
                src="img/familiaridad.png" 
                alt="FAMILIARIDAD"
                style={{ 
                  width: '90%', 
                  maxWidth: '150px',
                  height: 'auto',
                  marginBottom: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  display: 'block',
                  margin: '0 auto 1.5rem auto'
                }}
              />
              <h3 style={{ marginBottom: '0.5rem' }}>FAMILIARIDAD</h3>
              <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', textAlign: 'left' }}>
                Lo que dicen los vecinos: "Es un@ de nosot@s"
              </ul>
            </div>
          </div>

          {/* Sección 3 */}
          <div style={{ 
            flex: '1 1 280px', 
            minWidth: '280px',
            maxWidth: 'calc(25% - 0.75rem)'
          }}>
            <div className="card" style={{ height: '100%', padding: '1rem', textAlign: 'center' }}>
              <img 
                src="img/conocimiento.png" 
                alt="CONOCIMIENTO"
                style={{ 
                  width: '90%', 
                  maxWidth: '150px',
                  height: 'auto',
                  marginBottom: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  display: 'block',
                  margin: '0 auto 1.5rem auto'
                }}
              />
              <h3 style={{ marginBottom: '0.5rem' }}>CONOCIMIENTO</h3>
              <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', textAlign: 'left' }}>
                "Nos conocemos." Es lo que nuestr@s vecin@s pueden decir de las personas en su vecindario.
              </ul>
            </div>
          </div>

          {/* Sección 4 */}
          <div style={{ 
            flex: '1 1 280px', 
            minWidth: '280px',
            maxWidth: 'calc(25% - 0.75rem)'
          }}>
            <div className="card" style={{ height: '100%', padding: '1rem', textAlign: 'center' }}>
              <img 
                src="img/relacionamiento.png" 
                alt="RELACIONAMIENTO"
                style={{ 
                  width: '90%', 
                  maxWidth: '150px',
                  height: 'auto',
                  marginBottom: '1.5rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  display: 'block',
                  margin: '0 auto 1.5rem auto'
                }}
              />
              <h3 style={{ marginBottom: '0.5rem' }}>RELACIONAMIENTO</h3>
              <ol style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', textAlign: 'left' }}>
                "Nos ayudamos". Así somos l@s vecin@s.
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}