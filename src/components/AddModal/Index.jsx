import React from 'react'
import './Index.scss'
import { IoMdClose } from 'react-icons/io'
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { post } from '../../redux/slices/dataSlices';
import { useDataContext } from '../../context/context';
import { nanoid } from 'nanoid';
const AddModal = () => {
  const { addRef, handleCloseAddModal } = useDataContext()

  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      category: '',
      description: '',
      image: ""
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
      dispatch(post(values))
      formik.resetForm()
      handleCloseAddModal()

    },
  });
  return (
    <div className='modal' ref={addRef} >

      <div className="modal-inside">
        <div className="modal-inside-top">
          <h3>Add Product</h3>
          <button onClick={() => handleCloseAddModal()}><IoMdClose />
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
            <button>Add Product</button>
          </div>
        </form>
      </div >
    </div >
  )
}

export default AddModal
