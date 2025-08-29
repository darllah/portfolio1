// Aktifkan feather icons
feather.replace();

// ===============
// HAMBURGER MENU
// ===============
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

// Toggle buka/tutup menu
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // biar klik tombol gak dianggap klik luar
  if (mobileMenu.classList.contains("hidden")) {
    // tampilkan dengan transisi
    mobileMenu.classList.remove("hidden");
    requestAnimationFrame(() => {
      mobileMenu.classList.add("opacity-100", "translate-y-0");
      mobileMenu.classList.remove("opacity-0", "-translate-y-4");
    });
  } else {
    // sembunyikan dengan transisi
    mobileMenu.classList.add("opacity-0", "-translate-y-4");
    mobileMenu.classList.remove("opacity-100", "translate-y-0");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300); // durasi transisi
  }
});

// Klik di luar menu -> tutup
document.addEventListener("click", (e) => {
  if (
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target) &&
    !mobileMenu.classList.contains("hidden")
  ) {
    mobileMenu.classList.add("opacity-0", "-translate-y-4");
    mobileMenu.classList.remove("opacity-100", "translate-y-0");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  }
});

// ======================
// DATA MODAL
// ======================
const modalData = {};

function openModal(type) {
  const modal = document.getElementById("modal");
  const data = modalData[type];
  if (data) {
    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-content").innerText = data.content;
    modal.classList.remove("hidden");
  }
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// Tutup modal dengan klik luar
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    closeModal();
  }
});

// Tutup modal dengan tombol ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});

// ======================
// DATA ACHIEVEMENTS
// ======================
const achievements = [
  {
    title: "Sertifikat 1",
    image: "img/ChatGPT Image 10 Agu 2025, 12.54.17.png",
    content: "Deskripsi lengkap tentang sertifikat 1.",
  },
  {
    title: "Sertifikat 2",
    image: "https://via.placeholder.com/400x250",
    content: "Deskripsi lengkap tentang sertifikat 2.",
  },
  {
    title: "Sertifikat 3",
    image: "https://via.placeholder.com/400x250",
    content: "Deskripsi lengkap tentang sertifikat 3.",
  },
];

const achievementsContainer = document.getElementById("achievements-container");
achievements.forEach((ach, index) => {
  // simpan data untuk modal
  modalData[`achievement${index}`] = {
    title: ach.title,
    content: ach.content,
    image: ach.image,
  };

  // card HTML
  const card = document.createElement("div");
  card.className =
    "card bg-base-100 shadow-sm text-slate-900 max-w-xs rounded-xl";
  card.innerHTML = `
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Image"
              />
            </figure>
            <div
              class="card-body bg-slate-300 text-slate-900 dark:bg-slate-800 dark:text-slate-200"
            >
              <h2 class="card-title font-semibold">${ach.title}</h2>
              <p>${ach.content}
              </p>
            </div>
    `;
  achievementsContainer.appendChild(card);
});

// ======================
// DATA PROJECTS
// ======================
const projects = [
  {
    title: "Project 1",
    image: "",
    content: "Deskripsi lengkap tentang Project 1.",
  },
  {
    title: "Project 2",
    image: "",
    content: "Deskripsi lengkap tentang Project 2.",
  },
  {
    title: "Project 3",
    image: "",
    content: "Deskripsi lengkap tentang Project 3.",
  },
];

const projectsContainer = document.querySelector("#project-card");
projects.forEach((proj, index) => {
  // simpan data untuk modal
  modalData[`project${index}`] = {
    title: proj.title,
    content: proj.content,
    image: proj.image,
  };

  // card HTML
  const card = document.createElement("div");
  card.className =
    "relative w-96 h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer";
  card.innerHTML = `
            <!-- Gambar -->
            <img
              src="${proj.image}"
              alt="image"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <!-- Overlay hitam -->
            <div
              class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>

            <!-- Konten yang muncul dari bawah -->
            <div
              class="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-white"
            >
              <h2 class="text-xl font-bold mb-2">${proj.title}</h2>
              <p class="text-sm mb-4">
                ${proj.content}
              </p>
            </div>
    `;
  projectsContainer.appendChild(card);
});

// ======================
// DARK MODE TOGGLE
// ======================
const themeToggle = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

// cek preference awal
if (localStorage.getItem("theme") === "dark") {
  htmlEl.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
  if (htmlEl.classList.contains("dark")) {
    themeToggle.textContent = "☀️"; // ikon sun
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.textContent = "🌙"; // ikon moon
    localStorage.setItem("theme", "light");
  }
});
