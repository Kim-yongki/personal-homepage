import React, { useState } from "react";
import { FaLinkedin, FaGoogleScholar, FaResearchgate, FaGithub } from "react-icons/fa6";

/** ───────────────────── 0) CONTENT CONFIGURATION ───────────────────── */
const CONFIG = {
  site: {
    ownerName: "Yongki Kim",
    fontFamily: `'Times New Roman', Times, serif`,
    profileImage: "./profile image.jpg", // Relative to /public directory
    cvUrl:
      "https://drive.google.com/file/d/1y6qNMvp16ZrmA4EqHIb09fLoe-ipbIov/view?usp=drive_link",
  },
  hero: {
    title: "Urban Kinetics: \n Anatomy of City Networks",
    blurb: "",
    badges: [
      "Transportation network analysis", 
      "Urban morphology",
      "Trajectories",
      "Freight planning"
    ],
  },
  person: {
    about:
      "Hi! I’m an M.A. student in Geography at Seoul National University (SNU), studying the impact of transport networks and urban structures on accessibility and industry. My core academic approach is to translate complex urban challenges into tractable problems by developing clear indicators and analytical frameworks for evidence-based decision-making. My current research interest lies in how to weave efficient, sustainable and affordable logistics into the urban syntax and how urban morphology shapes urban transport equity",
    location: "Seoul, South Korea",
    emails: ["pauluhill74@gmail.com", "pauluhill@snu.ac.kr"],
    links: {
      linkedin: "https://www.linkedin.com/in/urbankim/",
      scholar:
        "https://scholar.google.com/citations?user=G-AE3o0AAAAJ&hl=ko&oi=sra",
      researchgate:
        "https://www.researchgate.net/profile/Yongki-Kim-2?ev=hdr_xprf",
      github:
        "https://github.com/Kim-yongki"
    },
  },
  nav: [
    { label: "About", href: "#about", external: false },
    { label: "Publications", href: "#pubs", external: false },
    { label: "Projects", href: "#projects", external: false },
    { label: "Talks", href: "#talks", external: false },
    { label: "Contact", href: "#contact", external: false }
  ],
};


