




import { Dictionary } from './types';

// Using existing translations for ID and EN, and adding IT and JA
const ID_TRANS = {
    nav: {
      people: 'DUNIA GUCCI',
      partners: 'KOLEKSI',
      academy: 'AKUN BISNIS',
      opportunities: 'SISTEM',
      collab: 'GUCCI x LUNERA',
      login: 'MASUK',
      backToHome: 'KEMBALI KE BERANDA',
    },
    loginBar: {
      text: 'Sudah menjadi anggota Gucci Affiliate?',
      link: 'Gabung Sekarang'
    },
    hero: {
      subtitle: 'PROGRAM KEMITRAAN EKSKLUSIF',
      title: 'GUCCI MITRA BISNIS AFFILIATE',
      description: 'Bergabunglah dengan visi artistik kami. Sebuah undangan untuk para peserta dan bisnis visioner untuk mendefinisikan kembali kemewahan kontemporer.',
      websiteLink: 'DAFTAR MENJADI MITRA'
    },
    stats: {
      followersLabel: 'KOMUNITAS KAMI',
      followersValue: '654K+',
      followersDesc: 'Mitra & Pengikut Aktif',

      ratingLabel: 'KEPUASAN MITRA',
      ratingValue: '4.8 Bintang',
      ratingDesc: 'Berdasarkan Ulasan Eksklusif',

      legalityLabel: 'LEGALITAS RESMI',
      legalityValue: 'Terverifikasi',
      legalityDesc: 'Dioperasikan oleh PT. Graha Citra Prima - GUCCI. Entitas bisnis terdaftar yang mematuhi regulasi perdagangan internasional dan hukum yang berlaku.',
      viewLegality: 'LIHAT DETAIL LEGALITAS',
    },
    christmas: {
      subtitle: 'THE GUCCI GIFT GIVING',
      title: 'GUCCI Winter Tale 2026',
      description: 'Rayakan magisnya Natal di bawah kilauan pohon cemara dan sambut kemewahan Tahun Baru 2026. Koleksi kurasi yang memancarkan estetika Florence, menghadirkan kehangatan dan gaya abadi dalam setiap momen spesial Anda.',
      cta: 'JELAJAHI KEINDAHAN NATAL'
    },
    testimonials: {
      title: 'SUARA DARI KOMUNITAS',
      items: [
        {
          name: 'Raffi Ahmad',
          role: 'MEDIA ENTREPRENEUR',
          quote: 'Kolaborasi dengan Gucci membawa RANS Entertainment ke level kemewahan baru. Sinergi bisnis yang luar biasa.',
          image: 'https://i.pinimg.com/736x/62/3a/60/623a60ebb2b74f90addfc8449324cf9f.jpg'
        },
        {
          name: 'Mahalini',
          role: 'SOULFUL DIVA',
          quote: 'Setiap detail koleksi Gucci menyempurnakan penampilan panggung saya. Cinta yang mendalam untuk seni fashion ini.',
          image: 'https://i.pinimg.com/736x/f4/d4/d5/f4d4d56d63a4e98e7e30592bfed61e84.jpg'
        },
        {
          name: 'Reza Arap',
          role: 'GAMING ICON',
          quote: 'Style gak ada batasnya. Gucci ngasih gue kebebasan buat ekspresi diri yang gila abis. This is the real game.',
          image: 'https://i.pinimg.com/1200x/d0/c5/ad/d0c5ad88af24e460c502560a65605f56.jpg'
        },
        {
          name: 'Fadil Jaidi',
          role: 'FAMILY ENTERTAINER',
          quote: 'Pak Muh setuju banget kalau Gucci emang paling keren! Endorse paling seru dan berkelas sepanjang masa.',
          image: 'https://i.pinimg.com/736x/a9/e6/fd/a9e6fd622e2ae7c5eb4264d09583858e.jpg'
        },
        {
          name: 'Elena R.',
          role: 'KURATOR VINTAGE',
          quote: 'Pilihan unik dari koleksi warisan memungkinkan saya terhubung dengan audiens yang sangat terlibat. Hasilnya fenomenal.',
          image: 'https://i.pinimg.com/1200x/1c/f3/d9/1cf3d9054ed828fc8557c2d27f91c21c.jpg'
        },
        {
          name: 'Sarah & Jen',
          role: 'DUO FASHION',
          quote: 'Bekerja dengan Gucci sebagai tim telah menggandakan jangkauan kami. Kampanyenya selalu menjadi pembuka percakapan.',
          image: 'https://i.pinimg.com/736x/55/c6/ad/55c6ad10b1534f926be43abb1152e95a.jpg'
        },
        {
          name: 'Davide L.',
          role: 'PENATA GAYA MEWAH',
          quote: 'Keaslian adalah kuncinya. Pengikut saya mempercayai rekomendasi saya karena kualitasnya berbicara sendiri.',
          image: 'https://i.pinimg.com/736x/16/bf/d7/16bfd7e405c2d29836710e21fbc82fe3.jpg'
        },
        {
          name: 'Wei Chen',
          role: 'IKON MINIMALIS',
          quote: 'Lebih dari sekadar komisi, ini tentang menyelaraskan dengan merek yang mendefinisikan estetika modern.',
          image: 'https://i.pinimg.com/736x/1f/48/d5/1f48d540589158e3592b894bffdd50cd.jpg'
        },
        {
          name: 'Amara K.',
          role: 'EDITOR GAYA HIDUP',
          quote: 'Dukungan dari tim Gucci tak tertandingi. Integrasi produk ke dalam konten editorial saya terasa sangat alami.',
          image: 'https://i.pinimg.com/736x/50/9d/a4/509da454c64e0e00ae0bda4644af163d.jpg'
        },
        {
          name: 'Marco D.',
          role: 'DIREKTUR VISUAL',
          quote: 'Setiap kampanye membuka peluang baru untuk ekspresi artistik yang radikal. Ini adalah kemitraan yang memberdayakan.',
          image: 'https://i.pinimg.com/1200x/f7/40/0b/f7400bff077eb8bad53837b576dd6f28.jpg'
        },
        {
          name: 'Budi Santoso',
          role: 'MODEL INFLUENCER',
          quote: 'Menjadi bagian dari keluarga ini adalah pencapaian terbesar dalam karir saya. Gucci bukan sekadar merek, tapi gaya hidup.',
          image: 'https://i.pinimg.com/736x/ca/4e/7a/ca4e7ad4c2e7638a05a3ad77a9146834.jpg'
        },
        {
          name: 'Adi Nugraha',
          role: 'KREATOR DIGITAL',
          quote: 'Sinergi antara visi kreatif saya dan warisan Gucci menciptakan dampak visual yang luar biasa di media sosial.',
          image: 'https://i.pinimg.com/736x/47/3e/bb/473ebb208cc3e92c13f63499d8888ab5.jpg'
        },
        {
          name: 'Sofia M.',
          role: 'TRAVEL BLOGGER',
          quote: 'Membawa kemewahan ke setiap sudut dunia bersama komunitas yang suportif. Pengalaman yang tak ternilai.',
          image: 'https://i.pinimg.com/736x/c4/53/7d/c4537d3c2e979096ce2b09bdc18c9ca3.jpg'
        }
      ]
    },
    businessAccountPage: {
      form: {
        title: 'Guccio Gucci S.p.A',
        phonePlaceholder: 'Silakan masukkan nomor telepon',
        passwordPlaceholder: 'Silahkan masukan password',
        inviteCodePlaceholder: 'Kode Undangan',
        submitButton: 'Daftar sekarang',
        loginLink: 'Sudah Memiliki Akun??'
      },
      info: {
        title: 'MENGAPA ANDA MEMBUTUHKAN AKUN BISNIS?',
        subtitle: 'TRANSFORMASI DARI PESERTA MENJADI MITRA STRATEGIS',
        description: 'Akun Bisnis Gucci Affiliate bukan sekadar akses masuk, tetapi pusat komando untuk karir Anda dalam ekosistem Gucci. Ini adalah alat profesional yang dirancang untuk memisahkan hobi dari bisnis yang serius.',
        activationTitle: 'INISIASI KEMITRAAN',
        activationDesc: 'Untuk menjadi mitra resmi, cukup daftarkan Akun Bisnis. Mulai agenda bisnis pertama Anda dengan biaya aktivasi hanya Rp 100.000. Setelah bergabung, Anda langsung berhak atas keuntungan dan profit eksklusif dari program ini.',
        features: [
          {
            title: 'DASHBOARD PENDAPATAN REAL-TIME',
            desc: 'Pantau komisi, bonus kinerja, dan pembayaran secara transparan. Analisis kinerja kampanye Anda dalam satu tampilan terintegrasi.'
          },
          {
            title: 'AKSES ASET EKSKLUSIF',
            desc: 'Dapatkan akses prioritas ke aset kampanye terbaru, panduan merek, dan materi promosi resolusi tinggi sebelum rilis publik.'
          },
          {
            title: 'LEGALITAS & KONTRAK DIGITAL',
            desc: 'Kelola perjanjian kerja sama, tanda tangani kontrak digital, dan dokumen pajak dengan aman dan terverifikasi sesuai standar hukum yang berlaku.'
          }
        ]
      }
    },
    collectionsPage: {
      title: 'KOLEKSI EKSKLUSIF',
      subtitle: 'TEMUKAN KEINDAHAN',
      items: [
        {
          image: 'https://images.ctfassets.net/brzb6u29244a/1r0xTJ5E4aYyYYlHkXFk01/3ea85491d43aa09216ad889fea64c1f1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-25-1268_001_Default.png?w=2000&fm=avif&q=50',
          title: 'Gucci Gift Giving',
          description: 'Ekspresi kebebasan melalui siluet klasik yang didefinisikan ulang untuk era modern.',
          cta: 'LIHAT KOLEKSI'
        },
        {
          image: 'https://images.ctfassets.net/brzb6u29244a/aulskRb1cIcYarJ0Gaxpp/973dfaa3557a8e510b5fbd7c8d6c30b1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-20-0725-B_001_Default.png?w=2000&fm=avif&q=50',
          title: 'Valigeria Heritage',
          description: 'Warisan perjalanan yang dihidupkan kembali dengan sentuhan kontemporer.',
          cta: 'LIHAT KOLEKSI'
        },
        {
          image: 'https://images.ctfassets.net/brzb6u29244a/75LNsWDWjusBT37Qp0AfHx/96668fead6fa8a23ce8f277a6edef77a/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-1-09-1000-B_001_Default.png?w=2000&fm=avif&q=50',
          title: 'Gucci Essentials',
          description: 'Ikon abadi yang terus berkembang, merayakan keanggunan detail.',
          cta: 'LIHAT KOLEKSI'
        }
      ]
    },
    affiliateProgramPage: {
      title: 'SISTEM YANG DIGUNAKAN',
      subtitle: 'PELUANG KEMITRAAN',
      intro: 'Bergabunglah dengan ekosistem bisnis eksklusif yang dirancang untuk memaksimalkan potensi Anda melalui kolaborasi strategis dengan merek mewah kelas dunia.',
      points: [
        {
          title: 'STRUKTUR KOMISI PROGRESIF',
          desc: 'Dapatkan penghasilan yang terus bertambah seiring dengan kinerja penjualan dan pengembangan jaringan Anda.'
        },
        {
          title: 'DUKUNGAN PEMASARAN GLOBAL',
          desc: 'Akses penuh ke materi promosi kelas dunia, strategi digital, dan panduan branding langsung dari pusat.'
        },
        {
          title: 'JARINGAN EKSKLUSIF',
          desc: 'Terhubung dengan para profesional dan influencer terkemuka dalam komunitas Gucci Affiliate.'
        },
        {
          title: 'PELATIHAN & PENGEMBANGAN',
          desc: 'Program edukasi berkelanjutan tentang tren fashion, strategi bisnis, dan personal branding.'
        }
      ],
      conclusion: 'Jadilah bagian dari revolusi ritel mewah. Kesuksesan Anda adalah prioritas kami.'
    },
    contemporaryStylePage: {
      title: 'GAYA KONTEMPORER',
      subtitle: 'INOVASI & ESTETIKA',
      intro: 'Gucci terus memimpin arah fashion global dengan memadukan warisan pengrajin Italia dengan visi futuristik yang berani.',
      sections: [
        {
          title: 'EKLEKTIK & MODERN',
          content: 'Perpaduan motif tak terduga dengan potongan klasik menciptakan bahasa visual baru yang unik dan personal.'
        },
        {
          title: 'FLUIDITAS GENDER',
          content: 'Mendobrak batasan tradisional dengan koleksi yang merayakan kebebasan berekspresi tanpa sekat.'
        },
        {
          title: 'KEMEWAHAN BERKELANJUTAN',
          content: 'Komitmen terhadap material ramah lingkungan dan proses produksi etis tanpa mengorbankan kualitas.'
        },
        {
          title: 'KERAJINAN DIGITAL',
          content: 'Memanfaatkan teknologi untuk menciptakan pengalaman fashion yang imersif dan interaktif.'
        }
      ],
      conclusion: 'Gaya bukan hanya tentang apa yang Anda kenakan, tetapi bagaimana Anda menceritakan kisah Anda kepada dunia.'
    },
    expertAdvisorPage: {
      title: 'PENASIHAT AHLI',
      subtitle: 'PANDUAN PROFESIONAL',
      intro: 'Peran Expert Advisor adalah jembatan vital antara merek dan komunitas, memastikan setiap langkah bisnis Anda terarah dan efektif.',
      duties: [
        {
          title: 'ANALISIS PASAR',
          desc: 'Memantau tren global dan lokal untuk memberikan rekomendasi produk yang tepat sasaran.'
        },
        {
          title: 'STRATEGI PENJUALAN',
          desc: 'Merancang pendekatan personal untuk memaksimalkan konversi dan kepuasan pelanggan.'
        },
        {
          title: 'MENTORING PERSONAL',
          desc: 'Memberikan bimbingan one-on-one untuk membantu Anda mengatasi tantangan dan mencapai target.'
        },
        {
          title: 'MANAJEMEN HUBUNGAN',
          desc: 'Membangun hubungan jangka panjang yang kuat dengan klien dan mitra bisnis.'
        }
      ],
      conclusion: 'Didampingi oleh para ahli, perjalanan bisnis Anda akan lebih terukur, efisien, dan menguntungkan.'
    },
    legalityDoc: {
      header1: 'PEMERINTAH REPUBLIK INDONESIA',
      header2: 'PERIZINAN BERUSAHA BERBASIS RISIKO',
      nibLabel: 'NOMOR INDUK BERUSAHA (NIB)',
      nibNumber: '1 2 1 7 5 9 2 0 1 9 2 8 4',
      intro: 'Berdasarkan Undang-Undang Nomor 11 Tahun 2020 tentang Cipta Kerja, Pemerintah Republik Indonesia menerbitkan Nomor Induk Berusaha (NIB) kepada:',
      labels: {
        name: '1. Nama Pelaku Usaha',
        address: '2. Alamat Kantor',
        npwp: '3. NPWP',
        capital: '4. Status Penanaman Modal',
        kbli: '5. Kode Klasifikasi (KBLI)',
        status: '6. Status Perizinan',
      },
      values: {
        name: 'PT. GRAHA CITRA PRIMA - GUCCI',
        address: 'Menara Mandiri II, Jl. Jend. Sudirman Kav. 54-55, Senayan, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190',
        npwp: '88.291.332.1-998.000',
        capital: 'PMDN (Penanaman Modal Dalam Negeri)',
        kbli: '47919 - Perdagangan Eceran Melalui Media',
        status: 'TERVERIFIKASI & AKTIF',
      },
      footerNote: 'NIB ini berlaku di seluruh wilayah Republik Indonesia untuk melakukan kegiatan usaha dan berlaku sebagai hak akses kepabeanan, pendaftaran kepesertaan jaminan sosial kesehatan dan ketenagakerjaan, serta bukti pemenuhan laporan pertama Wajib Lapor Ketenagakerjaan di Perusahaan (WLKP).',
      datePlace: 'Diterbitkan di Jakarta, tanggal: 02 Januari 2022',
      signerTitle: 'Menteri Investasi /\nKepala Badan Koordinasi Penanaman Modal',
      signerName: 'Bahlil Lahadalia',
    },
    worldOfGucci: {
      title: "Penjelasan Lengkap Tentang Dunia GUCCI",
      intro: "Dunia GUCCI bukan sekadar industri fashion mewah—ini adalah ekosistem budaya, estetika, inovasi, dan gaya hidup yang telah berkembang selama lebih dari satu abad. Di balik setiap produk, kampanye, dan kolaborasi, terdapat nilai, cerita, dan filosofi yang membentuk identitas GUCCI sebagai salah satu ikon fashion mewah paling berpengaruh di dunia.",
      sections: [
        {
          title: "1. Sejarah yang Mengakar Kuat",
          content: "GUCCI didirikan oleh Guccio Gucci pada tahun 1921 di Florence, Italia. Awalnya, merek ini berfokus pada barang kulit premium, khususnya tas, koper, dan perlengkapan berkuda. Inspirasi Guccio lahir dari pengamatannya terhadap para pelancong aristokrat di hotel tempat ia bekerja. Ia melihat bagaimana kualitas, keanggunan, dan kerajinan tangan bisa mengekspresikan status seseorang. Dari sanalah, GUCCI memulai perjalanan panjangnya. Selama bertahun-tahun, dunia GUCCI berkembang menjadi simbol kemewahan klasik yang memadukan tradisi pengrajin Italia dengan gaya modern yang berani."
        },
        {
          title: "2. Identitas Estetika yang Kuat dan Ikonik",
          content: "GUCCI dikenal dengan ciri khas visual yang langsung dikenali: Motif GG Monogram, detail Web Stripe (merah-hijau), perpaduan desain vintage dan kontemporer, pilihan warna dan tekstur yang berani namun elegan, serta penggunaan simbolisme flora, fauna, dan seni. Estetika ini membedakan GUCCI dari merek lain, menjadikannya dunia yang penuh karakter, berseni, dan tidak pernah takut bereksperimen."
        },
        {
          title: "3. Filosofi Desain: Berani, Artistik, dan Tidak Konvensional",
          content: "Dunia GUCCI dibangun di atas prinsip kreatif yang selalu terbuka terhadap inovasi. Di banyak era, GUCCI menunjukkan keberanian untuk menabrak batasan tradisional—menghadirkan desain yang unik, teatrikal, dan penuh cerita. Setiap koleksi bukan sekadar 'pakaian', melainkan karya seni yang memiliki pesan visual kuat, seringkali menyatukan konsep budaya, sejarah, dan modernitas."
        },
        {
          title: "4. Pengaruh Budaya Global",
          content: "GUCCI telah menjadi fenomena global bukan hanya karena produknya tetapi juga karena kekuatan narasi dan pengaruh budayanya. Merek ini menginspirasi budaya pop, berkolaborasi dengan seniman terkemuka, aktor, musisi, dan kreator, serta menghadirkan kampanye yang mengangkat keberagaman, kebebasan berekspresi, dan kreativitas. Dunia GUCCI selalu berevolusi mengikuti zaman namun tetap mempertahankan otentisitas merek."
        },
        {
          title: "5. Inovasi Digital dan Modernisasi Merek",
          content: "Di era digital, GUCCI termasuk merek yang paling agresif dalam inovasi melalui pengalaman fashion show virtual, teknologi AR (Augmented Reality) untuk mencoba produk, integrasi storytelling visual yang kuat di platform digital, serta program kemitraan dan komunitas global. Semua ini membuat dunia GUCCI relevan dengan generasi baru yang hidup di ekosistem digital."
        },
        {
          title: "6. Komitmen terhadap Keberlanjutan",
          content: "Dunia GUCCI juga terikat oleh komitmen untuk menciptakan perubahan positif melalui material ramah lingkungan, proses produksi berkelanjutan, kampanye 'Gucci Equilibrium', serta dukungan terhadap komunitas global dan program sosial. GUCCI ingin membuktikan bahwa kemewahan tidak harus bertentangan dengan tanggung jawab lingkungan dan sosial."
        },
        {
          title: "7. Dunia GUCCI sebagai Gaya Hidup",
          content: "Lebih dari sekadar fashion, GUCCI telah berkembang menjadi semesta gaya hidup yang mencakup Fashion & Leather Goods, Beauty & Fragrances, Jewelry & Watch Collections, Home Décor, Digital Experiences, hingga Program Kemitraan dan Komunitas. Bagi banyak orang, memiliki produk GUCCI adalah bentuk ekspresi diri—mencerminkan kepercayaan diri, kreativitas, dan apresiasi terhadap seni."
        },
        {
          title: "8. GUCCI dan Masa Depan",
          content: "Dunia GUCCI terus bertransformasi menuju masa depan yang lebih modern, inklusif, dan futuristik. GUCCI bertujuan menjembatani tradisi pengrajin Italia, inovasi digital, budaya populer, dan aspirasi global generasi baru. Dengan pendekatan visioner, GUCCI tidak hanya membangun produk tetapi membangun budaya, komunitas, dan ekosistem yang hidup dan berkembang."
        }
      ],
      conclusion: "Dunia GUCCI adalah perpaduan antara warisan sejarah yang kaya, kreativitas tanpa batas, nilai estetika yang kuat, inovasi teknologi, serta komitmen terhadap kualitas dan keberlanjutan. Itulah yang membuat GUCCI bukan sekadar merek fashion, tetapi simbol global seni, kemewahan, identitas, dan gaya hidup modern."
    },
    luneraCollab: {
      heroTitle: "GUCCI x LUNERA",
      heroSubtitle: "KOLABORASI EKSKLUSIF",
      heroCta: "JELAJAHI",
      mainHeadline: "KOLEKSI HIJAB SIGNATURE",
      mainDesc: "Menampilkan desain unik dengan sentuhan artistik, tersedia dalam berbagai pilihan warna terbaik & dilengkapi dengan kemasan premium yang elegan.",
      narrative: {
        subtitle: "KETIKA WARISAN ITALIA BERTEMU KEANGGUNAN MODERN",
        title: "HARMONI DUA DUNIA",
        p1: "Kolaborasi ini menandai tonggak baru dalam dunia fashion, di mana kemewahan maksimalis Gucci dan keberanian artistik berpadu harmonis dengan estetika LUNERA yang anggun dan berkelas. Ini adalah pertemuan antara tradisi pengrajin Italia yang legendaris dan nilai-nilai modest fashion kontemporer.",
        p2: "Setiap helai dalam koleksi ini menceritakan kisah penyatuan budaya. Motif ikonik diinterpretasikan ulang dengan palet warna yang memukau dan material premium yang lembut namun mewah. Menciptakan aksesori yang tidak hanya indah dipandang, tetapi juga memancarkan karisma pemakainya.",
        p3: "Lebih dari sekadar produk, GUCCI x LUNERA adalah pernyataan bahwa modest fashion memiliki tempat prestisius di panggung kemewahan global. Ini adalah perayaan bagi wanita modern yang ingin tampil berkelas tanpa meninggalkan jati diri mereka."
      },
      boxFeature: {
        title: "KEMASAN EKSKLUSIF",
        desc: "Dilengkapi dengan kotak signature LUNERA yang simpel dan elegan, merepresentasikan standar kualitas yang tak lekang oleh waktu."
      },
      swarovski: {
        title: "DETAIL IKONIK",
        desc: "Setiap karya dihiasi dengan detail presisi, memberikan kilau halus yang memancarkan kelas dan eksklusivitas tanpa berlebihan."
      },
      details: {
        material: "Premium Voile",
        size: "115 x 115 cm",
        packaging: "Signature Hard Box"
      },
      shopNow: "BELANJA SEKARANG"
    },
    umamaCollab: {
      heroTitle: "GUCCI x UMAMA",
      heroSubtitle: "KOLABORASI EKSKLUSIF",
      heroCta: "JELAJAHI",
      mainHeadline: "KOLEKSI HIJAB SIGNATURE",
      mainDesc: "Menampilkan desain unik dengan sentuhan artistik, tersedia dalam berbagai pilihan warna terbaik & dilengkapi dengan kemasan premium yang elegan.",
      narrative: {
        subtitle: "KETIKA WARISAN ITALIA BERTEMU KEANGGUNAN MODERN",
        title: "HARMONI DUA DUNIA",
        p1: "Kolaborasi ini menandai tonggak baru dalam dunia fashion, di mana kemewahan maksimalis Gucci dan keberanian artistik berpadu harmonis dengan estetika UMAMA yang anggun dan berkelas. Ini adalah pertemuan antara tradisi pengrajin Italia yang legendaris dan nilai-nilai modest fashion kontemporer.",
        p2: "Setiap helai dalam koleksi ini menceritakan kisah penyatuan budaya. Motif ikonik diinterpretasikan ulang dengan palet warna yang memukau dan material premium yang lembut namun mewah. Menciptakan aksesori yang tidak hanya indah dipandang, tetapi juga memancarkan karisma pemakainya.",
        p3: "Lebih dari sekadar produk, GUCCI x UMAMA adalah pernyataan bahwa modest fashion memiliki tempat prestisius di panggung kemewahan global. Ini adalah perayaan bagi wanita modern yang ingin tampil berkelas tanpa meninggalkan jati diri mereka."
      },
      boxFeature: {
        title: "KEMASAN EKSKLUSIF",
        desc: "Dilengkapi dengan kotak signature UMAMA yang simpel dan elegan, merepresentasikan standar kualitas yang tak lekang oleh waktu."
      },
      swarovski: {
        title: "DETAIL IKONIK",
        desc: "Setiap karya dihiasi dengan detail presisi, memberikan kilau halus yang memancarkan kelas dan eksklusivitas tanpa berlebihan."
      },
      details: {
        material: "Premium Voile",
        size: "115 x 115 cm",
        packaging: "Signature Hard Box"
      },
      shopNow: "BELANJA SEKARANG"
    },
    grid: {
      craftsmanship: 'PENASIHAT AHLI',
      innovation: 'GUCCI x LUNERA',
      sustainability: 'KOLEKSI EKSKLUSIF',
      readMore: 'JELAJAHI',
    },
    footer: {
      followUs: 'IKUTI PERJALANAN KAMI',
      copyright: '© 2016 - 2026 Guccio Gucci S.p.A. - All rights reserved.',
      links: [],
      legal: []
    }
}

