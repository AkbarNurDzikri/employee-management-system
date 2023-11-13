import Swal from 'sweetalert2';

const validationDate = (tglAwal, tglAkhir) => {
  const start = new Date(tglAwal);
  const end = new Date(tglAkhir);
  const diffInMiliSec = end - start;
  const diffInDay = diffInMiliSec / (1000*60*60*24) + 1; // Jika tidak ditambah 1, rumus ini akan menghasilkan 0 untuk tanggal yang sama.

  if(start > end) {
    Swal.fire({
      icon: "error",
      title: 'Tanggal tidak valid',
      text: 'Tanggal mulai harus lebih kecil dari tanggal selesai !',
    });

    return false;
  } else {
    return diffInDay;
  }
}

export default validationDate;