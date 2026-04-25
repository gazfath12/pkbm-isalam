// ===== CENTRAL SITE DATA =====
// All static content for PKBM & LKP I-SALAM website
// !! PENTING: Ganti nomor WhatsApp di bawah ini dengan nomor asli (format: 628xxx)

const WA_NUMBER = "6281391002505"; // <-- Ganti dengan nomor WA aktif

// ===== SITE INFO =====
export const SITE = {
  name: "PKBM & LKP I-SALAM",
  shortName: "PUSDIKLAT I-SALAM",
  tagline: "Pusat Pendidikan Dan Pelatihan",
  description:
    "PKBM & LKP I-SALAM adalah lembaga pendidikan nonformal dan pelatihan keterampilan yang berdedikasi menciptakan generasi kompeten, mandiri, dan berakhlak mulia.",
  whatsappNumber: WA_NUMBER,
};

// ===== LEGAL INFO =====
export const LEGAL = {
  pkbm: {
    npsn: "P9998861",
    iziOperasional: "421.9/2856/2021",
    akreditasi: "BAN-PDM",
    tahunBerdiri: "2021",
  },
  lkp: {
    npsn: "K9998234",
    iziOperasional: "421.9/2857/2023",
    tahunBerdiri: "2023",
  },
};

// ===== PROGRAMS =====
export const PROGRAMS = [
  {
    id: "pkbm",
    tag: "PKBM",
    name: "PKBM Inisiator Salam Kariim",
    fullName: "Pusat Kegiatan Belajar Masyarakat",
    subtitle: "Pendidikan Kesetaraan · Akreditasi BAN-PDM",
    description:
      "Program pendidikan nonformal berstandar negara yang memberikan layanan kesetaraan Paket A, B, dan C. Terakreditasi oleh BAN-PDM dengan kurikulum adaptif berbasis nilai-nilai keislaman.",
    features: [
      "Paket A – Setara SD",
      "Paket B – Setara SMP",
      "Paket C – Setara SMA",
      "Akreditasi BAN-PDM",
      "Ijazah Diakui Negara",
      "Pembelajaran Fleksibel",
    ],
    visi: "Menjadi pusat pendidikan kesetaraan yang unggul, berakhlak mulia, dan mandiri demi terwujudnya generasi umat yang berkualitas.",
    misi: [
      "Menyelenggarakan pendidikan kesetaraan berbasis kompetensi yang mengintegrasikan nilai-nilai keislaman.",
      "Membangun lingkungan belajar yang qur'ani, inspiratif, dan ramah anak.",
      "Mengembangkan kecakapan hidup (life skills) agar warga belajar siap terjun ke masyarakat.",
    ],
    gradient: "linear-gradient(135deg, #b84a00 0%, #7a2e00 100%)",
    color: "#e85d04",
    accent: "#faa307",
  },
  {
    id: "lkp",
    tag: "LKP",
    name: "LKP Inisiator Salam Kariim",
    fullName: "Lembaga Kursus dan Pelatihan",
    subtitle: "Vokasi & Keterampilan Profesional",
    description:
      "Program kursus dan pelatihan keterampilan vokasional yang dirancang untuk meningkatkan kompetensi, daya saing, dan kemandirian ekonomi masyarakat melalui bidang komputer, desain, tata boga, dan hantaran.",
    features: [
      "Komputer Office",
      "Desain Grafis",
      "Tata Boga",
      "Hantaran",
      "Sertifikasi Kompetensi",
      "Siap Kerja & Wirausaha",
    ],
    visi: "Menjadi lembaga kursus dan pelatihan vokasional profesional yang melahirkan SDM kompeten, kreatif, dan berdaya saing global dengan landasan akhlak mulia.",
    misi: [
      "Menyelenggarakan pelatihan keterampilan yang sesuai kebutuhan industri (link and match).",
      "Membekali peserta didik dengan mental wirausaha dan kemandirian.",
      "Menjalin jejaring kerja sama dengan dunia usaha dan industri (DUDI).",
    ],
    gradient: "linear-gradient(135deg, #f48c06 0%, #e85d04 100%)",
    color: "#f48c06",
    accent: "#ffd60a",
  },
  {
    id: "bimbel",
    tag: "BIMBEL",
    name: "Bimbel I-SALAM",
    fullName: "Bimbingan Belajar SD & SMP",
    subtitle: "Peningkatan Prestasi Akademik",
    description:
      "Layanan bimbingan belajar intensif untuk siswa SD dan SMP dengan metode pembelajaran interaktif, menyenangkan, dan berfokus pada pemahaman konsep mendalam.",
    features: [
      "Bimbel SD – Semua Mapel",
      "Bimbel SMP – Mapel Utama",
      "Metode Interaktif & Menyenangkan",
      "Guru Berpengalaman & Berdedikasi",
      "Jadwal Fleksibel",
      "Fokus Peningkatan Nilai",
    ],
    visi: "Menjadi mitra belajar terpercaya bagi siswa untuk meraih prestasi akademik terbaik dengan karakter mulia.",
    misi: [
      "Menyediakan bimbingan akademik berkualitas dan mudah dipahami.",
      "Membantu siswa menguasai konsep dasar pelajaran dengan benar.",
      "Meningkatkan kepercayaan diri siswa dalam menghadapi ujian.",
    ],
    gradient: "linear-gradient(135deg, #2a9d8f 0%, #264653 100%)",
    color: "#2a9d8f",
    accent: "#e9c46a",
  },
];

