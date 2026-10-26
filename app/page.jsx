import ScrollCopy from '@/components/ScrollCopy';
import Link from 'next/link';
import { asset } from '@/lib/paths';
import ProductCatalog from '@/components/ProductCatalog';
export default function HomePage(){return (<main className="wrap"><section className="hero-v3"><div className="aurora" aria-hidden="true"></div>
<div className="metal left" aria-hidden="true"></div>
<div className="metal right" aria-hidden="true"></div>
<div className="metal bottom" aria-hidden="true"></div>
<div className="halo" aria-hidden="true"></div>
<span className="hero-marker">{"SCROLL TO DISCOVER — SOLUTION STORE"}</span>
<div className="hero-copy"><div className="eyebrow">{"Independent software. Extraordinary possibilities."}</div>
<h1>{"Move your business forward"}<br />{"with "}<em>{"the right solutions."}</em>
</h1>
<p>{"AI-powered conversations. Connected people operations. Discover thoughtfully built portals, plugins and software that turn everyday challenges into your next opportunity."}</p>
<div className="actions"><a className="btn outline magnetic" href="#products">{"Explore our products ↗"}</a>
<a className="btn magnetic" href="#about">{"Meet Solution Store ↗"}</a>
</div>
<div className="small-note">{"TWO PRODUCTS TODAY. A WORLD OF POSSIBILITIES AHEAD."}</div>
</div>
</section>
<div className="categories"><small>{"THE SOLUTION STORE ECOSYSTEM"}</small>
<span>{"◫   Portals"}</span>
<span>{"▦   Applications"}</span>
<span>{"⌘   Plugins"}</span>
<span>{"↗   Software"}</span>
</div>
<section className="intro-editorial reveal"><div className="eyebrow">{"A small team. A bigger vision."}</div>
<div><ScrollCopy />
<div className="editorial-bottom"><span className="signature">{"Made by Solution Store"}</span>
<a className="text-link" href="#products">{"Discover the collection ↗"}</a>
</div>
</div>
</section>
<ProductCatalog /><section className="section" id="possibilities"><div className="eyebrow">{"Different needs. Connected thinking."}</div>
<div className="heading reveal"><h2>{"Find your purpose."}<br />{"Meet your solution."}</h2>
<p>{"Start with the work you want to improve. Then explore the product built around it."}</p>
</div>
<div className="use-grid"><article className="use-case reveal"><span className="label">{"01 / CUSTOMER CONVERSATIONS"}</span>
<h3>{"Give every website visitor a place to start."}</h3>
<p>{"Bring AI chat, your knowledge base and a WordPress connection together with Chat Pilot. Explore the product’s approach to customer conversations, leads and insights."}</p>
<Link href="/products/chat-pilot/">{"Explore Chat Pilot ↗"}</Link>
</article>
<article className="use-case reveal"><span className="label">{"02 / PEOPLE OPERATIONS"}</span>
<h3>{"Bring everyday HR into one workspace."}</h3>
<p>{"Explore attendance, leave management and payroll through HRM Pilot. A focused starting point for teams looking to connect their people operations."}</p>
<Link href="/products/hrm/">{"Explore HRM Pilot ↗"}</Link>
</article>
</div>
</section>
<section id="about"><div className="statement reveal"><div><div className="eyebrow">{"A studio mindset. A product focus."}</div>
<h2>{"We build ideas"}<br />{"into everyday"}<br />{"advantages."}</h2>
</div>
<div><p>{"Solution Store is the home of the portals, apps, plugins and software we create. Different products, brought together by a simple ambition: make digital work feel more connected."}</p>
<p>{"Start with a conversation. Organise your people. Discover what’s possible when the right tool meets the right need."}</p>
<a className="text-link" href="#products">{"Explore what we’ve built ↗"}</a>
</div>
</div>
<div className="benefits"><div className="benefit reveal"><small>{"01 / OUR OWN CREATIONS"}</small>
<h3>{"Built by one team."}</h3>
<p>{"Explore the products we create and bring to life, together in one store."}</p>
</div>
<div className="benefit reveal"><small>{"02 / CLARITY COMES FIRST"}</small>
<h3>{"Know what you’re choosing."}</h3>
<p>{"Dedicated product pages put the overview, capabilities and pricing in one place."}</p>
</div>
<div className="benefit reveal"><small>{"03 / ROOM FOR WHAT’S NEXT"}</small>
<h3>{"A collection that grows."}</h3>
<p>{"More portals, apps, plugins and software will join the products you see today."}</p>
</div>
</div>
</section>
<div className="marquee" aria-label="AI conversations, connected workspaces, thoughtful software, real possibilities"><div className="marquee-track" aria-hidden="true"><span>{"AI conversations "}<b>{"✳"}</b>
{" Connected workspaces "}<b>{"✳"}</b>
{" Thoughtful software "}<b>{"✳"}</b>
{" Real possibilities "}<b>{"✳"}</b>
</span>
<span>{"AI conversations "}<b>{"✳"}</b>
{" Connected workspaces "}<b>{"✳"}</b>
{" Thoughtful software "}<b>{"✳"}</b>
{" Real possibilities "}<b>{"✳"}</b>
</span>
</div>
</div>
<section className="vision-section" id="vision"><div className="vision-layout"><div className="engine reveal" aria-label="Animated three-dimensional Solution Store brand cube"><div className="engine-orbit"></div>
<div className="engine-tile tile-chat" aria-hidden="true">{"◈"}<small>{"Chat Pilot"}</small>
</div>
<div className="engine-tile tile-hrm" aria-hidden="true">{"▦"}<small>{"HRM Pilot"}</small>
</div>
<div className="engine-shell"><div className="cube-face face-front"><img src={asset("assets/solution-store-logo-coral-blue.png")} alt="" width="115" height="130" /></div>
<div className="cube-face face-back"><img src={asset("assets/solution-store-logo-coral-blue.png")} alt="" width="115" height="130" /></div>
<div className="cube-face face-left"><img src={asset("assets/solution-store-logo-coral-blue.png")} alt="" width="115" height="130" /></div>
<div className="cube-face face-right"><img src={asset("assets/solution-store-logo-coral-blue.png")} alt="" width="115" height="130" /></div>
<div className="cube-face face-top"><img src={asset("assets/solution-store-logo-coral-blue.png")} alt="" width="115" height="130" /></div>
<div className="cube-face face-bottom"><img src={asset("assets/solution-store-logo-coral-blue.png")} alt="" width="115" height="130" /></div>
</div>
<span className="engine-label">{"BUILT WITH PURPOSE / DESIGNED FOR WHAT’S NEXT"}</span>
</div>
<div className="vision-copy reveal"><div className="eyebrow">{"The thinking behind the tools"}</div>
<h2>{"Technology feels better"}<br />{"when it has "}<span className="gradient-text">{"a purpose."}</span>
</h2>
<p>{"We’re building a collection, one useful product at a time. Each has its own role, its own workspace and a dedicated place to discover what it can do."}</p>
<ul className="vision-list"><li>{"Products created by our own team"}</li>
<li>{"Clear capabilities and introductory pricing"}</li>
<li>{"A direct route from product page to live portal"}</li>
<li>{"Space for more apps, portals, plugins and software"}</li>
</ul>
<a className="text-link" href="#compare">{"Compare the collection ↗"}</a>
</div>
</div>
</section>
<section className="section" id="compare"><div className="eyebrow">{"A clearer choice"}</div>
<div className="heading reveal"><h2>{"Two products."}<br />{"Two ways forward."}</h2>
<p>{"Compare the essentials before you dive into a dedicated product page."}</p>
</div>
<div className="comparison reveal"><table><caption>{"A quick look at the Solution Store collection"}</caption>
<thead><tr><th scope="col">{"Find your fit"}</th>
<th scope="col">{"Chat Pilot"}</th>
<th scope="col">{"HRM Pilot"}</th>
</tr>
</thead>
<tbody><tr><td>{"Built around"}</td>
<td>{"Website conversations"}</td>
<td>{"People operations"}</td>
</tr>
<tr><td>{"Core capabilities"}</td>
<td>{"AI chat, knowledge base,"}<br />{"WordPress connector"}</td>
<td>{"Attendance, leave"}<br />{"and payroll"}</td>
</tr>
<tr><td>{"Product format"}</td>
<td>{"Web app + WordPress plugin"}</td>
<td>{"Web portal"}</td>
</tr>
<tr><td>{"Introductory pricing"}</td>
<td>{"₹999 / month"}</td>
<td>{"₹1,499 / month"}</td>
</tr>
<tr><td>{"Take a closer look"}</td>
<td><Link href="/products/chat-pilot/">{"Explore Chat Pilot ↗"}</Link>
</td>
<td><Link href="/products/hrm/">{"Explore HRM Pilot ↗"}</Link>
</td>
</tr>
</tbody>
</table>
</div>
</section>
<section className="section" id="how"><div className="eyebrow">{"From discovery to possibility"}</div>
<h2>{"A simple path to"}<br />{"your next solution."}</h2>
<div className="steps"><div className="step reveal"><span className="num">{"01"}</span>
<h3>{"Discover your fit"}</h3>
<p>{"Browse our products and find the one that speaks to your needs."}</p>
</div>
<div className="step reveal"><span className="num">{"02"}</span>
<h3>{"Get the full picture"}</h3>
<p>{"Explore its dedicated page for an overview, features and introductory pricing."}</p>
</div>
<div className="step reveal"><span className="num">{"03"}</span>
<h3>{"Make your next move"}</h3>
<p>{"Use the live portal link when you’re ready to explore the product itself."}</p>
</div>
</div>
</section>
<section className="section" id="roadmap"><div className="eyebrow">{"Always building. Always evolving."}</div>
<div className="heading reveal"><h2>{"Today’s collection."}<br />{"Tomorrow’s possibilities."}</h2>
<p>{"A home for what we’ve created, with room for the ideas still taking shape."}</p>
</div>
<div className="roadmap"><article className="reveal"><small>{"AVAILABLE TO EXPLORE"}</small>
<h3>{"Chat Pilot & HRM Pilot"}</h3>
<p>{"Discover our first two products, explore their capabilities and open their live portals."}</p>
</article>
<article className="reveal"><small>{"THE COLLECTION WILL GROW"}</small>
<h3>{"More ways to work smarter."}</h3>
<p>{"Future portals, applications and plugins will join the store as we build and release them."}</p>
</article>
<article className="reveal"><small>{"OUR ONGOING FOCUS"}</small>
<h3>{"Keep the experience clear."}</h3>
<p>{"Help you understand each product, compare what matters and find a practical next step."}</p>
</article>
</div>
</section>
<section className="banner reveal"><div><div className="eyebrow">{"Your next chapter starts here"}</div>
<h2>{"Good ideas deserve"}<br />{"great tools."}</h2>
<p>{"Take a closer look at what we’re building."}</p>
</div>
<a className="btn" href="#products">{"Find your solution ↗"}</a>
</section>
<section className="faq"><div><div className="eyebrow">{"A little more clarity"}</div>
<h2>{"Curious?"}<br />{"We thought you might be."}</h2>
</div>
<div><details><summary>{"What can I find at Solution Store?"}</summary>
<p>{"Our own portals, apps, plugins and software. Right now, the collection includes Chat Pilot and HRM Pilot."}</p>
</details>
<details><summary>{"Where can I see features and pricing?"}</summary>
<p>{"Click a product to open its dedicated page. You’ll find its overview, capabilities, introductory monthly pricing and a link to the live application."}</p>
</details>
<details><summary>{"Can I open the actual product?"}</summary>
<p>{"Yes. Select “Open live portal” from a product page. It opens the application in a new tab; access may require an account."}</p>
</details>
<details><summary>{"Can I pay directly on this website?"}</summary>
<p>{"This storefront currently helps you explore and compare our products. Online checkout is not configured yet."}</p>
</details>
</div>
</section>
</main>
);}
