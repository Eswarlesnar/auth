import {  forwardRef } from "react";
import MuiAlert from '@mui/material/Alert';

const AlertSnackBar = forwardRef(function Alert({children , ...rest}, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...rest}>{children}</MuiAlert>;
  });

export default AlertSnackBar