// ===== REGISTRATION PROGRAMS =====
export const REGISTRATION_PROGRAMS = [
  "PKBM Inisiator Salam Kariim – Paket A (Setara SD)",
  "PKBM Inisiator Salam Kariim – Paket B (Setara SMP)",
  "PKBM Inisiator Salam Kariim – Paket C (Setara SMA)",
  "LKP Inisiator Salam Kariim – Komputer Office",
  "LKP Inisiator Salam Kariim – Desain Grafis",
  "LKP Inisiator Salam Kariim – Tata Boga",
  "LKP Inisiator Salam Kariim – Hantaran",
  "Bimbel I-SALAM – SD",
  "Bimbel I-SALAM – SMP",
];

// ===== VISI & MISI LEMBAGA =====
export const VISI = {
  title: "Visi",
  content:
    "Menjadi pusat pengembangan sumber daya manusia yang unggul, profesional, dan berakhlak mulia demi terwujudnya kejayaan umat.",
};

export const MISI = {
  title: "Misi",
  items: [
    "Menyelenggarakan pelatihan berbasis kompetensi yang mengintegrasikan nilai-nilai keislaman.",
    "Mengembangkan kurikulum diklat yang adaptif terhadap perkembangan teknologi dan kebutuhan zaman.",
    "Membangun lingkungan belajar yang qur'ani dan inspiratif.",
    "Menjalin jejaring kerja sama dengan lembaga profesional untuk meningkatkan kualitas lulusan.",
  ],
};

// ===== PROFIL LEMBAGA =====
export const PROFILE = {
  title: "Tentang Kami",
  paragraphs: [
    "PKBM & LKP I-SALAM adalah lembaga pendidikan nonformal dan pelatihan keterampilan yang hadir sebagai solusi nyata bagi masyarakat yang membutuhkan akses pendidikan berkualitas. Berdiri sejak 2021, kami berkomitmen menciptakan generasi yang kompeten, mandiri, dan berakhlak mulia.",
    "Melalui pendekatan yang inklusif dan berbasis nilai-nilai Islam, kami menghapus batasan pendidikan dan memberdayakan setiap individu agar memiliki daya saing tinggi di era global, tanpa melupakan jati diri dan akhlak Islami.",
    "Didukung tenaga pendidik berpengalaman dan kurikulum relevan dengan kebutuhan industri, kami telah membantu ratusan warga belajar meraih ijazah setara, sertifikasi kompetensi, dan keterampilan hidup yang nyata.",
  ],
  achievements: [
    { label: "PKBM Berdiri", value: "2021" },
    { label: "LKP Berdiri", value: "2023" },
    { label: "Akreditasi PKBM", value: "B" },
    { label: "Ijin Operasional", value: "Aktif" },
  ],
};

