// src/pages/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home() {
  return (
    <Layout
      title="Vecin@ Inmobiliari@"
      description="Una guía clara y práctica para el día a día inmobiliario">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Vecin@ Inmobiliari@</h1>
          <p className="hero__subtitle">Una guía clara y práctica para el día a día inmobiliario.</p>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}