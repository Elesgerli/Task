import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Index'
import './Index.scss'
const Cards = () => {
    const { data } = useSelector(state => state.datas)
    return (
        <div className="cards">
            <div className='cards-inside'>
                {
                data.map((item) => {
                        return <Card item={item} key={item.id} />
                    })
                }


            </div>
        </div>
    )
}

export default Cards
