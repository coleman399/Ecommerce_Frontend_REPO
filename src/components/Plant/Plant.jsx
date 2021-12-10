import React from "react";

function Plant(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div>
            <h4>Name: {props.plantName}</h4>
            <h4>Price: {props.plantPrice}</h4>
            <h4>Description: {props.plantDescription}</h4>
            <h4>Category: {props.plantCategory}</h4>
            <h4>Average Rating:</h4>
            <h4>Reviews: {props.plantReview}</h4>
          </div>
          <form>
            <button type="submit">Leave a review?</button>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                How was your experience?
              </label>{" "}
              <br />
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" for="inlineRadio1">
                  1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  2
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  3
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  4
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" for="inlineRadio2">
                  5
                </label>
              </div>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Plant;

