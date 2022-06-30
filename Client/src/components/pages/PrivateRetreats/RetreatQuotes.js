import OpinionQuote from "../../commom/OpinionQuote";
import { Box } from "@chakra-ui/react";

function RetreatOpinionQuote() {
  const opinion =
    "Travelling to the Hush Sunrise Retreats was a game changer life experience. I will never forget the lessons.";
  const author = "JONATAS DOE";
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

export default RetreatOpinionQuote;
