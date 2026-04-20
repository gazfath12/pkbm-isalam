// ===== CENTRAL SITE DATA =====
// All static content for Pusdiklat ISALAM website
// !! PENTING: Ganti nomor WhatsApp di bawah ini dengan nomor asli (format: 628xxx)

const WA_NUMBER = "6281391002505"; // <-- Ganti dengan nomor WA aktif (shidqi)

export const SITE = {
  name: "Pusdiklat ISALAM",
  shortName: "ISALAM",
  tagline: "Pusat Pendidikan dan Pelatihan",
  description:
    "Pusdiklat ISALAM adalah lembaga pusat pengembangan sumber daya manusia yang berdedikasi untuk menciptakan generasi yang kompeten, mandiri, dan berakhlak mulia.",
  whatsappNumber: WA_NUMBER,
};

export const PROGRAMS = [
  {
    id: "pkbm",
    tag: "PKBM",
    name: "PKBM Inisiator Salam Kariim",
    fullName: "Pusat Kegiatan Belajar Masyarakat",
    subtitle: "Pendidikan Kesetaraan",
    description:
      "Program pendidikan nonformal yang memberikan layanan pendidikan kesetaraan setara SD, SMP, dan SMA bagi masyarakat yang tidak berkesempatan menempuh pendidikan formal. Terakreditasi B, beroperasi di Colomadu, Karanganyar, Jawa Tengah.",
    features: [
      "Kejar Paket A (Setara SD)",
      "Kejar Paket B (Setara SMP)",
      "Kejar Paket C (Setara SMA)",
      "Pembelajaran Fleksibel",
      "Ujian Nasional Kesetaraan",
      "Biaya Terjangkau",
    ],
    visi: "Menjadi pusat pendidikan kesetaraan yang unggul, berakhlak mulia, dan mandiri demi terwujudnya generasi umat yang berkualitas.",
    misi: [
      "Menyelenggarakan pendidikan kesetaraan berbasis kompetensi yang mengintegrasikan nilai-nilai keislaman.",
      "Membangun lingkungan belajar yang qur'ani, inspiratif, dan ramah anak.",
      "Mengembangkan kecakapan hidup (life skills) agar warga belajar siap terjun ke masyarakat."
    ],
    gradient: "linear-gradient(135deg, #b84a00 0%, #7a2e00 100%)",
    color: "#e85d04",
    accent: "#faa307",
  },
  {
    id: "lkp",
    tag: "LKP",
    name: "LKP ISALAM",
    fullName: "Lembaga Kursus dan Pelatihan",
    subtitle: "Keterampilan Vokasional",
    description:
      "Program kursus dan pelatihan keterampilan yang bertujuan meningkatkan kompetensi dan kemampuan kerja, serta memberikan sertifikasi kompetensi yang diakui industri. Berbasis nilai-nilai keislaman dan kecakapan hidup.",
    features: [
      "Kursus Menjahit & Tata Busana",
      "Komputer & Teknologi Informasi",
      "Tata Kecantikan & Salon",
      "Bahasa Asing & Komunikasi",
      "Keterampilan Wirausaha",
      "Sertifikasi Resmi",
    ],
    visi: "Menjadi lembaga kursus dan pelatihan vokasional profesional yang melahirkan SDM kompeten, kreatif, dan berdaya saing global dengan landasan akhlak mulia.",
    misi: [
      "Menyelenggarakan pelatihan keterampilan yang sesuai dengan kebutuhan industri (link and match).",
      "Membekali peserta didik dengan mental wirausaha dan kemandirian.",
      "Menjalin jejaring kerja sama dengan dunia usaha dan dunia industri (DUDI) untuk penempatan kerja."
    ],
    gradient: "linear-gradient(135deg, #f48c06 0%, #e85d04 100%)",
    color: "#f48c06",
    accent: "#ffd60a",
  },
];

export const REGISTRATION_PROGRAMS = [
  "PKBM Inisiator Salam Kariim - Kejar Paket A (Setara SD)",
  "PKBM Inisiator Salam Kariim - Kejar Paket B (Setara SMP)",
  "PKBM Inisiator Salam Kariim - Kejar Paket C (Setara SMA)",
  "LKP ISALAM - Menjahit & Tata Busana",
  "LKP ISALAM - Komputer & Teknologi Informasi",
  "LKP ISALAM - Tata Kecantikan & Salon",
  "LKP ISALAM - Bahasa Asing & Komunikasi",
  "LKP ISALAM - Keterampilan Wirausaha",
];

// General Visi Misi for the entire institution
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

export const PROFILE = {
  title: "Tentang Kami",
  paragraphs: [
    "Pusdiklat ISALAM adalah lembaga pusat pengembangan sumber daya manusia yang berdedikasi untuk menciptakan generasi yang kompeten, mandiri, dan berakhlak mulia. Kami hadir sebagai solusi pendidikan sepanjang hayat (long-life learning) yang memadukan pendidikan akademik non-formal dengan penguasaan keterampilan teknis dunia kerja.",
    "Melalui pendekatan yang inklusif dan berbasis nilai-nilai Islam, kami berkomitmen untuk menghapus batasan pendidikan dan memberdayakan masyarakat agar memiliki daya saing tinggi di era global.",
    "Didukung oleh tenaga pendidik berpengalaman dan kurikulum yang relevan dengan kebutuhan industri, kami telah membantu ratusan warga belajar meraih ijazah setara, sertifikasi kompetensi, dan keterampilan hidup yang nyata.",
  ],
  achievements: [
    { label: "Berdiri Sejak", value: "2013" },
    { label: "Akreditasi", value: "B" },
    { label: "Ijin Operasional", value: "Aktif" },
  ],
};

export const STATS = [
  { value: "500+", label: "Alumni", suffix: "" },
  { value: "10+", label: "Tahun Beroperasi", suffix: "" },
  { value: "98%", label: "Tingkat Kelulusan", suffix: "" },
  { value: "2", label: "Program Unggulan", suffix: "" },
];

// Split activities by category to avoid duplicates and better organization
// PENTING: File 6-10 adalah duplikat dari 1-5, jadi kita lewati.
// Kita susun dengan urutan yang benar-benar berbeda agar tidak terlihat sama.
export const ACTIVITIES = {
  students: [11, 3, 1, 12, 18, 15, 4, 14, 5, 20].map((num, i) => ({
    src: `/assets/activities/kegiatan-${num}.jpg`,
    alt: `Kegiatan Warga Belajar Pusdiklat ISALAM ${num}`,
    caption: `Kegiatan PKBM (${i + 1})`,
  })),
  staff: [16, 17, 18, 19, 20, 21, 22].map((num) => ({
    src: `/assets/activities/kegiatan-${num}.jpg`,
    alt: `Kegiatan Guru & Staf Pusdiklat ISALAM ${num}`,
    caption: `Rapat & Kegiatan Lembaga (${num})`,
  })),
};

export const CONTACT = {
  address: "Colomadu, Karanganyar, Jawa Tengah",
  whatsapp: WA_NUMBER,
  email: "pusdiklat.isalam@gmail.com",
  operationalHours: "Senin – Sabtu, 08.00 – 16.00 WIB",
};
