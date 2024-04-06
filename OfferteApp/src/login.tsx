import { useState } from 'react'

import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import ErrorPage from "./error-page.tsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Navbar from './navbar';




function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState<boolean>(false);

    async function handleSubmit() {
        setIsLoading(true);
        if (username === "" || password === "") {
            toast({
                variant: "destructive",
                title: "incomplete",
                description: "Not all fields have been filled in yet",
            });
            setIsLoading(false);
        } else {
            try {
                const account = await fetch(API_BASE_URL + "/api/Auth/Login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name: username, password: password }),
                }).then((account) => account.json());
                if (account !== undefined) {
                    localStorage.setItem("username", account.name);
                    localStorage.setItem("Id", account.accountId);
                    localStorage.setItem("Token", account.token);
                    localStorage.setItem("Class", account.class);
                    document.cookie = `jwtToken=${account.token}`;
                }
            } catch {
                toast({
                    variant: "destructive",
                    title: t("toast.errortitle"),
                    description: t("toast.wrong_credentials_error"),
                });
            } finally {
                setIsLoading(false);
            }
        }
    }

    return (
        <div>
            <Navbar />

            <div className="center">
                <h1>Log in</h1>
                <form action="action_page.php" method="post">

                    <div>
                        <input type="text" placeholder="Enter Username" name="uname" required onChange={(e) => setUsername(e.currentTarget.value)}></input><br></br>

                        <input type="password" placeholder="Enter Password" name="psw" required onChange={(e) => setPassword(e.currentTarget.value)}></input><br></br>

                        <button type="submit" onClick={handleSubmit}>Login</button>
                    </div>

                    {/* <div className="container">
                        <span className="psw">Forgot <a href="#">password?</a></span>
                    </div> */}
                </form>

            </div>
        </div>
    )
}

export default LogIn;