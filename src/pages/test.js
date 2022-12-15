// import * as React from 'react'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import CssBaseline from '@mui/material/CssBaseline'
// import TextField from '@mui/material/TextField'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import Checkbox from '@mui/material/Checkbox'
// import Link from '@mui/material/Link'
// import Grid from '@mui/material/Grid'
// import Box from '@mui/material/Box'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
// import Typography from '@mui/material/Typography'
// import Container from '@mui/material/Container'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { RegisterUser } from '../services/AuthServices'

// const Register = ({ setUser, toggleAuthenticated }) => {
//   let navigate = useNavigate()
//   const [formValues, setFormValues] = useState({
//     customer_name: '',
//     customer_address: '',
//     customer_email: '',
//     password: '',
//     confirmPassword: ''
//   })

//   const theme = createTheme()

//   const handleChange = (e) => {
//     setFormValues({ ...formValues, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     await RegisterUser({
//       customer_name: formValues.customer_name,
//       customer_address: formValues.customer_address,
//       customer_email: formValues.customer_email,
//       customer_password: formValues.password
//     })
//     setFormValues({
//       customer_name: '',
//       customer_address: '',
//       customer_email: '',
//       password: '',
//       confirmPassword: ''
//     })
//     navigate('/login')
//   }

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center'
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box
//             component="form"
//             noValidate
//             onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   onChange={handleChange}
//                   name="customer_name"
//                   type="text"
//                   placeholder="Amy Adams"
//                   value={formValues.customer_name}
//                   required
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   onChange={handleChange}
//                   name="customer_address"
//                   type="text"
//                   placeholder="1011 sunny side Harlingen, Texas"
//                   value={formValues.customer_address}
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   onChange={handleChange}
//                   name="customer_email"
//                   type="email"
//                   placeholder="example@example.com"
//                   value={formValues.customer_email}
//                   required
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   onChange={handleChange}
//                   type="password"
//                   name="password"
//                   value={formValues.password}
//                   required
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   onChange={handleChange}
//                   type="password"
//                   name="confirmPassword"
//                   value={formValues.confirmPassword}
//                   required
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <FormControlLabel
//                   control={
//                     <Checkbox value="allowExtraEmails" color="primary" />
//                   }
//                   label="I want to receive inspiration, marketing promotions and updates via email."
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               disabled={
//                 !formValues.customer_email ||
//                 (!formValues.password &&
//                   formValues.confirmPassword === formValues.password)
//               }
//             >
//               Register
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   )
// }
// export default Register
