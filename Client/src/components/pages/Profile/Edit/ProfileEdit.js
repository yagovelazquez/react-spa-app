import { Box, Grid, GridItem, useMediaQuery } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState, useMemo, useRef, useEffect } from "react";
import NameForm from "./NameForm";
import EditSections from "./EditSections";
import EmailForm from "./EmailForm";
import { countries } from "countries-list";
import PhoneForm from "./PhoneForm";
import AddressForm from "./AddressForm";
import ScrollableEditSideBar from "./ScrollableEditSideBar";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import useUser from "../../../Hooks/useUser";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import LanguageSec from "./LanguageSec";
import { Waypoint } from "react-waypoint";
import SubscriptionSec from "./SubscriptionSec";
import AnimatedPage from "./../../../commom/AnimatedPage";

function ProfileEdit() {

  useEffect(()=> {
    if (!user) {
      navigate("../account/login")
    } 
  })

  let navigate = useNavigate();
  const [openSection, setOpenSection] = useState("");
  const [isLargerThan960] = useMediaQuery("(min-width: 960px)");
  const { user } = useUser();
  const sectionRef = useRef();

  const countriesData = useMemo(() => {
    let phoneDDD = [];
    let countryNameList = [];

    for (const key in countries) {
      countryNameList.push({ name: countries[key].name });
      phoneDDD.push({
        name: `${countries[key].name} +${countries[key].phone}`,
        value: `+${countries[key].phone}`,
      });
    }

    return { phoneDDD, countryNameList };
  }, []);

  const goBackHandler = () => {
    navigate("../profile/");
  };

  const sectionsList = [
    {
      refKey: "emailSec",
      CollapseForm: EmailForm,
      openSection: openSection,
      onOpenSection: setOpenSection,
      variant: "normal",
      initialDataVariable: "emails",
      title: "EMAIL",
      user: user,
      fullQueryKey: [queryKeys.user, queryKeys.email],
      queryUrl: `${serverUrl}/user/edit/email`,
      infoVariables: {
        primary: "primaryEmail",
        displayedInfo: ["email"],
      },
    },
    {
      refKey: "phoneSec",
      CollapseForm: PhoneForm,
      openSection: openSection,
      onOpenSection: setOpenSection,
      initialDataVariable: "phones",
      variant: "normal",
      title: "PHONE",
      user: user,
      collapseFormProps: { countriesData: countriesData.phoneDDD },
      fullQueryKey: [queryKeys.user, queryKeys.phone],
      queryUrl: `${serverUrl}/user/edit/phone`,
      infoVariables: {
        displayedInfo: ["countryCode", "phone"],
        primary: "primaryPhone",
      },
    },
    {
      refKey: "addressSec",
      CollapseForm: AddressForm,
      openSection: openSection,
      onOpenSection: setOpenSection,
      initialDataVariable: "addresses",
      variant: "normal",
      title: "ADDRESS",
      user: user,
      fullQueryKey: [queryKeys.user, queryKeys.address],
      collapseFormProps: { countriesData: countriesData.countryNameList },
      queryUrl: `${serverUrl}/user/edit/address`,
      infoVariables: {
        displayedInfo: ["street", "city", "state", "country"],
        primary: "primaryAddress",
      },
      joinSeparator: ", ",
    },
    {
      refKey: "nameSec",
      CollapseForm: NameForm,
      openSection: openSection,
      onOpenSection: setOpenSection,
      initialDataVariable: "title",
      variant: "noTitle",
      title: `${user.name} ${user.lastName}`,
      user: user,
      fullQueryKey: [queryKeys.user, queryKeys.title],
      queryUrl: `${serverUrl}/user/edit/title`,
    },
    {
      gridArea: "languageSec",
      formSec: true,
      Section: LanguageSec,
      props: { countryNameList: countriesData.countryNameList },
    },
    {
      gridArea: "subscriptionSec",
      formSec: true,
      Section: SubscriptionSec,
    },
  ];

  const enterHandler = (section) => {
    sectionRef?.current?.setSectionActive(section);
  };

  return (
    <Box bg="black">
      <AnimatedPage>
        <Grid
          color="white"
          alignItems="flex-start"
          width={["100%", "660px", "900px"]}
          padding={["0 20px", 0]}
          margin="0px auto"
          gridTemplateAreas={[
            "'icon' 'sideBar' 'nameSec' 'emailSec' 'phoneSec' 'addressSec' 'languageSec' 'subscriptionSec' ",
            "'icon icon' 'nameSec nameSec' 'sideBar emailSec' 'empty phoneSec' 'empty addressSec'  'empty languageSec' 'empty subscriptionSec'",
          ]}
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
          {isLargerThan960 && (
            <GridItem
              gridArea="sideBar"
              position="sticky"
              paddingTop="100px"
              width="235.5px"
              top="50px"
            >
              <ScrollableEditSideBar ref={sectionRef} />
            </GridItem>
          )}

          {sectionsList.map((section) => {
            const { Section, props, formSec } = section;

            if (formSec) {
              return (
                <Waypoint
                  key={section.gridArea}
                  topOffset="150px"
                  bottomOffset="400px"
                  onEnter={() => {
                    enterHandler(section.gridArea);
                  }}
                >
                  <GridItem
                    ref={(ref) => ref}
                    id={section.gridArea}
                    borderBottom="1px solid gray"
                    gridArea={section.gridArea}
                  >
                    <Section {...props}></Section>
                  </GridItem>
                </Waypoint>
              );
            }
            return (
              <Waypoint
                key={section.refKey}
                bottomOffset="400px"
                topOffset="150px"
                onEnter={() => {
                  enterHandler(section.refKey);
                }}
              >
                <GridItem
                  ref={(ref) => ref}
                  id={section.refKey}
                  gridArea={section.refKey}
                >
                  <EditSections {...section}></EditSections>
                </GridItem>
              </Waypoint>
            );
          })}
        </Grid>
      </AnimatedPage>
    </Box>
  );
}

export default ProfileEdit;
