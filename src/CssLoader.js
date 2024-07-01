import React, { forwardRef } from 'react';
import cx from 'clsx';
import { Box, MantineLoaderComponent } from '@mantine/core';
import classes from './CssLoader.module.css';

// export const CssLoader: MantineLoaderComponent = forwardRef(({ className, ...others }, ref) => (
//   <Box component="span" className={cx(classes.loader, className)} {...others} ref={ref} />
// ));

const CssLoader = forwardRef(({ className, ...others }, ref) => {
  return (
    <Box component="span" className={cx('loader', className)} {...others} ref={ref} />
  );
});

export default CssLoader;