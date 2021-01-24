import { useState } from 'react';
const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const onFormSubmit = (e) => {
        e.preventDefault(); 
        props.onSubmit(searchTerm);       
        
    }
    const onInputChange = (e) => {
        setSearchTerm(e.target.value);
    }
    return ( 
        <div style={{ marginLeft:"40px" }}>
            <form onSubmit={(e)=>onFormSubmit(e)}>
                <label>Enter keyword</label>
                <br/>
                <input
                    onChange={(e)=>onInputChange(e)}
                    style={{ padding: '10px', borderRadius: '10px', border: '3px solid #333' }}
                    type="text"
                />
                <button
                    type="submit"
                    style={{ backgroundColor: '#333', color: 'white',marginLeft:'10px', padding: '10px', border: 'none' }}>
                    Search
                </button>
            </form>
        </div>
     );
}
 
export default SearchBar;