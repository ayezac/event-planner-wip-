import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Box, Page, Input, Button, H4, H2, P, Image, NavLinkButton, Icon } from '../components/UI';
import InputError from '../components/InputError';

const toBase64 = (image) =>
  new Promise((resolve, reject) => {
    const blob = new Blob([image], { type: 'text/plain' });
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

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

const UserForm = () => {
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
    <Page backgroundColor="grayLighter" p="4" display="flex">
      <Box flex="0.75" backgroundColor="primary" height="100%">
        <Box>
          <NavLinkButton to="/app/explore" p="3" backgroundcolor="white" color="primary">
            Home
          </NavLinkButton>
        </Box>
        <Box
          height="85%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Icon icon="calendar-day" fontSize="12" />
          <H2 color="white">My Event Planner</H2>
        </Box>
      </Box>
      <Box flex="1">
        <H4 pl="5" pt="5" color="primary">
          Sign Up Here
        </H4>
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
      </Box>
    </Page>
  );
};

export default UserForm;
