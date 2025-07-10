import React from 'react'
import './Index.scss'
import { FaRegEye } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import { IoPencil } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { deleteData, edit, getOne } from '../../redux/slices/dataSlices';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { useDataContext } from '../../context/context';

const Card = ({ item }) => {
    const dispatch = useDispatch()
    const {handleOpenEditModal}=useDataContext()
    const handleDelete = (id) => {
        dispatch(deleteData(id))
        toast.success('Item successfully deleted')
    }
    return (
        <div className="card">
            <div className='card-inside'>
                <div className="card-inside-top">
                    <img src={item.image} alt={item.id} />
                </div>
                <div className="card-inside-middle">

                    <h4>{item.title?.slice(0, 32)}...</h4>

                    <p>${item.price}</p>
                </div>
                <div className="card-inside-bottom">
                    <Link to={`/${item.id}`}>
                        <button ><FaRegEye /></button></Link>
                    <button onClick={() => {
                        dispatch(getOne(item.id))
                        handleOpenEditModal()
                    }}><IoPencil />
                    </button>
                    <button onClick={() => {
                        handleDelete(item.id)

                    }}><CiTrash />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card
