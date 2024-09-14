import { useState } from "react";
const dataUnit = [
  "Kg",
  "Liter",
  "Gram",
  "Ons",
  "Bungkus",
  "Buah",
  "Karton",
  "Sak",
  "Dus",
  "Set",
  "Lembar",
  "Non Unit"
];
export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState(dataUnit[0]);
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  function formatDate(date) {
    const hari = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const namaHari = hari[date.getDay()];
    const bulan = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const namaBulan = bulan[date.getMonth()];

    const tanggal = `${namaHari}, ${date.getDate()} ${namaBulan} ${date.getFullYear()}`;

    return tanggal;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const totalPrice = price * quantity;
    // const formatCurrency = new Intl.NumberFormat("id-ID", {
    //   style: "currency",
    //   currency: "IDR",
    // }).format(totalPrice);

    const currentDate = date
      ? formatDate(new Date(date))
      : formatDate(new Date());

    const newItem = {
      name,
      unit,
      quantity,
      price: totalPrice,
      date: currentDate,
      checked: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    console.log(newItem);

    setName("");
    setQuantity(1);
    setUnit(dataUnit[0]);
    setPrice("");
    setDate("");
  }
  const quantityNum = [...Array(150)].map((_, i) => (
    <option value={i + 1} key={i + 1}>
      {i + 1}
    </option>
  ));

  const unitOptions = dataUnit.map((unit, index) => (
    <option value={unit} key={index}>
      {unit}
    </option>
  ));

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div className="input-form">
          <select
            id="select-qty"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {quantityNum}
          </select>
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            {unitOptions}
          </select>
          <input
            type="text"
            id="isi"
            placeholder="nama barang..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="harga barang"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="date"
            placeholder="tanggal"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button>Tambah</button>
      </form>
    </>
  );
}
