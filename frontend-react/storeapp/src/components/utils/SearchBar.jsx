import {useState} from 'react'

import './searchBar.css'

export default function SearchBar() {

    const [searchValue, setSearchValue] = useState('')
    return (
        <>
            <div className="search-container">
                <div className="col">
                    <div className="input-group">
                        <input onChange={ (target) => setSearchValue(target.value)} type="text" id='searchBar' className="form-control" placeholder="O que deseja encontrar?" />
                        <button className="btn btn-outline-secondary" type="button" style={{ border: 'none', position: 'relative', right: '50px' }}>
                            <i className="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}