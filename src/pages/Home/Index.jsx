import React from 'react'
import Cards from '../../components/Cards/Index'
import Buttons from '../../components/Buttons/Index'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { CircleLoader } from "react-spinners";
import AddModal from '../../components/AddModal/Index'
import EditModal from '../../components/EditModal/Index'
const Home = () => {
  const { loading ,data} = useSelector(state => state.datas)
  console.log(data)
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      {
        loading ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "25px" }}> <CircleLoader /></div> : <><Buttons />
          <Cards />
        </>
      }

      <AddModal />
      <EditModal/>
    </>
  )
}

export default Home
