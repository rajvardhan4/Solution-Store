'use client';

import Link from 'next/link';
import { useState } from 'react';
import { products, priceLabel } from '@/lib/products';
import ProductPreview from './ProductPreview';
import { ProductCardMotion } from './Experience';

const categories = [['all', 'All products · 02'], ['portals', 'Portals'], ['apps', 'Apps'], ['plugins', 'Plugins'], ['software', 'Software']];

export default function ProductCatalog() {
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const filtered = products.filter((p) => (category === 'all' || p.categories.includes(category)) && `${p.name} ${p.tags.join(' ')}`.toLowerCase().includes(search.trim().toLowerCase()));
  return <section className="section" id="products">
    <div className="eyebrow">Made by us. Ready to explore.</div>
    <div className="heading reveal"><h2>The right tools.<br />A whole new perspective.</h2><p>Get to know each product, explore what it does and find the right fit for your next step.</p></div>
    <div className="toolbar"><div className="filters" aria-label="Product categories">{categories.map(([value, label]) => <button key={value} className={`filter ${category === value ? 'active' : ''}`} aria-pressed={category === value} onClick={() => setCategory(value)}>{label}</button>)}</div><label className="search">⌕ <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find your solution" aria-label="Search products" /></label></div>
    <div className="products">{filtered.map((p) => <ProductCardMotion key={p.slug}><article className="card"><Link className="card-main" href={`/products/${p.slug}/`} aria-label={`Explore ${p.name}`}><ProductPreview kind={p.kind} /><div className="card-body"><div className="meta">{p.category}</div><h3>{p.name}</h3><p>{p.summary}</p><div className="chips">{p.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></Link><div className="card-bottom"><div><small>Starts at</small> <b>{priceLabel(p.price)}</b><small> / month</small></div><Link href={`/products/${p.slug}/`}>Explore product <span className="round-arrow">↗</span></Link></div></article></ProductCardMotion>)}</div>
    <p className="empty" role="status" hidden={filtered.length > 0}>No matching products. Try another category or search.</p>
    <div className="more reveal"><p>Our collection is just getting started. More ideas are on the way.</p><span>ALWAYS BUILDING. ALWAYS EVOLVING. ↗</span></div>
  </section>;
}
