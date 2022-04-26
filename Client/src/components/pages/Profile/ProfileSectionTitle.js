import Heading from "../../commom/Heading";
import React from "react";
import Text from "../../commom/Text";
import { VStack } from "@chakra-ui/react";
function ProfileSectionTitle(props) {
  const {headingSectionTitleContent, subheadingSectionTitleContent, headingProperties, subHeadingProperties} = props
  const defaultHeadingProperties ={fontWeight:"100", fontSize:"2xl", letterSpacing:"0.25rem"}
  const defaultSubheadingProperties ={variant:"normalText",fontSize:"lg", letterSpacing: "0.028rem"}


  const finalHeadingProperties = headingProperties ? headingProperties : defaultHeadingProperties
  const finalSubHeadingProperties = subHeadingProperties ? subHeadingProperties : defaultSubheadingProperties

  return (
    <React.Fragment>
      <VStack alignItems="flex-start" width={props.width} spacing="12px">
      <Heading {...finalHeadingProperties}>
        {headingSectionTitleContent}
      </Heading>
      <Text {...finalSubHeadingProperties} variant="normalText" fontSize="lg">
        {subheadingSectionTitleContent}
      </Text>
      </VStack>
    </React.Fragment>
  );
}

export default ProfileSectionTitle;
