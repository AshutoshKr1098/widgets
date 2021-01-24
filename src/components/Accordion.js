import { useState } from 'react';
const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) => {
        console.log('Clicked title number', index);
        setActiveIndex(index);
    }       
    return ( 
        <>
            {props.items.map((item,index) => {
                return (
                    <div key={item.id} className="ui styled accordion" style={{margin:'40px'}}>
                        <div onClick={()=>onTitleClick(index)} class="title">
                            <i className="dropdown icon"></i>
                            <h2>{ item.title }</h2>
                        </div>                        
                        <div className={activeIndex===index?'active':'content'}>
                            {item.body} 
                        </div>
                    </div>
                );
            })
            }
            <div>{ activeIndex }</div>
        </>
     );
}
 
export default Accordion;