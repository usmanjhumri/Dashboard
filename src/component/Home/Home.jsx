
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useForm } from "react-hook-form";
import { ErrorText } from "../helper/ErrorTestDisplayer";
// import { useDispatch, useSelector } from "react-redux";
// import { signUpHandle } from "../../RTK/slice/Slice";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
const Home = () => {
    // const { signUp } = useSelector((store) => store.mainSlice);
    // const dispatch = useDispatch();

    const {
        register,
        // handleSubmit,

        formState: { errors },
    } = useForm();
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }


    return (
        <div>
            <Container component="main" maxWidth="sm" >
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >

                    <Typography component="h1" variant="h3">
                        DocuSign
                    </Typography>
                    <Box
                        id="signUp"
                        component="form"
                        noValidate
                        onSubmit={(e) => e.preventDefault()}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    error={errors.firstName}
                                    {...register("firstName", {
                                        required: true,
                                        pattern: /^[A-Za-z]{1,}$/,
                                    })}
                                />
                                {errors.firstName && (
                                    <>
                                        {errors.firstName.type === "pattern"
                                            ? ErrorText("Minimum Length 3 characters!")
                                            : ErrorText("First Name is Required!")}
                                    </>
                                )}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    error={errors.lastName}
                                    {...register("lastName", {
                                        required: true,
                                        pattern: /^[A-Za-z]{1,}$/,
                                    })}
                                />
                                {errors.lastName && (
                                    <>
                                        {errors.lastName.type === "pattern"
                                            ? ErrorText("Minimum Length 3 characters!")
                                            : ErrorText("Last Name is Required!")}
                                    </>
                                )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    error={errors.email}
                                    {...register("email", {
                                        required: true,
                                        pattern:
                                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    })}
                                />
                                {errors.email && (
                                    <>
                                        {errors.email.type === "pattern"
                                            ? ErrorText("Enter a valid email address!")
                                            : ErrorText("Email Address is Required!")}
                                    </>
                                )}
                            </Grid>




                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    error={errors.password}
                                    {...register("password", { required: true, minLength: 8 })}
                                />
                                {errors.password && (
                                    <>
                                        {errors.password.type === "password"
                                            ? ErrorText("Minimum Length 8 Characters")
                                            : ErrorText("Password is Requird")}
                                    </>
                                )}
                            </Grid>

                        </Grid>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 3

                        }}>
                            <Button
                                type="submit"
                                variant="button"
                                fullWidth
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    // px: 5,
                                    py: 2,
                                    color: "#FFFFFF",
                                    fontWeight: "800",
                                    // clipPath:
                                    //     "polygon(21% 0, 94% 0, 100% 20%, 79% 100%, 6% 100%, 0 80%)",
                                    background:
                                        " radial-gradient(241.67% 3206.67% at -4.58% -26.67%, #AD00FF 8.51%, #0029FF 90%)",
                                    cursor: "pointer",
                                }}
                            >
                                Connect
                            </Button>
                            <Button
                                type="submit"
                                variant="button"
                                fullWidth
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    // px: 5,
                                    py: 2,
                                    color: "#FFFFFF",
                                    fontWeight: 800,
                                    // clipPath:
                                    //     "polygon(21% 0, 94% 0, 100% 20%, 79% 100%, 6% 100%, 0 80%)",
                                    background:
                                        " radial-gradient(241.67% 3206.67% at -4.58% -26.67%, #AD00FF 8.51%, #0029FF 90%)",
                                    cursor: "pointer",
                                }}
                            >
                                Disconnect
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default Home;
