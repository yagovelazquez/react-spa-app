import { useState, memo } from "react";
import CheckAnimation from "./CheckAnimation";
import Button from "../../../commom/Button";
import Text from "../../../commom/Text";

function InterestButton(props) {
 
    const {onClick, isButtonActive, group} = props

 

 


  

    const buttonPropertiesInactive = {
        borderRadius: "20px",
        width: "auto",
        height:"50px",
        _hover: "",

        border: "0px",
        invertColor: true,  
        alignItems: "center",
        display:"grid",
        gridTemplateColumns:"60px min-content 60px"

    }

    const buttonPropertiesActive = {
        borderRadius: "20px",
        width: "auto",
        height:"50px",
        alignItems: "center",
        _hover: "",
        border: "0px",
        display:"grid",
        gridTemplateColumns:"60px min-content 60px"
        
    }



    const buttonStyle =   isButtonActive ? buttonPropertiesActive : buttonPropertiesInactive

    const activeButtonHandler = () => {
      
 
         onClick({interest: props.children, group})

    }

    return (     <Button  {...buttonStyle}  onClick={activeButtonHandler}><CheckAnimation isActive={  isButtonActive}/><Text lineHeight="28px" gridColumn="2/3">{props.children}</Text></Button>  );
}

export default memo(InterestButton);