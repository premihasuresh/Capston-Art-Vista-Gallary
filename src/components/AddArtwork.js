import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const AddArtwork = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await axios.post('http://localhost:5000/api/artworks', values);
      alert('Artwork added successfully');
    } catch (error) {
      console.error('Error adding artwork', error);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <h1>Add Artwork</h1>
      <Formik
        initialValues={{ title: '', description: '', price: '', artistName: '' }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="title">Title</label>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="div" />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Field type="text" name="description" />
              <ErrorMessage name="description" component="div" />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <Field type="number" name="price" />
              <ErrorMessage name="price" component="div" />
            </div>
            <div>
              <label htmlFor="artistName">Artist Name</label>
              <Field type="text" name="artistName" />
              <ErrorMessage name="artistName" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Add Artwork
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddArtwork;