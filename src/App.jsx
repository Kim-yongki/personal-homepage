import React, { useState } from "react";

/** ───────────────────── Mini UI (no external deps) ───────────────────── */
const styles = {
  fontFamily: `'Times New Roman', Times, serif`,
  btn: {
    base: { padding: "8px 12px", borderRadius: 10, border: "1px solid #CBD5E1", background: "#0f172a", color: "#fff", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", cursor: "pointer" },
    outline: { background: "transparent", color: "#0f172a" },
    sm: { padding: "6px 10px", fontSize: 14, borderRadius: 8 },
  },
  card: { border: "1px solid #E2E8F0", borderRadius: 16, background: "#fff" },
  cardHeader: { padding: "14px 16px", borderBottom: "1px solid #E2E8F0" },
  cardTitle: { margin: 0, fontSize: 18, fontWeight: 700 },
  cardContent: { padding: 16, fontSize: 15 },
  badge: { display: "inline-block", padding: "4px 10px", borderRadius: 999, border: "1px solid #E2E8F0", background: "#F8FAFC", fontSize: 12, color: "#475569" },
  chipRow: { display: "flex", flexWrap: "wrap", gap: 8 },
  grid: (cols=2) => ({ display: "grid", gap: 16, gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))` }),
  section: { padding: "48px 0", borderTop: "1px solid #E2E8F0" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },
  header: { position: "sticky", top: 0, zIndex: 30, backdropFilter: "saturate(180%) blur(8px)", background: "rgba(255,255,255,.9)", borderBottom: "1px solid #E2E8F0" },
  navRow: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "12px 0" },
  navLinks: { display: "flex", gap: 18, fontSize: 18, alignItems: "center" }, // nav 폰트 크게
  link: { color: "#0f172a", textDecoration: "none" },
  h2: { fontSize: 26, margin: "0 0 12px 0", fontWeight: 800 },
};

function Button({ children, href, variant="solid", size="md", ...props }){
  const style = {
    ...styles.btn.base,
    ...(variant === "outline" ? styles.btn.outline : {}),
    ...(size === "sm" ? styles.btn.sm : {}),
  };
  if(href) return <a href={href} style={style} {...props} target="_blank" rel="noreferrer">{children}</a>;
  return <button style={style} {...props}>{children}</button>;
}
function Card({ children, style }){ return <div style={{...styles.card, ...style}}>{children}</div>; }
function CardHeader({ children }){ return <div style={styles.cardHeader}>{children}</div>; }
function CardTitle({ children }){ return <h3 style={styles.cardTitle}>{children}</h3>; }
function CardContent({ children, style }){ return <div style={{...styles.cardContent, ...style}}>{children}</div>; }
function Badge({ children }){ return <span style={styles.badge}>{children}</span>; }

/** ───────────────────── DATA (한 곳에서만 수정) ───────────────────── */
const DATA = {
  publications: [
    {
      year: 2025,
      title: "Analyzing the Equity of Road Services through Accessibility Gaps: Focusing on Detour Costs",
      venue: "Journal of the Korean Geographical Society, 60(2):168–186",
      url: "https://doi.org/10.22776/kgs.2025.60.2.168",
      tags: ["Equity", "Road network", "Detour cost"],
      detail: { html: `<p>Analyzes equity from provider’s perspective using detour-cost decomposition and city-level patterns.</p>`, images: [] }
    },
    {
      year: 2024,
      title: "Analysis of Quick Commerce Location Using Modified Network Centrality",
      venue: "Journal of the Korean Urban Geographical Society, 27(1):17–32",
      url: "https://doi.org/10.21189/JKUGS.27.1.2",
      tags: ["Quick commerce", "Network centrality", "Retail"],
      detail: { html: `<p>Introduces OD-aware brand-level centrality; shows q-commerce efficiency vs offline retail.</p>`, images: [] }
    },
    {
      year: 2025,
      title: "Rethinking linear-city accessibility: development of linearity indices (under review)",
      venue: "Journal of Transport Geography (submitted)",
      url: "https://example.com/jtrg-submission",
      tags: ["Linear city", "Accessibility", "Network analysis"],
      detail: { html: `<p>Proposes morphological & structural linearity; relates to detour rate and equity.</p>`, images: [] }
    },
  ],
  projects: [
    {
      year: 2025,
      title: "Fulfillment Logistics & Proximity Logistics (M.A. Thesis)",
      descr: "Evaluated parcel transport-chain scenarios and quantified proximity-logistics pressure in the Seoul Capital Area.",
      url: "https://example.com/thesis.pdf",
      tags: ["Fulfillment","Transport chain","Logistics sprawl","Proximity logistics"],
      detail: {
        html: `<p>Compares multi-stop vs hub-and-spoke chains and pressure mapping using OD flows.</p>`,
        images: [
          "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581093588401-16b3b0f0b4b9?q=80&w=1600&auto=format&fit=crop",
        ]
      }
    },
    {
      year: 2024,
      title: "OD Network Centrality for Brand-level Q-commerce",
      descr: "OD-aware centrality to evaluate brand-level transportation efficiency; compared MFCs to offline retail.",
      url: "https://example.com/od-centrality.pdf",
      tags: ["Q-commerce","Centrality","MFC"],
      detail: {
        html: `<p>Aggregates store-level indices to brand networks; shows OD-weighted closeness advantage.</p>`,
        images: [
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?q=80&w=1600&auto=format&fit=crop"
        ]
      }
    },
  ],
  talks: [
    {
      year: 2025,
      title: "Equity of detour costs in road networks based on the principle of equal sacrifice",
      venue: "Korean Geography Conference, Seoul",
      url: "https://example.com/equal-sacrifice-slides.pdf",
      tags: ["Detour cost","Equity"],
      detail: {
        html: `<p>Fairness contours and detour-gap decomposition across cities.</p>`,
        images: [
          "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
        ]
      }
    },
    {
      year: 2025,
      title: "Dual-Spatial Cross Validation for Machine Learning–Based OD Prediction",
      venue: "Korean Geography Conference, Seoul",
      url: "https://example.com/od-cv-slides.pdf",
      tags: ["OD","Spatial CV","ML"],
      detail: {
        html: `<p>OD split diagrams, leakage analysis, model comparisons.</p>`,
        images: [
          "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=1600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1600&auto=format&fit=crop"
        ]
      }
    },
  ],
};

export default function App() {
  const [detail, setDetail] = useState({open:false, title:"", html:"", images:[]});

  function SectionList({ id, title, entries, showYear=false, showVenue=false, cols=3 }) {
    return (
      <section id={id} style={styles.section}>
        <div style={{...styles.container}}>
          <h2 style={styles.h2}>{title}</h2>
          <div style={styles.grid(cols)}>
            {entries.map((it, idx) => (
              <Card key={idx}>
                <CardHeader>
                  <CardTitle>{showYear && it.year ? `[${it.year}] ` : ""}{it.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {showVenue && it.venue && (<div style={{color:"#334155", marginBottom:8}}>{it.venue}</div>)}
                  {it.descr && (<p style={{color:"#334155", lineHeight:1.6, marginBottom:8}}>{it.descr}</p>)}
                  {it.tags?.length ? (<div style={{...styles.chipRow, marginTop: 4}}>{it.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>) : null}
                  <div style={{display:"flex", gap:8, marginTop: 12, flexWrap:"wrap"}}>
                    {it.url && <Button href={it.url}>View (PDF)</Button>}
                    {(it.detail?.html || (it.detail?.images?.length ?? 0) > 0) && (
                      <Button variant="outline" onClick={() => setDetail({ open:true, title: it.title, html: it.detail?.html || "", images: it.detail?.images || [] })}>
                        Detail
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function DetailModal(){
    if(!detail.open) return null;
    return (
      <div
        onClick={()=>setDetail({open:false,title:"",html:"",images:[]})}
        style={{
          position:"fixed", inset:0, zIndex:60, background:"rgba(0,0,0,.55)",
          display:"flex", alignItems:"center", justifyContent:"center"
        }}
      >
        <div
          onClick={(e)=>e.stopPropagation()}
          style={{
            background:"#fff", width:"min(900px, 92vw)", maxHeight:"88vh",
            borderRadius:16, overflow:"hidden", display:"flex", flexDirection:"column",
            boxShadow:"0 10px 30px rgba(0,0,0,.25)", fontFamily: styles.fontFamily
          }}
        >
          <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 16px", borderBottom:"1px solid #E2E8F0"}}>
            <strong style={{fontSize:18}}>{detail.title}</strong>
            <Button variant="outline" onClick={()=>setDetail({open:false,title:"",html:"",images:[]})}>✕ Close</Button>
          </div>
          <div style={{padding:16, overflowY:"auto"}}>
            {detail.images.map((src, i)=>(
              <div key={i} style={{width:"100%", marginBottom:12}}>
                <img src={src} alt={`detail-${i}`} style={{width:"100%", height:"auto", display:"block"}} />
              </div>
            ))}
            {detail.html && (
              <div style={{color:"#334155", lineHeight:1.7}} dangerouslySetInnerHTML={{__html: detail.html}} />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #ffffff, #F1F5F9)", color: "#0f172a", fontFamily: styles.fontFamily }}>
      <DetailModal />

      {/* Header */}
      <header style={styles.header}>
        <div style={{...styles.container, ...styles.navRow}}>
          <a href="#home" style={{...styles.link, fontWeight: 700, fontSize: 20}}>Yongki Kim</a>
          <nav style={styles.navLinks}>
            <a href="#about" style={styles.link}>About</a>
            <a href="#pubs" style={styles.link}>Publications</a>
            <a href="#projects" style={styles.link}>Projects</a>
            <a href="#talks" style={styles.link}>Talks</a>
            <a href="#contact" style={styles.link}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero / About */}
      <section id="home" style={{...styles.container, padding: "56px 16px"}}>
        <div style={{...styles.grid(2), alignItems:"center"}}>
          <div>
            <h1 style={{fontSize: 36, fontWeight: 900, margin: 0}}>Transport Geography • Urban Structure • Logistics</h1>
            <p style={{marginTop: 16, color:"#475569", lineHeight: 1.6}}>
              M.A. student at Seoul National University. I study how road and logistics networks shape
              accessibility, equity, and urban form — from quick-commerce MFC locations to linear-city structures
              and detour-cost fairness.
            </p>
            <div style={{...styles.chipRow, marginTop: 12}}>
              {["Transport networks","Accessibility","Urban linearity","Q-commerce","OD modeling"].map(t => <Badge key={t}>{t}</Badge>)}
            </div>
          </div>

          {/* About me card */}
          <div id="about" style={{paddingLeft: 10}}>
            <Card>
              <CardHeader><CardTitle>About me</CardTitle></CardHeader>
              <CardContent>
                <div style={{display:"flex", justifyContent:"center", marginBottom: 12}}>
                  <img src={"./profile image.jpg"} alt="Profile" style={{width: 120, height: 120, borderRadius: "50%", objectFit: "cover", border: "1px solid #E2E8F0"}} />
                </div>
                <p style={{color:"#334155", lineHeight: 1.6, marginBottom: 12}}>
                  I’m Yongki Kim, an urban/transport geography researcher focusing on how network structure
                  shapes accessibility and equity. My recent work spans quick-commerce MFC siting (brand-level
                  OD centrality), urban linearity metrics, and detour-cost fairness in public road services.
                </p>
                <div style={{display:"flex", gap:8, alignItems:"center", marginBottom: 6}}>📍 Seoul, South Korea</div>
                <div style={{display:"flex", gap:8, alignItems:"center", marginBottom: 6}}>
                  ✉️ <a href="mailto:Pauluhill74@gmail.com">Pauluhill74@gmail.com</a> • <a href="mailto:pauluhill@snu.ac.kr">pauluhill@snu.ac.kr</a>
                </div>
                <div style={{display:"flex", gap:8, alignItems:"center", marginBottom: 6}}>
                  🔗 <a href="https://www.linkedin.com/in/urbankim/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
                <div style={{display:"flex", gap:8, alignItems:"center"}}>
                  🌐 <a href="https://scholar.google.com/citations?user=G-AE3o0AAAAJ&hl=ko&oi=sra" target="_blank" rel="noreferrer">Google Scholar</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications & Manuscripts */}
      <SectionList id="pubs" title="Publications & Manuscripts" entries={DATA.publications} showYear showVenue cols={3} />

      {/* Research Projects (연도 표시) */}
      <SectionList id="projects" title="Research Projects" entries={DATA.projects} showYear cols={3} />

      {/* Talks & Presentations */}
      <SectionList id="talks" title="Talks & Presentations" entries={DATA.talks} showYear showVenue cols={2} />

      {/* Contact */}
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.h2}>Contact</h2>
        </div>
        <div style={styles.container}>
          <div style={styles.grid(2)}>
            <Card>
              <CardContent>
                <div style={{display:"flex", gap:8, marginBottom:6}}>✉️ <a href="mailto:Pauluhill74@gmail.com">Pauluhill74@gmail.com</a></div>
                <div style={{display:"flex", gap:8, marginBottom:6}}>✉️ <a href="mailto:pauluhill@snu.ac.kr">pauluhill@snu.ac.kr</a></div>
                <div style={{display:"flex", gap:8, marginBottom:6}}>🔗 <a href="https://www.linkedin.com/in/urbankim/" target="_blank" rel="noreferrer">LinkedIn</a></div>
                <div style={{display:"flex", gap:8}}>🌐 <a href="https://scholar.google.com/citations?user=G-AE3o0AAAAJ&hl=ko&oi=sra" target="_blank" rel="noreferrer">Google Scholar</a></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{borderTop:"1px solid #E2E8F0"}}>
        <div style={{...styles.container, padding:"16px 0", display:"flex", justifyContent:"space-between", fontSize:14, color:"#64748B"}}>
          <div>© {new Date().getFullYear()} Yongki Kim</div>
          <a href="#home" style={{...styles.link, color:"#64748B"}}>Top ↑</a>
        </div>
      </footer>
    </div>
  );
}
