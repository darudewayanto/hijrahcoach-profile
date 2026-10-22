// Single source of truth for contact details, navigation and shared content.
// Content is drawn from "Hijrah Coach Profile 221026" (company profile) and the
// "Benefit of Associate Business Coach Program" table. Edit here; every page reads from this file.

export const site = {
  name: "Hijrah Coach",
  tagline: "Agile Specialists for Your Sustainable Business",
  description:
    "Hijrah Coach: firma business coaching terakreditasi internasional (ICF, ICAgile, MyBrain). Program Associate Business Coach, 5 sertifikasi internasional, dan gerakan beasiswa Agile Hijrah Coaching. 1.800+ lulusan di 5 negara.",
  url: "https://hijrahcoach.co.id",
  email: "salam@hijrahcoach.co.id",
  phoneDisplay: "+62 811 1881 877",
  whatsapp: "628111881877",
  masterCoachUrl: "https://coachdaru.belajaragile.com",
  hadeUrl: "https://hade.belajaragile.com",
  coaUrl: "https://coa.belajaragile.com",
  // MyBrain Indonesia is still on its temporary host until mybrain.id goes live.
  mybrainUrl: "https://darudewayanto.github.io/mybrain-profile/",
};

const waMessages = {
  general: "Assalamu'alaikum Hijrah Coach, saya ingin tahu lebih lanjut tentang program Hijrah Coach.",
  abc: "Assalamu'alaikum Hijrah Coach, saya ingin mendaftar Associate Business Coach (ABC) Program. Mohon info jadwal & term of payment.",
  certification: "Assalamu'alaikum Hijrah Coach, saya tertarik mengikuti sertifikasi coaching internasional. Mohon info jadwal batch berikutnya.",
  ahc: "Assalamu'alaikum Hijrah Coach, saya ingin mendaftar Beasiswa Agile Hijrah Coaching (AHC). Mohon info syarat & jadwal batch berikutnya.",
  ahcPartner: "Assalamu'alaikum Hijrah Coach, kami dari lembaga dakwah/pendidikan dan ingin membuka chapter Agile Hijrah Coaching (AHC).",
  corporate: "Assalamu'alaikum Hijrah Coach, kami dari perusahaan/lembaga dan tertarik dengan program coaching & agile transformation.",
} as const;

export type WaTopic = keyof typeof waMessages;

