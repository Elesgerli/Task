import React from 'react'
import './Index.scss'
import { useDispatch } from 'react-redux'
import { searchData, sortData } from '../../redux/slices/dataSlices'
import { useDataContext } from '../../context/context'
const Buttons = () => {
    const { handleOpenAddModal,handleOpenEditModal } = useDataContext()
    const dispatch = useDispatch()
    return (
        <div className='main-top'>
            <div className="main-top-left">
                <button onClick={() => handleOpenAddModal()}>Add Product</button>
            </div>
            <div className="main-top-right">
                <input type="text"
                    placeholder='search product' onChange={(e) => {
                        dispatch(searchData(e.target.value))
                    }} />

                <select name="" id="" onChange={(e) => {
                    dispatch(sortData(e.target.value))
                }}>

                    <option value="" disabled selected hidden>Sort</option>
                    <option value="df">Default</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="0-9">0-9</option>
                    <option value="9-0">9-0</option>
                </select>
            </div>
        </div>
    )
}

export default Buttons
