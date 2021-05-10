import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { toBase64 } from '../utils';

import { Box, P, Input, Image, Button } from './UI';
import InputError from './InputError';

const validationSchema = yup.object({
  username: yup.string('Enter a user name').required('A user name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('An email is required'),
  password: yup
    .string('Enter a password')
    .min(8, 'Password should be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      `Password requires at least one lower case character one uppercase, 
        one digit and one special character`,
    )
    .required('Password is required'),
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

const SignUpForm = () => {
  const [image, setImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      image: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const payload = {
        username: values.username,
        email: values.email,
        password: values.password,
        gender: values.gender,
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
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
        <Box>
          <P>Username</P>
          <Input
            type="text"
            name="username"
            placeholder="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            borderColor={formik.touched.email && formik.errors.email && 'warning'}
          />
          {formik.touched.username && formik.errors.username && (
            <InputError error={formik.touched.username && formik.errors.username} />
          )}
        </Box>
        <Box>
          <P>Email</P>
          <Input
            type="email"
            name="email"
            placeholder="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            borderColor={formik.touched.email && formik.errors.email && 'warning'}
          />
          {formik.touched.email && formik.errors.email && (
            <InputError error={formik.touched.email && formik.errors.email} />
          )}
        </Box>
        <Box>
          <P>Password</P>
          <Input
            type="password"
            name="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            borderColor={formik.touched.password && formik.errors.password && 'warning'}
          />
          {formik.touched.password && formik.errors.password && (
            <InputError error={formik.touched.password && formik.errors.password} />
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
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default SignUpForm;
