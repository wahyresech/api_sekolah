<script>
fetch('https://administrasi.sunanampel.sch.id/api/guru_smk.php') // ganti dengan URL API
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(item => {
            html += `<p>${item.nama_field}</p>`; // sesuaikan dengan field dari database
        });
        document.getElementById('data-container').innerHTML = html;
    })
    .catch(error => console.error('Error:', error));
</script>
<div id="data-container"></div>
