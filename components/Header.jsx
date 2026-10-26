import Link from 'next/link';
import { asset } from '@/lib/paths';
import { ThemeToggle } from './Experience';
export default function Header(){return <div className="wrap"><header><Link href="/" aria-label="Solution Store home"><span className="brand"><img src={asset("assets/solution-store-logo-coral-blue.png")} alt="" width="36" height="40" />{"solution store"}<small>{"."}</small>
</span>
</Link>
<nav aria-label="Main navigation"><Link href="/#products">{"Our products"}</Link>
<Link href="/#about">{"About us"}</Link>
<Link href="/#how">{"How it works"}</Link>
</nav>
<div className="header-tools"><ThemeToggle /><Link className="pill" href="/#products">{"Explore solutions ↗"}</Link>
</div>
</header>
<div className="mobile-nav"><Link href="/#products">{"Products"}</Link>
<Link href="/#about">{"About"}</Link>
<Link href="/#compare">{"Compare"}</Link>
<Link href="/#roadmap">{"What’s next"}</Link>
</div>
</div>}