const EN_TRANS = {
    nav: {
      people: 'WORLD OF GUCCI',
      partners: 'COLLECTIONS',
      academy: 'BUSINESS ACCOUNT',
      opportunities: 'SYSTEM',
      collab: 'GUCCI x LUNERA',
      login: 'LOGIN',
      backToHome: 'BACK TO HOME',
    },
    loginBar: {
      text: 'Already a Gucci Affiliate member?',
      link: 'Join Now'
    },
    hero: {
      subtitle: 'EXCLUSIVE PARTNERSHIP PROGRAM',
      title: 'GUCCI AFFILIATE BUSINESS PARTNER',
      description: 'Join our artistic vision. An invitation for visionaries and businesses to redefine contemporary luxury.',
      websiteLink: 'REGISTER AS PARTNER'
    },
    stats: {
      followersLabel: 'OUR COMMUNITY',
      followersValue: '654K+',
      followersDesc: 'Active Partners & Followers',

      ratingLabel: 'PARTNER SATISFACTION',
      ratingValue: '4.8 Stars',
      ratingDesc: 'Based on Exclusive Reviews',

      legalityLabel: 'OFFICIAL LEGALITY',
      legalityValue: 'Verified',
      legalityDesc: 'Operated by PT. Graha Citra Prima - GUCCI. A registered business entity complying with international trade regulations and applicable laws.',
      viewLegality: 'VIEW LEGALITY DETAILS',
    },
    christmas: {
      subtitle: 'THE GUCCI GIFT GIVING',
      title: 'GUCCI Winter Tale 2026',
      description: 'Celebrate the magic of Christmas under the sparkle of pine trees and welcome the luxury of New Year 2026. A curated collection radiating Florentine aesthetics, bringing warmth and timeless style to your every special moment.',
      cta: 'EXPLORE CHRISTMAS BEAUTY'
    },
    testimonials: {
      title: 'VOICE OF THE COMMUNITY',
      items: ID_TRANS.testimonials.items 
    },
    businessAccountPage: {
      form: {
        title: 'Guccio Gucci S.p.A',
        phonePlaceholder: 'Please enter phone number',
        passwordPlaceholder: 'Please enter password',
        inviteCodePlaceholder: 'Invitation Code',
        submitButton: 'Register now',
        loginLink: 'Already Have an Account??'
      },
      info: {
        title: 'WHY DO YOU NEED A BUSINESS ACCOUNT?',
        subtitle: 'TRANSFORMATION FROM PARTICIPANT TO STRATEGIC PARTNER',
        description: 'The Gucci Affiliate Business Account is not just a login access, but the command center for your career in the Gucci ecosystem. It is a professional tool designed to separate hobbies from serious business.',
        activationTitle: 'PARTNERSHIP INITIATION',
        activationDesc: 'To become an official partner, simply register a Business Account. Start your first business agenda with an activation fee of only IDR 100.000. Once joined, you are immediately entitled to exclusive benefits and profits from this program.',
        features: [
          {
            title: 'REAL-TIME EARNINGS DASHBOARD',
            desc: 'Monitor commissions, performance bonuses, and payments transparently. Analyze your campaign performance in one integrated view.'
          },
          {
            title: 'EXCLUSIVE ASSET ACCESS',
            desc: 'Get priority access to the latest campaign assets, brand guidelines, and high-resolution promotional materials before public release.'
          },
          {
            title: 'LEGALITY & DIGITAL CONTRACTS',
            desc: 'Manage cooperation agreements, sign digital contracts, and tax documents securely and verified according to applicable legal standards.'
          }
        ]
      }
    },
    collectionsPage: {
      title: 'EXCLUSIVE COLLECTIONS',
      subtitle: 'DISCOVER BEAUTY',
      items: [
        {
          image: 'https://images.ctfassets.net/brzb6u29244a/1r0xTJ5E4aYyYYlHkXFk01/3ea85491d43aa09216ad889fea64c1f1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-25-1268_001_Default.png?w=2000&fm=avif&q=50',
          title: 'Gucci Gift Giving',
          description: 'An expression of freedom through classic silhouettes redefined for the modern era.',
          cta: 'VIEW COLLECTION'
        },
        {
          image: 'https://images.ctfassets.net/brzb6u29244a/aulskRb1cIcYarJ0Gaxpp/973dfaa3557a8e510b5fbd7c8d6c30b1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-20-0725-B_001_Default.png?w=2000&fm=avif&q=50',
          title: 'Valigeria Heritage',
          description: 'A heritage of travel revived with a contemporary touch.',
          cta: 'VIEW COLLECTION'
        },
        {
          image: 'https://images.ctfassets.net/brzb6u29244a/75LNsWDWjusBT37Qp0AfHx/96668fead6fa8a23ce8f277a6edef77a/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-1-09-1000-B_001_Default.png?w=2000&fm=avif&q=50',
          title: 'Gucci Essentials',
          description: 'A timeless icon that continues to evolve, celebrating the elegance of detail.',
          cta: 'VIEW COLLECTION'
        }
      ]
    },
    affiliateProgramPage: {
      title: 'SYSTEM USED',
      subtitle: 'PARTNERSHIP OPPORTUNITIES',
      intro: 'Join an exclusive business ecosystem designed to maximize your potential through strategic collaboration with a world-class luxury brand.',
      points: [
        {
          title: 'PROGRESSIVE COMMISSION STRUCTURE',
          desc: 'Earn income that continues to grow along with your sales performance and network development.'
        },
        {
          title: 'GLOBAL MARKETING SUPPORT',
          desc: 'Full access to world-class promotional materials, digital strategies, and branding guidelines directly from headquarters.'
        },
        {
          title: 'EXCLUSIVE NETWORK',
          desc: 'Connect with leading professionals and influencers within the Gucci Affiliate community.'
        },
        {
          title: 'TRAINING & DEVELOPMENT',
          desc: 'Continuous education programs on fashion trends, business strategies, and personal branding.'
        }
      ],
      conclusion: 'Be part of the luxury retail revolution. Your success is our priority.'
    },
    contemporaryStylePage: {
      title: 'CONTEMPORARY STYLE',
      subtitle: 'INNOVATION & AESTHETICS',
      intro: 'Gucci continues to lead global fashion direction by blending Italian artisan heritage with bold futuristic vision.',
      sections: [
        {
          title: 'ECLECTIC & MODERN',
          content: 'The fusion of unexpected motifs with classic cuts creates a new visual language that is unique and personal.'
        },
        {
          title: 'GENDER FLUIDITY',
          content: 'Breaking traditional boundaries with collections that celebrate freedom of expression without barriers.'
        },
        {
          title: 'SUSTAINABLE LUXURY',
          content: 'Commitment to eco-friendly materials and ethical production processes without compromising quality.'
        },
        {
          title: 'DIGITAL CRAFTSMANSHIP',
          content: 'Utilizing technology to create immersive and interactive fashion experiences.'
        }
      ],
      conclusion: 'Style is not just about what you wear, but how you tell your story to the world.'
    },
    expertAdvisorPage: {
      title: 'EXPERT ADVISOR',
      subtitle: 'PROFESSIONAL GUIDANCE',
      intro: 'The role of the Expert Advisor is a vital bridge between the brand and the community, ensuring every step of your business is directed and effective.',
      duties: [
        {
          title: 'MARKET ANALYSIS',
          desc: 'Monitoring global and local trends to provide targeted product recommendations.'
        },
        {
          title: 'SALES STRATEGY',
          desc: 'Designing personal approaches to maximize conversion and customer satisfaction.'
        },
        {
          title: 'PERSONAL MENTORING',
          desc: 'Providing one-on-one guidance to help you overcome challenges and achieve targets.'
        },
        {
          title: 'RELATIONSHIP MANAGEMENT',
          desc: 'Building strong long-term relationships with clients and business partners.'
        }
      ],
      conclusion: 'Accompanied by experts, your business journey will be more measurable, efficient, and profitable.'
    },
    legalityDoc: {
      header1: 'GOVERNMENT OF THE REPUBLIC OF INDONESIA',
      header2: 'RISK-BASED BUSINESS LICENSING',
      nibLabel: 'BUSINESS IDENTIFICATION NUMBER (NIB)',
      nibNumber: '1 2 1 7 5 9 2 0 1 9 2 8 4',
      intro: 'Based on Law Number 11 of 2020 concerning Job Creation, the Government of the Republic of Indonesia issues a Business Identification Number (NIB) to:',
      labels: {
        name: '1. Business Name',
        address: '2. Office Address',
        npwp: '3. Tax ID (NPWP)',
        capital: '4. Investment Status',
        kbli: '5. Classification Code (KBLI)',
        status: '6. Licensing Status',
      },
      values: {
        name: 'PT. GRAHA CITRA PRIMA - GUCCI',
        address: 'Menara Mandiri II, Jl. Jend. Sudirman Kav. 54-55, Senayan, Kebayoran Baru, South Jakarta, DKI Jakarta 12190',
        npwp: '88.291.332.1-998.000',
        capital: 'PMDN (Domestic Investment)',
        kbli: '47919 - Retail Trade via Media',
        status: 'VERIFIED & ACTIVE',
      },
      footerNote: 'This NIB is valid throughout the territory of the Republic of Indonesia for conducting business activities and serves as customs access rights, registration for health and employment social security, and proof of compliance with the first Mandatory Manpower Report in the Company (WLKP).',
      datePlace: 'Issued in Jakarta, date: January 02, 2022',
      signerTitle: 'Minister of Investment /\nHead of Investment Coordinating Board',
      signerName: 'Bahlil Lahadalia',
    },
    worldOfGucci: {
      title: "Comprehensive Explanation of The World of GUCCI",
      intro: "The World of GUCCI is not merely a luxury fashion industry—it is an ecosystem of culture, aesthetics, innovation, and lifestyle that has evolved for over a century. Behind every product, campaign, and collaboration, there are values, stories, and philosophies that shape GUCCI's identity as one of the most influential luxury fashion icons in the world.",
      sections: [
        {
          title: "1. A Deeply Rooted History",
          content: "GUCCI was founded by Guccio Gucci in 1921 in Florence, Italy. Initially, the brand focused on premium leather goods, particularly bags, luggage, and equestrian equipment. Guccio's inspiration was born from his observations of aristocratic travelers at the hotel where he worked. He saw how quality, elegance, and craftsmanship could express one's status. From there, GUCCI began its long journey. Over the years, the world of GUCCI has evolved into a symbol of classic luxury that blends Italian artisan tradition with bold modern style."
        },
        {
          title: "2. A Strong and Iconic Aesthetic Identity",
          content: "GUCCI is known for its instantly recognizable visual hallmarks: The GG Monogram motif, the Web Stripe detail (red-green), a combination of vintage and contemporary designs, bold yet elegant choices of color and texture, and the use of floral, faunal, and artistic symbolism. This aesthetic distinguishes GUCCI from other brands, making it a world full of character, artistic flair, and never afraid to experiment."
        },
        {
          title: "3. Design Philosophy: Bold, Artistic, and Unconventional",
          content: "The World of GUCCI is built on creative principles that are always open to innovation. In many eras, GUCCI has shown the courage to transcend traditional boundaries—presenting designs that are unique, theatrical, and full of storytelling. Each collection is not just 'clothing', but a work of art with a strong visual message, often uniting concepts of culture, history, and modernity."
        },
        {
          title: "4. Global Cultural Influence",
          content: "GUCCI has become a global phenomenon not only because of its products but also because of the power of its narrative and cultural influence. The brand inspires pop culture, collaborates with leading artists, actors, musicians, and creators, and presents campaigns that highlight diversity, freedom of expression, and creativity. The World of GUCCI always evolves with the times while maintaining the brand's authenticity."
        },
        {
          title: "5. Digital Innovation and Brand Modernization",
          content: "In the digital era, GUCCI is among the most aggressive brands in innovation through virtual fashion show experiences, AR (Augmented Reality) technology for trying on products, strong visual storytelling integration on digital platforms, as well as global community programs and collaborations. All of this makes the world of GUCCI relevant to the new generation living in the digital ecosystem."
        },
        {
          title: "6. Commitment to Sustainability",
          content: "The World of GUCCI is also bound by a commitment to create positive change through eco-friendly materials, sustainable production processes, the 'Gucci Equilibrium', campaign, and support for global communities and social programs. GUCCI wants to prove that luxury does not have to conflict with environmental and social responsibility."
        },
        {
          title: "7. The World of GUCCI as a Lifestyle",
          content: "More than just fashion, GUCCI has developed as a lifestyle universe covering Fashion & Leather Goods, Beauty & Fragrances, Jewelry & Watch Collections, Home Décor, Digital Experiences, to Partnership Programs and Communities. For many, owning a GUCCI product is a form of self-expression—reflecting confidence, creativity, and appreciation for art."
        },
        {
          title: "8. GUCCI and the Future",
          content: "The World of GUCCI continues to transform towards a more modern, inclusive, and futuristic future. GUCCI aims to bridge Italian artisan tradition, digital innovation, popular culture, and the global aspirations of the new generation. With a visionary approach, GUCCI not only builds products but builds a living and thriving culture, community, and ecosystem."
        }
      ],
      conclusion: "The World of GUCCI is a blend of rich historical heritage, boundless creativity, strong aesthetic value, technological innovation, and a commitment to quality and sustainability. That is what makes GUCCI not just a fashion brand, but a global symbol of art, luxury, identity, and modern lifestyle."
    },
    luneraCollab: {
      heroTitle: "GUCCI x LUNERA",
      heroSubtitle: "EXCLUSIVE COLLABORATION",
      heroCta: "EXPLORE",
      mainHeadline: "SIGNATURE HIJAB COLLECTION",
      mainDesc: "Featuring unique designs with an artistic touch, available in a variety of the best color choices & equipped with elegant premium packaging.",
      narrative: {
        subtitle: "WHEN ITALIAN HERITAGE MEETS MODERN ELEGANCE",
        title: "A HARMONY OF TWO WORLDS",
        p1: "This collaboration marks a new milestone in the fashion world, where Gucci's maximalist luxury and artistic boldness blend harmoniously with LUNERA's graceful and classy aesthetics. It is a meeting between legendary Italian artisan traditions and contemporary modest fashion values.",
        p2: "Every piece in this collection tells a story of cultural unification. Iconic motifs are reinterpreted with stunning color palettes and premium materials that are soft yet luxurious. Creating accessories that are not only beautiful to behold, but also radiate the wearer's charisma.",
        p3: "More than just a product, GUCCI x LUNERA is a statement that modest fashion has a prestigious place on the global luxury stage. It is a celebration for modern women who want to look classy without leaving their identity behind."
      },
      boxFeature: {
        title: "EXCLUSIVE PACKAGING",
        desc: "Equipped with the LUNERA signature box that is simple and elegant, representing timeless quality standards."
      },
      swarovski: {
        title: "ICONIC DETAIL",
        desc: "Each piece is embellished with precise details, providing a subtle sparkle that radiates class and exclusivity without being excessive."
      },
      details: {
        material: "Premium Voile",
        size: "115 x 115 cm",
        packaging: "Signature Hard Box"
      },
      shopNow: "SHOP NOW"
    },
    umamaCollab: {
      heroTitle: "GUCCI x UMAMA",
      heroSubtitle: "EXCLUSIVE COLLABORATION",
      heroCta: "EXPLORE",
      mainHeadline: "SIGNATURE HIJAB COLLECTION",
      mainDesc: "Featuring unique designs with an artistic touch, available in a variety of the best color choices & equipped with elegant premium packaging.",
      narrative: {
        subtitle: "WHEN ITALIAN HERITAGE MEETS MODERN ELEGANCE",
        title: "A HARMONY OF TWO WORLDS",
        p1: "This collaboration marks a new milestone in the fashion world, where Gucci's maximalist luxury and artistic boldness blend harmoniously with UMAMA's graceful and classy aesthetics. It is a meeting between legendary Italian artisan traditions and contemporary modest fashion values.",
        p2: "Every piece in this collection tells a story of cultural unification. Iconic motifs are reinterpreted with stunning color palettes and premium materials that are soft yet luxurious. Creating accessories that are not only beautiful to behold, but also radiate the wearer's charisma.",
        p3: "More than just a product, GUCCI x UMAMA is a statement that modest fashion has a prestigious place on the global luxury stage. It is a celebration for modern women who want to look classy without leaving their identity behind."
      },
      boxFeature: {
        title: "EXCLUSIVE PACKAGING",
        desc: "Equipped with the UMAMA signature box that is simple and elegant, representing timeless quality standards."
      },
      swarovski: {
        title: "ICONIC DETAIL",
        desc: "Each piece is embellished with precise details, providing a subtle sparkle that radiates class and exclusivity without being excessive."
      },
      details: {
        material: "Premium Voile",
        size: "115 x 115 cm",
        packaging: "Signature Hard Box"
      },
      shopNow: "SHOP NOW"
    },
    grid: {
      craftsmanship: 'EXPERT ADVISOR',
      innovation: 'GUCCI x LUNERA',
      sustainability: 'EXCLUSIVE COLLECTION',
      readMore: 'EXPLORE',
    },
    footer: {
      followUs: 'FOLLOW OUR JOURNEY',
      copyright: '© 2016 - 2026 Guccio Gucci S.p.A. - All rights reserved.',
      links: [],
      legal: []
    }
}

