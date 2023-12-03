const city = 1204;
const date = new Date();
const dd = String(date.getDate()).padStart(2, '0');
const mm = String(date.getMonth() + 1).padStart(2, '0');
const yyyy = date.getFullYear();
const now = yyyy + '-' + mm + '-' + dd;;

const number = 1;

const jadwalApi = `https://api.myquran.com/v1/sholat/jadwal/${city}/${yyyy}/${mm}`

fetch(jadwalApi)
    .then(response => response.json())
    .then(data => {
        const jadwal = data.data;
        const list = jadwal.jadwal;
        const listJadwal = document.getElementById('list-jadwal');
        const kota = document.getElementById('city');
        const prov = document.getElementById('prov');

        kota.innerText = jadwal.lokasi;
        prov.innerText = jadwal.daerah;

        list.forEach(el => {
            const tr = document.createElement('tr');
            if (el.date === now) {
                tr.classList.add('table-primary', 'fw-bold')
            }

            const dd = document.createElement('td');
            dd.innerText = el.tanggal;

            const imsak = document.createElement('td');
            imsak.innerText = el.imsak;

            const subuh = document.createElement('td');
            subuh.innerText = el.subuh;

            const terbit = document.createElement('td');
            terbit.innerText = el.terbit;

            const dzuhur = document.createElement('td');
            dzuhur.innerText = el.dzuhur;

            const ashar = document.createElement('td');
            ashar.innerText = el.ashar;

            const maghrib = document.createElement('td');
            maghrib.innerText = el.maghrib;

            const isya = document.createElement('td');
            isya.innerText = el.isya;

            listJadwal.appendChild(tr);
            tr.appendChild(dd)
            tr.appendChild(imsak)
            tr.appendChild(subuh)
            tr.appendChild(terbit)
            tr.appendChild(dzuhur)
            tr.appendChild(ashar)
            tr.appendChild(maghrib)
            tr.appendChild(isya)
        })
    });