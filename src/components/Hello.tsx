import * as React from 'react'

export interface Props {
    name : String,
    vipLevel ?: Number
}


function Hello({name , vipLevel =1 } : Props){
    return (
        <div>
            <span>
                {name}
            </span>
            <br/>
            <span>
                VipLevel: {vipLevel}
            </span>
        </div>
    )
}

export default Hello