/** ───────────────────── 1) SECTION DATA ───────────────────── */
const DATA = {
  publications: [
    {
      year: 2025,
      title:
        "What Defines a Linear City? Examining Accessibility Premises with Novel Flow-Based Indices",
      venue: "[Under Review]",
      url: "",
      tags: ["Linear city", "Accessibility", "Index development"],
      highlights: {
        html: `
        <p>To test the prevailing assumption that linear road configurations improve accessibility and equity, we developed two flow-based linearity indices and applied them to 65 cities in South Korea.</p>
        <ul>
          <li><b>Methodology.</b> Defined the Morphological Linearity Index (MLI) and the Structural Linearity Index (SLI), and analyzed their correlation with accessibility in small and mid-sized cities.</li>
          <li><b>Findings.</b> Higher MLI was associated with lower mean detour rates but slightly longer average trip distances, whereas higher SLI corresponded to higher detour rates and greater detour inequality.</li>
          <li><b>Implications.</b> The results suggest that a linear urban form is not inherently efficient or equitable; benefits materialize only when it is coupled with capacity-rich trunk corridors (e.g., fast regional rail) and careful corridor design.</li>
        </ul>`,
        images: [
          { src: "figures/MLI.png", caption: "Morphological Linearity Index (MLI)" },
          { src: "figures/SLI.png", caption: "Structural Linearity Index (SLI)" },
          { src: "figures/local_SLI.png", caption: "Local SLI" },
          { src: "figures/Results.png", caption: "Linearity vs Accessibility" }
        ],
      },
    },
    {
      year: 2025,
      title:
        "“Proximity Logistics in the Seoul Metropolitan Area amid the Growth of Fulfillment Logistics: Changes in the Transport Chain and Logistics Space”",
      venue: "[Approved] M.A. Thesis, Seoul National University",
      url: "",
      tags: ["Thesis", "Linear city", "Accessibility"],
      highlights: {
        html: `
        <p>This thesis quantified how fulfillment-based delivery reshaped logistics space in the Seoul Capital Area (SCA) and where transport and detour costs concentrated along supply chains.</p>
        <ul>
          <li><b>Methodology.</b> Using parcel OD and firm data (CJ Logistics vs. Coupang), terminal allocation and route-optimization-based simulations were conducted for hub-and-spoke versus fulfillment scenarios, and changes in logistics space—including logistics sprawl—were interpreted from both market- and public-sector perspectives.</li>
          <li><b>Findings 1.</b> Fulfillment services allow more flexible routing, making consumer proximity a significantly more important factor than in traditional, rigid parcel networks.</li>
          <li><b>Findings 2.</b> However, logistics facilities have increasingly sprawled, driven more by the real estate market than by the effectiveness of the network. This phenomenon became more pronounced as the urban periphery absorbed the surge in demand for large-scale logistics facilities during the pandemic.</li>
          <li><b>Implications.</b> The findings underscore the growing importance of optimizing location and allocation strategies for proximity logistics and transport networks, and highlight the need for government-led siting incentives to support the formation of logistics clusters.</li>
        </ul>`,
        images: [
          { src: "figures/Freight_supplychain.png", caption: "Supply chain by scenarios" },
          { src: "figures/Optimizedlocation.png", caption: "Optimization Logic of models.png" },
          { src: "figures/Logistics_sprawl.png", caption: "Logistics sprawl over time" }
        ],
      },
    },
    {
      year: 2025,
      title:
        "Analyzing the Equity of Road Services through Accessibility Gaps: Focusing on Detour Costs",
      venue: "Journal of the Korean Geographical Society, 60(2):168–186",
      url: "https://doi.org/10.22776/kgs.2025.60.2.168",
      tags: ["Equity", "Road network", "Detour cost"],
      highlights: {
        html: `
        <p>Articulated the endogeneity of road distance (i.e., detours) within bid-rent theory, and proposed a conceptual framework for evaluating equity in road networks. Based on the equal-sacrifice principle, conducted an empirical analysis for small and mid-sized cities in South Korea.</p>
        <ul>
          <li><b>Methodology.</b> Compared Euclidean and network distances, analyzed within-city accessibility dispersion using the standard deviation and the Gini coefficient, and assessed road-network equity under absolute, proportional, and marginal equal-sacrifice criteria.</li>
          <li><b>Findings.</b> Dispersion in road network distances (SD, Gini) generally exceeded that of Euclidean distances, reflecting amplified Euclidean-based gaps and/or unequal development of road networks.</li>
          <li><b>Implications.</b> Articulates concrete policy goals that road networks, as a public service, can pursue beyond “free use,” and recommends embedding such goals into road-network planning and appraisal.</li>
        </ul>`,
        images: [
          { src: "figures/Framework_road_equity.png", caption: "Framework for analyzing road equity" },
          { src: "figures/Equal_transportation_sacrifice.png", caption: "Equal-sacrifice principle for detour" },
          { src: "figures/Road_effect.png", caption: "Road-network effect on accessibility gaps" },
          { src: "figures/accessibilities_detour_cost.png", caption: "Accessibility vs. detour costs" }
        ],
      },
    },
    {
      year: 2024,
      title:
        "Analysis of Quick Commerce Location Using Modified Network Centrality: Focused on Transportation Cost of Multi-Location Brands",
      venue: "Journal of the Korean Urban Geographical Society, 27(1):17–32",
      url: "https://doi.org/10.21189/JKUGS.27.1.2",
      tags: ["Quick commerce", "Network centrality", "Retail"],
      highlights: {
        html: `
        <p>By interpreting the Q-commerce industry as a retail format in which sellers bear delivery costs, changes in retail locational patterns driven by last-mile logistics were analyzed.</p>
        <ul>
          <li><b>Methodology.</b> Modified network centrality indices to measure multi-location brand centrality, and analyzed locational patterns by retail category.</li>
          <li><b>Findings 1.</b> Q-commerce fulfillment centers tended to locate in lower-rent subcenters while still exhibiting superior centrality (accessibility) relative to offline retail.</li>
          <li><b>Findings 2.</b> Quick-commerce facilities generate more alley-level flows, resulting in negative externalities related to truck traffic, than brick-and-mortar retail located on main streets.</li>
          <li><b>Implications.</b> The results indicate a shift in retail spatial structure; driven by the rising importance of delivery: from agglomeration around main streets toward optimization-oriented distributed siting.</li>
        </ul>`,
        images: [
          { src: "figures/retail_locations.png", caption: "Quick commerce & retail locations" },
          { src: "figures/multilocation_network_centrality.png", caption: "Multi-location network centrality" },
          { src: "figures/multilocation_network_centrality(equation).png", caption: "Centrality (equation)" },
          { src: "figures/retail_traffic.png", caption: "Traffic patterns" }
        ],
      },
    },
    {
      year: 2020,
      title:
        "Storage: 2020 Korean Real Estate through the Eyes of Twenties (Book)",
      venue:
        "Published by the SNU Real Estate Club",
      url: "https://books.google.co.kr/books/about/Storage.html?id=Tx_szgEACAAJ&redir_esc=y",
      tags: ["Real estate", "Finance", "Policy"],
      highlights: {
        html: `
        <p>A student-edited volume presenting Gen Z perspectives on South Korea’s 2020 real-estate market.</p>
        <ul>
          <li><b>I.</b> Co-authored and edited essays and briefs, coordinating contributions and copyediting.</li>
          <li><b>II.</b> Synthesized Gen Z perspectives on housing, finance, and policy changes in the volatile Covid-19 market year.</li>
          <li><b>III.</b> Offered industry professionals valuable insights into younger-generation perspectives on the real-estate sector.</li>
        </ul>`,
        images: [{ src: "figures/storage.png", caption: "Cover" }],
      },
    },
  ],

  projects: [
    {
      year: 2025,
      title:
        "A Study on Enhancing SME Policy Evaluation through SME Big-Data Analytics",
      descr: "[In progress] Commissioned by Ministry of SMEs and Startups.",
      url: "",
      tags: ["SME", "Big data", "Policy evaluation", "Spatial network analysis"],
      highlights: {
        html: `
        <p><b>Role:</b> Research Assistant · <b>Institution:</b> SNU Enterprise Policy Center · <b>Period:</b> May 2025 – ongoing</p>
        <p>Using inter-firm transaction big data(>2B), conducted network analysis and delineated economic regions in South Korea.</p>
        <ul>
          <li><b>Methodology.</b> Constructed a regional inter-firm transaction network and performed network centrality analysis, community detection, and polycentricity analysis.</li>
          <li><b>Findings.</b> Identified spatial patterns of transactions and inter-regional link structures differentiated by industry and firm size.</li>
          <li><b>Implications.</b> Clarifies the effects of urbanization and localization economies in inter-firm trade.</li>
        </ul>`,
        images: [
          { src: "figures/transactions.png", caption: "Transaction network (example)" },
          { src: "figures/community.png", caption: "Community detection (example)" },
          { src: "figures/sankey.png", caption: "Sankey diagram (example)" }
        ],
      },
    },
    {
      year: 2024,
      title:
        "A Study on Developing Big Data-Based Policy Evaluation for Small and Medium-Sized Enterprises",
      descr: "Commissioned by Ministry of SMEs and Startups.",
      url: "",
      tags: ["SME", "Big data", "Policy evaluation", "ESDA"],
      highlights: {
        html: `
        <p><b>Role:</b> Research Assistant · <b>Institution:</b> SNU Enterprise Policy Center · <b>Period:</b> Jun – Dec 2024</p>
        <p>Conducted exploratory spatial data analysis (ESDA) using corporate financial information and related indicators</p>
        <ul>
          <li><b>Methodology.</b> Performed spatial and aspatial analyses on time-series data for sales and other firm-level indicators.</li>
          <li><b>Findings.</b> Detected spatial heterogeneity and local clusters that were not apparent in open data (e.g., firm counts).</li>
          <li><b>Implications.</b> Offers guidance for government policies tailored to regional industrial structures.</li>
        </ul>`,
        images: [
          { src: "figures/SME_Gmoran.png", caption: "Global Moran's I (example)" },
          { src: "figures/SME_Lmoran.png", caption: "Local Moran's I (example)" }
        ],
      },
    },
    {
      year: 2025,
      title:
        "A Study on Strategies for Reforming the Geography Curriculum in the Era of Interdisciplinary and Open Majors",
      descr: "Commissioned by Brain Korea Research Team for the Future Landscape.",
      url: "",
      tags: ["Education", "Curriculum", "Interdisciplinary"],
      highlights: {
        html: `
        <p><b>Role:</b> Research Assistant · <b>Institution:</b> SNU Geography · <b>Period:</b> Jan – Feb 2025</p>
        <p>Surveyed interdisciplinary degree programs in South Korea related to geography.</p>
        <ul>
          <li><b>Methodology.</b> Built a list of geography-related programs, typologized cross-disciplinary structures, and compared curricula.</li>
          <li><b>Findings.</b> Organized program compositions by department and found that geography departments participate in many interdisciplinary majors with GIS-centered competencies.</li>
          <li><b>Implications.</b> Offers practical guidance for curriculum design.</li>
        </ul>`,
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
        html: `
        <p><b>Role:</b> Project Lead · <b>Organization:</b> SNUSRC Real Estate Club · <b>Period:</b> Aug – Dec 2020</p>
        <p>Produced a sponsored series of real-estate market reports through a student-led initiative.</p>
        <ul>
          <li><b>I.</b> Managed sponsorships, coordinated contributors, and edited recurring briefings.</li>
          <li><b>II.</b> Delivered timely syntheses of key market issues and insights for an industry readership.</li>
          <li><b>III.</b> Demonstrated student–industry collaboration and a repeatable reporting workflow.</li>
        </ul>`,
        images: [
          { src: "figures/SRC_ELYSIA_cover.png", caption: "Cover" },
          { src: "figures/SRC_ELYSIA_list.png", caption: "List of Reports" }
        ],
      },
    },
  ],

  talks: [
    {
      year: 2025,
      title:
        "Equity of Detour Costs in Road Networks Based on the Principle of Equal Sacrifice",
      venue: "Korean Geography Conference, Seoul (Jul. 27–28)",
      url: "",
      tags: ["Detour cost", "Equity"],
      publishedRef:
        "analyzing-the-equity-of-road-services-through-accessibility-gaps-focusing-on-detour-costs",
      publishedLabel: "Published",
      highlights: {},
    },
    {
      year: 2025,
      title:
        "Dual-Spatial Cross Validation for Machine Learning–Based Origin–Destination Prediction: A Case Study of Parcel Flow",
      venue: "Korean Geography Conference, Seoul (Jul. 27–28)",
      url: "",
      tags: ["OD", "Spatial CV", "ML"],
      highlights: {
        html: `
          <p>Proposed a cross-validation strategy that reflects the properties of OD data.</p>
          <ul>
            <li><b>In progress (to be released after submission).</b></li>
          </ul>
        `,
      },
    },
    {
      year: 2025,
      title:
        "Analysis of the Relationship between the Linearity of Urban Structure and Accessibility",
      venue: "AAG Annual Meeting, Detroit (Mar. 24–28)",
      url: "",
      tags: ["Linear city", "Accessibility", "Network analysis"],
      publishedRef:
        "what-defines-a-linear-city-examining-accessibility-premises-with-novel-flow-based-indices",
      publishedLabel: "Published",
      highlights: {},
    },
    {
      year: 2024,
      title:
        "Differences in Spatial Agglomeration among Government-Supported versus Non-Supported SMEs: An Exploratory Spatial Data Analysis",
      venue: "2024W Conference of the Korean Urban Geographical Society, Gwangju (Dec. 12)",
      url: "",
      tags: ["SME", "Agglomeration", "ESDA"],
      relatedProjectRef:
        "a-study-on-developing-big-data-based-policy-evaluation-for-small-and-medium-sized-enterprises",
      highlights: {},
    },
    {
      year: 2024,
      title:
        "Urban Linearity and Efficiency–Equity of Accessibility: Network Analysis of Transport Networks in South Korea’s Cities",
      venue: "Annual Meeting of Korean Geographers, Gongju (Dec. 6)",
      url: "",
      tags: ["Linear city", "Accessibility", "Equity"],
      publishedRef:
        "what-defines-a-linear-city-examining-accessibility-premises-with-novel-flow-based-indices",
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
        html: `
        <p>Developed and applied a path-based clustering method to detect urban development axes.</p>
        <ul>
          <li><b>Methodology.</b> Constructed population-weighted path trees expanding from centers to census units; extracted subtrees by stability thresholds; and defined each subtree as an axis cluster.</li>
          <li><b>Findings.</b> Axis clusters revealed clear, network-induced spatial differentiation that aligned with government corridor plans.</li>
          <li><b>Implications.</b> Enables fine-grained analysis of urban development axes and provides reference points for corridor-oriented urban planning.</li>
        </ul>`,
        images: [
          { src: "figures/Hierarchical_road_network.png", caption: "Hierarchical road network" },
          { src: "figures/Compared_with_urbanplan.png", caption: "Compared with government plan" },
          { src: "figures/Bid_rent_theory_with_clusters.png", caption: "Bid rent theory with axis clusters" }
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
        "analysis-of-quick-commerce-location-using-modified-network-centrality:-focused-on-transportation-cost-of-multi-location-brands",
      publishedLabel: "Published",
      highlights: {},
    },
    {
      year: 2023,
      title:
        "Comparative Locational Analysis of Quick-Commerce versus Conventional Retail Stores: A Network Centrality and Coverage Perspective",
      venue: "2023W Conference of the Korean Urban Geographical Society, Seoul (Dec. 9)",
      url: "",
      tags: ["Q-commerce", "Centrality", "MFC"],
      publishedRef:
        "analysis-of-quick-commerce-location-using-modified-network-centrality:-focused-on-transportation-cost-of-multi-location-brands",
      publishedLabel: "Published",
      highlights: {},
    },
  ],
};



/** ───────────────────── 2) AUTOMATIC GALLERY BUILDER ───────────────────── */
/** Gathers `highlights.images` from publications, projects, and talks to create the hero gallery. */
const IMAGE_BASE = "./figures/";
function resolveImgSrc(src) {
  if (!src) return src;
  if (/^(https?:)?\/\//i.test(src) || /^data:/i.test(src)) return src;
  if (/^\.?\/?figures\//i.test(src)) return src.replace(/^\/+/, "");
  return `${IMAGE_BASE}${src.replace(/^\.?\//, "")}`;
}

function buildHeroGallery(DATA, limit = 9999) {
  const seen = new Set();
  const items = [];
  function collectFromArray(arr) {
    (arr || []).forEach((entry) => {
      const targetRef = slug(entry.title); // Card ID
      const imgs = entry?.highlights?.images || [];
      imgs.forEach((im) => {
        const src = resolveImgSrc(typeof im === "string" ? im : im.src);
        if (!src || seen.has(src)) return;
        seen.add(src);
        items.push({
          src,
          label: typeof im === "object" && im.caption ? im.caption : entry.title,
          targetRef,
        });
      });
    });
  }
  collectFromArray(DATA.publications);
  collectFromArray(DATA.projects);
  collectFromArray(DATA.talks);
  // 🔀 Randomly shuffle the items
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
  return limit ? items.slice(0, limit) : items;
}

/** ───────────────────── 3) MINI UI FRAMEWORK (no external dependencies) ───────────────────── */
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

/** Utility: Converts a string into a URL-friendly slug for anchor IDs. */
const slug = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

/** Button and Card Components */
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

/** ───────────────────── 4) RESPONSIVE & DYNAMIC STYLES ───────────────────── */
function ResponsiveStyles() {
  return (
    <style>{`
      .r-container { max-width: 1100px; margin: 0 auto; padding: 0 16px; }
      .r-grid { display: grid; gap: 16px; }
      .r-cols-3 { grid-template-columns: repeat(3, minmax(0,1fr)); }
      .r-cols-2 { grid-template-columns: repeat(2, minmax(0,1fr)); }

      /* Desktop layout: About | Text */
      .r-hero { display: grid; grid-template-columns: 1fr 1.2fr; gap: 16px; align-items: center; grid-template-areas: "about text"; }
      .hero-text  { grid-area: text; }
      .hero-about { grid-area: about; }

      /* Visibility toggle utilities */
      .only-desktop { display: block; }
      .only-mobile { display: none; }

      @media (max-width: 900px){
        .r-hero { grid-template-columns: 1fr; grid-template-areas: "text" "about"; }
        .r-cols-3 { grid-template-columns: repeat(2, minmax(0,1fr)); }
        .only-desktop { display: none !important; }
        .only-mobile { display: block !important; }
      }
      @media (max-width: 640px){
        .r-cols-3, .r-cols-2 { grid-template-columns: repeat(1, minmax(0,1fr)); }
        .r-nav { gap: 12px; }
        .r-nav a { font-size: 16px; }
        .r-profile { width:120px; height:120px; }
      }

      .r-nav { display:flex; gap:18px; align-items:center; flex-wrap: wrap; }
      .r-profile { width:180px; height:180px; border-radius:9999px; object-fit:cover; border:1px solid #E2E8F0; }

      /* --- Hero Figure Gallery --- */
      .hg-hint{
        font-size: 12px;
        color: #64748B;
        margin: 8px 0 6px 2px;
      }
      .hero-gallery{
        margin-top: 8px;
        max-height: 390px;
        overflow-y: auto;
        border: 1px solid #E2E8F0;
        border-radius: 12px;
        padding: 8px;
        background: #fff;
      }
      .hg-grid{
        display: grid;
        grid-template-columns: repeat(2, minmax(0,1fr));
        gap: 8px;
      }
      .hg-item{
        position: relative;
        cursor: pointer;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        overflow: hidden;
      }
      .hg-img{
        width: 100%;
        height: 120px;
        object-fit: cover;
        display: block;
      }
      .hg-cap{
        position: absolute;
        left: 8px; bottom: 8px;
        background: rgba(0,0,0,.55);
        color: #fff;
        font-size: 12px;
        padding: 2px 6px;
        border-radius: 8px;
      }
      @media (max-width: 900px){
        .hero-gallery{ max-height: 220px; }
      }
      @media (max-width: 520px){
        .hero-gallery{ max-height: 200px; }
        .hg-grid{ grid-template-columns: 1fr; }
      }

      /* Card highlight animation */
      @keyframes flashBorder {
        0% { box-shadow: 0 0 0 rgba(34,197,94,0); }
        30% { box-shadow: 0 0 0 6px rgba(34,197,94,.25); }
        100% { box-shadow: 0 0 0 rgba(34,197,94,0); }
      }
      .flash-highlight { outline: 2px solid #22c55e; animation: flashBorder 1.8s ease-out 0s 2; border-radius: 16px; }

      /* --- Thumbnail Strip: Always horizontal, thin, and compact --- */
      .thumb-strip-wrap {
        position: relative;
        margin-bottom: 10px;
      }

      .thumb-strip {
        display: flex;
        gap: 8px;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 6px;
        scroll-snap-type: x mandatory;
      }
        
      .thumb-item {
        flex: 0 0 calc((100% - 16px) / 3); /* Show 3 items, accounting for gap */
        scroll-snap-align: start;
      }

      .thumb {
        width: 100%;
        aspect-ratio: 4 / 3;
        object-fit: cover;
        border: 1px solid #E2E8F0;
        border-radius: 10px;
        cursor: zoom-in;
        display: block;
        image-rendering: auto;         /* Remove 'crisp-edges' to prevent excessive aliasing. */
        -ms-interpolation-mode: bicubic;/* Legacy IE support; harmless for modern browsers. */
        transform: translateZ(0);       /* Promote GPU rendering to improve interpolation quality on downscaling. */
        backface-visibility: hidden;
      }

      .thumb-cap {
        font-size: 11px;
        color: #475569;
        margin-top: 4px;
        line-height: 1.35;
      }

      /* Adjust width for smaller mobile viewports. */
      @media (max-width: 520px){
        .thumb-item { width: 45%; max-width: 140px; min-width: 110px; }
      }

      .lightbox { position: fixed; inset: 0; z-index: 80; background: rgba(0,0,0,.65); display: flex; align-items: center; justify-content: center; }
      .lightbox-inner { background: #fff; max-width: min(1100px, 94vw); max-height: 92vh; border-radius: 14px; overflow: hidden; box-shadow: 0 12px 36px rgba(0,0,0,.35); }
      .lightbox-body { padding: 8px; }
      .lightbox-img { max-width: 100%; max-height: 84vh; display: block; }
      .lightbox-top { display: flex; justify-content: flex-end; align-items: center; gap: 8px; padding: 8px 10px; border-bottom: 1px solid #E2E8F0; }
      .lightbox-caption{ padding: 8px 10px; border-top: 1px solid #E2E8F0; font-size: 14px; color: #334155; line-height: 1.5; }
    `}</style>
  );
}

/** ───────────────────── 5) MAIN APP COMPONENT ───────────────────── */
export default function App() {
  // State for the "Highlights" modal
  const [hlModal, setHlModal] = useState({
    open: false,
    title: "",
    html: "",
    images: [],
  });
  // State to control the flashing highlight on a card
  const [flashId, setFlashId] = useState("");
  // Automatically build the hero gallery items using a memoized function
  const heroGalleryItems = React.useMemo(() => buildHeroGallery(DATA), []);
  const openHighlightForId = React.useCallback((id, { scroll = true } = {}) => {
  if (!id) return false;
  const entry =
    [...DATA.publications, ...DATA.projects, ...DATA.talks]
      .find((e) => slug(e.title) === id);

  if (!entry || !entry.highlights) return false;

  setHlModal({
    open: true,
    title: entry.title,
    html: entry.highlights?.html || "",
    images: entry.highlights?.images || [],
  });
  if (scroll) goToAndFlash(id);
  return true;
}, []);

const setUrlHighlight = React.useCallback((id, { replace = false } = {}) => {
  const url = new URL(window.location.href);
  if (id) {
    url.searchParams.set("hl", id);
  } else {
    url.searchParams.delete("hl");
  }
  history[replace ? "replaceState" : "pushState"]({}, "", url);
}, []);

const syncFromUrl = React.useCallback(() => {
  const url = new URL(window.location.href);
  const id = url.searchParams.get("hl");
  if (id) {
    // 해당 id가 없으면 최소한 카드로 스크롤만
    if (!openHighlightForId(id, { scroll: true })) {
      goToAndFlash(id);
    }
  } else if (hlModal.open) {
    setHlModal({ open: false, title: "", html: "", images: [] });
  }
}, [openHighlightForId, hlModal.open]);

React.useEffect(() => {
  // 최초 로드 & 뒤로가기/앞으로가기 반영
  syncFromUrl();
  window.addEventListener("popstate", syncFromUrl);
  return () => window.removeEventListener("popstate", syncFromUrl);
}, [syncFromUrl]);

  /** Scrolls to a specific card and applies a temporary highlight effect. */
function goToAndFlash(id) {
  if (!id) return;

  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    setFlashId(id);
    window.setTimeout(() => setFlashId(""), 4000);
  }
}

  /** Renders the instructional text above the hero gallery. */
  function HeroGalleryHint() {
    return (
      <div className="hg-hint">
        *Tap a figure to jump to the corresponding research.
      </div>
    );
  }

  /** The main hero gallery component. */
  function HeroGallery({ items }) {
    if (!items || items.length === 0) return null;
    return (
      <div className="hero-gallery" aria-label="figure gallery">
        <div className="hg-grid">
          {items.map((it, i) => (
            <div
              key={i}
              className="hg-item"
              onClick={() => goToAndFlash(it.targetRef)}
              title="Jump to related highlight"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") goToAndFlash(it.targetRef);
              }}
            >
              <img
                src={it.src}
                alt={it.label || `figure-${i}`}
                className="hg-img"
              />
            </div>
          ))}
        </div>
      </div>
    );
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
              const hasHL =
                !!it?.highlights?.html ||
                ((it?.highlights?.images?.length ?? 0) > 0);
              const cardId = slug(it.title);
              const isFlash = flashId === cardId;

              return (
                <div key={idx} id={cardId}>
                  <Card
                    style={isFlash ? { outline: "2px solid #22c55e" } : undefined}
                  >
                    <div
                      className={isFlash ? "flash-highlight" : ""}
                      style={{ borderRadius: 16 }}
                    >
                      <CardHeader>
                        <CardTitle>
                          {showYear && it.year ? `[${it.year}] ` : ""}
                          {it.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {showVenue && it.venue && (
                          <div style={{ color: "#334155", marginBottom: 8 }}>
                            {it.venue}
                          </div>
                        )}
                        {it.descr && (
                          <p
                            style={{
                              color: "#334155",
                              lineHeight: 1.6,
                              marginBottom: 8,
                            }}
                          >
                            {it.descr}
                          </p>
                        )}

                        {it.tags?.length ? (
                          <div style={{ ...styles.chipRow, marginTop: 4 }}>
                            {it.tags.map((t) => (
                              <Badge key={t}>{t}</Badge>
                            ))}
                          </div>
                        ) : (
                          type === "talks" &&
                          it.publishedRef && (
                            <div style={{ ...styles.chipRow, marginTop: 4 }}>
                              <Badge>{it.publishedLabel || "Published"}</Badge>
                            </div>
                          )
                        )}

                        <div
                          style={{
                            display: "flex",
                            gap: 8,
                            marginTop: 12,
                            flexWrap: "wrap",
                          }}
                        >
                          {it.url && <Button href={it.url}>Link</Button>}

                          {hasHL && (
                            <Button
                              variant="outline"
                              onClick={() => {
                                const id = slug(it.title);
                                setUrlHighlight(id); // ← URL에 ?hl=... 과 #... 반영
                                setHlModal({
                                  open: true,
                                  title: it.title,
                                  html: it.highlights?.html || "",
                                  images: it.highlights?.images || [],
                                });
                              }}
                            >
                              Highlights
                            </Button>
                          )}

                          {/* Button to link from a Talk to its corresponding Publication */}
                          {type === "talks" && it.publishedRef && (
                            <Button
                              variant="outline"
                              onClick={() => goToAndFlash(slug(it.publishedRef))}
                              title="Go to the corresponding publication"
                            >
                              Related Paper
                            </Button>
                          )}

                          {/* Button to link from a Talk to a related Project */}
                          {type === "talks" && it.relatedProjectRef && (
                            <Button
                              variant="outline"
                              onClick={() => goToAndFlash(slug(it.relatedProjectRef))}
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

  /** Renders the modal for "Highlights" and includes an image lightbox viewer. */
  function HighlightsModal() {
    const [viewer, setViewer] = React.useState({
      open: false,
      src: "",
      caption: "",
      idx: -1,
    });
    const stripRef = React.useRef(null);

    if (!hlModal.open) return null;
    const images = (hlModal.images || []).map((img) =>
      typeof img === "string" ? { src: img, caption: "" } : img
    );

    const close = () => {
      const url = new URL(window.location.href);
      url.searchParams.delete("hl");
      url.hash = ""
      history.pushState({}, "", url);

      setHlModal({ open: false, title: "", html: "", images: [] });
    };

    const openViewer = (i) =>
      setViewer({
        open: true,
        src: resolveImgSrc(images[i].src),
        caption: images[i].caption || "",
        idx: i,
      });

    const scrollStrip = (dir = 1) => {
      const el = stripRef.current;
      if (!el) return;
      const step = Math.min(300, el.clientWidth * 0.9);
      el.scrollBy({ left: step * dir, behavior: "smooth" });
    };

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
            {/* Modal header */}
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

            {/* Modal body */}
            <div style={{ padding: 16, overflowY: "auto" }}>
              {/* Thumbnails */}
              {images.length > 0 && (
                <div className="thumb-strip" style={{ marginBottom: 12 }}>
                  {images.map((im, i) => (
                    <div key={i} className="thumb-item">
                      <img
                        src={resolveImgSrc(im.src)}
                        alt={`thumb-${i}`}
                        className="thumb"
                        onClick={() => openViewer(i)}
                        tabIndex={0}
                        role="button"
                      />
                      {im.caption && <div className="thumb-cap">{im.caption}</div>}
                    </div>
                  ))}
                </div>
              )}
              {/* HTML highlights */}
              {hlModal.html && (
                <div
                  style={{ color: "#334155", lineHeight: 1.7 }}
                  dangerouslySetInnerHTML={{ __html: hlModal.html }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Lightbox */}
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
                  onClick={() =>
                    setViewer({ open: false, src: "", caption: "", idx: -1 })
                  }
                >
                  ✕ Close
                </Button>
              </div>
              <div className="lightbox-body">
                <img src={viewer.src} alt="preview" className="lightbox-img" />
              </div>
              {viewer.caption ? (
                <div className="lightbox-caption">{viewer.caption}</div>
              ) : null}
            </div>
          </div>
        )}
      </>
    );
  }

  /** Generates navigation links based on the CONFIG.nav array. */
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

  /** Renders the contact links block. */
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
          aria-label="emails"
        >
          ✉️ <a href="mailto:pauluhill74@gmail.com">pauluhill74@gmail.com</a> •{" "}
          <a href="mailto:pauluhill@snu.ac.kr">pauluhill@snu.ac.kr</a>
        </div>
        <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
          <FaLinkedin size={20} color="black" />
          <a href={L.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
          <FaGoogleScholar size={20} color="black" />
          <a href={L.scholar} target="_blank" rel="noreferrer">Google Scholar</a>
        </div>

        <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
          <FaResearchgate size={20} color="black" />
          <a href={L.researchgate} target="_blank" rel="noreferrer">ResearchGate</a>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <FaGithub size={20} color="black" />
          <a href={L.github} target="_blank" rel="noreferrer">GitHub</a>
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
          <a href="#home" style={{ ...styles.link, fontWeight: 700, fontSize: 30 }}>
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
          {/* About me card (left column on desktop) */}
          <div id="about" className="hero-about" style={{ paddingRight: 10 }}>
            <Card>
              <CardHeader>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
                  <CardTitle>About me</CardTitle>
                  <a
                    href={CONFIG.site.cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontWeight: 800, textDecoration: "underline" }}
                  >
                    Curriculum Vitae
                  </a>
                </div>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                  {/* Profile image, no zoom functionality */}
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

            {/* ✅ Mobile-only: Gallery appears below the About card */}
            <div className="only-mobile" style={{ marginTop: 12 }}>
              <HeroGalleryHint />
              <HeroGallery items={heroGalleryItems} />
            </div>
          </div>

          {/* Title, badges, and gallery (right column on desktop) */}
          <div className="hero-text">
            <h1
              style={{
                fontSize: 36,
                fontWeight: 900,
                margin: 0,
                whiteSpace: "normal",
                wordBreak: "break-all",
              }}
            >
              {CONFIG.hero.title.split("\n").map((line, index) => (
                <span key={index} style={{ display: "block" }}>{line}</span>
              ))}
            </h1>
            <p style={{ marginTop: 16, color: "#475569", lineHeight: 1.6 }}>
              {CONFIG.hero.blurb}
            </p>
            <div style={{ ...styles.chipRow, marginTop: 12 }}>
              {CONFIG.hero.badges.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            {/* 🔽 Desktop-only gallery (hidden on mobile) */}
            <div className="only-desktop">
              <HeroGalleryHint />
              <HeroGallery items={heroGalleryItems} />
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
          <a href="#home" style={{ ...styles.link, color: "#64748B" }}>
            Top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
