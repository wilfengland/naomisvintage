import React from 'react';
import '../../styles/components.css';

export default function ManagePage() {
  return (
    <div className="manage-page">
      <header className="manage-hero">
        <div className="manage-hero-inner">
          <h1>Manage — Naomi's Vintage</h1>
          <p>Powerful admin area for managing inventory, orders and listings. Built to scale visually like large retail sites.</p>
          <div style={{display:'flex',gap:12,marginTop:18}}>
            <button className="btn-primary">Create Listing</button>
            <button className="btn-secondary">Bulk Upload</button>
          </div>
        </div>
      </header>

      <main className="manage-container">
        <section style={{marginBottom:24}}>
          <h2 style={{color:'#fff',margin:'0 0 12px 0'}}>Global metrics</h2>
          <div style={{display:'flex',gap:16,flexWrap:'wrap'}}>
            <div style={{background:'rgba(255,255,255,0.04)',padding:16,borderRadius:12,minWidth:200,color:'#fff'}}>Total listings<br/><strong>1,254</strong></div>
            <div style={{background:'rgba(255,255,255,0.04)',padding:16,borderRadius:12,minWidth:200,color:'#fff'}}>Today sales<br/><strong>£3,482</strong></div>
            <div style={{background:'rgba(255,255,255,0.04)',padding:16,borderRadius:12,minWidth:200,color:'#fff'}}>Low stock<br/><strong>27</strong></div>
          </div>
        </section>

        <section className="manage-grid">
          {Array.from({length:12}).map((_,i)=>(
            <article key={i} className="card manage-card">
              <h2>Listing #{i+1}</h2>
              <p>Era: 1970s · Price: £{(12+i*3).toFixed(2)}</p>
              <div className="manage-actions">
                <button className="btn-primary">Edit</button>
                <button className="btn-secondary">Disable</button>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