// Italian Translations (New)
const IT_TRANS = {
    ...EN_TRANS, // Inherit structure
    nav: {
      people: 'MONDO GUCCI',
      partners: 'COLLEZIONI',
      academy: 'ACCOUNT BUSINESS',
      opportunities: 'SISTEMA',
      collab: 'GUCCI x LUNERA',
      login: 'ACCEDI',
      backToHome: 'TORNA ALLA HOME',
    },
    loginBar: {
      text: 'Sei già un membro Gucci Affiliate?',
      link: 'Iscriviti Ora'
    },
    hero: {
      subtitle: 'PROGRAMMA DI PARTNERSHIP ESCLUSIVO',
      title: 'GUCCI BUSINESS PARTNER',
      description: 'Unisciti alla nostra visione artistica. Un invito per visionari e aziende a ridefinire il lusso contemporaneo.',
      websiteLink: 'REGISTRATI ORA'
    },
    stats: {
      followersLabel: 'LA NOSTRA COMMUNITY',
      followersValue: '654K+',
      followersDesc: 'Partner Attivi & Follower',

      ratingLabel: 'SODDISFAZIONE PARTNER',
      ratingValue: '4.8 Stelle',
      ratingDesc: 'Basato su Recensioni Esclusive',

      legalityLabel: 'LEGALITÀ UFFICIALE',
      legalityValue: 'Verificato',
      legalityDesc: 'Operato da PT. Graha Citra Prima - GUCCI. Entità commerciale registrata conforme alle normative commerciali internazionali.',
      viewLegality: 'VEDI DETTAGLI LEGALI',
    },
    christmas: {
      subtitle: 'PARTNERSHIP E PROSPERITÀ',
      title: 'GUCCI PROSPERITY 2026',
      description: 'Sotto le luci scintillanti del 2026, Gucci invita le PMI e i partner visionari a crescere insieme. Crea opportunità di reddito illimitate e realizza un\'economia prospera attraverso collaborazioni commerciali eleganti, strategiche e redditizie.',
      cta: 'OPPORTUNITÀ 2026'
    },
    collectionsPage: {
      title: 'COLLEZIONI ESCLUSIVE',
      subtitle: 'SCOPRI LA BELLEZZA',
      items: [
        {
            image: 'https://images.ctfassets.net/brzb6u29244a/1r0xTJ5E4aYyYYlHkXFk01/3ea85491d43aa09216ad889fea64c1f1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-25-1268_001_Default.png?w=2000&fm=avif&q=50',
            title: 'Gucci Gift Giving',
            description: 'Un\'espressione di libertà attraverso silhouette classiche ridefinite per l\'era moderna.',
            cta: 'VISUALIZZA'
        },
        {
            image: 'https://images.ctfassets.net/brzb6u29244a/aulskRb1cIcYarJ0Gaxpp/973dfaa3557a8e510b5fbd7c8d6c30b1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-20-0725-B_001_Default.png?w=2000&fm=avif&q=50',
            title: 'Valigeria Heritage',
            description: 'Un patrimonio di viaggi rivisitato con un tocco contemporaneo.',
            cta: 'VISUALIZZA'
        },
        {
            image: 'https://images.ctfassets.net/brzb6u29244a/75LNsWDWjusBT37Qp0AfHx/96668fead6fa8a23ce8f277a6edef77a/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-1-09-1000-B_001_Default.png?w=2000&fm=avif&q=50',
            title: 'Gucci Essentials',
            description: 'Un\'icona senza tempo che continua ad evolversi, celebrando l\'eleganza dei dettagli.',
            cta: 'VISUALIZZA'
        }
      ]
    },
    grid: {
        craftsmanship: 'CONSULENTE ESPERTO',
        innovation: 'GUCCI x LUNERA',
        sustainability: 'COLLEZIONE ESCLUSIVA',
        readMore: 'ESPLORA',
    }
}

