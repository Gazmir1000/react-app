import react, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
  Button,
  makeStyles,
} from "@material-ui/core";
import { getStudents, deleteStudent } from "../Service/api";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});

const AllStudents = () => {
  const [students, setStudents] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllStudents();
  }, []);

  const deleteStudentData = async (id) => {
    await deleteStudent(id);
    getAllStudents();
  };

  const getAllStudents = async () => {
    let response = await getStudents();
    setStudents(response.data);
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {students.map((student) => (
          <TableRow className={classes.row} key={student.id}>
            <TableCell>{student._id}</TableCell>{" "}
            {/* change it to student.id to use JSON Server */}
            <TableCell>{student.name}</TableCell>
            <TableCell>{student.username}</TableCell>
            <TableCell>{student.email}</TableCell>
            <TableCell>{student.phone}</TableCell>
            <TableCell>
              <Button
                color="primary"
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${student._id}`}
              >
                Edit
              </Button>{" "}
              <Button
                color="secondary"
                variant="contained"
                onClick={() => deleteStudentData(student._id)}
              >
                Delete
              </Button>{" "}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllStudents;
