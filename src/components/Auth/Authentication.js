import React, { useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import stylesheet from "./Authentication.module.css";

const Authentication = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        setIsLoading(true);
        let url;
        if (!isLogin) {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC_useXg33IciPohzvz4_4opobLCfElzsg";
        } else {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC_useXg33IciPohzvz4_4opobLCfElzsg";
        }
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        throw new Error(data.error.message);
                    });
                }
            })
            .then((data) => {
                console.log("Authenticated successfully. idToken:", data.idToken);
            })
            .catch((err) => {
                alert(err.message);
            });

    };

    return (
        <Container>
            <div className={stylesheet["form-container"]}>
                <h2 style={{ marginBottom: "20px" }}>
                    {isLogin ? "Login" : "Sign Up"}
                </h2>
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            required
                            ref={emailInputRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            required
                            ref={passwordInputRef}
                        />
                    </Form.Group>
                    <Form.Group>
                        {!isLoading && (
                            <Button className={stylesheet.loginButton}>
                                {isLogin ? "Login" : "Create Account"}
                            </Button>
                        )}
                        {isLoading && <p>Sending Request...</p>}
                    </Form.Group>
                    <Button
                        type="button"
                        className={stylesheet.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin
                            ? "Create new account"
                            : "Login with existing account"}
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default Authentication;
