
import React from "react";
import { Property } from "../hooks/useProperties";

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  const cover = property.photos?.[0] || "https://via.placeholder.com/400x250?text=No+Image";
  return (
    <div style={{border:'1px solid #eee', borderRadius:8, overflow:'hidden', maxWidth:320, margin:'0.5rem'}}>
      <img src={cover} alt={property.address} style={{width:'100%', height:200, objectFit:'cover'}} />
      <div style={{padding:'0.75rem'}}>
        <h3 style={{margin:'0 0 0.25rem 0', fontSize:'1.1rem'}}>{property.address}</h3>
        <p style={{margin:0}}>${property.price.toLocaleString()}</p>
        <p style={{margin:'0.25rem 0', fontSize:'0.9rem'}}>
          {property.bedrooms ?? '-'} bd · {property.bathrooms ?? '-'} ba · {property.square_feet ?? '-'} sqft
        </p>
        {property.propy_url && (
          <a href={property.propy_url} target="_blank" rel="noreferrer">
            <button className="nav-btn" style={{width:'100%'}}>Make Offer</button>
          </a>
        )}
      </div>
    </div>
  );
}
