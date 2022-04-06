import { Box, HStack, VStack } from "@chakra-ui/react";

import _ from "lodash";
import useCardReducer from "../../Hooks/useCardReducer";

import Card from "../../commom/Card";
import SelectCard from "../../commom/SelectCard";
import { cardsContent } from "./CardContent";

function HomeCards({ selectedText }) {
  const selectedCards = cardsContent[selectedText];





  const {
    cardState,
    selectNextCard,
    selectPreviousCard,
    cardsLength,
    getSelectedItem,
  } = useCardReducer(selectedCards);

  const selectedItem = getSelectedItem();

  return (
    <Box
      display="flex"
      alignItems="flex-start"
      justifyContent="center"
      bgImage={`linear-gradient(rgba(0, 0, 0, 1), rgba(0,0,0,0.5)), url(${selectedItem.imgUrl})`}
      height="800px"
      width="100%"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      paddingBottom="100px"

    >
      <VStack gap={10}>
        <HStack justifyContent="center" spacing="40px">
          {cardState.cards.map((content, index) => {
            let changingSelectedCard =
              index > cardsLength / 2 ? selectNextCard : selectPreviousCard;

            if (content === selectedItem) {
              return (
                <Card
                  key={content.title}
                  selectedCard={true}
                  content={content}
                ></Card>
              );
            }

            return (
              <Card
                key={content.title}
                onChangingCard={changingSelectedCard}
                content={content}
              ></Card>
            );
          })}
        </HStack>
        <SelectCard
          cardsLength={cardsLength}
          counter={cardState.cardCounter}
          selectNextCard={selectNextCard}
          selectPreviousCard={selectPreviousCard}
        />
      </VStack>
    </Box>
  );
}

export default HomeCards;
