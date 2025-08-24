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
  {
    title: "Sertifikat 4",
    image: "https://via.placeholder.com/400x250",
    content: "Deskripsi lengkap tentang sertifikat 4.",
  },
];

const achievementsContainer = document.getElementById("achievements-container");
achievements.forEach((ach, index) => {
  // simpan data untuk modal
  modalData[`achievement${index}`] = {
    title: ach.title,
    content: ach.content,
  };

  // card HTML
  const card = document.createElement("div");
  card.className =
    "bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition-colors duration-500";
  card.innerHTML = `
      <img src="${ach.image}" alt="${ach.title}" class="rounded mb-4 w-full h-48 object-cover"/>
      <h3 class="font-semibold mb-2">${ach.title}</h3>
      <button onclick="openModal('achievement${index}')" class="text-blue-500 hover:underline">
        Selengkapnya
      </button>
    `;
  achievementsContainer.appendChild(card);
});

// ======================
// DATA PROJECTS
// ======================
const projects = [
  {
    title: "Project 1",
    image: "https://via.placeholder.com/400x250",
    content: "Deskripsi lengkap tentang Project 1.",
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/400x250",
    content: "Deskripsi lengkap tentang Project 2.",
  },
  {
    title: "Project 3",
    image: "https://via.placeholder.com/400x250",
    content: "Deskripsi lengkap tentang Project 3.",
  },
];

const projectsContainer = document.querySelector("#projects .grid");
projects.forEach((proj, index) => {
  // simpan data untuk modal
  modalData[`project${index}`] = {
    title: proj.title,
    content: proj.content,
  };

  // card HTML
  const card = document.createElement("div");
  card.className =
    "bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition-colors duration-500";
  card.innerHTML = `
      <img src="${proj.image}" alt="${proj.title}" class="rounded mb-4 w-full h-48 object-cover"/>
      <h3 class="font-semibold mb-2">${proj.title}</h3>
      <button onclick="openModal('project${index}')" class="text-blue-500 hover:underline">
        Selengkapnya
      </button>
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
