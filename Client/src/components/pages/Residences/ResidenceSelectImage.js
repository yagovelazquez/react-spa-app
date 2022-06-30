import { serverUrl } from "../../../ReactQuery/queryUrl";
import SelectImage from "../../commom/SelectImage";
import { queryKeys } from "../../../ReactQuery/queryContants";

function ResidenceSelectImage() {
  const placeHolder = "Select a private residence";
  const url = `${serverUrl}/residences`;
  const imageUrl = "Buildings/residence.jpg";
  const title = "HUSH SUNRISE PRIVATE RESIDENCES";
  const buttonLabel = "VIEW PROPERTY";
  const queryKey = queryKeys.residences;
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

export default ResidenceSelectImage;
