import { createContext, useContext, useRef } from "react";

const dataContext = createContext(null)


const DataContextProvider = ({ children }) => {
    const addRef = useRef(null)
    const editRef = useRef(null)
    const handleOpenAddModal = () => {
        addRef.current.classList.add('openAddModal')

    }
    const handleCloseAddModal = () => {
        addRef.current.classList.remove('openAddModal')

    }
    const handleOpenEditModal = () => {
        editRef.current.classList.add('openAddModal')

    }
    const handleCloseEditModal = () => {
        editRef.current.classList.remove('openAddModal')

    }
    const values = { handleOpenAddModal, handleCloseAddModal,editRef, addRef, handleOpenEditModal, handleCloseEditModal }

    return <dataContext.Provider value={values}>{children}</dataContext.Provider>

}


const useDataContext = () => useContext(dataContext)


export { useDataContext, DataContextProvider }