// ===== STATISTIK =====
export const STATS = [
  { value: "205+", label: "Warga Belajar", suffix: "" },
  { value: "5+", label: "Tahun Berdiri", suffix: "" },
  { value: "20+", label: "Tenaga Pengajar", suffix: "" },
  { value: "48+", label: "Alumni Lulus", suffix: "" },
];

// ===== PROFIL TIM =====
export const TEAM_MEMBERS = [
  {
    id: "ketua",
    name: "Nama Ketua Lembaga",
    role: "Ketua / Penanggung Jawab",
    description: "Bertanggung jawab atas seluruh operasional dan pengembangan lembaga PKBM & LKP I-SALAM.",
    photo: "/assets/team/ketua.jpg",
    initials: "KL",
  },
  {
    id: "koordinator-pkbm",
    name: "Nama Koordinator PKBM",
    role: "Koordinator PKBM",
    description: "Mengkoordinir seluruh kegiatan akademik program kesetaraan Paket A, B, dan C.",
    photo: "/assets/team/koordinator-pkbm.jpg",
    initials: "KP",
  },
  {
    id: "koordinator-lkp",
    name: "Nama Koordinator LKP",
    role: "Koordinator LKP",
    description: "Mengelola program vokasi dan memastikan kualitas pelatihan keterampilan.",
    photo: "/assets/team/koordinator-lkp.jpg",
    initials: "KL",
  },
  {
    id: "tutor-pkbm",
    name: "Nama Tutor PKBM",
    role: "Tutor / Pendidik PKBM",
    description: "Tenaga pendidik berpengalaman yang membimbing warga belajar program kesetaraan.",
    photo: "/assets/team/tutor-pkbm.jpg",
    initials: "TP",
  },
  {
    id: "instruktur-lkp",
    name: "Nama Instruktur LKP",
    role: "Instruktur Vokasi LKP",
    description: "Instruktur bersertifikat yang mengajar keterampilan komputer, desain, dan tata boga.",
    photo: "/assets/team/instruktur-lkp.jpg",
    initials: "IL",
  },
  {
    id: "admin",
    name: "Nama Staff Administrasi",
    role: "Staff Administrasi",
    description: "Mengelola administrasi lembaga dan memastikan pelayanan peserta didik berjalan lancar.",
    photo: "/assets/team/admin.jpg",
    initials: "SA",
  },
];

// ===== TESTIMONI =====
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Alumni PKBM I-SALAM",
    program: "Kesetaraan Paket C",
    year: "2023",
    quote:
      "Alhamdulillah, berkat PKBM I-SALAM saya bisa mendapatkan ijazah setara SMA dan sekarang sudah bekerja di perusahaan yang bagus. Guru-gurunya sabar dan materi pelajarannya mudah dipahami.",
    rating: 5,
    initials: "A",
    avatarColor: "#e85d04",
  },
  {
    id: 2,
    name: "Peserta LKP Komputer Office",
    program: "LKP – Komputer Office",
    year: "2024",
    quote:
      "Kursus komputer di I-SALAM benar-benar bermanfaat. Dalam waktu 3 bulan saya sudah bisa mengoperasikan Microsoft Office dengan lancar dan sekarang sudah dipercaya mengelola administrasi kantor.",
    rating: 5,
    initials: "P",
    avatarColor: "#f48c06",
  },
  {
    id: 3,
    name: "Orang Tua Peserta Bimbel",
    program: "Bimbel SD I-SALAM",
    year: "2024",
    quote:
      "Nilai rapor anak saya meningkat drastis setelah ikut bimbel di I-SALAM. Cara mengajar tutornya menyenangkan sehingga anak tidak merasa bosan belajar.",
    rating: 5,
    initials: "O",
    avatarColor: "#2a9d8f",
  },
  {
    id: 4,
    name: "Alumni LKP Desain Grafis",
    program: "LKP – Desain Grafis",
    year: "2024",
    quote:
      "Program desain grafis di LKP I-SALAM sangat praktis. Sekarang saya sudah bisa menerima order desain logo dan poster secara freelance. Penghasilan tambahan yang sangat membantu.",
    rating: 5,
    initials: "A",
    avatarColor: "#7c3aed",
  },
  {
    id: 5,
    name: "Peserta Kursus Tata Boga",
    program: "LKP – Tata Boga",
    year: "2024",
    quote:
      "Belajar memasak di LKP I-SALAM membuka wawasan saya. Instrukturnya profesional dan materinya lengkap mulai dari dasar hingga tingkat lanjut. Kini saya membuka usaha katering kecil.",
    rating: 5,
    initials: "P",
    avatarColor: "#dc2626",
  },
];

