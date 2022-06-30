import OpinionQuote from "../../commom/OpinionQuote";
import { Box } from "@chakra-ui/react";

function HotelOpinionQuote() {
  const opinion =
    "Travelling to Hush Sunrise was one of the best decisions I have ever made. I learnt so much from the trip.";
  const author = "JOHN DOE";
  const occupation = "TRAVELLER";

  return (
    <Box margin="90px 0">
      <OpinionQuote
        opinion={opinion}
        author={author}
        occupation={occupation}
      ></OpinionQuote>
    </Box>
  );
}

export default HotelOpinionQuote;
