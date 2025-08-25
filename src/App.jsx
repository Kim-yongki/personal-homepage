import React, { useState } from "react";

/** ───────────────────── 0) CONTENT CONFIG (여기만 수정) ───────────────────── */
const CONFIG = {
  site: {
    ownerName: "Yongki Kim",
    fontFamily: `'Times New Roman', Times, serif`,
    profileImage: "./profile image.jpg", // /public 기준
    cvUrl:
      "https://drive.google.com/file/d/1y6qNMvp16ZrmA4EqHIb09fLoe-ipbIov/view?usp=drive_link",
  },
  hero: {
    title: "Transport • Urban Geography",
    blurb: "",
    badges: [
      "Transport Geography",
      "Urban Structure",
      "Logistics",
      "Real Estate",
      "Spatial Data Science",
      "Network Analysis",
    ],
  },
  person: {
    about:
      "M.A. student at Seoul National University. My research focuses on how transportation networks, urban structures, and logistics systems interact to shape spatial accessibility and equity. I'm interested in the implications of these interactions for urban planning and policy.",
    location: "Seoul, South Korea",
    emails: ["pauluhill74@gmail.com", "pauluhill@snu.ac.kr"],
    links: {
      linkedin: "https://www.linkedin.com/in/urbankim/",
      scholar:
        "https://scholar.google.com/citations?user=G-AE3o0AAAAJ&hl=ko&oi=sra",
      researchgate:
        "https://www.researchgate.net/profile/Yongki-Kim-2?ev=hdr_xprf",
    },
  },
  nav: [
    { label: "About", href: "#about", external: false },
    { label: "Publications", href: "#pubs", external: false },
    { label: "Projects", href: "#projects", external: false },
    { label: "Talks", href: "#talks", external: false },
    { label: "Contact", href: "#contact", external: false },
    { label: "CV", href: null, external: true, useCV: true },
  ],
};

