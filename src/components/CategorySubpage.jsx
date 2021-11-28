import React from 'react'
import {useParams} from 'react-router-dom'
import {categoryInfo} from '../utils/categoryInfo'
export const CategorySubpage = () => {
    let {categoryId} = useParams()
    let data = categoryInfo.find((category)=>
        category.categoryInfoid === categoryId
    )
    return (
        <div className="csp">
            <h2 className="csp__title">{data.categoryInfoid}</h2>
            <p className="csp__paragraph">{data.definition}</p>
            <ul className="csp__listgroup">
                {data.mostcomuns.map((info)=>{
                    return (<li key={info.name} className="csp__listitem">{info.name}</li>)
                })}
            </ul>
        </div>
    )
}
