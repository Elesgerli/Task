import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getAll } from '../redux/slices/dataSlices'

const SiteRoot = () => {
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(getAll())
    }, [])
    return (
        <>
            <Outlet />
        </>
    )
}

export default SiteRoot
