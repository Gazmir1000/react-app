import react, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { addCategory } from "../Service/categoryApi";
import { useHistory } from "react-router-dom";

const initialValue = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const AddCategory = () => {
  const [category, setCategory] = useState(initialValue);
  const { year } = category;
  const classes = useStyles();
  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const addCategoryDetails = async () => {
    await addCategory(category);
    history.push("./all");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add Category</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Year of the student</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="year"
          value={year}
          id="my-input"
        />
      </FormControl>

      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addCategoryDetails()}
        >
          Add Category
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default AddCategory;
