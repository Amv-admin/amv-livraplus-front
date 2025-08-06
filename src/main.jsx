import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <div style={{ fontFamily: 'Arial', padding: '2rem', backgroundColor: '#fffbe6', color: '#000' }}>
    <img src="/logo.png" alt="Amv LivraPlus" style={{ width: '150px' }} />
    <h1>Bienvenue sur Amv LivraPlus</h1>
    <p>Votre solution rapide pour acheter et vous faire livrer en RDC.</p>
    <a href="/shop" style={{ color: 'white', backgroundColor: '#f1c40f', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none' }}>
      Accéder à la boutique
    </a>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
