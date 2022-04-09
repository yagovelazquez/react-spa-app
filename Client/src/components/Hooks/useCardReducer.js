import { useReducer, useEffect, useRef } from "react";
import _ from "lodash";

const cardReducer = (state, action) => {
  switch (action.type) {
    case "PREVIOUSCARD": {
      const cards = state.cards;
      const count = state.cardCounter;
      let newOrder = [];
      newOrder.push(_.last(cards));
      cards.forEach((card, index) => {
        if (index + 1 === _.lastIndexOf(cards)) return;

        newOrder.push(card);
      });

      const cardCounter = state.cardCounter <= 1 ? cards.length : count - 1;

      return { cardCounter: cardCounter, cards: newOrder };
    }

    case "NEXTCARD": {
      let newOrder = [];
      const cards = state.cards;
      const count = state.cardCounter;

      cards.forEach((card, index) => {
        if (index === 0) return;
        newOrder.push(card);
      });

      newOrder.push(cards[0]);
      const cardCounter = state.cardCounter >= cards.length ? 1 : 1 + count;

      return { cardCounter: cardCounter, cards: newOrder };
    }

    case "UPDATECARDS": {
      return { cardCounter: 1, cards: action.newCards };
    }

    default:
      return;
  }
};

function useCardReducer(cards) {
  const defaultState = {
    cardCounter: 1,
    cards,
  };
  const [cardState, dispatch] = useReducer(cardReducer, defaultState);

  const cardsLength = defaultState.cards.length;

  const updateCards = (newCards) => {
    dispatch({ type: "UPDATECARDS", newCards });
  };

  useEffect(() => {
    updateCards(cards);
  }, [cards]);

  const selectNextCard = () => {
    dispatch({ type: "NEXTCARD" });
  };

  const selectPreviousCard = () => {
    dispatch({ type: "PREVIOUSCARD" });
  };

  const getSelectedItem = () => {
    const selectedItem = cardState.cards[Math.floor(cardsLength / 2)];
    return selectedItem;
  };

  return {
    cardState,
    selectNextCard,
    selectPreviousCard,
    getSelectedItem,
    cardsLength,
  };
}

export default useCardReducer;
