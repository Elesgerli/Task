import React, { useEffect } from 'react'
import './Index.scss'
import { IoMdClose } from 'react-icons/io'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { edit, getOne, post } from '../../redux/slices/dataSlices';
import { useDataContext } from '../../context/context';
import { nanoid } from 'nanoid';
import { CircleLoader } from 'react-spinners';
const EditModal = () => {
  const { editRef, handleCloseEditModal } = useDataContext()
  const { oneData, oneDataLoading } = useSelector(state => state.datas)

  useEffect(() => {
    formik.setValues({
      title: oneData?.title,
      price: oneData?.price,
      category: oneData?.category,
      description: oneData?.description,
      image: oneData?.image
    })
  }, [oneData])
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      category: "",
      description: '',
      image: ''
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .required('Required'),
      category: Yup.string()
        .required('Required'),
      description: Yup.string()
        .required('Required'),
      image: Yup.string()
        .required('Required'),
      price: Yup.number()
        .required('Required'),
    }),
    onSubmit: async (values) => {
      dispatch(edit({ newData: values, id: oneData?.id }))
      formik.resetForm()
      handleCloseEditModal()

    },
  });
  return (

    <div className='modal' ref={editRef} >

      {
        oneDataLoading ? <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "25px" }}> <CircleLoader /></div> :
          <div className="modal-inside">
            <div className="modal-inside-top">
              <h3>Update Product</h3>
              <button onClick={() => handleCloseEditModal()}><IoMdClose />
              </button>
            </div>
            <form onSubmit={formik.handleSubmit} className="modal-inside-bottom">
              <div className="modal-inside-bottom-inputs">
                <label htmlFor="title">Title</label>
                <input id="title"
                  name="title"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className='error'>{formik.errors.title}</div>
                ) : null}

              </div>
              <div className="modal-inside-bottom-inputs">
                <label htmlFor="category">Category</label>
                <input id="category"
                  name="category"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                />
                {formik.touched.category && formik.errors.category ? (
                  <div className='error'>{formik.errors.category}</div>
                ) : null}

              </div>
              <div className="modal-inside-bottom-inputs">
                <label htmlFor="price">Price</label>
                <input id="price"
                  name="price"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price ? (
                  <div className='error'>{formik.errors.price}</div>
                ) : null}

              </div>
              <div className="modal-inside-bottom-inputs">
                <label htmlFor="image">Image</label>
                <input id="image"
                  name="image"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.image}
                />
                {formik.touched.image && formik.errors.image ? (
                  <div className='error'>{formik.errors.image}</div>
                ) : null}

              </div>
              <div className="modal-inside-bottom-inputs">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                >

                </textarea>
                {formik.touched.description && formik.errors.description ? (
                  <div className='error'>{formik.errors.description}</div>
                ) : null}
              </div>
              <div className="modal-inside-bottom-inputs">
                <button>Update Product</button>
              </div>
            </form>
          </div >
      }

    </div >
  )
}

export default EditModal
