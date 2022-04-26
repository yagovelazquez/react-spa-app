import Text from "../../../commom/Text";
import { Box, HStack, Flex, VStack } from "@chakra-ui/react";
import React, {useCallback} from "react";
import InterestButton from "./InterestButton";
import { useMutation } from "react-query";
import { generalPostCall } from "../../../../Lib/fetchServer";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import useUser from "../../../Hooks/useUser";
import { useQueryClient } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import { clone as _clone, isEqual as _isEqual } from "lodash";

function ProfileInterestSection(props) {
  const queryClient = useQueryClient();
  const { interestList, icon, category = category, activeInterest } = props;

  const { user, updateUser } = useUser();

  const { data, mutate } = useMutation(
    (reqValues) => {
      const url = `${serverUrl}/user/interests`;
      reqValues.token = user.token;
      return generalPostCall(reqValues, url);
    },
    {
      onMutate: (values) => {
        const finalInterest = [];
        let isEqualFound = false;
        user.interests.forEach((interestItem) => {
          if (isEqualFound) {
            finalInterest.push(interestItem);
            return;
          }

          if (_isEqual(values, interestItem)) {
            isEqualFound = true;
            return;
          }

          finalInterest.push(interestItem);
        });

        if (!isEqualFound) {
          finalInterest.push(values);
        }

        queryClient.setQueryData(
          [queryKeys.user, queryKeys.interests],
          finalInterest
        );
      },
      onSuccess: (values) => {
        let updatedUser = _clone(user);
        updatedUser.interests = values;
        updateUser(updatedUser);
      },
      mutationKey: "interests",
    }
  );

  const clickHandler = useCallback((values) => {
    mutate(values);
  }, [mutate])

  return (
    <VStack
      paddingTop="70px"
      spacing="40px"
      width="900px"
      alignItems="flex-start"
    >
      <HStack spacing="30px">
        <Box size="42px" color="gray" as={icon}></Box>
        <Text
          textTransform="uppercase"
          fontWeight="700"
          letterSpacing="0.25rem"
        >
          {category}
        </Text>
      </HStack>
      <Flex
        paddingLeft="74px"
        gap="20px"
        justifyContent="flex-start"
        flexWrap="wrap"
      >
        {interestList.map((interest) => {
          return (
            <InterestButton
              isButtonActive={activeInterest.includes(interest) ? true : false}
              onClick={clickHandler}
              key={interest}
              group={category}
            >
              {interest}
            </InterestButton>
          );
        })}
      </Flex>
    </VStack>
  );
}

export default ProfileInterestSection;
