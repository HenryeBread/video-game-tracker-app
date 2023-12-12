import { useState } from "react"

export function SearchBar() {
    const [item, getItem] = useState("")

    return (
        <>
        <div className="form-field">
            <label htmlFor="item">Search</label>
            <input type="text"
             id="item"
             value={item}
             onChange={e => getItem(e.target.value)}
            />
        </div>
            
        </>
    )
}