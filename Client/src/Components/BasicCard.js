import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function BasicCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  let { userData = {}, classname = "" } = props;
  let { name = "", gender = "", active = "" } = userData;
  console.log(props);

  const handleUpdate = (e) => {
    console.log(e, userData);

    let name = document.getElementById("card-name").innerHTML;
    let status = document.getElementById("card-status").innerHTML;
    console.log(name, status);
    let payload = {
      ...userData,
      status: status == "active" ? true : false,
      name
    };
    props.handleUpdateUser(userData.email, payload);
  };

  return (
    <Card
      className={(classes.root, classname)}
      variant="outlined"
      className="basic-card"
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          contentEditable={true}
          id="card-name"
        >
          {name}
        </Typography>
        <Typography
          className={classes.pos}
          color="textSecondary"
          contentEditable={true}
          id="card-status"
        >
          {active ? "active" : "inactive"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={(e) => handleUpdate(e)}>
          Update
        </Button>
      </CardActions>
    </Card>
  );
}
