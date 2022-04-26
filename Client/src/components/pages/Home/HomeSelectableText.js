import SelectableText from "../../commom/SelectableText";

function HomeSelectableText(props) {
  const texts = [
    { text: "Residences" },
    { text: "Hotel & Resorts" },
    { text: "Private Retreats" },
  ];

  const textStyles = {
    normalFont: {
      variant: "titleNormal",
      textAlign: "left",
      cursor: "pointer",
      color: "white",
    },
    selectedFont: {
      variant: "titleSelected",
      borderBottom: "1px solid",
      borderColor: "white",
      textAlign: "center",
      cursor: "pointer",
      color: "white",
    },
  };

  const flexStyles = {
    width: "100%",
    alignItems: "center",
    justify: "center",
    gap: "50px",
    marginBottom: "15px",
    paddingLeft: "65px",
  };

  return (
    <SelectableText
      onSelectedText={props.onSelectedText}
      texts={texts}
      selectedText={props.selectedText}
      textStyles={textStyles}
      flexStyles={flexStyles}
    ></SelectableText>
  );
}

export default HomeSelectableText;
