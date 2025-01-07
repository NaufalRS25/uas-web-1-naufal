document.getElementById('form-transaksi').addEventListener('submit', function(event) {
    event.preventDefault();

    const namaTransaksi = document.getElementById('nama-transaksi').value;
    const jumlah = document.getElementById('jumlah').value;
    const kategori = document.getElementById('kategori').value;

    if (!namaTransaksi || !jumlah || !kategori) {
        alert('Semua input harus diisi!');
        return;
    }

    const table = document.querySelector('table tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${namaTransaksi}</td>
        <td>${jumlah}</td>
        <td>${kategori}</td>
    `;
    table.appendChild(newRow);

    document.getElementById('form-transaksi').reset();
});
