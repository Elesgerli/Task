import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getOne } from '../../redux/slices/dataSlices'
import { FaArrowLeft } from "react-icons/fa";
import './Index.scss'
import { ClipLoader } from "react-spinners";
const Detail = () => {
    const { id } = useParams()

    const { oneData, oneDataLoading } = useSelector(state => state.datas)
    const dispatch = useDispatch()
    console.log(oneData)
    useEffect(() => {
        dispatch(getOne(id))
    }, [id])
    return (
        <>

            {
                oneDataLoading ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "25px" }}>
                    <ClipLoader />
                </div> : <div className='detail'>
                    <div className="detail-top">
                        <Link to={'/'}>
                            <button>
                                <FaArrowLeft />   Go Back
                            </button></Link>
                    </div>
                    <div className="detail-bottom">
                        <div className="detail-bottom-left">
                            <img src={oneData?.image} alt="" />
                        </div>
                        <div className="detail-bottom-right">
                            <p>
                                <b>Title:</b> {oneData.title}
                            </p>
                            <p>
                                <b>Category:</b> {oneData.category}
                            </p>
                            <p>
                                <b>Price:</b> ${oneData.price}
                            </p>
                            <p>
                                <b>Description:</b> {oneData.description}
                            </p>


                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default Detail
