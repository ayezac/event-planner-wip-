import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Box, Page, Input, Button } from '../components/UI';
import InputError from '../components/InputError';

const validationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be at least 8 characters')
    .required('Password is required'),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.log(values);
    },
  });

  return (
    <Page p="4" display="flex" flexDirection="column" justifyContent="center" height="100vh">
      <Box backgroundColor="primary" width="450px" height="auto" borderRadius="5">
        <form onSubmit={formik.handleSubmit}>
          <Box>
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
          <Box pt="0" style={{ textAlign: 'center' }}>
            <Button type="submit" borderColor="white" hoverColor="secondary">
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Page>
  );
};

export default Login;
