import React from 'react'

export default props =>{
    const isPar= props.numero % 2 === 0;
    return (
        <div>
            <h2>{props.numero}</h2>
            { isPar ? 
                <span>Par</span> :
                <span>Impar</span>
            }
            
        </div>
    )
}