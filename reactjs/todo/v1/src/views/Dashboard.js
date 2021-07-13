import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
// core components
import CustomButton from "../components/CustomButtons/Button";
import GridContainer from "../components/Grid/GridContainer";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import CardBody from "../components/Card/CardBody";
import Button from "../components/CustomButtons/Button";
import CustomTable from "../components/Table/CustomTable";
import styles from "../assets/dashboardStyle";
import AddTodoForm from "./AddTodoForm";
import { useMutation, useLazyQuery } from "@apollo/client";
import { GET_ALL_TODOS, DELETE_TODO } from "../graphql/queries";

const useStyles = makeStyles(styles);

const Main = styled.div`
  padding: 3rem 11rem;
  background: #99999926;
`;

export default function Dashboard() {
  const history = useHistory();
  const [getTodos, { data }] = useLazyQuery(GET_ALL_TODOS);
  const [deleteItem] = useMutation(DELETE_TODO);
  const formInitState = {
    title: "",
    person: "",
    status: "",
    date: null,
  };
  const [state, setState] = useState({
    formValues: formInitState,
    isAddTask: false,
    list: [],
  });
  const { formValues, isAddTask, list } = state;
  const classes = useStyles();

  useEffect(() => {
    getTodos({
      variables: { arcql: "*" },
    });
  }, []);

  useEffect(() => {
    setState({ ...state, list: formatData() });
  }, [data]);

  // handle change form values
  function handleChange(name, value) {
    setState({ ...state, formValues: { ...formValues, [name]: value } });
  }

  // add task
  function addTask(e, item = null) {
    setState({
      ...state,
      formValues: item ?? formValues,
      isAddTask: !isAddTask,
    });
  }

  function formatData() {
    return (data?.find?.edges || []).map((item) => ({
      ...item.node,
      id: item.node?.hypi?.id,
    }));
  }

  // update todo
  function updateTodo(rowId) {
    if (list?.length > 0) {
      const updateItem = list.filter((x) => x.id === rowId)?.[0];
      addTask(null, updateItem);
    }
  }

  // delete todo
  function deleteTodo(rowId) {
    deleteItem({
      variables: { arcql: `hypi.id = '${rowId}'` },
    });
    setState({ ...state, list: list?.filter((x) => x.id !== rowId) });
  }

  // table list columns
  const columns = [
    {
      title: "Task title",
      key: "title",
    },
    {
      title: "Person",
      key: "person",
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
                  onClick={() => updateTodo(rowData?.id)}
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
                  onClick={() => deleteTodo(rowData.id)}
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

  function logout() {
    window.localStorage.clear();
    history.push("/login");
  }

  return (
    <Main>
      <AddTodoForm
        isOpen={isAddTask}
        handleModal={addTask}
        onChange={handleChange}
        stateDate={formValues}
      />
      <CustomButton
        style={{ float: "right" }}
        className={classes.loginBtn}
        onClick={logout}
        color="rose"
      >
        Logout
      </CustomButton>
      <GridContainer>
        <Card>
          <CardHeader color="info">
            <h4 className={classes.cardTitleWhite}>Todo list</h4>
          </CardHeader>
          <CardBody>
            <Button onClick={addTask} size="sm" color="info">
              Add Task
            </Button>
            <CustomTable columns={columns} data={list} />
          </CardBody>
        </Card>
      </GridContainer>
    </Main>
  );
}
