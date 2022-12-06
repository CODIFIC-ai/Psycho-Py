import { useState } from "react";

import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContexto } from "../../providers/contexto";

import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import Step6 from "./steps/Step6";
import Step7 from "./steps/Step7";
import Step8 from "./steps/Step8";
import Step9 from "./steps/Step9";
import Step10 from "./steps/Step10";
import Step11 from "./steps/game/Step11";
import Step12 from "./steps/game/Step12";
import Step13 from "./steps/game/Step13";
import Step14 from "./steps/game/Step14";
import Step15 from "./steps/game/Step15";
import Step16 from "./steps/game/Step16";
import Step17 from "./steps/game/Step17";
import Step18 from "./steps/game/Step18";
import Step19 from "./steps/game/Step19";
import Step20 from "./steps/game/Step20";
import Step21 from "./steps/game/Step21";
import Step22 from "./steps/game/Step22";

const steps = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "7",
  },
  {
    id: "8",
  },
  {
    id: "9",
  },
  {
    id: "10",
  },
  {
    id: "11",
  },
  {
    id: "12",
  },
  {
    id: "13",
  },
  {
    id: "14",
  },
  {
    id: "15",
  },
  {
    id: "16",
  },
  {
    id: "17",
  },
  {
    id: "18",
  },
  {
    id: "19",
  },
  {
    id: "20",
  },
  {
    id: "21",
  },
  {
    id: "22",
  },
];

function Contexto() {
  const { title, setTitle, setResponses, setIsFirst } = useContexto();
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep + 2 <= steps.length) {
      setCurrentStep(currentStep + 1);
      setTitle("");
    }
  };

  const tryAgain = () => {
    setResponses([]);
    setCurrentStep(0);
    setIsFirst(false);
  };

  return (
    <>
      <div style={{ marginTop: "10px" }}>
        <div className="m-3 text-center" style={{ height: "4vh" }}>
          <span className="fs-6">{title ? title : ""}</span>
        </div>
        <Container
          fluid
          style={{
            overflow: "hidden",
            maxWidth: "90vw",
            boxShadow: "20px 20px 40px #d9d9d9, -20px -20px 40px #ffffff",
          }}
        >
          <Row className="slides">
            <Col className="p-0">
              <Card style={{ maxHeight: "60vh" }}>
                {steps[currentStep].id === "1" ? (
                  <Step1 fNextStep={nextStep} />
                ) : steps[currentStep].id === "2" ? (
                  <Step2 fNextStep={nextStep} />
                ) : steps[currentStep].id === "3" ? (
                  <Step3 fNextStep={nextStep} />
                ) : steps[currentStep].id === "4" ? (
                  <Step4 fNextStep={nextStep} />
                ) : steps[currentStep].id === "5" ? (
                  <Step5 fNextStep={nextStep} />
                ) : steps[currentStep].id === "6" ? (
                  <Step6 fNextStep={nextStep} />
                ) : steps[currentStep].id === "7" ? (
                  <Step7 fNextStep={nextStep} />
                ) : steps[currentStep].id === "8" ? (
                  <Step8 fNextStep={nextStep} />
                ) : steps[currentStep].id === "9" ? (
                  <Step9 fNextStep={nextStep} />
                ) : steps[currentStep].id === "10" ? (
                  <Step10 fNextStep={nextStep} />
                ) : steps[currentStep].id === "11" ? (
                  <Step11 fNextStep={nextStep} />
                ) : steps[currentStep].id === "12" ? (
                  <Step12 fNextStep={nextStep} />
                ) : steps[currentStep].id === "13" ? (
                  <Step13 fNextStep={nextStep} />
                ) : steps[currentStep].id === "14" ? (
                  <Step14 fNextStep={nextStep} />
                ) : steps[currentStep].id === "15" ? (
                  <Step15 fNextStep={nextStep} />
                ) : steps[currentStep].id === "16" ? (
                  <Step16 fNextStep={nextStep} />
                ) : steps[currentStep].id === "17" ? (
                  <Step17 fNextStep={nextStep} />
                ) : steps[currentStep].id === "18" ? (
                  <Step18 fNextStep={nextStep} />
                ) : steps[currentStep].id === "19" ? (
                  <Step19 fNextStep={nextStep} />
                ) : steps[currentStep].id === "20" ? (
                  <Step20 fNextStep={nextStep} />
                ) : steps[currentStep].id === "21" ? (
                  <Step21 fNextStep={nextStep} />
                ) : steps[currentStep].id === "22" ? (
                  <Step22 fNextStep={nextStep} fTryAgain={tryAgain} />
                ) : (
                  ""
                )}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Contexto;
