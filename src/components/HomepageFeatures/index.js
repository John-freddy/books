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
                src="img/prueba.svg" 
                alt="Esencia del proyecto"
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
              <h3 style={{ marginBottom: '0.5rem' }}>1) Esencia del proyecto</h3>
              <p style={{ fontSize: '0.9rem' }}>
                Explica en 3–4 líneas el espíritu del proyecto: propósito, principios y resultados.
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
                src="img/prueba.svg" 
                alt="Método de trabajo"
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
              <h3 style={{ marginBottom: '0.5rem' }}>2) Método / Cómo trabajamos</h3>
              <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', textAlign: 'left' }}>
                <li>Marco general (enfoque, pasos, buenas prácticas).</li>
                <li>Qué cambia en el día a día del agente (rutinas clave).</li>
                <li>Cómo medimos el progreso (métricas simples).</li>
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
                src="img/prueba.svg" 
                alt="Herramientas y recursos"
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
              <h3 style={{ marginBottom: '0.5rem' }}>3) Herramientas y recursos</h3>
              <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', textAlign: 'left' }}>
                <li>Plantillas y checklists esenciales.</li>
                <li>Guías rápidas de conversación / objeciones.</li>
                <li>Enlaces a capítulos del PlayBook.</li>
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
                src="img/prueba.svg" 
                alt="Implementación"
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
              <h3 style={{ marginBottom: '0.5rem' }}>4) Implementación y próximos pasos</h3>
              <ol style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', textAlign: 'left' }}>
                <li>Cómo empezar (primeros 7 días).</li>
                <li>Cómo escalar al equipo (roles y cadencia).</li>
                <li>Soporte y contribuciones (cómo enviar mejoras).</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}