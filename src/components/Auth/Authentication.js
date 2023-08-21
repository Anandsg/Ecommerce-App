import React, { useContext, useRef, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import stylesheet from "./Authentication.module.css";
import AuthContext from "../Store/AuthContext";

const Authentication = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authcontext = useContext(AuthContext);
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
        if (isLogin) {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDaORViGjxhCTOkqW655oclUgQ3u-qmK0c";
        } else {
            url =
                "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDaORViGjxhCTOkqW655oclUgQ3u-qmK0c";
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
                // console.log("Authenticated successfully. idToken:", data.idToken);
                console.log(data);
                authcontext.login(data.idToken)

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
                            <Button type='submit'
                                className={stylesheet.loginButton}>
                                {isLogin ? "Login" : "Create Account"}
                            </Button>
                        )}
                        {/* {isLoading && <p>Sending Request...</p>} */}
                        {isLoading && (
                            <Button className={stylesheet.refreshing}>
                                Sending Requerst...
                            </Button>
                        )}
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
