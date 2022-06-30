import { Select as ChakraSelect } from "@chakra-ui/react";

function Select(props) {
  const {
    selectOptions,
    placeHolder,
    propertyName,
    selectProperties,
    onChange,
  } = props;

  return (
    <ChakraSelect
      borderRadius="3"
      bg="rgb(245, 245, 245)"
      fontSize="lg"
      fontStyle="italic"
      onChange={(value) => onChange(value)}
      fontFamily="Monotype Garamond,garamond,serif"
      _focus={{ borderColor: "black", boxShadow: "0 0 0 0px " }}
      placeholder={placeHolder}
      {...selectProperties}
    >
      {selectOptions.map((option) => {
        const str1 = option[propertyName].toLowerCase();

        const arr = str1.split(" ");

        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }

        const str2 = arr.join(" ");
        return <option key={option[propertyName]}>{str2}</option>;
      })}
    </ChakraSelect>
  );
}

export default Select;
