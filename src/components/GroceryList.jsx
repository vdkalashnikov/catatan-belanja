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
      default:
        sortedItems = items
        break
    }
  
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
          </tbody>
        </table>
      </div>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems}>Bersihkan Daftar</button>
      </div>
      </>
    )
  }