// ===== VIDEO MULTIMEDIA =====
export const MULTIMEDIA_VIDEOS = [
  {
    id: "profil",
    title: "Profil Lembaga I-SALAM",
    description: "Kenali lebih dekat PKBM & LKP I-SALAM dan berbagai program unggulan yang kami tawarkan.",
    youtubeId: "YOUTUBE_ID_PROFIL", // Ganti dengan YouTube ID asli
    thumbnail: "/assets/video-thumb-profil.jpg",
    category: "Profil",
  },
  {
    id: "kegiatan",
    title: "Kegiatan Belajar Warga",
    description: "Dokumentasi aktivitas belajar mengajar yang aktif, kondusif, dan menyenangkan di I-SALAM.",
    youtubeId: "YOUTUBE_ID_KEGIATAN", // Ganti dengan YouTube ID asli
    thumbnail: "/assets/video-thumb-kegiatan.jpg",
    category: "Kegiatan",
  },
  {
    id: "testimoni",
    title: "Penelusuran Alumni",
    description: "Dengarkan langsung pesan, kesan, dan jejak langkah para alumni yang telah sukses meniti karir.",
    youtubeId: "YOUTUBE_ID_TESTIMONI", // Ganti dengan YouTube ID asli
    thumbnail: "/assets/video-thumb-testimoni.jpg",
    category: "Alumni",
  },
];

// ===== MATERI PROMOSI =====
export const PROMO_MATERIALS = [
  {
    id: "brosur-pkbm",
    title: "Brosur PKBM I-SALAM",
    description: "Informasi lengkap program kesetaraan Paket A, B, dan C.",
    type: "PDF",
    fileUrl: "/assets/downloads/brosur-pkbm-isalam.pdf",
    previewUrl: "/assets/downloads/brosur-pkbm-preview.jpg",
    category: "Brosur",
    color: "#e85d04",
  },
  {
    id: "brosur-lkp",
    title: "Brosur LKP I-SALAM",
    description: "Daftar lengkap kursus dan pelatihan vokasional yang tersedia.",
    type: "PDF",
    fileUrl: "/assets/downloads/brosur-lkp-isalam.pdf",
    previewUrl: "/assets/downloads/brosur-lkp-preview.jpg",
    category: "Brosur",
    color: "#f48c06",
  },
  {
    id: "brosur-bimbel",
    title: "Brosur Bimbel I-SALAM",
    description: "Informasi layanan bimbingan belajar SD dan SMP.",
    type: "PDF",
    fileUrl: "/assets/downloads/brosur-bimbel-isalam.pdf",
    previewUrl: "/assets/downloads/brosur-bimbel-preview.jpg",
    category: "Brosur",
    color: "#2a9d8f",
  },
  {
    id: "poster-penerimaan",
    title: "Poster Penerimaan Peserta Didik",
    description: "Poster resmi pembukaan pendaftaran tahun ajaran baru.",
    type: "Gambar",
    fileUrl: "/assets/downloads/poster-ppdb.jpg",
    previewUrl: "/assets/downloads/poster-ppdb.jpg",
    category: "Poster",
    color: "#7c3aed",
  },
];

