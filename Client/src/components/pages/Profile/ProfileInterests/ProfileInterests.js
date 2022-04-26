import ProfileSectionTitle from "../ProfileSectionTitle";
import { Flex } from "@chakra-ui/react";
import ProfileInterestSection from "./ProfileInterestSection";
import { GiKnifeFork } from "react-icons/gi";
import { RiHeartPulseLine } from "react-icons/ri";
import { IoAirplaneOutline } from "react-icons/io5";
import Animation from "./CheckAnimation";
import { useQuery } from "react-query";
import { queryKeys } from "../../../../ReactQuery/queryContants";
import { serverUrl } from "../../../../ReactQuery/queryUrl";
import { getGeneralCall } from "../../../../Lib/fetchServer";





function ProfileInterests({user}) {
  

  const headingSectionTitleContent = "YOUR INTERESTS";
  const subheadingSectionTitleContent =
    "We'll use your choices to make the content you see more personal. You can also edit your subscriptions.";

  const {data} = useQuery([queryKeys.user,queryKeys.interests], () => {
    const url = `${serverUrl}/user/interests`
   return getGeneralCall(url, user?.token)
  }, 
{
  initialData: user.interests,
  enabled: !!user
}  )

  const  foodDrinkActiveInt = []
  const  healthWellActiveInt = []
  const  travelLifeActiveInt = []


 data?.forEach(interest => {
 switch (interest.group) {
  case 'food & drink': 
  foodDrinkActiveInt.push(interest.interest)
    break
    case  'health & wellness':
    healthWellActiveInt.push(interest.interest)
      break;
      case 'travel & lifestyle':
      travelLifeActiveInt.push(interest.interest)
        break;
}
 });

  
  



  const interestsContent = [
    {
      category: "food & drink",
      icon: GiKnifeFork,
      interestList: [
        "restaurants & bars",
        "brunch",
        "local specialities",
        "wine",
        "cooking classes",
        "mixology",
        "farm to table",
        "behind the scenes with chef",
      ],
      activeInterest: foodDrinkActiveInt
    },
    {
      category: "health & wellness",
      icon: RiHeartPulseLine,
      interestList: [
        "fitness",
        "spa",
        "yoga",
        "nature excursions",
        "skiing",
        "golfing",
        "diving",
        "surfing",
        "other water sports",
        "horseback riding",
        "spiritual discovery",
        "meditation and mindfullness",
      ],
      activeInterest:  healthWellActiveInt
    },
    {
      category: "travel & lifestyle",
      icon: IoAirplaneOutline,
      interestList: [
        "couples getaway",
        "family getaway",
        "friends getaway",
        "solo travel",
        "beach vacation",
        "vacation rental",
        "city escape",
        "adventure travel",
        "new hush sunrise hotels and resorts",
        "private jet travel",
        "art and culture",
        "shopping",
        "sporting events",
        "culinary travel",
      ],
      activeInterest: travelLifeActiveInt
    },
  ];

  return (
    <Flex
      bg="rgb(37, 37, 37)"
      color="white"
      flexDir="column"
      alignItems="center"
      padding="120px 0px 120px 0"
      width="100%"
      id="interests"
    >
      <ProfileSectionTitle
        headingSectionTitleContent={headingSectionTitleContent}
        subheadingSectionTitleContent={subheadingSectionTitleContent}
        width="900px"
      ></ProfileSectionTitle>
      {interestsContent.map((interest) => {
        const { category, icon, interestList, activeInterest} = interest;


        


        return (
          <ProfileInterestSection
            key={category}
            category={category}
            icon={icon}
            interestList={interestList}
            activeInterest={activeInterest}
            width="900px"
          />
        );
      })}
      <Animation></Animation>
    </Flex>
  );
}

export default ProfileInterests;