// Japanese Translations (New)
const JA_TRANS = {
    ...EN_TRANS, // Inherit structure
    nav: {
      people: 'GUCCIの世界',
      partners: 'コレクション',
      academy: 'ビジネスアカウント',
      opportunities: 'システム',
      collab: 'GUCCI x LUNERA',
      login: 'ログイン',
      backToHome: 'ホームに戻る',
    },
    loginBar: {
      text: 'すでにGucciアフィリエイトメンバーですか？',
      link: '今すぐ参加'
    },
    hero: {
      subtitle: '限定パートナーシッププログラム',
      title: 'GUCCI ビジネスパートナー',
      description: '私たちの芸術的ビジョンに参加してください。現代のラグジュアリーを再定義する、先見の明のある企業への招待状です。',
      websiteLink: 'パートナー登録'
    },
    stats: {
      followersLabel: 'コミュニティ',
      followersValue: '654K+',
      followersDesc: 'アクティブなパートナーとフォロワー',

      ratingLabel: 'パートナー満足度',
      ratingValue: '4.8 星',
      ratingDesc: '独自のレビューに基づく',

      legalityLabel: '公式な合法性',
      legalityValue: '認証済み',
      legalityDesc: 'PT. Graha Citra Prima - GUCCIによって運営されています。国際貿易規制および適用法に準拠した登録事業体です。',
      viewLegality: '詳細を見る',
    },
    christmas: {
      subtitle: 'パートナーシップと繁栄',
      title: 'GUCCI 繁栄 2026',
      description: '2026年の輝く光の下、Gucciは中小企業や先見の明のあるパートナーを共に成長へと招待します。エレガントで戦略的かつ収益性の高いビジネスコラボレーションを通じて、無限の収入機会を創出し、豊かな経済を実現しましょう。',
      cta: '2026年のビジネスチャンス'
    },
    collectionsPage: {
        title: '限定コレクション',
        subtitle: '美の発見',
        items: [
            {
                image: 'https://images.ctfassets.net/brzb6u29244a/1r0xTJ5E4aYyYYlHkXFk01/3ea85491d43aa09216ad889fea64c1f1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-25-1268_001_Default.png?w=2000&fm=avif&q=50',
                title: 'Gucci Gift Giving',
                description: '現代のために再定義されたクラシックなシルエットを通じた自由の表現。',
                cta: 'コレクションを見る'
            },
            {
                image: 'https://images.ctfassets.net/brzb6u29244a/aulskRb1cIcYarJ0Gaxpp/973dfaa3557a8e510b5fbd7c8d6c30b1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-20-0725-B_001_Default.png?w=2000&fm=avif&q=50',
                title: 'Valigeria Heritage',
                description: '現代的なタッチで蘇る旅の遺産。',
                cta: 'コレクションを見る'
            },
            {
                image: 'https://images.ctfassets.net/brzb6u29244a/75LNsWDWjusBT37Qp0AfHx/96668fead6fa8a23ce8f277a6edef77a/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-1-09-1000-B_001_Default.png?w=2000&fm=avif&q=50',
                title: 'Gucci Essentials',
                description: '進化し続け、細部の優雅さを称える不朽のアイコン。',
                cta: 'コレクションを見る'
            }
        ]
    },
    grid: {
        craftsmanship: '専門アドバイザー',
        innovation: 'GUCCI x LUNERA',
        sustainability: '限定コレクション',
        readMore: '探検する',
    }
}