// ===== KEGIATAN PENDUKUNG =====
export const EVENTS = [
  {
    id: "ekskul",
    title: "Kegiatan Ekstrakurikuler",
    description: "Berbagai kegiatan pengembangan diri seperti pramuka, seni, olahraga, dan keagamaan untuk warga belajar.",
    icon: "🎭",
    category: "Rutin",
    color: "#e85d04",
  },
  {
    id: "workshop-komputer",
    title: "Workshop Komputer & Literasi Digital",
    description: "Pelatihan keterampilan digital dasar untuk masyarakat umum dalam rangka meningkatkan literasi teknologi.",
    icon: "💻",
    category: "Workshop",
    color: "#f48c06",
  },
  {
    id: "workshop-memasak",
    title: "Workshop Tata Boga Masyarakat",
    description: "Pelatihan memasak dan kewirausahaan kuliner untuk ibu rumah tangga dan masyarakat umum.",
    icon: "🍳",
    category: "Workshop",
    color: "#dc2626",
  },
  {
    id: "ujian-kesetaraan",
    title: "Ujian Nasional Kesetaraan",
    description: "Pelaksanaan Ujian Nasional Pendidikan Kesetaraan (UNPK) bagi warga belajar Paket A, B, dan C.",
    icon: "📝",
    category: "Akademik",
    color: "#2a9d8f",
  },
  {
    id: "wisuda",
    title: "Wisuda Warga Belajar",
    description: "Acara wisuda dan kelulusan yang menandai pencapaian bersejarah para warga belajar I-SALAM.",
    icon: "🎓",
    category: "Event",
    color: "#7c3aed",
  },
  {
    id: "pelatihan-tutor",
    title: "Pelatihan & Pengembangan Tutor",
    description: "Program peningkatan kompetensi dan sertifikasi para tutor dan instruktur I-SALAM.",
    icon: "📚",
    category: "Pengembangan",
    color: "#0891b2",
  },
];

// ===== GALERI KEGIATAN =====
export const ACTIVITIES = {
  students: [11, 3, 1, 12, 18, 15, 4, 14, 5, 20].map((num, i) => ({
    src: `/assets/activities/kegiatan-${num}.jpg`,
    alt: `Kegiatan Warga Belajar I-SALAM ${num}`,
    caption: `Kegiatan PKBM (${i + 1})`,
    category: "Kegiatan Belajar",
  })),
  staff: [16, 17, 18, 19, 20, 21, 22].map((num) => ({
    src: `/assets/activities/kegiatan-${num}.jpg`,
    alt: `Kegiatan Guru & Staf I-SALAM ${num}`,
    caption: `Kegiatan Lembaga (${num})`,
    category: "Staf & Karyawan",
  })),
  dinas: [1, 2, 3].map((num) => ({
    src: `/assets/activities/dinas-${num}.jpg`,
    alt: `Kegiatan Dinas & Pameran ${num}`,
    caption: `Kegiatan Dinas (${num})`,
    category: "Kegiatan Dinas",
  })),
};

// ===== KONTAK =====
export const CONTACT = {
  address: "Colomadu, Karanganyar, Jawa Tengah",
  addressFull: "Dusun/Desa Colomadu, Kec. Colomadu, Kab. Karanganyar, Jawa Tengah 57175",
  whatsapp: WA_NUMBER,
  email: "pusdiklatisalamsolo@gmail.com",
  operationalHours: "Senin – Sabtu, 08.00 – 16.00 WIB",
  mapsUrl: "https://maps.google.com/?q=Colomadu,Karanganyar",
};
