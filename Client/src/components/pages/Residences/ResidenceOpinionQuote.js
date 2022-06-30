import OpinionQuote from "../../commom/OpinionQuote";
import { Box } from "@chakra-ui/react";

function ResidenceOpinionQuote() {
  const opinion =
    "This is one of the best decisions we have ever made. We bought a house but gained a family who supports us. It's our home.";
  const author = "JENIFER DOE";
  const occupation = "PRIVATE RESIDENCE OWNER";

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

export default ResidenceOpinionQuote;
