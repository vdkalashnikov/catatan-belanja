import {useState} from "react"
const dataUnit = ['Kg', 'Liter', 'Gram', 'Ons', 'Bungkus', 'Buah', 'Karton']
export default function Form({onAddItem}){
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [unit, setUnit] = useState(dataUnit[0])

  
    function handleSubmit(e){
      e.preventDefault()
  
      if(!name) return
     
  
      const newItem = {name, unit, quantity, checked: false, id: Date.now()}
      onAddItem(newItem)
      console.log(newItem)
  
      setName('')
      setQuantity(1)
      setUnit(dataUnit[0])
  
    }
    const quantityNum = [...Array(10)].map((_, i) => (
      <option value={i + 1} key={i + 1}>{i + 1}</option>
    ))

    const unitOptions = dataUnit.map((unit, index) => (
      <option value={unit} key={index}>{unit}</option>
    ));

    return(
      <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>Hari ini belanja apa kita?</h3>
        <div>
          <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
            {quantityNum}
          </select>
          <select value={unit} onChange={(e) => setUnit(e.target.value)}>
            {unitOptions}
          </select>
          <input type="text" id="isi" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button>Tambah</button>
      </form>
      </>
    )
    
  }