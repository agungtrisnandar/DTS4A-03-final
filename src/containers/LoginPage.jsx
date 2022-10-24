import React, {useState} from "react";

// import LoginForm from "../components/Auth/LoginForm";
import {Box, Divider, Typography, TextField} from "@mui/material"
import { Container } from "@mui/system";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { Icon } from "@iconify/react";
import { Stack, Button, IconButton } from "@mui/material";

import { register } from "../authentication/firebase";

const RootStyle = styled("div")({
    background: "rgb(213, 235, 250 )",
    height: "100vh",
    display: "grid",
    placeItems: "center",
    fontFamily: "Poppins"
});
  
const HeadingStyle = styled(Box)({
    textAlign: "center",
});
  
const ContentStyle = styled("div")({
    maxWidth: 480,
    padding: 25,
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    background: "#fff",
    variant: 'rounded'
});

let easing = [0.6, -0.05, 0.01, 0.99];

const animate = {
    opacity: 1,
    y: 0,
    transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
    },
};

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const formOnSubmitHandler = (evt) => {
    //     console.log('fire');
    //     evt.preventDefault();
    //     console.log('register');
    //     register(email,password);
    // };
    
    // const inputEmailOnChangeHandler = (evt) => {
    //     setEmail(evt.target.value);
    // };
    
    // const inputPasswordOnChangeHandler = (evt) => {
    //     setPassword(evt.target.value);
    // };

    return (
        <RootStyle>
            <Container maxWidth='sm' >
            <ContentStyle sx={{
                borderRadius : '10px'
            }}>
                <HeadingStyle >
                <Box>
                    <Link to="/">
                        <Box component="img" src="/logo.png" alt="logo" />
                    </Link>
                    
                </Box>
                    <Typography sx={{ color: "text.secondary", mb: 5 }}>
                        Login to your account
                    </Typography>
                </HeadingStyle>
                <Box>
                    <Stack direction="row" spacing={2}>
                        <IconButton
                            sx={{
                                border: "2px solid #ccc",
                                borderRadius: "5px",
                                padding: "0.5675rem",
                                flex: 1,
                            }}
                        >
                            <Icon icon="eva:google-fill" color="#DF3E30" width={22} height={22} />
                        </IconButton>
                        <IconButton
                        sx={{
                            border: "2px solid #ccc",
                            borderRadius: "5px",
                            padding: "0.5675rem",
                            flex: 1,
                        }}
                        >
                        <Icon
                            icon="eva:facebook-fill"
                            color="#1877F2"
                            width={22}
                            height={22}
                        />
                        </IconButton>
                        <IconButton
                        sx={{
                            border: "2px solid #ccc",
                            borderRadius: "5px",
                            padding: "0.5675rem",
                            flex: 1,
                        }}
                        >
                        <Icon
                            icon="eva:twitter-fill"
                            color="#1C9CEA"
                            width={22}
                            height={22}
                        />
                        </IconButton>
                    </Stack>
                </Box>
                <Divider sx={{ my: 3 }}>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    OR
                    </Typography>
                </Divider>
                <form>
                    <Box
                    
                    animate={{
                        transition: {
                        staggerChildren: 0.55,
                        },
                    }}
                    >
                        <Box
                            sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 3,
                            }}
                        
                            initial={{ opacity: 0, y: 40 }}
                            animate={animate}
                        >
                            <TextField
                            fullWidth
                            autoComplete="username"
                            type="email"
                            label="Email Address"
                            
                            />

                            <TextField
                            fullWidth
                            autoComplete="current-password"
                            type="password"
                            label="Password"
                            />
                        </Box>

                        <Box
                        
                            initial={{ opacity: 0, y: 20 }}
                            animate={animate}
                        >
                            <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="space-between"
                            sx={{ my: 2 }}
                            >
                            
                            </Stack>

                            <Button
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            >
                            Login
                            </Button>
                        </Box>
                    </Box>
                </form>
                <Typography
                    
                    variant="body2"
                    align="center"
                    sx={{ mt: 3 }}
                >
                    Don’t have an account?{" "}
                    <Link variant="subtitle2" to="/register">
                    Sign up
                    </Link>
                </Typography>
                </ContentStyle>
            </Container>
        </RootStyle>
    );
};

export default LoginPage;
