document.addEventListener("DOMContentLoaded", () => {
  const dropzone = document.getElementById("dropzone");
  if (dropzone) {
    dropzone.addEventListener("click", simularUpload);
    dropzone.addEventListener("dragover", e => e.preventDefault());
    dropzone.addEventListener("drop", e => {
      e.preventDefault();
      irPara("tela-carregando");
      setTimeout(() => irPara("tela-download"), 2000);
    });
  }

  document.getElementById("btn-login").addEventListener("click", () => {
    irPara("tela-dashboard");
  });
});

function irPara(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hide"));
  document.getElementById(id).classList.remove("hide");
}

function voltarParaDashboard() {
  irPara("tela-dashboard");
}

function simularUpload() {
  irPara("tela-carregando");
  setTimeout(() => irPara("tela-download"), 2000);
}
