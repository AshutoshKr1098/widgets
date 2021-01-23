import Accordion from './components/Accordion';
const items = [
    { title: 'T1', body: 'This is T1' },
    { title: 'T2', body: 'This is T2' },
    { title: 'T3', body: 'This is T3' },
    { title: 'T4', body: 'This is T4' }    
]
const App = () => {
    return (  
        <>
            <div style = {{maxWidth:'60%',margin:'40px auto'}}>
                <Accordion items={items} />
            </div>
        </>

    );
}
 
export default App;