let keranjang = [];

function tambahKeKeranjang(nama, harga) {
    const item = keranjang.find((produk) => produk.nama === nama);
    if (item) {
        item.jumlah += 1;
    } else {
        keranjang.push({ nama, harga, jumlah: 1 });
    }
    tampilkanKeranjang();
}

function tampilkanKeranjang() {
    const keranjangDiv = document.getElementById("keranjang");
    if (keranjang.length === 0) {
        keranjangDiv.innerHTML = "<p>Keranjang belanja kosong.</p>";
    } else {
        keranjangDiv.innerHTML = `
            <ul>
                ${keranjang
                    .map(
                        (item) => `
                        <li>${item.nama} (x${item.jumlah}) - Rp${item.harga.toLocaleString()} 
                        = Rp${(item.harga * item.jumlah).toLocaleString()}</li>`
                    )
                    .join("")}
            </ul>
            <p><strong>Total: Rp${keranjang
                .reduce((total, item) => total + item.harga * item.jumlah, 0)
                .toLocaleString()}</strong></p>
        `;
    }
}

function checkout() {
    if (keranjang.length === 0) {
        alert("Keranjang kosong! Tambahkan produk sebelum checkout.");
    } else {
        alert("Terima kasih telah berbelanja di Toko Oren!");
        keranjang = [];
        tampilkanKeranjang();
    }
}
