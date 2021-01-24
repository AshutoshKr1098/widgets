import React,{ useState } from 'react';
import axios from 'axios';
import Accordion from './components/Accordion';
import SearchBar from './components/SearchBar';
// const items = [
//     { title: 'T1', body: 'This is T1' },
//     { title: 'T2', body: 'This is T2' },
//     { title: 'T3', body: 'This is T3' },
//     { title: 'T4', body: 'This is T4' }    
// ]
const App = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [fetchedPosts, setFetchedPosts]= useState([]);
    const onFormSubmission = async(data) => {
        console.log(`from the app component ${data}`);
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(res => setFetchedPosts(res.splice(0,10)));

        
        const pics = await axios.get('https://api.unsplash.com/search/photos/', {
            params: { query: data },
            headers: {
                Authorization:'Client-ID B1ZqJ865Doa5Uz5hti-1NdtwPS4uj7_IB5JIF7HUkws'
            }
        });
        //console.log(pics);        
        setFetchedData(pics.data.results);        
        //console.log(pics.data);
    }
    return (  
        <>
            <div style={{ maxWidth: '60%', margin: '40px auto' }}>
                <SearchBar onSubmit={ onFormSubmission }/>
                <Accordion items={fetchedPosts} />
            </div>
            {fetchedData.length > 0 ? <div>
                {fetchedData.map((eachData,index) => {
                    return (
                        <React.Fragment>
                            <div key={index} style={{width:'30%',display:'inline-block',marginRight:'3%',height:'200px',overflow:'hidden'}}>
                                <img src={`${eachData.urls.small}`} /> 
                            </div>

                    </React.Fragment>
                    )
                })}
            </div>:null}
        </>

    );
}
 
export default App;