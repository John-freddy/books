// src/pages/index.js
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

export default function Home() {
  return (
    <Layout
      title="Vecin@ Inmobiliari@"
      description="Somos la única inmobiliaria en Cali que te asigna una Vecina Inmobiliaria: una agente experta que vive y respira tu mismo barrio.">
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Vecin@ Inmobiliari@</h1>
          <p className="hero__subtitle"> "Somos la única inmobiliaria en Cali que te asigna una Vecina Inmobiliaria: una agente experta que vive y respira tu mismo barrio."</p>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}