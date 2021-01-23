const SearchBar = () => {
    return ( 
        <div style={{ marginLeft:"40px" }}>
            <form>
                <label>Enter keyword</label>
                <br/>
                <input style={{padding:'10px',borderRadius:'10px',border:'3px solid #333'}} type="text" />
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