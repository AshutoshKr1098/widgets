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
                    <div key={item.title} class="ui styled accordion" style={{margin:'40px'}}>
                        <div class="title">
                            <i class="dropdown icon"><h2 onClick={()=>onTitleClick(index)}>{ item.title }</h2></i>
                        </div>
                        <div>
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