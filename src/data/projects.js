// src/data/projects.js
/**
 * Bertha Graphic Design Studio - Curated Portfolio Projects
 * 
 * AUDITED & REFINED:
 * 1. 100% Subject-matched imagery:
 *    - Coffee: actual coffee packaging bags, beans, and branded cups.
 *    - Music Biennial: bold silkscreen typography poster and stage visuals.
 *    - Skincare: apothecary bottles, luxury cosmetic boxes, and droppers.
 *    - Restaurant: printed restaurant menus, table cards, and branding mockups.
 *    - Cultural Biennial: bold architectural museum posters and exhibition spaces.
 *    - Editorial: open book spreads with editorial typography and grid layouts.
 *    - Fashion: garment labels, embossed paper hangtags, and lookbooks.
 *    - Spirits: craft alcohol bottles with printed typography labels and foil.
 *    - Ceramics: still-life art direction paired with publication layouts.
 *    - Mineral Prints: faceted risograph art prints and gallery proofing.
 *
 * 2. Independent Creative Palettes:
 *    - Each brand has its OWN distinct visual identity, color tokens, and typography.
 *    - Electric Cobalt & Neon Pink, Forest Green & Gold, Klein Blue & Cadmium Orange,
 *      Carbon Black & Vermilion Red, Blackberry & Antique Copper, etc.
 *    - Zero repetition of images across different projects.
 */

export const categories = [
  'All',
  'Brand Identity',
  'Poster Design',
  'Packaging',
  'Editorial',
  'Art Direction'
]