export const wa = (topic: WaTopic = "general", extra?: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(extra ? `${waMessages[topic]} (${extra})` : waMessages[topic])}`;

export const nav: { href: string; label: string; short?: string; external?: boolean }[] = [
  { href: "/associate-business-coach", label: "Program ABC" },
  { href: "/sertifikasi", label: "Sertifikasi" },
  { href: "/beasiswa-ahc", label: "Beasiswa AHC" },
  { href: "/group", label: "Hijrah Coach Group", short: "Group" },
  { href: site.masterCoachUrl, label: "Master Coach", external: true },
  { href: "/kontak", label: "Kontak" },
];

export const stats = [
  { value: "1.800+", label: "Lulusan coach & practitioner" },
  { value: "180", label: "Associate coach" },
  { value: "28", label: "Firma coaching" },
  { value: "5", label: "Negara" },
];

export const countries = ["Indonesia", "Hong Kong", "Qatar", "Saudi Arabia", "Australia"];
export const partnerCountries = ["USA", "UK", "Qatar", "Saudi Arabia", "UAE", "Kuwait", "Oman", "Bahrain", "Malaysia", "Singapore"];

// ---------- Sertifikasi (5 bundling certification) ----------
export const certifications = [
  {
    code: "ACHC",
    name: "Agile Certified Hijrah Coach",
    credential: "ICP-ACC · ICAgile Certified Professional in Agile Coaching",
    accreditor: "ICAgile",
    hours: "22 jam",
    mode: "Offline",
    photo: "demo-blue",
    summary:
      "Foundation of Agile Coaching, Leader as Agile Coach, dan kompetensi sertifikasi agile coaching. Terakreditasi ICAgile (International Consortium for Agile) setelah menyelesaikan Fundamental dan Modul 1.",
  },
  {
    code: "CBHC",
    name: "Certified Business Hijrah Coach",
    credential: "ICF Level 1 · Accredited Coaching Education",
    accreditor: "ICF",
    hours: "67 jam · 2 modul",
    mode: "Offline",
    photo: "demo-white",
    summary:
      "Program kompetensi coaching bersertifikat internasional: teknik advance coaching 1-on-1 dan team/group coaching berbasis 8 Core Competencies ICF. Memenuhi ICF Level 1 setelah menyelesaikan 2 modul.",
  },
  {
    code: "CHMP",
    name: "Certified Hijrah Mind Practitioner",
    credential: "MyBrain Certified Mind Practitioner",
    accreditor: "MyBrain International · CCE ICF",
    hours: "22 jam",
    mode: "Offline",
    photo: "class-grey",
    summary:
      "Applied-neuroscience tentang neurological dominance (MiND) sebagai practitioner untuk agility. Terakreditasi MyBrain International Limited (UK) dan CCE (Continuing Coaching Education) ICF.",
  },
  {
    code: "PBHC",
    name: "Professional Business Hijrah Coach",
    credential: "Didesain oleh Hijrah Coach",
    accreditor: "Hijrah Coach",
    hours: "33 jam",
    mode: "Online",
    photo: "associate-teach",
    summary:
      "Sertifikasi eksklusif untuk Firm Owner Coach & Associate Coach: bagaimana sukses menjadi professional coach, membangun praktik, klien, dan bisnis coaching.",
  },
  {
    code: "CBHF",
    name: "Certified Business Hijrah Framework",
    credential: "90 Day Coaching Framework",
    accreditor: "Hijrah Coach",
    hours: "4 minggu",
    mode: "Online",
    photo: "flipchart",
    summary:
      "Sertifikasi coach untuk menghantarkan 90 Day Coaching Framework, menumbuhkan pemilik usaha mikro & kecil dalam 90 hari.",
  },
];

// ---------- Associate Business Coach: benefit table ----------
// grad = also included for "Certification Graduate"; every row is included for Associate Business Coach.
export const abcBenefits = [
  { title: "5 Bundling Certification (ACHC, CBHC, CHMP, PBHC & CBHF)", value: "Rp70.500.000", grad: true,
    note: "ACHC (ICP-ACC), CBHC (ICF Level-1), CHMP (MyBrain Practitioner) offline · PBHC & CBHF online. Sertifikasi diikuti sesuai term of payment." },
  { title: "3 Sesi Coaching Business Foundation Workshop", value: "Rp10.000.000", grad: true,
    note: "Bagian dari Hijrah Coaching Business Foundation (HCBF)." },
  { title: "3 Sesi 1-on-1 Coaching & Mentoring untuk Memulai Profesi Coaching", value: "Rp15.000.000", grad: false,
    note: "Bagian dari Hijrah Coaching Business Foundation (HCBF)." },
  { title: "Self-Paced & Digital Content Learning Program Menjadi Professional Coach", value: "Rp25.000.000", grad: false,
    note: "Bagian dari Hijrah Coaching Business Foundation (HCBF)." },
  { title: "Competency Up-Skill & Mentoring (Coaching, Mind, Agile Coaching, Hijrah Framework)", value: "Rp55.000.000", grad: false,
    note: "1–2 kali per bulan bersama Master Coach & Senior Coach." },
  { title: "Akses Re-Take Semua Sertifikasi", value: "Rp55.000.000", grad: true,
    note: "Untuk re-seat / re-take offline terdapat tambahan biaya paket meeting hotel." },
  { title: "Master Class Workshop Program (Bronze, Silver & Gold)", value: "Rp55.000.000", grad: false,
    note: "Untuk 3 kompetensi (coaching, mind, training) sampai menuju Master Hijrah Coach." },
  { title: "Kesempatan Terlibat sebagai Fasilitator Public Certification & Corporate Project", value: null, grad: false,
    note: "Belajar dan terlibat langsung di proyek publik dan korporasi." },
  { title: "Support Management: Sales & Prospecting bersama Account Manager & Program", value: null, grad: false,
    note: "Prospek lead, jadwal, proposal, tender, follow-up, closing, penagihan." },
  { title: "Support Management: Social Media & Digital Marketing", value: null, grad: false,
    note: "IG & FB Hijrah Coach, YouTube Hijrah Coach after event, email marketing." },
  { title: "Support Management: Penyelenggaraan Event Online & Offline (Gratis maupun Berbayar)", value: null, grad: false,
    note: "Dari persiapan, penyelenggaraan, sampai social media." },
  { title: "Support Management untuk Projek Corporate Anda, A sampai Z", value: null, grad: false,
    note: "Penjadwalan, pelaksanaan, administrasi, laporan keuangan projek, penagihan." },
  { title: "Lisensi Branding Worldclass Hijrah Coach & HADE beserta Kredibilitasnya", value: null, grad: false,
    note: "Sebagai personal marketing tools, sesuai akad." },
  { title: "Lisensi Coaching Business System & Tools, Terbukti 10 Tahun Efektif & Berhasil", value: null, grad: false,
    note: "Sesuai akad." },
  { title: "Berpartner dengan World Master Coach Level (3 Organisasi Coaching Dunia)", value: null, grad: false,
    note: "Memperkuat professional coach personal branding. Sesuai akad." },
  { title: "Mentoring & Supervision dari Master Coach untuk Mengembangkan Profesi Coaching", value: null, grad: false,
    note: "Sesuai akad." },
];

export const abcTotal = "Rp285.500.000";
export const abcInvestment = "Rp40.000.000";

// Roadmap from the company profile: 3 competency tracks × Bronze/Silver/Gold (3 months each).
export const roadmap = [
  { track: "Coaching, Mentoring & Facilitating", levels: ["Bronze Coach", "Silver Coach", "Gold Coach"] },
  { track: "MyBrain Practitioner", levels: ["Bronze Mind Practitioner", "Silver Mind Practitioner", "Gold Mind Practitioner"] },
  { track: "Training & Instructor", levels: ["Bronze Trainer", "Silver Trainer", "Gold Trainer"] },
];
export const masteries = ["Business Mastery", "Technical Mastery", "Transformation Mastery"];
export const competencies = ["Coaching", "Team Coaching", "Mentoring", "Training", "Facilitating"];

export const abcSteps = [
  { title: "Konsultasi via WhatsApp", text: "Ceritakan latar belakang dan tujuan Anda. Tim kami menjelaskan program, jadwal batch, dan term of payment." },
  { title: "Akad & Onboarding", text: "Penandatanganan akad ABC, deklarasi aktif & kode etik, lalu onboarding ke Hijrah Coaching Business Foundation." },
  { title: "Sertifikasi & Foundation", text: "Ikuti 5 sertifikasi internasional, workshop foundation, 1-on-1 mentoring, dan program digital." },
  { title: "Praktik & Bertumbuh", text: "Terlibat di proyek publik & korporasi dengan support sales, marketing, event, dan administrasi dari tim." },
];

export const abcFaq = [
  { q: "Apa beda Certification Graduate dan Associate Business Coach?",
    a: "Certification Graduate mengikuti sertifikasi, foundation workshop, dan akses re-take. Associate Business Coach mendapatkan seluruh 16 benefit: termasuk mentoring rutin, master class Bronze–Gold, support management sales hingga corporate project, dan lisensi branding Hijrah Coach & HADE." },
  { q: "Apakah semua sertifikasi offline?",
    a: "ACHC (ICP-ACC), CBHC (ICF Level-1), dan CHMP (MyBrain Practitioner) offline. PBHC dan CBHF online. Sertifikasi diikuti sesuai term of payment." },
  { q: "Apakah saya harus sudah menjadi coach?",
    a: "Tidak. Program ini dirancang sebagai roadmap terstruktur dari memulai profesi coaching sampai menjadi Master Coach dan entrepreneur yang memiliki bisnis & firma coaching sendiri." },
  { q: "Bagaimana dengan biaya re-take?",
    a: "Akses re-take semua sertifikasi sudah termasuk. Untuk re-seat / re-take offline terdapat tambahan biaya paket meeting hotel." },
];

// ---------- Agile Hijrah Coaching (AHC) ----------
export const ahc = {
  mission:
    "Melayani umat dalam pengembangan SDM dan profesional, dengan pengalaman 15 tahun di kompetensi agile coaching, melalui organisasi dakwah dan pendidikan.",
  audience: "Ustadz/ustadzah dan pemimpin organisasi di bidang dakwah, pendidikan, dan kemanusiaan.",
  stats: [
    { value: "1.000", label: "Target beasiswa" },
    { value: "350+", label: "Lulusan" },
    { value: "30+", label: "Batch" },
    { value: "9", label: "Chapter" },
    { value: "100+", label: "Pondok, sekolah & lembaga dakwah" },
  ],
  cities: ["Aceh", "Jakarta", "Bandung", "Solo", "Salatiga", "Jogja", "Purwokerto", "Surabaya", "Jember", "Maros"],
  accreditors: ["ICF", "ICAgile", "MyBrain"],
  outcomes: [
    { title: "Agile mindset untuk lembaga", text: "Memimpin pondok, sekolah, dan lembaga dakwah dengan nilai dan prinsip agile: adaptif, kolaboratif, berorientasi hasil." },
    { title: "Kompetensi coaching", text: "Mendengar aktif, bertanya powerful, membangun rapport, dan memfasilitasi tim, langsung dipraktikkan di kelas." },
    { title: "Kredensial internasional", text: "Jalur menuju kredensial agile coaching yang diakui ICF, ICAgile, dan MyBrain." },
    { title: "Jaringan & chapter", text: "Bergabung dengan alumni dari berbagai kota dan menjadi penggerak chapter di daerah Anda." },
  ],
};

// ---------- Hijrah Coach Group ----------
export const units = [
  { key: "ahc", name: "Agile Hijrah Coaching", role: "Agile Coaching Certification · Scholarship Program", href: "/beasiswa-ahc", external: false, logo: "ahc", dark: true },
  { key: "abc", name: "Associate Business Coaching", role: "Internationally Certified & Accredited Public Certification", href: "/associate-business-coach", external: false, logo: "abcp", dark: false },
  { key: "hade", name: "HADE", role: "Corporate Solution · Agile Transformation", href: site.hadeUrl, external: true, logo: "hade-white", dark: true },
  { key: "coa", name: "Center of Agility", role: "Agile Program for Youth · Workshop Credential & Talent Center", href: site.coaUrl, external: true, logo: "coa-gold", dark: false },
  { key: "mybrain", name: "MyBrain Indonesia", role: "Applied-Neuroscience Profile · Agile Transformation", href: site.mybrainUrl, external: true, logo: "mybrain", dark: false },
];

export const accreditations = [
  { name: "ICAgile", origin: "International Consortium for Agile, USA", logo: "icagile" },
  { name: "ICF", origin: "International Coaching Federation, USA", logo: "icf" },
  { name: "MyBrain International", origin: "United Kingdom", logo: "mybrain" },
  { name: "WABC", origin: "Worldwide Association of Business Coaches, Canada", logo: "wabc" },
  { name: "EMCC", origin: "European Mentoring & Coaching Council, UK", logo: "emcc" },
  { name: "Erickson Coaching International", origin: "Canada", logo: "erickson" },
];

export const masterCredentials = [
  "ICE-AC · ICAgile Certified Expert in Agile Coaching",
  "MCC · Master Certified Coach, ICF",
  "MiND Master Practitioner, MyBrain International",
  "CMC · Certified Master Coach, Corporate Coach Academy",
  "ECPC · Erickson Certified Professional Coach",
  "Marshall Goldsmith Stakeholder Centered Coaching",
];

export const awards = [
  "Top Business Award 2016",
  "ASEAN Top Business Award 2017",
  "100 Best Global Coaching Leader 2017",
  "100 Top Global Coaching Leader 2018",
  "101 Best Global Coaching Leader 2019",
];

export const journey = [
  { period: "2011 – 2016", items: [
    "Mendampingi 1.000+ korporasi & UMKM, terutama di Jakarta, Surabaya, Bandung, dan Mataram.",
    "3.000+ jam coaching dan 2.000+ jam training.",
    "Official business coach bersama KADIN, HIPMI, IWAPI, Telkom Indonesia, dan organisasi entrepreneur lainnya.",
    "Terakreditasi 4 organisasi coaching & applied-neuroscience dunia.",
  ] },
  { period: "2017 – 2019", items: [
    "Akhir 2017 resmi bertransformasi menjadi firm-based coaching company & platform.",
    "Bergabung 11 firma dan 50 associate coach.",
    "Terdaftar resmi dan menyelenggarakan sertifikasi coaching di 3 negara.",
    "Kredensial master: MiND Master Practitioner (MyBrain) dan Certified Master Coach (CCA).",
  ] },
  { period: "2020 – 2025", items: [
    "Kredensial Master Certified Coach (ICF) dan ICAgile Expert in Agile Coaching (ICE-AC).",
    "Akreditasi tambahan dari ICAgile untuk menyelenggarakan & mensertifikasi agile coach.",
    "Meluncurkan HADE, aplikasi coaching & mentoring berbasis AI untuk UMKM. Top 10 Startup World Cup Qatar & Top 77 Startup Istanbul.",
    "1.800+ professional coach & practitioner tersertifikasi di Indonesia, Hong Kong, Australia, dan Qatar.",
  ] },
];

export const clients = [
  "kemendikbud", "kemenkeu", "kemenkes", "kemnaker", "kemenkop-ukm", "lemhannas", "pertamina", "pln",
  "bpjs-kesehatan", "bulog", "telkom", "pii", "shell", "skk-migas", "samsung", "henkel",
  "herbalife", "servier", "ottobock", "xl-axiata", "lintasarta", "bukaka", "telin", "intiland", "indosat",
];

export const gallery = [
  { img: "class-grey", caption: "Kelas Agile Hijrah Coaching" },
  { img: "workshop-akhwat", caption: "Workshop AHC Fundamental, kelas akhwat" },
  { img: "demo-white", caption: "Demo coaching 1-on-1" },
  { img: "summit", caption: "Hijrah Coaching Summit" },
  { img: "group-five", caption: "Bersama para asatidz peserta AHC" },
  { img: "akhwat-class", caption: "Sesi sertifikasi AHC" },
  { img: "flipchart", caption: "Fasilitasi agile coaching" },
  { img: "summit-panel", caption: "Para coach & mitra Hijrah Coach" },
];
