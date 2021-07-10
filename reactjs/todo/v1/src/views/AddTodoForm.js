import React from "react";
// core components
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
import CustomInput from "../components/CustomInput/CustomInput";
import Button from "../components/CustomButtons/Button";
import CustomModal from "../components/CustomModal/CustomModal";
import { useMutation } from "@apollo/client";
import { UPDATE_TODOS } from "../graphql/queries";

export default function AddTodoForm({
  onChange,
  stateDate,
  isOpen,
  handleModal,
}) {
  const [upsert] = useMutation(UPDATE_TODOS);
  const { title, person, status, id } = stateDate;

  function handleChange(e) {
    const { name, value } = e.target;
    onChange(name, value);
  }

  // handle submit
  function onSubmit() {
    let formValues = {
      title,
      person,
      date: null,
      status,
    };
    if (id) {
      // in update case
      formValues = { ...formValues, hypi: { id } };
    }
    upsert({
      variables: {
        values: {
          Todos: [formValues],
        },
      },
    });
    handleModal();
  }

  return (
    <div>
      <CustomModal
        isOpen={isOpen}
        handleToggle={handleModal}
        title={"Add Todo Task"}
        footer={
          <React.Fragment>
            <Button onClick={handleModal} key="cancel" size="sm" color="rose">
              Cancel
            </Button>
            <Button key="save" onClick={onSubmit} size="sm" color="info">
              save
            </Button>
          </React.Fragment>
        }
      >
        <form>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                inputprops={{ autoFocus: true }}
                labeltext="Title"
                name="title"
                value={title}
                onChange={handleChange}
                formcontrolprops={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                inputprops={{ autoFocus: true }}
                labeltext="Person"
                name="person"
                value={person}
                onChange={handleChange}
                formcontrolprops={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                inputprops={{ autoFocus: true }}
                labeltext="Status"
                name="status"
                value={status}
                onChange={handleChange}
                formcontrolprops={{
                  fullWidth: true,
                }}
              />
            </GridItem>
          </GridContainer>
        </form>
      </CustomModal>
    </div>
  );
}
