import { VStack, Box, Grid, GridItem } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import NameForm from "./NameForm";
import EditSections from "./EditSections";
import EmailForm from "./EmailForm";
import { countries } from "countries-list";
import PhoneForm from "./PhoneForm";
import AddressForm from "./AddressForm";
import ScrollableEditSideBar from "./ScrollableEditSideBar";

function ProfileEdit() {
  let navigate = useNavigate();
  const [openSection, setOpenSection] = useState("");

  const countriesData = useMemo(() => {
    let phoneDDD = [];
    let countryNameList = [];

    for (const key in countries) {
      countryNameList.push(countries[key].name);
      phoneDDD.push({
        name: `${countries[key].name} +${countries[key].phone}`,
      });
    }

    return { phoneDDD, countryNameList };
  }, []);

  const goBackHandler = () => {
    navigate("../profile/");
  };

  return (
    <Box bg="black">
      <Grid
        color="white"
        alignItems="flex-start"
        width="900px"
        margin="0px auto"
        gridTemplateAreas="'icon icon' 'nameSec nameSec' 'sideBar emailSec' 'empty phoneSec' 'empty addressSec'"
      >
        <Box
          onClick={goBackHandler}
          height="150"
          size="35px"
          opacity="1"
          gridArea="icon"
          _hover={{ cursor: "pointer" }}
          as={BsArrowLeft}
        ></Box>
        <GridItem gridArea="nameSec">
          <EditSections
            refKey="nameSec"
            CollapseForm={NameForm}
            openSection={openSection}
            onOpenSection={setOpenSection}
            variant="noTitle"
            title="Mr Lucas Dominato"
          ></EditSections>
        </GridItem>
        <GridItem gridArea="sideBar" position="sticky" paddingTop="100px" width="235.5px" top="50px">
          <ScrollableEditSideBar />
        </GridItem>

        <GridItem gridArea="emailSec">
          <EditSections
            refKey="emailSec"
            CollapseForm={EmailForm}
            openSection={openSection}
            onOpenSection={setOpenSection}
            variant="normal"
            title="EMAIL"
          ></EditSections>
        </GridItem>
        <GridItem gridArea="phoneSec">
          <EditSections
            refKey="phoneSec"
            CollapseForm={PhoneForm}
            openSection={openSection}
            onOpenSection={setOpenSection}
            variant="normal"
            title="PHONE"
            collapseFormProps={{ countriesData: countriesData.phoneDDD }}
          ></EditSections>
        </GridItem>
        <GridItem gridArea="addressSec">
          <EditSections
            refKey="addressSec"
            CollapseForm={AddressForm}
            openSection={openSection}
            onOpenSection={setOpenSection}
            variant="normal"
            title="ADDRESS"
          ></EditSections>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default ProfileEdit;
