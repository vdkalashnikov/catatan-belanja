import { useState } from "react"
import Item from './Item'

export default function GroceryList({items, onDeleteItem, onToggleItem, onClearItems}){

    const [sortBy, setSortBy] = useState('input')
  
    let sortedItems
  
    // if(sortBy === 'input'){
    //   sortedItems = items
    // }
  
    // if(sortBy === 'name' ){
    //   sortedItems= items.slice().sort((a, b) => a.name.localeCompare(b.name))
    // }
  
    // if( sortBy === 'checked'){
    //   sortedItems = items.slice().sort((a, b) => a.checked - b.checked)
    // }
  
    switch(sortBy){
      case 'name' :
        sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'checked':
        sortedItems = items.slice().sort((a, b) => a.checked - b.checked)
        break
      case 'oldest' :
        sortedItems = items.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
        break
      case 'newest' :
        sortedItems = items.slice().sort((a, b) => new Date(b.date) - new Date(a.date))
        break
      default:
        sortedItems = items
        break
    }

    const total = items.reduce((acc, item) => acc + item.price, 0);
  
    return (
      <>
      <div className="list">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Satuan</th>
              <th scope="col">Nama Barang</th>
              <th scope="col">Total Harga</th>
              <th scope="col">Tanggal</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {sortedItems.map((item, index) => (
              <Item
                key={item.id}
                index={index}
                item={item}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            ))}
            <tr>
              <td colSpan={4}>Total Harga</td>
              <td>{new Intl.NumberFormat("id-ID", {
                style: 'currency',
                currency: 'IDR'
              }).format(total)}</td>
              <td colSpan={2}></td>
            </tr>
            
          </tbody>
        </table>
      </div>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
          <option value="oldest">Urutkan berdasarkan tanggal terlama</option>
          <option value="newest">Urutkan berdasarkan tanggal terbaru</option>
        </select>
        {/* <button onClick={onClearItems}>Bersihkan Daftar</button> */}
      </div>
      </>
    )
  }