// Korean Translations (New)
const KO_TRANS = {
    ...EN_TRANS, // Inherit structure
    nav: {
      people: '구찌의 세계',
      partners: '컬렉션',
      academy: '비즈니스 계정',
      opportunities: '시스템',
      collab: 'GUCCI x LUNERA',
      login: '로그인',
      backToHome: '홈으로 돌아가기',
    },
    loginBar: {
      text: '이미 Gucci 제휴 회원이신가요?',
      link: '지금 가입하기'
    },
    hero: {
      subtitle: '독점 파트너십 프로그램',
      title: 'GUCCI 비즈니스 파트너',
      description: '우리의 예술적 비전에 동참하세요. 현대적 럭셔리를 재정의하는 선구자와 기업을 위한 초대입니다.',
      websiteLink: '파트너 등록'
    },
    stats: {
      followersLabel: '커뮤니티',
      followersValue: '654K+',
      followersDesc: '활동 중인 파트너 및 팔로워',

      ratingLabel: '파트너 만족도',
      ratingValue: '4.8 별',
      ratingDesc: '독점 리뷰 기준',

      legalityLabel: '공식 합법성',
      legalityValue: '인증됨',
      legalityDesc: 'PT. Graha Citra Prima - GUCCI에서 운영합니다. 국제 무역 규정 및 관련 법률을 준수하는 등록된 사업체입니다.',
      viewLegality: '법적 세부 정보 보기',
    },
    christmas: {
      subtitle: '파트너십과 번영',
      title: 'GUCCI 번영 2026',
      description: '2026년의 빛나는 조명 아래, Gucci는 중소기업(UMKM)과 비전 있는 파트너들을 초대하여 함께 성장하고자 합니다. 우아하고 전략적이며 수익성 있는 비즈니스 협력을 통해 무한한 수익 기회를 창출하고 경제적 번영을 실현하십시오.',
      cta: '2026 비즈니스 기회'
    },
    collectionsPage: {
        title: '독점 컬렉션',
        subtitle: '아름다움 발견',
        items: [
            {
                image: 'https://images.ctfassets.net/brzb6u29244a/1r0xTJ5E4aYyYYlHkXFk01/3ea85491d43aa09216ad889fea64c1f1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-25-1268_001_Default.png?w=2000&fm=avif&q=50',
                title: 'Gucci Gift Giving',
                description: '현대적으로 재정의된 클래식 실루엣을 통한 자유의 표현.',
                cta: '컬렉션 보기'
            },
            {
                image: 'https://images.ctfassets.net/brzb6u29244a/aulskRb1cIcYarJ0Gaxpp/973dfaa3557a8e510b5fbd7c8d6c30b1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-20-0725-B_001_Default.png?w=2000&fm=avif&q=50',
                title: 'Valigeria Heritage',
                description: '현대적인 감각으로 되살아난 여행의 유산.',
                cta: '컬렉션 보기'
            },
            {
                image: 'https://images.ctfassets.net/brzb6u29244a/75LNsWDWjusBT37Qp0AfHx/96668fead6fa8a23ce8f277a6edef77a/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-1-09-1000-B_001_Default.png?w=2000&fm=avif&q=50',
                title: 'Gucci Essentials',
                description: '디테일의 우아함을 기념하며 계속 진화하는 시대를 초월한 아이콘.',
                cta: '컬렉션 보기'
            }
        ]
    },
    grid: {
        craftsmanship: '전문 고문',
        innovation: 'GUCCI x LUNERA',
        sustainability: '독점 컬렉션',
        readMore: '탐색하기',
    }
}

