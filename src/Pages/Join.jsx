import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API_BASE_URL = "http://localhost:5000";

export const Join = () => {
  const [detailsFormIsVisible, setDetailsFormIsVisible] = useState(true);
  const [signupFormIsVisible, setSignupFormIsVisible] = useState(false);
  const [signupData, setSignupData] = useState({
    date: "",
    time: "",
    location: "",
    createdBy: "",
    attending: false,
    slots: {
      appetizer: {
        total: 20,
        filled: 0,
        participants: [],
      },
      mainDishes: {
        total: 20,
        filled: 0,
        participants: [],
      },
      sideDishes: {
        total: 20,
        filled: 0,
        participants: [],
      },
      drinks: {
        total: 10,
        filled: 0,
        participants: [],
      },
    },
    rsvp: {
      responses: {
        yes: 0,
        no: 0,
        maybe: 0,
      },
      adultGuests: {
        confirmed: 0,
        maybe: 0,
      },
      childGuests: {
        confirmed: 0,
        maybe: 0,
      },
    },
  });

  useEffect(() => {
    // Fetch the initial signup data from the server
    axios.get(`${API_BASE_URL}/signup`).then((response) => {
      setSignupData(response.data);
    });
  }, []);


  const date = new Date("06/28/2023");
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const showDetailsForm = () => {
    setDetailsFormIsVisible(!detailsFormIsVisible);
    setSignupFormIsVisible(false);
  };

  const showSignupForm = () => {
    setSignupFormIsVisible(!signupFormIsVisible);
    setDetailsFormIsVisible(false);
  };
  return (
    <div className="container">
      <div className="party-details-header" onClick={showDetailsForm}>
        <h3>Party Details</h3>
        {detailsFormIsVisible ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            onClick={showDetailsForm}
            className="arrow"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={showDetailsForm}
            className="arrow"
          />
        )}
      </div>
      <div className={` ${detailsFormIsVisible ? "party-details" : ""}`}>
        <img
          className={` ${detailsFormIsVisible ? "visible" : "hide"}`}
          src="https://cdn.discordapp.com/attachments/1120138094822309939/1120882457546334238/Pngtreegolden_moon_texture_ramadan_lantern_6111286.png"
          alt=""
        />
        <ul className={` ${detailsFormIsVisible ? "visible" : "hide"}`}>
          <li>
            <label htmlFor="date">
              Date: <span>{formattedDate}</span>
            </label>
          </li>
          <li>
            <label htmlFor="time">
              Time: <span> 4:00pm - 9:00pm</span>
            </label>
          </li>
          <li>
            <label htmlFor="location">
              Location:
              <span>
                <Link to="https://www.google.com/maps/dir//10510+Golf+View+Dr,+Cincinnati,+OH+45240/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88404be3760634e7:0xf5127041a2a47e68?sa=X&ved=2ahUKEwiZlY-uk9P_AhXkj4kEHW6dDhAQwwV6BAgPEAQ">
                  10510 Golf View Dr, Cincinnati, OH 45231
                </Link>
              </span>
            </label>
          </li>
          <li>
            <label htmlFor="createdBy">
              Created By: <span>Abd Tarabishi</span>
            </label>
          </li>
        </ul>
      </div>

      <div className="party-signup-header" onClick={showSignupForm}>
        <h3>Sign Up</h3>
        {signupFormIsVisible ? (
          <FontAwesomeIcon
            icon={faChevronUp}
            onClick={showSignupForm}
            className="arrow"
          />
        ) : (
          <FontAwesomeIcon
            icon={faChevronDown}
            onClick={showSignupForm}
            className="arrow"
          />
        )}
      </div>
      <div className={` ${signupFormIsVisible ? "party-signup" : ""}`}>
        <h1 className={` ${signupFormIsVisible ? "visible" : "hide"}`}>
        Click the button below to sign up for this party!</h1>{" "}
        {/* <form
          className={` ${signupFormIsVisible ? "visible" : "hide"}`}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="attending">
              Will you be attending on Wed., 06/28/2023 from 4:00pm - 9:00pm
              EDT?
            </label>
            <select id="attending" name="attending">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="maybe">I'm not sure</option>
            </select>

            <label htmlFor="adults">
              How many will be attending, including yourself (adults)?
            </label>
            <select id="adults" name="adults">
              {[...Array(21)].map((_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>

            <label htmlFor="children">
              How many children will be attending?
            </label>
            <select id="children" name="children">
              {[...Array(21)].map((_, index) => (
                <option key={index} value={index}>
                  {index}
                </option>
              ))}
            </select>
          </div>
        </form> */}
      </div>
    </div>
  );
};
