import React, { useState} from 'react';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import Home from '../Home';

    const Review = (props) => {
    const {token, plant, user, getPlantReviews} = props;
    const reviewRating = Array(5).fill(0);
    const [rating, setRating] = useState(undefined);
    const planttId = currentPlant.planttId;
    const userId = currentUser.userId
    const newReview = {
        reviewText: "",
        userId: userId,
        plantId: null,
        };
    }

    const [eachEntry, setEachEntry] = useState(newReview);
    const [rewiewError, setReviewError] = ({});
    const rewiewFormValidation = () => {
        let rewiewError = {};
        let isValid = true;
        if (eachEntry.description.trim().length === 0){
        rewiewError.descriptionError = "Description to rating.";
        isValid = false;
        }
        setReviewError(reviewError);
        return isValid
    }

    handleSubmit = async(event) => {
        event.preventDefault()
        let review = {
            reviewId: this.props.reviewId,
            userId: this.props.userId,
            reviewText: this.props.reviewText,
            reviewRating: this.props.reviewRating
        }
        this.setState({
            reviews: [...this.state.reviews, reviewText],
            ratings: [...this.state.ratings, reviewRating]
        })
        await axios.post('https://localhost:44394/api/review', reviewText, reviewRating)
        this.setState({
            reviewText: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            review: event.target.value
        })
    }

    return (
        <form onSubmit = {this.handleSublit}>
            <input value = {this.state.reply} onChange = {this.handleChange} name = "review"></input>
            <button type = "submit">Leave review</button>
        </form>
    )
