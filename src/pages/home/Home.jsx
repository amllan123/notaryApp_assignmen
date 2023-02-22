import React, { useState } from "react";
import Sidebar from "../../Compnents/Sidebar";
import "./home.css";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // all usestate variable to take Input
  const [stepperCounter, setStepperCounter] = useState(1);
  const [noOfSignature, setNoOfSignature] = useState("");
  const [noOfFile, setNoOfFile] = useState("");
  const [noOfSign, setNoOfSign] = useState("");
  const [witness, SetWitness] = useState("");
  const [fullname, setFullname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompannyName] = useState("");
  const [agentName, setAgentName] = useState("");
  const [agentEmail, setAgentEmail] = useState("");
  const [agentPhoneNo, setAgentPhoneNo] = useState("");
  const [loanNo, setLoanNo] = useState("");
  const [propertyAddresss, setPropertyAddress] = useState("");
  const [Location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  var today = new Date();
  const navigate = useNavigate();
  // submit function
  const handleSubmit = async () => {
    try {
      await axios.post(
        "https://notaryapp-staging.herokuapp.com/plugin/submitApptDetails",
        {
          noOfSignature: noOfSignature,
          noOfFile: noOfFile,
          noOfSign: noOfSign,
          witness: witness,
          fullname: fullname,
          phoneNo: phoneNo,
          email: email,
          companyName: companyName,
          agentName: agentName,
          agentEmail: agentEmail,
          agentPhoneNo: agentPhoneNo,
          loanNo: loanNo,
          propertyAddresss: propertyAddresss,
          Location: Location,
          date: date,
          time: time,
        }
      );

      toast.success("Your Appointment is Scheduled");
      navigate("/success");
    } catch (error) {}
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="stepper">
        <div className="stepperHeader">
          {stepperCounter >= 2 && (
            <div
              className="stepperHeaderBack"
              onClick={() => setStepperCounter(stepperCounter - 1)}
            >
              <ArrowBackIosNewRoundedIcon />
            </div>
          )}
          <div className="stepperHeaderTitle">
            <span className="stepperHeaderMainTitle">
              New Appointment Request
            </span>
            <span className="stepperHeaderSubTitle">
              Same Great Coverage for less
            </span>
          </div>
        </div>

        <div className="stepperCounter">
          <div
            className={
              stepperCounter >= 1
                ? "stepperCounterDot complete"
                : "stepperCounterDot"
            }
          ></div>
          <div
            className={
              stepperCounter >= 1 ? "stepperLine complete" : "stepperLine"
            }
          ></div>
          <div
            className={
              stepperCounter >= 1
                ? "stepperCounterNo complete"
                : "stepperCounterNo"
            }
          >
            1
          </div>

          <div
            className={
              stepperCounter >= 2 ? "stepperLine complete" : "stepperLine"
            }
          ></div>
          <div
            className={
              stepperCounter >= 2
                ? "stepperCounterNo complete"
                : "stepperCounterNo"
            }
          >
            2
          </div>

          <div
            className={
              stepperCounter >= 3 ? "stepperLine complete" : "stepperLine"
            }
          ></div>
          <div
            className={
              stepperCounter >= 3
                ? "stepperCounterNo complete"
                : "stepperCounterNo"
            }
          >
            3
          </div>
        </div>

        {/* stepper 1 */}

        {stepperCounter === 1 && (
          <div className="StepperOne">
            <div className="StepperOneLeft">
              <div className="StepperOneLeftCard">
                <div className="StepperOneLeftCardDetails">
                  <span className="StepperOneLeftCardHeading">
                    Notary Sign Agent
                  </span>
                  <span className="StepperOneLeftCardSubHeading">
                    suitable for those whohave purchased a new car
                  </span>
                  <div className="StepperOneLeftViewCardDetails">
                    <span>View Details</span>
                    <ArrowForwardRoundedIcon />
                  </div>
                </div>
              </div>

              <div className="StepperOneLeftCard popular">
                <div className="StepperOneLeftCardDetails">
                  <span className="StepperOneLeftCardHeading">
                    Remote Online Notary
                  </span>
                  <span className="StepperOneLeftCardSubHeading">
                    suitable for those whohave purchased a new car
                  </span>
                  <div className="StepperOneLeftViewCardDetails">
                    <span>View Details</span>
                    <ArrowForwardRoundedIcon />
                  </div>
                </div>

                <div className="StepperOneLeftCardPrice">
                  <StarRoundedIcon />
                  <span>Popular</span>
                </div>
              </div>
              <div className="StepperOneLeftCard">
                <div className="StepperOneLeftCardDetails">
                  <span className="StepperOneLeftCardHeading">
                    Mobile General Notary
                  </span>
                  <span className="StepperOneLeftCardSubHeading">
                    suitable for those whohave purchased a new car
                  </span>
                  <div className="StepperOneLeftViewCardDetails">
                    <span>View Details</span>
                    <ArrowForwardRoundedIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* Stepper one form */}
            <div className="StepperOneRight">
              <div className="StepperOneRightForm">
                <div className="StepperOneRightFormHeading">
                  <span>Calculate Your Costs For RON!</span>
                </div>
                <div className="StepperOneRightFormItem">
                  <span>No of extra Signatures</span>
                  <input
                    type="text "
                    className="StepperOneRightFormItemInput"
                    onChange={(e) => setNoOfSignature(e.target.value)}
                  />
                </div>
                <div className="StepperOneRightFormItem">
                  <span>
                    How many Files will you be uploading in the Session
                  </span>
                  <input
                    type="text "
                    className="StepperOneRightFormItemInput"
                    onChange={(e) => setNoOfFile(e.target.value)}
                  />
                </div>
                <div className="StepperOneRightFormItem">
                  <span>No of Signers</span>
                  <input
                    type="text "
                    className="StepperOneRightFormItemInput"
                    onChange={(e) => setNoOfSign(e.target.value)}
                  />
                </div>
                <div className="StepperOneRightFormItem">
                  <span>Do you need witness ?</span>
                  <input
                    type="text "
                    className="StepperOneRightFormItemInput"
                    onChange={(e) => SetWitness(e.target.value)}
                  />
                </div>
                <div className="StepperOneRightFormHeading">
                  <span>Your Approximate Quote: $59</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stepper 2 */}

        {stepperCounter === 2 && (
          <div className="StepperTwo">
            <div className="StepperTwoForm">
              <div className="StepperTwoFormHeading">
                <AssignmentIndRoundedIcon />
                <span>Signer Details</span>
              </div>
              <div className="StepperTwoFormLine"></div>
              {/* Stepper 2 form 1 */}
              <div className="StepperTwoForm1">
                <div className="StepperTwoFormItems">
                  <span className="StepperTwoFormItemsHeading">Fullname</span>
                  <input
                    type="text"
                    className="StepperTwoFormItemsInput"
                    placeholder="Your Name"
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div className="StepperTwoFormItems">
                  <span className="StepperTwoFormItemsHeading">
                    Phone Number
                  </span>
                  <input
                    type="email"
                    className="StepperTwoFormItemsInput"
                    placeholder="your phone no"
                    onChange={(e) => setPhoneNo(e.target.value)}
                  />
                </div>
                <div className="StepperTwoFormItems">
                  <span className="StepperTwoFormItemsHeading">Email</span>
                  <input
                    type="email"
                    className="StepperTwoFormItemsInput"
                    placeholder="you@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              {/* Stepper 2 form 2 */}
              <div className="StepperTwoFormHeading">
                <AssignmentIndRoundedIcon />
                <span>Title Company Details</span>
              </div>
              <div className="StepperTwoFormLine"></div>
              <div className="StepperTwoForm2">
                <div className="StepperTwoForm2Elem">
                  <div className="StepperTwoFormItems">
                    <span className="StepperTwoFormItemsHeading">
                      Company Name
                    </span>
                    <input
                      type="text"
                      className="StepperTwoFormItemsInput"
                      placeholder="Your Company Name"
                      onChange={(e) => setCompannyName(e.target.value)}
                    />
                  </div>
                  <div className="StepperTwoFormItems">
                    <span className="StepperTwoFormItemsHeading">
                      Agent Name
                    </span>
                    <input
                      type="text"
                      className="StepperTwoFormItemsInput"
                      placeholder="Your Agent Name"
                      onChange={(e) => setAgentName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="StepperTwoForm2Elem">
                  <div className="StepperTwoFormItems">
                    <span className="StepperTwoFormItemsHeading">Email</span>
                    <input
                      type="email"
                      className="StepperTwoFormItemsInput"
                      placeholder="Your Agent email"
                      onChange={(e) => setAgentEmail(e.target.value)}
                    />
                  </div>
                  <div className="StepperTwoFormItems">
                    <span className="StepperTwoFormItemsHeading">
                      Phone Number
                    </span>
                    <input
                      type="number"
                      className="StepperTwoFormItemsInput"
                      placeholder="Your Agent Number"
                      onChange={(e) => setAgentPhoneNo(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Stepper2 form 3 */}
              <div className="StepperTwoFormHeading">
                <AssignmentIndRoundedIcon />
                <span>Order Info</span>
              </div>
              <div className="StepperTwoFormLine"></div>
              <div className="StepperTwoForm2">
                <div className="StepperTwoForm2Elem">
                  <div className="StepperTwoFormItems">
                    <span className="StepperTwoFormItemsHeading">
                      Escrow # /Loan No
                    </span>
                    <input
                      type="text"
                      className="StepperTwoFormItemsInput"
                      placeholder="Your Loan No"
                      onChange={(e) => setLoanNo(e.target.value)}
                    />
                  </div>
                  <div className="StepperTwoFormItems">
                    <span className="StepperTwoFormItemsHeading">
                      Property Address
                    </span>
                    <input
                      type="text"
                      className="StepperTwoFormItemsInput"
                      placeholder="Your Property Address"
                      onChange={(e) => setPropertyAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Stepper3 */}
        {stepperCounter === 3 && (
          <div className="StepperThree">
            <div className="StepperTwoFormHeading">
              <AssignmentIndRoundedIcon />
              <span>Order Info</span>
            </div>
            <div className="StepperTwoFormLine"></div>
            <div className="StepperThreeForm1">
              <div className="StepperThreeFormItems1">
                <span>Enter Signing Location</span>
                <input
                  className="StepperThreeFormItemsInput1"
                  type="text"
                  placeholder="Enter Your Location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="StepperThreeForm2">
              <div className="StepperThreeFormItems2">
                <span>Date</span>
                <input
                  className="StepperThreeFormItemsInput2"
                  type="text"
                  placeholder={
                    today.getDate() +
                    `/` +
                    today.getMonth() +
                    `/` +
                    today.getFullYear()
                  }
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="StepperThreeFormItems2">
                <span>Time</span>
                <input
                  className="StepperThreeFormItemsInput2"
                  type="text"
                  placeholder={
                    today.getHours() +
                    `hr ` +
                    today.getMinutes() +
                    `m ` +
                    today.getSeconds() +
                    `s`
                  }
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>

            <div className="StepperThreeFormButtonSpace">
              <button onClick={handleSubmit}>Schedule Appointment</button>
            </div>
          </div>
        )}
        {/* Next Page Button */}
        {stepperCounter < 3 && (
          <div className="StepperNext">
            <span>Next</span>
            <div
              className="stepperHeaderBack"
              onClick={() => setStepperCounter(stepperCounter + 1)}
            >
              <ChevronRightRoundedIcon />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
