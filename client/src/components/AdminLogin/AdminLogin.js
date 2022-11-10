import React from "react";
import { Button, Typography } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

function AdminLogin() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <Typography>Admin Login</Typography>
      <Button variant="purple" onClick={loginWithRedirect}>
        Login
      </Button>
    </div>
  );
}

export default AdminLogin;
