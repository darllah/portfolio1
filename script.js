// aktifkan feather icons
feather.replace();

// Data modal biar gampang tambah/ubah
const modalData = {
  sertifikat1: {
    title: "Sertifikat 1",
    content: "Deskripsi lengkap tentang sertifikat 1.",
  },
  project1: {
    title: "Project 1",
    content: "Deskripsi lengkap tentang project 1.",
  },
  // tambahkan di sini kalau ada sertifikat atau project lain
};

// buka modal
function openModal(type) {
  const modal = document.getElementById("modal");
  const data = modalData[type];

  if (data) {
    document.getElementById("modal-title").innerText = data.title;
    document.getElementById("modal-content").innerText = data.content;
    modal.classList.remove("hidden");
  }
}

// tutup modal
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// biar modal bisa ditutup dengan klik di luar konten
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    closeModal();
  }
});

// juga bisa ditutup dengan tombol ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
