const semua_tombol = document.querySelectorAll(".filter-btn");
const semua_foto = document.querySelectorAll(".foto");

semua_tombol.forEach((tombol_satuan) => {
    tombol_satuan.addEventListener("click", () => {
    semua_tombol.forEach((b) => b.classList.remove("active"));
    tombol_satuan.classList.add("active");

    const filter = tombol_satuan.getAttribute("data-filter")
        semua_foto.forEach((foto_satuan) => {
            if(filter === "All" || foto_satuan.classList.contains(filter)) {
                foto_satuan.style.display = "block";
            } else{
                foto_satuan.style.display = "none";
            }
            
        });
    });
});