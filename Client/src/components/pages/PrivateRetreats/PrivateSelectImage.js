import { serverUrl } from "../../../ReactQuery/queryUrl";
import SelectImage from "../../commom/SelectImage";
import { queryKeys } from "../../../ReactQuery/queryContants";

function PrivateSelectImage() {
  const placeHolder = "Select a destination";
  const url = `${serverUrl}/retreats`;
  const imageUrl = "Retreats/privateRetreats.jpg";
  const title = "HUSH SUNRISE PRIVATE RETREATS";
  const buttonLabel = "SELECT A DESTINATION";
  const queryKey = queryKeys.retreats;
  return (
    <SelectImage
      placeHolder={placeHolder}
      url={url}
      imageUrl={imageUrl}
      title={title}
      buttonLabel={buttonLabel}
      queryKey={queryKey}
    ></SelectImage>
  );
}

export default PrivateSelectImage;