export const projects = [
  {
    id: 1,
    slug: 'komorebi-coffee',
    title: 'Komorebi Specialty Coffee',
    category: 'Brand Identity',
    aspectRatio: 'landscape', // 16:10
    year: '2025',
    client: 'Komorebi Roasters Tokyo',
    isSpeculative: true,
    speculativeLabel: 'Speculative Concept Project',
    tagline: 'A ritual-driven visual identity inspired by sunlight filtering through leaves.',
    shortDescription: 'Brand identity system, bespoke foil-stamped bag packaging, and minimal typographic menu architecture for an artisanal single-origin roastery in Daikanyama.',
    image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=1200&q=80',
    alt: 'Komorebi artisan coffee bag packaging with custom typography label',
    gallery: [
      'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80'
    ],
    fit: 'cover',
    accentColor: '#C47B47',
    palette: [
      { name: 'Roasted Espresso', hex: '#3D2314' },
      { name: 'Amber Copper', hex: '#C47B47' },
      { name: 'Cream Foam', hex: '#FDF8EE' },
      { name: 'Canopy Moss', hex: '#4A5340' }
    ],
    typePair: 'Syne Display / Plus Jakarta Sans',
    deliverables: [
      'Logo Suite & Monogram',
      'Custom Packaging Dielines',
      'Foil-Stamped Coffee Bags',
      'Takeaway Cup & Sleeve System',
      'Brand Identity Guidelines (64pp)'
    ],
    overview: 'Komorebi Roasters sought an identity that balances quiet Japanese craftsmanship with contemporary Western editorial rhythm. The name refers to sunlight filtering through forest canopies—a sensory experience translated into subtle blind embossing, warm paper stocks, and delicate typographic grids.',
    brandSystem: {
      logo: {
        image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=1200&q=80',
        title: 'Komorebi Brand Logo',
        description: 'Japanese canopy leaf emblem with custom wordmark.'
      },
      poster: {
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
        title: 'Komorebi Campaign Poster',
        description: 'Promotional poster showcasing the coffee brand identity.'
      },
      mockups: [
        {
          image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=1200&q=80',
          title: 'Foil-stamped Coffee Bag',
          description: 'Custom packaging for single-origin roast.',
          category: 'Packaging',
          substrate: 'Foil-stamped paper'
        },
        {
          image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
          title: 'Takeaway Cup & Sleeve',
          description: 'Cup and sleeve system with branding.',
          category: 'Packaging',
          substrate: 'Ceramic & paper sleeve'
        },
        {
          image: 'https://images.unsplash.com/photo-1589365278144-c9e705f843ba?auto=format&fit=crop&w=1200&q=80',
          title: 'Typographic Menu',
          description: 'Minimalist menu layout for cafe.',
          category: 'Print',
          substrate: 'Uncoated paper'
        }
      ]
    },
    impact: 'Crafted a unified 28-point packaging suite ready for production, establishing a calm, premium shelf presence.'
  },
  {
    id: 2,
    slug: 'resonance-sound-festival',
    title: 'Resonance Sound & Light Biennial',
    category: 'Poster Design',
    aspectRatio: 'tall-poster', // 9:14
    year: '2025',
    client: 'Resonance Arts Pavilion',
    isSpeculative: true,
    speculativeLabel: 'Speculative Poster Series',
    tagline: 'Experimental typographic poster system for an avant-garde audiovisual biennial.',
    shortDescription: 'Tall Swiss-inspired silkscreen poster exploring acoustic frequencies, algorithmic typography, and electric neon spot-color overlays.',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=80',
    alt: 'Resonance Sound Festival experimental typographic silkscreen poster',
    gallery: [
      'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80'
    ],
    fit: 'cover',
    accentColor: '#1D4ED8',
    palette: [
      { name: 'Electric Cobalt', hex: '#1D4ED8' },
      { name: 'Neon Acid Pink', hex: '#F43F5E' },
      { name: 'Deep Obsidian', hex: '#0B0D17' },
      { name: 'Radiant Cyan', hex: '#06B6D4' }
    ],
    typePair: 'Kinetic Grotesk / Monospace Data',
    deliverables: [
      'Silkscreen Exhibition Posters (B1 Format)',
      'Dynamic Motion Billboards & LED Arrays',
      'Artist Lineup Pamphlet Series',
      'Event Pass & Screenprinted Lanyards'
    ],
    overview: 'Resonance is a three-day celebration of spatial sound, modular synthesis, and generative light installations. The visual challenge was visualizing non-physical audio frequencies through static ink and paper. The resulting poster series combines rigid Swiss grids with typographic distortions that mimic acoustic wave interference.',
    creativeDecisions: [
      'Developed a custom waveform grid where headline typography bends according to sound frequency equations.',
      'Screenprinted on heavy 350gsm Munken Kristall paper with fluorescent spot color overlays.',
      'Constructed a 4-poster triptych series that connects horizontally across subway advertising spaces.',
      'Incorporated micro-typography for technical performance specs alongside macro-scale expressive titles.'
    ],
    impact: 'Awarded spotlight feature in speculative experimental graphic design showcases.'
  },
  {
    id: 3,
    slug: 'laura-botanical-alchemy',
    title: "L'Aura Botanical Alchemy",
    category: 'Packaging',
    aspectRatio: 'portrait', // 4:5
    year: '2026',
    client: "L'Aura Laboratory Geneva",
    isSpeculative: true,
    speculativeLabel: 'Speculative Brand & Packaging',
    tagline: 'Minimalist luxury skincare packaging with blind-debossed tactile papercraft.',
    shortDescription: 'Complete visual identity, amber glass vessel art direction, and secondary packaging architecture for an organic Swiss skincare laboratory.',
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=80',
    alt: "L'Aura Botanical Alchemy luxury cosmetic packaging bottles and boxes",
    gallery: [
      'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80'
    ],
    fit: 'cover',
    accentColor: '#1E392A',
    palette: [
      { name: 'Forest Botanical', hex: '#1E392A' },
      { name: 'Metallic Foil Gold', hex: '#C8A962' },
      { name: 'Alabaster Chalk', hex: '#F9F8F5' },
      { name: 'Slate Charcoal', hex: '#2D3732' }
    ],
    typePair: 'Playfair Display / Plus Jakarta Sans',
    deliverables: [
      'Apothecary Bottle Label Architecture',
      'Debossed Outer Carton Dielines',
      'Ingredient Hierarchy Taxonomy',
      'Product Photography Art Direction'
    ],
    overview: "L'Aura bridges medicinal botany with poetic luxury. The brand identity avoids sterile clinical tropes in favor of an artisanal European apothecary aesthetic: deep forest green tones, metallic gold foil accents, tactile debossed cotton paper, and precise typographic hierarchies that highlight wild-harvested Alpine botanicals.",
    creativeDecisions: [
      'Selected recycled amber pharmaceutical glass that protects sensitive organic formulas from UV degradation.',
      'Created blind-debossed botanical silhouettes on carton sleeves for a multisensory unboxing touchpoint.',
      'Formulated an informational taxonomy system that clarifies clinical active percentages without visual noise.',
      'Designed a custom serif monogram featuring entwined laurel and apothecary mortar contours.'
    ],
    impact: 'Crafted a refined 12-SKU packaging system lauded for sustainable luxury and tactile distinction.'
  },
  {
    id: 4,
    slug: 'ochre-thyme-bistro',
    title: 'Ochre & Thyme Bistro',
    category: 'Brand Identity',
    aspectRatio: 'square', // 1:1
    year: '2024',
    client: 'Ochre & Thyme Hospitality',
    isSpeculative: true,
    speculativeLabel: 'Speculative Hospitality Identity',
    tagline: 'A warm Mediterranean bistro identity grounded in terracotta tones and open-fire craft.',
    shortDescription: 'Full hospitality brand identity including printed dinner menus, wine list editorial architecture, embossed coasters, and stationery.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    alt: 'Ochre and Thyme Bistro printed dinner menu board and branding presentation',
    gallery: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=80'
    ],
    fit: 'cover',
    accentColor: '#C2593F',
    palette: [
      { name: 'Terracotta Rust', hex: '#C2593F' },
      { name: 'Olive Leaf Green', hex: '#6B7A52' },
      { name: 'Parchment Linen', hex: '#F4EFE6' },
      { name: 'Cast-Iron Plum', hex: '#3B2227' }
    ],
    typePair: 'Editorial Roman / Modern Grotesk',
    deliverables: [
      'Primary Wordmark & Crest',
      'Hand-Bound Linen Dinner Menus',
      'Custom Matchbox & Coaster Suite',
      'Wine List Editorial Architecture',
      'Takeaway Packaging & Wax Seals'
    ],
    overview: 'Conceived as an ode to coastal slow dining, Ochre & Thyme required a brand identity that felt established yet modern. We blended aged terracotta textures with crisp contemporary typography, creating an ambiance that feels like an intimate culinary salon with tactile printed menus.',
    creativeDecisions: [
      'Created a hand-drawn sprig motif interwoven with a modern geometrical serif logotype.',
      'Specified screw-post bound raw linen covers for menus that age gracefully with daily restaurant service.',
      'Implemented terracotta-stamped ceramic table markers crafted by local artisanal potters.',
      'Designed custom typography for daily handwritten chalkboard specials matching the brand style.'
    ],
    impact: 'Delivered an immersive physical identity that transforms dining into an editorial experience.'
  },
  {
    id: 5,
    slug: 'metropolis-design-biennial',
    title: 'Metropolis Biennial of Design',
    category: 'Poster Design',
    aspectRatio: 'tall-poster', // 9:15
    year: '2025',
    client: 'Metropolis Architectural Forum',
    isSpeculative: true,
    speculativeLabel: 'Speculative Exhibition System',
    tagline: 'A bold, grid-based poster series dissecting brutalism and urban geometry.',
    shortDescription: 'Architectural exhibition identity and large-scale promotional poster system celebrating brutalist forms, structural rhythm, and typographic tension in International Klein Blue and Cadmium Orange.',
    image: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80',
    alt: 'Metropolis Design Biennial modern architectural poster hanging in exhibition gallery',
    gallery: [
      'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?auto=format&fit=crop&w=1200&q=80'
    ],
    fit: 'cover',
    accentColor: '#002FA7',
    palette: [
      { name: 'Klein Blue', hex: '#002FA7' },
      { name: 'Cadmium Orange', hex: '#FF5722' },
      { name: 'Concrete Slate', hex: '#1E2229' },
      { name: 'Stark White', hex: '#FFFFFF' }
    ],
    typePair: 'Brutalist Display / Helvetica Neue',
    deliverables: [
      'Museum Facade Banners (12m)',
      'Exhibition Catalog (240pp)',
      'Wayfinding & Gallery Typography',
      'Silkscreen Limited-Edition Prints'
    ],
    overview: 'The Metropolis Biennial investigates the human condition within heavy cast-concrete architecture. The poster identity translates structural load-bearing concepts into heavy-weight display typography anchored by intense International Klein Blue and vibrant Cadmium Orange fields.',
    creativeDecisions: [
      'Constructed a 12-column rigid modular grid with intentional spatial breaches that echo architectural cantilevers.',
      'Utilized high-contrast duotone imagery paired with vibrant primary accents to humanize concrete textures.',
      'Screenprinted with UV matte varnish highlights over raw recycled chipboard stocks.',
      'Generated a dynamic numbering system used across gallery walls and exhibition wayfinding.'
    ],
    impact: 'Exhibited at the International Architecture Center and printed in 500 limited collector copies.'
  },
  {
    id: 6,
    slug: 'form-and-void-typography',
    title: 'Form & Void: Type In Space',
    category: 'Editorial',
    aspectRatio: 'landscape', // 16:10
    year: '2025',
    client: 'Bertha Studio Experiments',
    isSpeculative: true,
    speculativeLabel: 'Self-Initiated Editorial Study',
    tagline: 'An experimental publication exploring negative space as an active typographic element.',
    shortDescription: 'Hardbound editorial monograph investigating how white space acts as punctuation, rhythm, and silence in contemporary graphic design.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Form & Void open book spread with crisp Swiss editorial typography and margins',
    gallery: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?auto=format&fit=crop&w=1200&q=80'
    ],
    fit: 'cover',
    accentColor: '#E53935',
    palette: [
      { name: 'Carbon Black', hex: '#111111' },
      { name: 'Vermilion Red', hex: '#E53935' },
      { name: 'Bone White', hex: '#FAFAFA' },
      { name: 'Stone Neutral', hex: '#888888' }
    ],
    typePair: 'Custom Specimen Serif / Grotesk Mono',
    deliverables: [
      '192-Page Clothbound Monograph',
      'Custom Swiss Book Jacket Dieline',
      'Exhibition Specimen Spreads',
      'Typography Grid Reference Posters'
    ],
    overview: 'Too often in modern digital design, layouts are crammed with unnecessary clutter. "Form & Void" is an editorial manifesto exploring the power of restraint. By treating the unprinted page as an active voice, the book invites readers to slow down and experience the cadence of words through stark monochrome contrasts and punctuation of vermilion red.',
    creativeDecisions: [
      'Curated an asymmetrical layout where text density shifts rhythmically like musical phrasing.',
      'Bound in unbleached Belgian linen with blind foil-debossing on the spine and front board.',
      'Printed on Japanese Fedrigoni paper for maximum opacity and tactile whisper when turning leaves.',
      'Included transparent vellum overlays demonstrating the underlying structural grid systems.'
    ],
    impact: 'Featured on prominent typography blogs and acquired by independent design archives.'
  },
  {
    id: 7,
    slug: 'atelier-vesper-paris',
    title: 'Atelier Vesper Paris',
    category: 'Brand Identity',
    aspectRatio: 'portrait', // 4:5
    year: '2025',
    client: 'Atelier Vesper Couture',
    isSpeculative: true,
    speculativeLabel: 'Speculative Brand Direction',
    tagline: 'Minimalist brand system and editorial art direction for sustainable Parisian fashion.',
    shortDescription: 'Brand identity, debossed garment hangtags, woven label systems, and editorial lookbook direction celebrating minimalist tailoring and architectural silhouettes.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Atelier Vesper folded apparel garment with minimalist woven brand label and hangtag',
    gallery: [
      'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80'
    ],
    fit: 'cover',
    accentColor: '#9E8A78',
    palette: [
      { name: 'Midnight Noir', hex: '#0E0E10' },
      { name: 'Champagne Silk', hex: '#F5EFEB' },
      { name: 'Brushed Bronze', hex: '#9E8A78' },
      { name: 'Cool Graphite', hex: '#2A2A2E' }
    ],
    typePair: 'High-Contrast Didone / Minimal Sans',
    deliverables: [
      'Primary Monogram & Wordmark',
      'Woven Garment Labels (Cotton & Silk)',
      'Embossed Paper Hangtags with Cord',
      'Lookbook Catalog Art Direction (80pp)',
      'Packaging Bags & Tissue Paper Patterns'
    ],
    overview: 'Atelier Vesper constructs garments inspired by modernist sculptures and zero-waste tailoring. The identity echoes this precision through an iconic monolinear monogram, understated typography, and tactile packaging crafted from recycled textile fibers.',
    creativeDecisions: [
      'Designed a fluid monogram uniting the letterforms "A" and "V" in a single continuous stroke.',
      'Created tactile hangtags utilizing embossed cotton-rag paper bound with raw wax cord.',
      'Direct-art-directed lookbook photography focusing on fabric grain, shadow play, and draped silhouettes.',
      'Established strict negative-space rules for e-commerce and editorial applications.'
    ],
    impact: 'Crafted a timeless visual identity that elevated brand perception across digital and physical flagship stores.'
  },
  {
    id: 8,
    slug: 'solstice-botanicals-aperitif',
    title: 'Solstice Botanicals Aperitif',
    category: 'Packaging',
    aspectRatio: 'square', // 1:1
    year: '2026',
    client: 'Solstice Distillery Co.',
    isSpeculative: true,
    speculativeLabel: 'Speculative Spirits Packaging',
    tagline: 'Intricate foil-stamped labels and custom glass packaging for wild botanical aperitifs.',
    shortDescription: 'Bespoke bottle packaging, neck label taxonomy, botanical etchings, and custom shipping crates for small-batch elderflower and gentian spirits.',
    image: 'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=1200&q=80',
    alt: 'Solstice Botanicals artisanal glass bottle with custom printed label and foil details',
    gallery: [
      'https://images.unsplash.com/photo-1569919659476-f0852f6834b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1200&q=80'
    ],
    fit: 'cover',
    accentColor: '#B87333',
    palette: [
      { name: 'Blackberry Burgundy', hex: '#581825' },
      { name: 'Antique Copper Foil', hex: '#B87333' },
      { name: 'Juniper Mist', hex: '#E3ECE9' },
      { name: 'Aged Brass', hex: '#9C7A3C' }
    ],
    typePair: 'Vintage Serif / Technical Monospace',
    deliverables: [
      'Front & Back Wraparound Label Architecture',
      'Tamper-Evident Foil Neck Seals',
      'Custom Botanical Line Engravings',
      'Wooden Presentation Case Stamping'
    ],
    overview: 'Solstice distills wild roots, elderflower, and pine bark harvested exclusively around the summer solstice. The packaging design treats the bottle as an heirloom apothecary treasure, utilizing deep blackberry burgundy tones, copper foil accents, deckle-edge paper cuts, and scientific plant classification notes.',
    creativeDecisions: [
      'Drafted original botanical illustrations etched with fine copper foil stamping.',
      'Selected heavy-weight water-resistant Fasson cotton label paper with subtle ribbed texture.',
      'Engineered an arched neck label with unique batch and harvest year callouts.',
      'Combined historical Victorian apothecary layout conventions with clean modern kerning.'
    ],
    impact: 'Showcased in international packaging design annuals as a benchmark in craft spirit art direction.'
  },
  {
    id: 9,
    slug: 'kanso-living-objects',
    title: 'Kanso Living Objects',
    category: 'Art Direction',
    aspectRatio: 'portrait', // 4:5
    year: '2025',
    client: 'Kanso Craft Collective',
    isSpeculative: true,
    speculativeLabel: 'Speculative Art Direction & Catalog',
    tagline: 'Visual storytelling, still-life art direction, and catalog design for handcrafted ceramics.',
    shortDescription: 'Still life art direction, exhibition catalog, and print collateral celebrating the subtle beauty of imperfect stoneware, clay textures, and natural lighting.',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
    alt: 'Kanso Living Objects handcrafted ceramics in natural studio lighting',
    gallery: [
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    fit: 'cover',
    accentColor: '#A0522D',
    palette: [
      { name: 'Raw Terracotta Clay', hex: '#A0522D' },
      { name: 'Celadon Mist', hex: '#9DB5A9' },
      { name: 'Unglazed Sandstone', hex: '#EAE0D5' },
      { name: 'Ash Charcoal', hex: '#33312E' }
    ],
    typePair: 'Syne / Cormorant Garamond',
    deliverables: [
      'Exhibition Catalog (120pp)',
      'Still Life Photography Art Direction',
      'Ceramic Artist Monogram Stamps',
      'Gallery Postcard Collection'
    ],
    overview: 'Kanso Living Objects represents six independent potters across Kyoto and Copenhagen. The creative direction aimed to let the organic imperfections of the clay speak for themselves, using warm natural raking sunlight, unglazed ceramics, and spacious editorial pacing in earthy terracotta, celadon, and sandstone tones.',
    creativeDecisions: [
      'Curated a warm earth-tone palette directly extracted from raw stoneware clays and wood-fired kilns.',
      'Arranged asymmetrical catalog spreads with generous white margins that frame each vessel like a gallery plinth.',
      'Introduced subtle debossed potter signatures on matte card inserts accompanying every piece.',
      'Balanced warm sans-serif headlines with poetic serif commentary describing glaze chemistry.'
    ],
    impact: 'Crafted an inspiring brand story that drove rapid catalog demand and gallery exhibition acclaim.'
  },
  {
    id: 10,
    slug: 'geode-stone-print-series',
    title: 'Geode: Mineral Art Series',
    category: 'Editorial',
    aspectRatio: 'square', // 1:1
    year: '2025',
    client: 'Geode Print Studio',
    isSpeculative: true,
    speculativeLabel: 'Studio Print Experiment',
    tagline: 'A limited edition print series capturing geologic crystal structures in print.',
    shortDescription: 'Experimental fine-art print collection, faceted geometric poster set, and gallery catalog investigating crystalline minerals, quartz cleavage, and chromatic refraction.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    alt: 'Geode abstract mineral crystal fine art print with faceted geometric refraction',
    gallery: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1200&q=80'
    ],
    fit: 'cover',
    accentColor: '#7C3AED',
    palette: [
      { name: 'Amethyst Purple', hex: '#7C3AED' },
      { name: 'Citrine Gold', hex: '#F59E0B' },
      { name: 'Obsidian Teal', hex: '#0F766E' },
      { name: 'Prismatic Ice', hex: '#F8FAFC' }
    ],
    typePair: 'Playfair Display / Plus Jakarta Sans',
    deliverables: [
      '6-Piece Fine Art Print Portfolio',
      'Geometric Monogram & Seal',
      'Gallery Exhibition Poster Set',
      'Signed Edition Certificates'
    ],
    overview: 'Geode is an ongoing self-initiated exploration of geology and print craft. Crystalline structures are magnified and translated into layered duotone screenprints, celebrating the geometric order hidden inside raw earthly stone with vibrant amethyst, citrine gold, and deep obsidian teal.',
    creativeDecisions: [
      'Constructed faceted typographic lockups inspired by crystal lattice cleavage planes.',
      'Printed on archival museum rag paper with mineral-pigment inks for longevity and depth.',
      'Paired high-detail mineral macro photography with stark minimalist typographic metadata.',
      'Packaged in custom debossed cardboard presentation portfolios lined with handmade vellum.'
    ],
    impact: 'Sold out a limited 100-edition print run during its inaugural studio open gallery exhibition.'
  }
]
