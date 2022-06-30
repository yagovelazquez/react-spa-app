import Form from "../../../commom/Form";
import { keyframes, Box } from "@chakra-ui/react";

function EditSectionsFormVariant(props) {
  const { gridPropertiesProps, variant, formProperties, data } = props;

  const buttonProperties = {
    gridArea: "button",
    width: data || variant === "updateOnly" ? "130px" : "80px",
    invertColor: "true",
    borderRadius: "20px",
    _hover: {},
    _active: {},
    justifySelf: "end",
    fontSize: "xs",
    fontWeight: "700",
    height: "39px",
    padding: "12px 20px",
    allowdisable: "true",
    _disabled: {},
  };

  const headingProperties = {
    gridArea: "heading",
    letterSpacing: "0.2rem",
    fontWeight: "600",
    fontSize: "md",
  };

  const gridProperties = {
    rowGap: "30px",
    justifyItems: "start",
    width: "100%",
    ...gridPropertiesProps,
  };

  const labelProperties = {
    fontSize: "lg",
    cursor: "pointer",
    background: "transparent",
  };

  const animation = {
    keyFramesFoward: keyframes`

0% { transform: translateY(-28px) ; opacity: 0; }
50% {  transform: translateY(-45px) ; opacity: 0 ; text-transform: uppercase; font-size: 0.70rem; letter-spacing: 0.15rem}
100% { transform: translateY(-60px)  ; opacity: 1; text-transform: uppercase; font-size: 0.70rem; letter-spacing: 0.15rem }     
`,

    keyFramesBackward: keyframes`
0%  { transform: translateY(-60px)  ; opacity: 1; text-transform: uppercase; font-size: 0.70rem; letter-spacing: 0.15rem }  
50%  {  transform: translateY(-50px) ; opacity: 0; text-transform: uppercase; font-size: 0.70rem; letter-spacing: 0.15rem}
70% { transform: translateY(-40px) ; opacity: 0; }
100% { transform: translateY(-28px) ; opacity: 1; }
`,
  };

  const buttonLabel = data || variant === "updateOnly" ? "UPDATE" : "ADD";

  return (
    <Box padding="100px 0">
      <Form
        buttonLabel={buttonLabel}
        buttonProperties={buttonProperties}
        headingProperties={headingProperties}
        animation={animation}
        gridProperties={gridProperties}
        labelProperties={labelProperties}
        variant="profile"
        {...formProperties}
      ></Form>
    </Box>
  );
}

export default EditSectionsFormVariant;
