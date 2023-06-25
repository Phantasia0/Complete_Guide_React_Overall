import React, { useContext } from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  const AuthCtx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h2>Welcome back!</h2>
      <Button onClick={AuthCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
