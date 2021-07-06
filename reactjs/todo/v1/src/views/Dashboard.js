import React, { useState } from "react";
import styled from "styled-components";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
// core components
import GridContainer from "../components/Grid/GridContainer";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardBody from "../components/Card/CardBody";
import Button from "../components/CustomButtons/Button";
import CustomTable from "../components/Table/CustomTable";
import styles from "../assets/dashboardStyle";
import AddTodoForm from "./AddTodoForm";
import { useProductsQuery } from "../generated/graphql";

const useStyles = makeStyles(styles);

const Main = styled.div`
  padding: 3rem 11rem;
  background: #99999926;
`;

export default function Dashboard() {
  const { loading, error, data } = useProductsQuery({
    variables: { arcql: "*" },
  });
  console.log("data>>>", data);
  const classes = useStyles();
  const [isAddTask, setTask] = useState(false);

  // add task
  function addTask() {
    setTask(!isAddTask);
  }

  // table list columns
  const columns = [
    {
      title: "ID",
      key: "id",
    },
    {
      title: "Task title",
      key: "title",
    },
    {
      title: "Person",
      key: "person",
    },
    {
      title: "Date",
      key: "date",
    },
    {
      title: "Status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (rowData) => {
        return (
          <React.Fragment>
            <Tooltip title={"Edit"}>
              <span>
                <Button
                  onClick={() => console.log("edit")}
                  color="success"
                  justIcon
                  round
                  size="sm"
                >
                  <EditIcon />
                </Button>
              </span>
            </Tooltip>
            <Tooltip title={"Delete"}>
              <span>
                <Button
                  size="sm"
                  color="danger"
                  justIcon
                  round
                  onClick={() => console.log("delete")}
                >
                  <DeleteIcon />
                </Button>
              </span>
            </Tooltip>
          </React.Fragment>
        );
      },
    },
  ];
  const todoList = [
    {
      id: 1,
      title: "Test 1",
      person: "Atiq",
      date: "05-July-2021",
      status: "Done",
    },
    {
      id: 1,
      title: "Test 1",
      person: "Atiq",
      date: "05-July-2021",
      status: "Done",
    },
    {
      id: 1,
      title: "Test 1",
      person: "Atiq",
      date: "05-July-2021",
      status: "Done",
    },
    {
      id: 1,
      title: "Test 1",
      person: "Atiq",
      date: "05-July-2021",
      status: "Done",
    },
  ];

  return (
    <Main>
      <AddTodoForm isOpen={isAddTask} handleModal={addTask} />
      <GridContainer>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Todo list</h4>
          </CardHeader>
          <CardBody>
            <Button onClick={addTask} size="sm" color="info">
              Add Task
            </Button>
            <CustomTable columns={columns} data={todoList} />
          </CardBody>
        </Card>
      </GridContainer>
    </Main>
  );
}
