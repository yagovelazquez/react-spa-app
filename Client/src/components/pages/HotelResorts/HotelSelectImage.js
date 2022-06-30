import { serverUrl } from "../../../ReactQuery/queryUrl";
import SelectImage from "../../commom/SelectImage";
import { queryKeys } from "../../../ReactQuery/queryContants";

function HotelSelectImage() {
  const placeHolder = "Select a destination";
  const url = `${serverUrl}/hotels-resorts`;
  const imageUrl = "Hotel_Resorts/hotelResorts.jpg";
  const title = "HUSH SUNRISE HOTEL & RESORTS";
  const buttonLabel = "SELECT A DESTINATION";
  const queryKey = queryKeys.hotelResorts;

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

export default HotelSelectImage;