// Chinese Translations (New)
const ZH_TRANS = {
    ...EN_TRANS, // Inherit structure
    nav: {
      people: '古驰世界',
      partners: '系列',
      academy: '商业账户',
      opportunities: '系统',
      collab: 'GUCCI x LUNERA',
      login: '登录',
      backToHome: '返回首页',
    },
    loginBar: {
      text: '已经是 Gucci 联盟会员？',
      link: '立即加入'
    },
    hero: {
      subtitle: '独家合作伙伴计划',
      title: 'GUCCI 商业合作伙伴',
      description: '加入我们的艺术愿景。邀请有远见的人士和企业重新定义当代奢华。',
      websiteLink: '注册成为合作伙伴'
    },
    stats: {
      followersLabel: '我们的社区',
      followersValue: '654K+',
      followersDesc: '活跃合作伙伴与关注者',

      ratingLabel: '合作伙伴满意度',
      ratingValue: '4.8 星',
      ratingDesc: '基于独家评论',

      legalityLabel: '官方合法性',
      legalityValue: '已验证',
      legalityDesc: '由 PT. Graha Citra Prima - GUCCI 运营。符合国际贸易法规和适用法律的注册商业实体。',
      viewLegality: '查看法律详情',
    },
    christmas: {
      subtitle: '合作与繁荣',
      title: 'GUCCI 繁荣 2026',
      description: '在2026年璀璨的灯光下，Gucci邀请中小微企业（UMKM）和有远见的合作伙伴共同成长。通过优雅、战略性和盈利性的商业合作，创造无限的收入机会并实现经济繁荣。',
      cta: '2026 商业机会'
    },
    collectionsPage: {
        title: '独家系列',
        subtitle: '发现美',
        items: [
            {
                image: 'https://images.ctfassets.net/brzb6u29244a/1r0xTJ5E4aYyYYlHkXFk01/3ea85491d43aa09216ad889fea64c1f1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-25-1268_001_Default.png?w=2000&fm=avif&q=50',
                title: 'Gucci Gift Giving',
                description: '通过为现代重新定义的经典轮廓表达自由。',
                cta: '查看系列'
            },
            {
                image: 'https://images.ctfassets.net/brzb6u29244a/aulskRb1cIcYarJ0Gaxpp/973dfaa3557a8e510b5fbd7c8d6c30b1/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-2-20-0725-B_001_Default.png?w=2000&fm=avif&q=50',
                title: 'Valigeria Heritage',
                description: '以现代风格重现的旅行传统。',
                cta: '查看系列'
            },
            {
                image: 'https://images.ctfassets.net/brzb6u29244a/75LNsWDWjusBT37Qp0AfHx/96668fead6fa8a23ce8f277a6edef77a/HeroCategory-Desktop_Gucci-GIFT-GIVING-NOV25-Set-1-09-1000-B_001_Default.png?w=2000&fm=avif&q=50',
                title: 'Gucci Essentials',
                description: '不断演变、颂扬细节优雅的永恒标志。',
                cta: '查看系列'
            }
        ]
    },
    grid: {
        craftsmanship: '专家顾问',
        innovation: 'GUCCI x LUNERA',
        sustainability: '独家系列',
        readMore: '探索',
    }
}

export const DICTIONARY: Dictionary = {
  id: ID_TRANS,
  en: EN_TRANS,
  it: IT_TRANS,
  ja: JA_TRANS,
  ko: KO_TRANS,
  zh: ZH_TRANS
};
