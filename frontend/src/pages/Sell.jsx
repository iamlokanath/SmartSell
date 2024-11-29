import { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import cardData from "../data/Sell/screenDamageOptions.json";
import physicalDamageData from "../data/Sell/physicalDamageData.json";
import views from "../data/Sell/views.json";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    width: "200px",
    height: "200px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0 0 10px rgba(0,0,0,0.3)",
    },
  },
  selectedCard: {
    border: "2px solid #4caf50",
    backgroundColor: "#e8f5e9",
  },
}));

function getSteps() {
  return [
    "Basic Information",
    "Screen Problems",
    "Physical Problems",
    "Upload Image",
  ];
}

function Sell() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [selectedScreenPreferences, setSelectedScreenPreferences] = useState([]);
  const [selectedPhysicalPreferences, setSelectedPhysicalPreferences] = useState([]);
  const [formData, setFormData] = useState({});
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Map selected IDs to their corresponding labels
      const selectedScreenLabels = selectedScreenPreferences.map(
        (id) => cardData.find((item) => item.id === id)?.label
      );
      const selectedPhysicalLabels = selectedPhysicalPreferences.map(
        (id) => physicalDamageData.find((item) => item.id === id)?.label
      );

      // Log the form data and selected preferences (with labels)
      console.log("Form Data:", formData);
      console.log("Selected Screen Preferences (Labels):", selectedScreenLabels);
      console.log("Selected Physical Preferences (Labels):", selectedPhysicalLabels);

      localStorage.setItem("formData", JSON.stringify(formData));
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCardClick = (id, category) => {
    if (category === "screen") {
      setSelectedScreenPreferences((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else if (category === "physical") {
      setSelectedPhysicalPreferences((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e, view) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      [view]: file,
    }));
  };

  const renderCards = (data, category) => (
    <div className="flex flex-wrap justify-center">
      {data.map((card) => (
        <div
          key={card.id}
          className={`${classes.card} ${
            (category === "screen" && selectedScreenPreferences.includes(card.id)) ||
            (category === "physical" && selectedPhysicalPreferences.includes(card.id))
              ? classes.selectedCard
              : ""
          }`}
          
          onClick={() => handleCardClick(card.id, category)}
        >
          <img src={card.image} alt={card.label} width="100px" height="100px" className="items-center justify-center"/>
          <Typography variant="body1" align="center">
            {card.label}
          </Typography>
        </div>
      ))}
    </div>
  );

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            {["model_name", "age", "battery_damage", "screen_damage", "ram", "rom", "make_receive_call", "touch_screen_working", "is_original_screen"].map(
              (field, index) => (
                <TextField
                  key={index}
                  id={field}
                  label={field.replace(/_/g, " ").toUpperCase()}
                  variant="outlined"
                  placeholder={`Enter ${field.replace(/_/g, " ")}`}
                  fullWidth
                  margin="normal"
                  name={field}
                  onChange={handleChange}
                  value={formData[field] || ""}
                />
              )
            )}
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h6" align="center" gutterBottom>
              Select screen/body defects that are applicable!
            </Typography>
            {renderCards(cardData, "screen")}
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h6" align="center" gutterBottom>
              Select Functional or Physical Problems that are applicable!
            </Typography>
            {renderCards(physicalDamageData, "physical")}
          </>
        );
      case 3:
        return (
          <>
            <Typography variant="h6" align="center" gutterBottom>
              Upload Images
            </Typography>
            {views.map((view, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <Typography variant="body1">
                  {view.charAt(0).toUpperCase() + view.slice(1)} View
                </Typography>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, view)}
                />
              </div>
            ))}
          </>
        );
      default:
        return "Unknown Step";
    }
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#EEF2E3] h-full w-full">
        <div className="container mx-auto sm:py-20 py-10 sm:px-20 px-10">
          <div className="flex-col items-center bg-[#ffffff] p-10 rounded-lg">
            <Stepper alternativeLabel activeStep={activeStep}>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepLabel>{step}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <Typography variant="h3" align="center">
                Thank You
              </Typography>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Button
                  className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                >
                  Back
                </Button>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sell;
