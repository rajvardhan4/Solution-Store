import Link from 'next/link';
import { asset } from '@/lib/paths';
export default function Footer(){return (<footer className="wrap"><div className="expanded-footer"><div><Link href="/" className="brand"><img src={asset("assets/solution-store-logo-coral-blue.png")} alt="" width="36" height="40" />{"solution store"}<small>{"."}</small>
</Link>
<p>{"A home for the products we create. Thoughtful tools for conversations, people and the possibilities ahead."}</p>
</div>
<div><h4>{"The collection"}</h4>
<Link href="/products/chat-pilot/">{"Chat Pilot ↗"}</Link>
<Link href="/products/hrm/">{"HRM Pilot ↗"}</Link>
<Link href="/#compare">{"Compare products"}</Link>
</div>
<div><h4>{"Explore the store"}</h4>
<Link href="/#about">{"Our approach"}</Link>
<Link href="/#how">{"How it works"}</Link>
<Link href="/#roadmap">{"What’s next"}</Link>
</div>
</div>
<div className="footer"><Link href="/"><span className="brand"><img src={asset("assets/solution-store-logo-coral-blue.png")} alt="" width="36" height="40" />{"solution store"}<small>{"."}</small>
</span>
</Link>
<small>{"© 2026 Solution Store"}<br />{"Built with purpose. Made for possibility."}</small>
</div>
</footer>
);}
