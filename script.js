document.addEventListener("DOMContentLoaded", function () {
  // ===== Tailwind Config (opsional, boleh dihapus jika sudah di-handle di HTML) =====
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#1e4a89',
          secondary: '#3a7bd5',
          accent: '#4a90e2',
          light: '#e6f2ff'
        }
      }
    }
  };

  // ===== Icons =====
  lucide.createIcons();

  // ===== Mobile Menu =====
  document.getElementById('menu-toggle')?.addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu?.classList.toggle('hidden');
  });

  // ===== Smooth Scroll Helper =====
  window.scrollToSection = function (id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // ===== Data Paket =====
  const packages = [
    {
      id: 1,
      name: "Umroh Reguler Premium",
      duration: "9 Hari",
      price: "Rp 28.500.000",
      departure: "15 Desember 2025",
      hotelMakkah: "Al Safwah Royale Orchid",
      hotelMadinah: "Dar Al Iman",
      stars: 4.9,
      reviews: 128,
      includes: ["Visa", "Tiket Pesawat", "Hotel Bintang 5", "Makan 3x Sehari", "Manasik", "Ziarah"],
      image: "assets/photo/paket1.jpg"
    },
    {
      id: 2,
      name: "Umroh Ramadhan Spesial",
      duration: "12 Hari",
      price: "Rp 35.000.000",
      departure: "20 Maret 2026",
      hotelMakkah: "Jabal Omar",
      hotelMadinah: "Al Anwar Al Madinah",
      stars: 4.8,
      reviews: 94,
      includes: ["Visa", "Tiket Pesawat", "Hotel Bintang 5", "Makan 3x Sehari", "Manasik", "Ziarah", "Panduan Ramadhan"],
      image: "assets/photo/paket2.jpg"
    },
    {
      id: 3,
      name: "Umroh Hemat Keluarga",
      duration: "7 Hari",
      price: "Rp 22.800.000",
      departure: "8 Januari 2026",
      hotelMakkah: "Al Rawda Royale",
      hotelMadinah: "Al Eiman Royale",
      stars: 4.7,
      reviews: 215,
      includes: ["Visa", "Tiket Pesawat", "Hotel Bintang 4", "Makan 3x Sehari", "Manasik", "Ziarah"],
      image: "assets/photo/paket3.jpg"
    },
    {
      id: 4,
      name: "Umroh Eksekutif VIP",
      duration: "10 Hari",
      price: "Rp 42.000.000",
      departure: "5 Februari 2026",
      hotelMakkah: "Fairmont Makkah",
      hotelMadinah: "The Oberoi Madinah",
      stars: 5.0,
      reviews: 67,
      includes: ["Visa", "Tiket Pesawat Business Class", "Hotel Bintang 5+", "Makan 3x Sehari", "Manasik Premium", "Ziarah Eksekutif", "Asuransi Komprehensif"],
      image: "assets/photo/paket4.jpg"
    }
  ];

  // ===== Render Paket =====
  function renderPackages(filter = '') {
    const container = document.getElementById('packages-container');
    if (!container) return;

    const filtered = packages.filter(pkg =>
      pkg.name.toLowerCase().includes(filter.toLowerCase()) ||
      pkg.departure.toLowerCase().includes(filter.toLowerCase())
    );

    container.innerHTML = filtered.map(pkg => `
      <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
        <div class="relative overflow-hidden">
          <img src="${pkg.image}" 
               onerror="this.src='https://placehold.co/400x240/e2e8f0/64748b?text=Gambar+Tidak+Tersedia'"
               alt="${pkg.name}" 
               class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
          <div class="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${pkg.duration}
          </div>
          <div class="absolute top-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center">
            <i data-lucide="star" class="w-4 h-4 text-yellow-400 fill-current"></i>
            <span class="ml-1 text-xs font-medium">${pkg.stars}</span>
          </div>
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-gray-800 mb-2">${pkg.name}</h3>
          <div class="flex items-center text-sm text-gray-600 mb-3">
            <i data-lucide="calendar" class="w-4 h-4 mr-2"></i>
            <span>${pkg.departure}</span>
          </div>
          <div class="space-y-2 mb-4 text-sm">
            <div class="flex items-center">
              <i data-lucide="map-pin" class="w-4 h-4 mr-2 text-blue-500"></i>
              <span class="font-medium">Makkah:</span> <span class="ml-1 text-gray-600">${pkg.hotelMakkah}</span>
            </div>
            <div class="flex items-center">
              <i data-lucide="map-pin" class="w-4 h-4 mr-2 text-green-500"></i>
              <span class="font-medium">Madinah:</span> <span class="ml-1 text-gray-600">${pkg.hotelMadinah}</span>
            </div>
          </div>
          <div class="flex items-center justify-between mb-4">
            <div class="bg-blue-100 px-3 py-1 rounded-lg">
              <span class="text-blue-800 font-bold text-lg">${pkg.price}</span>
            </div>
            <div class="text-sm text-gray-500">${pkg.reviews} ulasan</div>
          </div>
          <button 
            data-package-id="${pkg.id}"
            class="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 rounded-xl font-semibold 
                   hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
            Detail Paket 
            <i data-lucide="chevron-right" class="w-4 h-4 ml-2"></i>
          </button>
        </div>
      </div>
    `).join('');

    lucide.createIcons(container);
  }

  // ===== Modal Control — GLOBAL (tapi aman) =====
  window.openPackageModal = function (id) {
    const pkg = packages.find(p => p.id === id);
    if (!pkg) {
      console.warn('Paket tidak ditemukan:', id);
      return;
    }

    const modal = document.getElementById('package-modal');
    if (!modal) return;

    // Isi konten modal
    document.getElementById('modal-img').src = pkg.image || 'kabah.jpg';
    document.getElementById('modal-title').textContent = pkg.name;
    document.getElementById('modal-price').textContent = pkg.price;
    document.getElementById('modal-meta').textContent = `${pkg.duration} • ${pkg.departure}`;
    document.getElementById('modal-makkah').textContent = pkg.hotelMakkah;
    document.getElementById('modal-madinah').textContent = pkg.hotelMadinah;
    document.getElementById('modal-reviews').textContent = `(${pkg.reviews} ulasan)`;

    const includesHTML = pkg.includes.map(item => 
      `<div class="flex items-start"><div class="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div><span class="text-gray-700">${item}</span></div>`
    ).join('');
    document.getElementById('modal-includes').innerHTML = includesHTML;

    // Tampilkan & disable scroll
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Refresh icons dalam modal
    lucide.createIcons(modal);
  };

  // ===== Event Delegation: klik "Detail Paket" =====
  document.getElementById('packages-container')?.addEventListener('click', function (e) {
    const btn = e.target.closest('button[data-package-id]');
    if (btn) {
      const id = parseInt(btn.getAttribute('data-package-id'));
      if (!isNaN(id)) openPackageModal(id);
    }
  });

  // ===== Tutup Modal =====
  const modal = document.getElementById('package-modal');
  const closeModalBtn = document.getElementById('close-modal');
  
  function closeModal() {
    modal?.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modal) modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  // ===== Search =====
  document.getElementById('search-input')?.addEventListener('input', function (e) {
    renderPackages(e.target.value.trim());
  });

  // ===== Init =====
  renderPackages();
});