import React from "react";
// core components
import GridItem from "../components/Grid/GridItem";
import GridContainer from "../components/Grid/GridContainer";
import CustomInput from "../components/CustomInput/CustomInput";
import Button from "../components/CustomButtons/Button";
import CustomModal from "../components/CustomModal/CustomModal";

export default function AddTodoForm(props) {
  const { isOpen, handleModal } = props;

  // handle submit
  function onSubmit(data) {
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
            <Button
              key="save"
              onClick={onSubmit}
              size="sm"
              color="info"
            >
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
                formcontrolprops={{
                  fullWidth: true,
                }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                inputprops={{ autoFocus: true }}
                labeltext="Date"
                name="date"
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
