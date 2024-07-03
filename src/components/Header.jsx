export default function Header(){
  const hariIni = new Date()

  const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
  const namaHari = hari[hariIni.getDay()]
  const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
  const namaBulan = bulan[hariIni.getMonth()]

  const tanggal = `${namaHari}, ${hariIni.getDate()} ${namaBulan} ${hariIni.getFullYear()}`

    return(
      <><h1>Catatan Belanjaku 📝</h1>
      <h2>{tanggal}</h2>
      </>
    ) 
  }