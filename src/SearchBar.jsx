import { useState } from "react"
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
    const [item, getItem] = useState("")

    return (
        <>
        <div className="form-field">
            <label htmlFor="item"></label>
            {/* Search Bar input field */}
            <input type="text"
             id="item"
             value={item}
             onChange={e => getItem(e.target.value)}
             placeholder="Search.."
            />
            {/* Magnifying Glass Icon */}
            <button className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </div>
            
        </>
    )
}