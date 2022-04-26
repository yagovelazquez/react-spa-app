import { BsGift } from "react-icons/bs";
import ProfileIconSection from "./ProfileIconSection";

function ProfileExclusiveOffer() {
  const allProperties = {
    iconProperties: {
      size: "64px",
      color: "white",
      as:  BsGift ,
    },

    headingProperties: {
      fontWeight: "550",
      letterSpacing: ".1875rem",
      content: "YOU CAN NOW SEE EXCLUSIVE OFFERS",
    },

    textProperties: {
      content: ["Complimentary perks, best rate guaranteeed and personalized service when you book with us"],
      variant: "normalText",
      fontSize: "lg",
    },

    containerProperties: {
      padding: "62px 0",
      justifyContent: "space-between",
      alignItems: "center",
      bg: "black",
      width: "900px",
     
    },
    buttonProperties: {
      width: "240px",
      invertColor: "true",
      content: "Find a hotel or resort",
    },

    textContainerProperties: {
      flexDirection: "column",
      alignItems: "flex-start",
      width: "460px",
      gap:"10px",
      color: "white",
    },
    boxContainer: {
      borderBottom : "1px solid gray"
    }
  };

  return <ProfileIconSection  {...allProperties} hasCollapase={false}></ProfileIconSection>;
}

export default ProfileExclusiveOffer;
