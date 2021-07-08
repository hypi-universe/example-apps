import React from "react";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// core components
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardIcon from "../components/Card/CardIcon";
import CardBody from "../components/Card/CardBody";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomButton from "../components/CustomButtons/Button";
import { login } from "../generated/graphql";
// color
import { infoColor, grayColor } from "../assets/Theming";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  cardCategory: {
    color: grayColor[2],
    margin: "0",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
    textAlign: "left",
    fontFamily: "Roboto Helvetica Arial sans-serif",
  },
  link: { color: `${infoColor[0]} !important` },
  grid: { margin: "10px 0px 10px 0px" },
  loginBtn: { display: "flex", margin: "auto" },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  // const { loading, error, data } = Query.login({
  //   variables: { username: "atiqmasood", password: "atiq123" },
  // });

  // handle login
  function handleLogin() {
    history.push("/dashboard");
  }

  return (
    <Container className={classes.paper} component="main" maxWidth="sm">
      <Card>
        <CardHeader stats icon>
          <CardIcon color="info">
            <LockOutlinedIcon />
          </CardIcon>
          <h4 className={classes.cardCategory}>Hypi Todo example login</h4>
        </CardHeader>
        <CardBody>
          <form>
            <CustomInput
              required
              inputprops={{ autoFocus: true }}
              labeltext="Email address"
              type="email"
              name="email"
              formcontrolprops={{
                fullWidth: true,
              }}
            />
            <CustomInput
              required
              labeltext="Password"
              id="password"
              type="password"
              name="password"
              formcontrolprops={{
                fullWidth: true,
              }}
            />
            <CustomButton
              className={classes.loginBtn}
              onClick={handleLogin}
              color="info"
            >
              Login
            </CustomButton>
          </form>
        </CardBody>
      </Card>
      <CssBaseline />
    </Container>
  );
}
