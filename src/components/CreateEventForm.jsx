import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { toBase64 } from '../utils';

import { Box, P, Input, TextArea, Image, Button, H4 } from './UI';
import InputError from './InputError';

const validationSchema = yup.object({
  name: yup.string('Add a name for your event').required('An event name is required'),
  tagLine: yup.string('Add a tag-line for your event').max(40, 'Too long').required('Required'),
  desc: yup.string('Add a description for your event').required('An event description is required'),
  location: yup.string('Add a location for your event').required('An event location is required'),
  date: yup.date('Add a date for your event').required('An event date is required'),
  time: yup.string('Add a time for your event').required('An event time is required'),
  image: yup
    .mixed()
    .test(
      'type',
      'Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .png',
      (value) => {
        if (!value) return true;
        return (
          value &&
          (value.type === 'image/jpeg' ||
            value.type === 'image/bmp' ||
            value.type === 'image/png' ||
            value.type === 'application/pdf')
        );
      },
    )
    .test('fileSize', 'The file is too large', (value) => {
      if (!value) return true;
      return value?.size <= 250 * 1024;
    }),
});

const CreateEventForm = () => {
  const [image, setImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      tagLine: '',
      desc: '',
      location: '',
      date: '',
      time: '',
      image: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const payload = {
        name: values.name,
        tagLine: values.tagLine,
        desc: values.desc,
        location: values.location,
        date: values.date,
        time: values.time,
        image: values.image,
      };

      // eslint-disable-next-line no-console
      console.log('payload', payload);
    },
  });

  const handleImageChange = async (e) => {
    formik.setFieldValue('image', e.currentTarget.files[0]);
    const formattedImage = await toBase64(e.currentTarget.files[0]);
    setImage(formattedImage);
  };

  return (
    <Box>
      <H4>Create An Event</H4>
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Box>
          <P>Name of the event</P>
          <Input
            width="80%"
            type="text"
            name="name"
            placeholder="Event Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            borderColor={formik.touched.name && formik.errors.name && 'warning'}
          />
          {formik.touched.name && formik.errors.name && (
            <InputError error={formik.touched.name && formik.errors.name} />
          )}
        </Box>
        <Box>
          <P>Add a tagline for your event</P>
          <Input
            width="80%"
            type="text"
            name="tagLine"
            placeholder="Tagline"
            value={formik.values.tagLine}
            onChange={formik.handleChange}
          />
        </Box>
        <Box>
          <P>Describe the event</P>
          <TextArea
            type="text"
            name="desc"
            rows="8"
            cols="55"
            placeholder="Describe the event"
            value={formik.values.desc}
            onChange={formik.handleChange}
            borderColor={formik.touched.desc && formik.errors.desc && 'warning'}
          />
          {formik.touched.desc && formik.errors.desc && (
            <InputError error={formik.touched.desc && formik.errors.desc} />
          )}
        </Box>
        <Box>
          <P>Location of the event</P>
          <Input
            width="80%"
            type="text"
            name="location"
            placeholder="Name of the event"
            value={formik.values.location}
            onChange={formik.handleChange}
            borderColor={formik.touched.location && formik.errors.location && 'warning'}
          />
          {formik.touched.location && formik.errors.location && (
            <InputError error={formik.touched.location && formik.errors.location} />
          )}
        </Box>
        <Box>
          <P>Date of the event</P>
          <Input
            width="80%"
            type="date"
            name="date"
            placeholder="Date of the event"
            value={formik.values.date}
            onChange={formik.handleChange}
            borderColor={formik.touched.date && formik.errors.date && 'warning'}
          />
          {formik.touched.date && formik.errors.date && (
            <InputError error={formik.touched.date && formik.errors.date} />
          )}
        </Box>
        <Box>
          <P>Time of the event</P>
          <Input
            width="80%"
            type="time"
            name="time"
            placeholder="Time of the event"
            value={formik.values.time}
            onChange={formik.handleChange}
            borderColor={formik.touched.time && formik.errors.time && 'warning'}
          />
          {formik.touched.time && formik.errors.time && (
            <InputError error={formik.touched.date && formik.errors.time} />
          )}
        </Box>
        <Box>
          <P>Image</P>

          {image && (
            <Box height="200px">
              <Image maxHeight="190px" src={image} alt="uploaded_user" />
              <P gutterBottom>{formik.values.image.name}</P>
            </Box>
          )}

          <Input
            width="80%"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
            borderColor={formik.touched.image && formik.errors.image && 'warning'}
          />
          {formik.touched.image && formik.errors.image && (
            <InputError error={formik.touched.image && formik.errors.image} />
          )}
        </Box>
        <Box>
          <Button
            type="submit"
            backgroundColor="primary"
            color="white"
            borderRadius="2"
            borderColor="white"
          >
            Create
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CreateEventForm;