/** ───────────────────── 0.5) 이미지 경로 resolver (figures 폴더 지원) ───────────────────── */
// figures 폴더가 public/figures 에 있다고 가정 → /figures/파일명 으로 접근
const IMAGE_BASE = "/figures/";
function resolveImgSrc(src) {
  if (!src) return src;
  if (/^(https?:)?\/\//i.test(src) || /^data:/i.test(src)) return src;
  if (/^\.?\/?figures\//i.test(src)) return src.replace(/^\.?\//, "/");
  return `${IMAGE_BASE}${src.replace(/^\.?\//, "")}`;
}

/** ───────────────────── 1) SECTION DATA (여기만 수정) ───────────────────── */
const DATA = {
  publications: [
    {
      year: 2025,
      title: "Rethinking linear-city accessibility: development of linearity indices",
      venue: "[Under Review] Journal of Transport Geography",
      url: "",
      tags: ["Linear city", "Accessibility", "Index development"],
      highlights: {
        html: `<p>This study re-examines the assumption that linear urban road networks inherently improve efficiency and equity, proposing two flow-based linearity indices and testing them across 65 South Korean cities.</p>
        <ul>
          <li><b>Two new indices.</b> The Morphological Linearity Index (MLI) captures the alignment of trip flows along a single axis, while the Structural Linearity Index (SLI) measures redundancy of shortest paths.</li>
          <li><b>Differential effects.</b> High-MLI cities show lower mean detour rates but slightly longer average trip distances; high-SLI cities exhibit higher detour rates and greater inequity in detour distribution.</li>
          <li><b>Implication.</b> Linearity as a geometric form is not inherently efficient or equitable; benefits emerge when paired with high-capacity trunk corridors (e.g., fast regional rail).</li>
          <li><b>Use.</b> The indices provide a diagnostic tool for evaluating corridor-oriented planning and assessing distributional outcomes.</li>
        </ul>`,
        images: [
          { src: "figures/MLI.png", caption: "Figure. Morphological Linearity Index (MLI)" },
          { src: "figures/SLI.png", caption: "Figure. Structural Linearity Index (SLI)" },
          { src: "figures/local_SLI.png", caption: "Figure. Local Structural Linearity Index (SLI)" }
        ],
      },
    },
    {
      year: 2025,
      title:
        "Fulfillment-Service and Proximity Logistics : Focused on Logistics Space of Seoul Capital Area",
      venue: "[In Progress] M.A. Thesis, Seoul National University",
      url: "",
      tags: ["Thesis", "Linear city", "Accessibility"],
      highlights: {
        html: `<p>This thesis quantifies how fulfillment-based parcel delivery reconfigures the logistics space of the Seoul Capital Area and what it implies for facility siting and network planning.</p>
  <ul>
    <li><b>Empirical impact of fulfillment on proximity logistics.</b> Using parcel OD volumes and firm-level networks (CJ Logistics vs. Coupang), I run freight transportation-scenario simulations combining hub-and-spoke and fulfillment-based chains.</li>
    <li><b>Chain-level buildup of transport costs.</b> Map cumulative transport cost along each delivery chain and identify where detour costs concentrate.</li>
    <li><b>Policy direction.</b> A time-series logistics-sprawl index reveals persistent peripheral siting; propose incentives for proximity logistics with strategic clustering.</li>
  </ul>`,
        images: [
          { src: "figures/Freight_supplychain.png", caption: "Figure 1. Supply chain composition by scenarios" },
          { src: "figures/Freight_scenario.png", caption: "Figure 2. Transportation cost by scenarios" },
          { src: "figures/Logistics_sprawl.png", caption: "Figure 3. Logistics sprawl over time" }
        ],
      },
    },
    {
      year: 2025,
      title: "Analyzing the Equity of Road Services through Accessibility Gaps: Focusing on Detour Costs",
      venue: "Journal of the Korean Geographical Society, 60(2):168–186",
      url: "https://doi.org/10.22776/kgs.2025.60.2.168",
      tags: ["Equity", "Road network", "Detour cost"],
      highlights: {
        html: `<p>From a <i>provider-side</i> perspective, this study assesses road-network equity by decomposing accessibility into Euclidean baseline and detour-induced costs.</p>
    <ul>
      <li><b>Framework.</b> Equal-sacrifice principle on detour; diagnose mean transportation cost and dispersion (SD, Gini).</li>
      <li><b>Evidence.</b> Many mid-sized cities’ road networks <i>exacerbate</i> accessibility gaps; cores capture low-circuity benefits.</li>
      <li><b>Implications.</b> Target places where detour concentrates to diffuse benefits beyond cores.</li>
    </ul>`,
        images: [
          { src: "figures/Equal_transportation_sacrifice.png", caption: "Figure 1. Equal-sacrifice principle for detour costs" },
          { src: "figures/Road_effect.png", caption: "Figure 2. Road-network effect on accessibility gaps" },
          { src: "figures/accessibilities_detour_cost.png", caption: "Figure 3. Accessibility vs. detour costs (examples)" }
        ]
      }
    },
    {
      year: 2024,
      title:
        "Analysis of Quick Commerce Location Using Modified Network Centrality",
      venue: "Journal of the Korean Urban Geographical Society, 27(1):17–32",
      url: "https://doi.org/10.21189/JKUGS.27.1.2",
      tags: ["Quick commerce", "Network centrality", "Retail"],
      highlights: {
        html: `<p>We propose a multi-location network centrality to capture brand-level performance in q-commerce, where retailers bear last-mile costs.</p>`,
        images: [
          { src: "figures/retail_locations.png", caption: "Figure 1. Quick commerce & retail locations" },
          { src: "figures/multilocation_network_centrality.png", caption: "Figure 2. Multi-location network centrality" },
          { src: "figures/multilocation_network_centrality(equation).png", caption: "Figure 3. Multi-location network centrality (equation)" },
        ],
      },
    },
    {
      year: 2020,
      title:
        "Storage: 2020 Korean Real Estate Through the Eyes of Twenties (Book)",
      venue: "Published by the SNU Real Estate Club (Contributing Author & Editor)",
      url: "https://tumblbug.com/rep?ref=GNB%2F%EC%A0%84%EC%B2%B4",
      tags: ["Real estate", "Finance", "Policy"],
      highlights: {
        html: `<p>A student-led volume by SNU Real Estate Club presenting Gen Z perspectives on Korea’s 2020 real estate market. ISBN: 9788924076691.</p>`,
        images: [{ src: "figures/storage.png", caption: "Figure 1. Cover" }],
      },
    },
  ],

  projects: [
    {
      year: 2025,
      title:
        "A Study on Enhancing SME Policy Evaluation through SME Big-Data Analytics",
      descr: "[In progress] Funded by Ministry of SMEs and Startups.",
      url: "",
      tags: ["SME", "Big data", "Policy evaluation", "Spatial network analysis"],
      highlights: {
        html: `<p><b>Role:</b> Graduate Student Researcher · <b>Institution:</b> SNU Enterprise Policy Center · <b>Period:</b> May 2025 – ongoing · <b>Work:</b> Spatial network analysis of SME transactions.</p>`,
        images: [
          { src: "figures/transactions.png", caption: "Figure 1. Transaction network (example)" },
          { src: "figures/community.png", caption: "Figure 2. Community detection (example)" },
          { src: "figures/sankey.png", caption: "Figure 3. Sankey diagram (example)" },
        ],
      },
    },
    {
      year: 2024,
      title:
        "A Study on Advancing Big Data-based Policy Evaluation for Small and Medium-sized Enterprises",
      descr: "Funded by Ministry of SMEs and Startups.",
      url: "",
      tags: ["SME", "Big data", "Policy evaluation", "ESDA"],
      highlights: {
        html: `<p><b>Role:</b> Graduate Student Researcher · <b>Institution:</b> SNU Enterprise Policy Center · <b>Period:</b> Jun 2024 – Dec 2024 · <b>Contributions:</b> ESDA of SME data.</p>`,
        images: [
          { src: "figures/SME_Gmoran.png", caption: "Figure 1. Global Moran's I (example)" },
          { src: "figures/SME_Lmoran.png", caption: "Figure 2. Local Moran's I (example)" },
        ],
      },
    },
    {
      year: 2025,
      title:
        "A Study on Strategies for Reforming the Geography Curriculum in the Era of Interdisciplinary and Open Majors",
      descr: "Funded by Brain Korea Research Team for the Future Landscape.",
      url: "",
      tags: ["Education", "Curriculum", "Interdisciplinary"],
      highlights: {
        html: `<p><b>Role:</b> Graduate Student Research Assistant · <b>Institution:</b> SNU Geography · <b>Period:</b> Jan–Feb 2025 · <b>Contributions:</b> Survey of geography-related interdisciplinary degree programs in Korea.</p>`,
        images: [],
      },
    },
    {
      year: 2020,
      title: "SNUSRC X ELYSIA Real Estate Report",
      descr: "Student-led industry reports sponsored by ELYSIA.",
      url: "https://www.snusrc.com/elysia",
      tags: ["Real estate", "Student initiative", "Periodic reports"],
      highlights: {
        html: `<p><b>Role:</b> Project Lead · <b>Organization:</b> SNUSRC Real Estate Club · <b>Period:</b> Aug–Dec 2020 · <b>Contributions:</b> Managed sponsorship, led PM, edited & co-authored reports.</p>`,
        images: [
          { src: "figures/SRC_ELYSIA_cover.png", caption: "Figure 1. Cover" },
          { src: "figures/SRC_ELYSIA_list.png", caption: "Figure 2. List of Reports" },
        ],
      },
    },
  ],

  talks: [
    {
      year: 2025,
      title:
        "Equity of detour costs in road networks based on the principle of equal sacrifice",
      venue: "Korean Geography Conference, Seoul (Jul. 27–28)",
      url: "",
      tags: ["Detour cost", "Equity"],
      publishedRef:
        "analyzing-the-equity-of-road-services-through-accessibility-gaps-focusing-on-detour-costs",
      publishedLabel: "Published",
      highlights: {
        html: `<p>Equal-sacrifice framing of detour; geometry-to-fairness metrics; policy implications.</p>`,
        images: [
          { src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=1600&auto=format&fit=crop", caption: "Detour-cost equity contours by city" },
          { src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop", caption: "Decomposition of detour gaps by region" },
        ],
      },
    },
    {
      year: 2025,
      title:
        "Dual-Spatial Cross Validation for Machine Learning–Based Origin–Destination Prediction: A Case Study of Parcel Flow",
      venue: "Korean Geography Conference, Seoul (Jul. 27–28)",
      url: "",
      tags: ["OD", "Spatial CV", "ML"],
      highlights: {
        html: `<p>OD block split, leakage analysis, model comparisons for parcel-flow prediction.</p>`,
        images: [
          { src: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=1600&auto=format&fit=crop", caption: "OD block split" },
          { src: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1600&auto=format&fit=crop", caption: "Performance comparison" },
        ],
      },
    },
    {
      year: 2025,
      title:
        "Analysis of the relationship between the linearity of urban structure and accessibility",
      venue: "AAG Annual Meeting, Detroit (Mar. 24–28)",
      url: "",
      tags: ["Linear city", "Accessibility", "Network analysis"],
      publishedRef:
        "rethinking-linear-city-accessibility-development-of-linearity-indices",
      publishedLabel: "Published",
      highlights: {},
    },
    {
      year: 2024,
      title:
        "Differentials in spatial agglomeration among government-supported versus non-supported SMEs: an exploratory spatial data analysis",
      venue: "2024W Conference of the Korean Urban Geographical Society, Gwangju (Dec. 12)",
      url: "",
      tags: ["SME", "Agglomeration", "ESDA"],
      relatedProjectRef:
        "a-study-on-advancing-big-data-based-policy-evaluation-for-small-and-medium-sized-enterprises",
      highlights: {},
    },
    {
      year: 2024,
      title:
        "Urban Linearity and Efficiency–Equity of Accessibility: A Principal Component and Network Analysis of Transport Networks in South Korea’s Cities",
      venue: "Annual Meeting of Korean Geographers, Gongju (Dec. 6)",
      url: "",
      tags: ["Linear city", "Accessibility", "Equity"],
      publishedRef:
        "rethinking-linear-city-accessibility-development-of-linearity-indices",
      publishedLabel: "Published",
      highlights: {},
    },
    {
      year: 2024,
      title:
        "Detecting Urban Development Axes: Development and Application of a Social Network–Based Clustering Methodology",
      venue: "Korean Geographical Society Annual Meeting, Seoul (Jul. 27–28)",
      url: "",
      tags: ["Urban development axes", "Clustering", "SNA"],
      highlights: {
        html: `<p>Clustering-based detection of urban development axes.</p>`,
        images: [
          { src: "figures/Hierarchical_road_network.png", caption: "Hierarchical road network" },
          { src: "figures/Compared_with_urbanplan.png", caption: "Compared with government plan" },
          { src: "figures/Bid_rent_theory_with_clusters.png", caption: "Bid rent theory with axis clusters" },
        ],
      },
    },
    {
      year: 2024,
      title:
        "Analysis of Quick Commerce MFC Location Using Network Centrality: Focusing on Brand-Level Analysis with Modified Indices",
      venue: "AAG Annual Meeting, Honolulu (Apr. 16–20)",
      url: "",
      tags: ["Q-commerce", "Centrality", "MFC"],
      publishedRef:
        "analysis-of-quick-commerce-location-using-modified-network-centrality",
      publishedLabel: "Published",
      highlights: {},
    },
    {
      year: 2023,
      title:
        "Comparative Locational Analysis of Quick-Commerce Versus Conventional Retail Stores: A Network Centrality and Coverage Perspective",
      venue: "2023W Conference of the Korean Urban Geographical Society, Seoul (Dec. 9)",
      url: "",
      tags: ["Q-commerce", "Centrality", "MFC"],
      publishedRef:
        "analysis-of-quick-commerce-location-using-modified-network-centrality",
      publishedLabel: "Published",
      highlights: {},
    },
  ],
};

/** ───────────────────── 2) Mini UI (no external deps) ───────────────────── */
const styles = {
  fontFamily: CONFIG.site.fontFamily,
  btn: {
    base: {
      padding: "8px 12px",
      borderRadius: 10,
      border: "1px solid #CBD5E1",
      background: "#0f172a",
      color: "#fff",
      fontWeight: 600,
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      textDecoration: "none",
      cursor: "pointer",
    },
    outline: { background: "transparent", color: "#0f172a" },
    sm: { padding: "6px 10px", fontSize: 14, borderRadius: 8 },
  },
  card: { border: "1px solid #E2E8F0", borderRadius: 16, background: "#fff" },
  cardHeader: { padding: "14px 16px", borderBottom: "1px solid #E2E8F0" },
  cardTitle: { margin: 0, fontSize: 18, fontWeight: 700 },
  cardContent: { padding: 16, fontSize: 15 },
  badge: {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: 999,
    border: "1px solid #E2E8F0",
    background: "#F8FAFC",
    fontSize: 12,
    color: "#475569",
  },
  chipRow: { display: "flex", flexWrap: "wrap", gap: 8 },
  grid: (cols = 2) => ({
    display: "grid",
    gap: 16,
    gridTemplateColumns: `repeat(${cols}, minmax(0,1fr))`,
  }),
  section: { padding: "48px 0", borderTop: "1px solid #E2E8F0" },
  container: { maxWidth: 1100, margin: "0 auto", padding: "0 16px" },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 30,
    backdropFilter: "saturate(180%) blur(8px)",
    background: "rgba(255,255,255,.9)",
    borderBottom: "1px solid #E2E8F0",
  },
  navRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "12px 0",
  },
  navLinks: { display: "flex", gap: 18, fontSize: 18, alignItems: "center" },
  link: { color: "#0f172a", textDecoration: "none" },
  h2: { fontSize: 26, margin: "0 0 12px 0", fontWeight: 800 },
};

/** 유틸: 제목을 앵커 ID로 변환 */
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** 버튼/카드 컴포넌트 */
function Button({ children, href, variant = "solid", size = "md", ...props }) {
  const style = {
    ...styles.btn.base,
    ...(variant === "outline" ? styles.btn.outline : {}),
    ...(size === "sm" ? styles.btn.sm : {}),
  };
  if (href)
    return (
      <a href={href} style={style} {...props} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  return (
    <button style={style} {...props}>
      {children}
    </button>
  );
}
function Card({ children, style }) {
  return <div style={{ ...styles.card, ...style }}>{children}</div>;
}
function CardHeader({ children }) {
  return <div style={styles.cardHeader}>{children}</div>;
}
function CardTitle({ children }) {
  return <h3 style={styles.cardTitle}>{children}</h3>;
}
function CardContent({ children, style }) {
  return <div style={{ ...styles.cardContent, ...style }}>{children}</div>;
}
function Badge({ children }) {
  return <span style={styles.badge}>{children}</span>;
}

/** ───────────────────── 3) Responsive & highlight CSS ───────────────────── */
function ResponsiveStyles() {
  return (
    <style>{`
      .r-container { max-width: 1100px; margin: 0 auto; padding: 0 16px; }
      .r-grid { display: grid; gap: 16px; }
      .r-cols-3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
      .r-cols-2 { grid-template-columns: repeat(2, minmax(0,1fr)); }

      /* 데스크톱: About | Text */
      .r-hero { display: grid; grid-template-columns: 1fr 1.2fr; gap: 16px; align-items: center; grid-template-areas: "about text"; }
      .hero-text  { grid-area: text; }
      .hero-about { grid-area: about; }

      @media (max-width: 900px){
        .r-hero { grid-template-columns: 1fr; grid-template-areas: "text" "about"; }
        .r-cols-3 { grid-template-columns: repeat(2, minmax(0,1fr)); }
      }
      @media (max-width: 640px){
        .r-cols-3, .r-cols-2 { grid-template-columns: repeat(1, minmax(0,1fr)); }
        .r-nav { gap: 12px; }
        .r-nav a { font-size: 16px; }
        .r-profile { width:96px; height:96px; }
      }

      .r-nav { display:flex; gap:18px; align-items:center; flex-wrap: wrap; }
      .r-profile { width:120px; height:120px; border-radius:9999px; object-fit:cover; border:1px solid #E2E8F0; }

      .thumb-grid { display: grid; gap: 8px; grid-template-columns: repeat(3, minmax(0,1fr)); }
      .thumb { width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border: 1px solid #E2E8F0; border-radius: 10px; cursor: zoom-in; display: block; }
      .thumb-cap{ font-size: 12px; color: #475569; margin-top: 4px; line-height: 1.4; }

      .lightbox { position: fixed; inset: 0; z-index: 80; background: rgba(0,0,0,.65); display: flex; align-items: center; justify-content: center; }
      .lightbox-inner { background: #fff; max-width: min(1100px, 94vw); max-height: 92vh; border-radius: 14px; overflow: hidden; box-shadow: 0 12px 36px rgba(0,0,0,.35); }
      .lightbox-body { padding: 8px; }
      .lightbox-img { max-width: 100%; max-height: 84vh; display: block; }
      .lightbox-top { display: flex; justify-content: flex-end; align-items: center; gap: 8px; padding: 8px 10px; border-bottom: 1px solid #E2E8F0; }
      .lightbox-caption{ padding: 8px 10px; border-top: 1px solid #E2E8F0; font-size: 14px; color: #334155; line-height: 1.5; }

      /* 카드 하이라이트 */
      @keyframes flashBorder {
        0% { box-shadow: 0 0 0 rgba(34,197,94,0); }
        30% { box-shadow: 0 0 0 6px rgba(34,197,94,.25); }
        100% { box-shadow: 0 0 0 rgba(34,197,94,0); }
      }
      .flash-highlight { outline: 2px solid #22c55e; animation: flashBorder 1.8s ease-out 0s 2; border-radius: 16px; }
    `}</style>
  );
}

/** ───────────────────── 4) App ───────────────────── */
export default function App() {
  const [hlModal, setHlModal] = useState({ open: false, title: "", html: "", images: [] });
  const [flashId, setFlashId] = useState("");

  function goToAndFlash(id) {
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setFlashId(id);
      window.setTimeout(() => setFlashId(""), 4000);
    }
  }

  function SectionList({
    id,
    title,
    entries,
    showYear = false,
    showVenue = false,
    cols = 3,
    type = "generic", // "pubs" | "projects" | "talks"
  }) {
    const colClass = cols === 3 ? "r-cols-3" : "r-cols-2";
    return (
      <section id={id} style={styles.section}>
        <div className="r-container">
          <h2 style={styles.h2}>{title}</h2>
          <div className={`r-grid ${colClass}`}>
            {entries.map((it, idx) => {
              const hasHL = !!it?.highlights?.html || ((it?.highlights?.images?.length ?? 0) > 0);
              const cardId = slug(it.title); // 모든 섹션에서 ID 부여
              const isFlash = flashId === cardId;

              return (
                <div key={idx} id={cardId}>
                  <Card style={isFlash ? { outline: "2px solid #22c55e" } : undefined}>
                    <div className={isFlash ? "flash-highlight" : ""} style={{ borderRadius: 16 }}>
                      <CardHeader>
                        <CardTitle>
                          {showYear && it.year ? `[${it.year}] ` : ""}
                          {it.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {showVenue && it.venue && (
                          <div style={{ color: "#334155", marginBottom: 8 }}>{it.venue}</div>
                        )}
                        {it.descr && (
                          <p style={{ color: "#334155", lineHeight: 1.6, marginBottom: 8 }}>
                            {it.descr}
                          </p>
                        )}

                        {it.tags?.length ? (
                          <div style={{ ...styles.chipRow, marginTop: 4 }}>
                            {it.tags.map((t) => (
                              <Badge key={t}>{t}</Badge>
                            ))}
                            {type === "talks" && it.publishedRef && (
                              <Badge>{it.publishedLabel || "Published"}</Badge>
                            )}
                          </div>
                        ) : (
                          type === "talks" &&
                          it.publishedRef && (
                            <div style={{ ...styles.chipRow, marginTop: 4 }}>
                              <Badge>{it.publishedLabel || "Published"}</Badge>
                            </div>
                          )
                        )}

                        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                          {it.url && <Button href={it.url}>Link</Button>}
                          {hasHL && (
                            <Button
                              variant="outline"
                              onClick={() =>
                                setHlModal({
                                  open: true,
                                  title: it.title,
                                  html: it.highlights?.html || "",
                                  images: it.highlights?.images || [],
                                })
                              }
                            >
                              Highlights
                            </Button>
                          )}

                          {/* 🔗 Talks → Publications */}
                          {type === "talks" && it.publishedRef && (
                            <Button
                              variant="outline"
                              onClick={() => goToAndFlash(it.publishedRef)}
                              title="Go to the corresponding publication"
                            >
                              Related Paper
                            </Button>
                          )}

                          {/* 🔗 Talks → Projects (요청한 'related project') */}
                          {type === "talks" && it.relatedProjectRef && (
                            <Button
                              variant="outline"
                              onClick={() => goToAndFlash(it.relatedProjectRef)}
                              title="Go to the related project"
                            >
                              Related Project
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  /** Highlights modal with 3-col thumbnails + lightbox */
  function HighlightsModal() {
    const [viewer, setViewer] = React.useState({ open: false, src: "", caption: "", idx: -1 });
    if (!hlModal.open) return null;

    const close = () => setHlModal({ open: false, title: "", html: "", images: [] });
    const images = (hlModal.images || []).map((img) =>
      typeof img === "string" ? { src: img, caption: "" } : img
    );

    return (
      <>
        <div
          onClick={close}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            background: "rgba(0,0,0,.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              width: "min(900px, 92vw)",
              maxHeight: "88vh",
              borderRadius: 16,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 10px 30px rgba(0,0,0,.25)",
              fontFamily: styles.fontFamily,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              <strong style={{ fontSize: 18 }}>{hlModal.title} — Highlights</strong>
              <Button variant="outline" onClick={close}>✕ Close</Button>
            </div>

            <div style={{ padding: 16, overflowY: "auto" }}>
              {images.length > 0 && (
                <div className="thumb-grid" style={{ marginBottom: 12 }}>
                  {images.map((im, i) => (
                    <div key={i}>
                      <img
                        src={resolveImgSrc(im.src)}
                        alt={`thumb-${i}`}
                        className="thumb"
                        onClick={() =>
                          setViewer({
                            open: true,
                            src: resolveImgSrc(im.src),
                            caption: im.caption || "",
                            idx: i,
                          })
                        }
                      />
                      {im.caption ? <div className="thumb-cap">{im.caption}</div> : null}
                    </div>
                  ))}
                </div>
              )}
              {hlModal.html && (
                <div
                  style={{ color: "#334155", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: hlModal.html }}
                />
              )}
            </div>
          </div>
        </div>

        {viewer.open && (
          <div
            className="lightbox"
            onClick={() => setViewer({ open: false, src: "", caption: "", idx: -1 })}
          >
            <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-top">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setViewer({ open: false, src: "", caption: "", idx: -1 })}
                >
                  ✕ Close
                </Button>
              </div>
              <div className="lightbox-body">
                <img src={viewer.src} alt="preview" className="lightbox-img" />
              </div>
              {viewer.caption ? <div className="lightbox-caption">{viewer.caption}</div> : null}
            </div>
          </div>
        )}
      </>
    );
  }

  /** 헤더 네비 링크 (CONFIG.nav 사용) */
  const navLinks = CONFIG.nav.map((n) => {
    const href = n.useCV ? CONFIG.site.cvUrl : n.href;
    const props = n.external || n.useCV ? { target: "_blank", rel: "noreferrer" } : {};
    const styleOverride = n.useCV ? { fontWeight: 800, textDecoration: "underline" } : {};
    return (
      <a key={n.label} href={href ?? "#"} style={{ ...styles.link, ...styleOverride }} {...props}>
        {n.label}
      </a>
    );
  });

  /** 연락처 공통 렌더 */
  function ContactLinks() {
    const L = CONFIG.person.links;
    return (
      <>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 6,
            wordBreak: "keep-all",
            alignItems: "center",
          }}
        >
          ✉️ <a href="mailto:pauluhill74@gmail.com">pauluhill74@gmail.com</a> •{" "}
          <a href="mailto:pauluhill@snu.ac.kr">pauluhill@snu.ac.kr</a>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
          🔗 <a href={L.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
          🌐 <a href={L.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          📄 <a href={L.researchgate} target="_blank" rel="noreferrer">ResearchGate</a>
        </div>
      </>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #ffffff, #F1F5F9)",
        color: "#0f172a",
        fontFamily: styles.fontFamily,
      }}
    >
      <HighlightsModal />
      <ResponsiveStyles />

      {/* Header */}
      <header style={styles.header}>
        <div style={{ ...styles.container, ...styles.navRow }} className="r-container">
          <a href="#home" style={{ ...styles.link, fontWeight: 700, fontSize: 20 }}>
            {CONFIG.site.ownerName}
          </a>
          <nav style={styles.navLinks} className="r-nav">
            {navLinks}
          </nav>
        </div>
      </header>

      {/* Hero / About */}
      <section id="home" style={{ ...styles.container, padding: "56px 16px" }} className="r-container">
        <div className="r-hero">
          {/* About me card (왼쪽) */}
          <div id="about" className="hero-about" style={{ paddingRight: 10 }}>
            <Card>
              <CardHeader><CardTitle>About me</CardTitle></CardHeader>
              <CardContent>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                  <img src={CONFIG.site.profileImage} alt="Profile" className="r-profile" />
                </div>
                <p style={{ color: "#334155", lineHeight: 1.6, marginBottom: 12 }}>
                  {CONFIG.person.about}
                </p>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
                  📍 {CONFIG.person.location}
                </div>
                <ContactLinks />
              </CardContent>
            </Card>
          </div>

          {/* 타이틀/배지/소개 (오른쪽) */}
          <div className="hero-text">
            <h1 style={{ fontSize: 36, fontWeight: 900, margin: 0, whiteSpace: "normal", wordBreak: "break-all" }}>
              {CONFIG.hero.title}
            </h1>
            <p style={{ marginTop: 16, color: "#475569", lineHeight: 1.6 }}>
              {CONFIG.hero.blurb}
            </p>
            <div style={{ ...styles.chipRow, marginTop: 12 }}>
              {CONFIG.hero.badges.map((t) => (<Badge key={t}>{t}</Badge>))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications & Manuscripts */}
      <SectionList
        id="pubs"
        title="Publications & Manuscripts"
        entries={DATA.publications}
        showYear
        showVenue
        cols={3}
        type="pubs"
      />

      {/* Research Projects */}
      <SectionList
        id="projects"
        title="Research Projects"
        entries={DATA.projects}
        showYear
        cols={3}
        type="projects"
      />

      {/* Talks & Presentations */}
      <SectionList
        id="talks"
        title="Talks & Presentations"
        entries={DATA.talks}
        showYear
        showVenue
        cols={3}
        type="talks"
      />

      {/* Contact */}
      <section id="contact" style={{ ...styles.section, background: "transparent" }}>
        <div className="r-container">
          <h2 style={styles.h2}>Contact</h2>
        </div>
        <div className="r-container">
          <div className="r-grid r-cols-2">
            <Card style={{ background: "transparent", border: "none" }}>
              <CardContent>
                <ContactLinks />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #E2E8F0" }}>
        <div
          style={{
            ...styles.container,
            padding: "16px 0",
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            color: "#64748B",
          }}
          className="r-container"
        >
          <div>© {new Date().getFullYear()} {CONFIG.site.ownerName}</div>
          <a href="#home" style={{ ...styles.link, color: "#64748B" }}>Top ↑</a>
        </div>
      </footer>
    </div>
  );
}
