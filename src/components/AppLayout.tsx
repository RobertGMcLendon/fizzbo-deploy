
import React from "react";
import { useProperties } from "../hooks/useProperties";
import PropertyCard from "./PropertyCard";

export default function AppLayout() {
  const { properties, loading } = useProperties();

  return (
    <div style={{maxWidth:1200, margin:'0 auto', padding:'1rem'}}>
      <nav style={{marginBottom:'1.5rem', display:'flex', alignItems:'center'}}>
        <h1 style={{marginRight:'auto', fontSize:'1.5rem'}}>FIZZBO</h1>
        <a href="#browse"><button className="nav-btn">Browse</button></a>
        <a href="#list"><button className="nav-btn">List Property</button></a>
        <a href="#garage"><button className="nav-btn">Garage Sale</button></a>
        <a href="#admin"><button className="nav-btn">Admin</button></a>
      </nav>

      <section id="browse">
        <h2 style={{marginBottom:'0.5rem'}}>Browse Listings</h2>
        {loading ? (
          <p>Loading listings…</p>
        ) : properties.length === 0 ? (
          <p>No active listings.</p>
        ) : (
          <div style={{display:'flex', flexWrap:'wrap'}}>
            {properties.map(p => (
              <PropertyCard key={p.id} property={p}/>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
