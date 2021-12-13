import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const ShowReviews = (props) => {
    let plantReviews= props.plantReviews;
    const rating = Array(5).fill(0);
    return (
        <Container>
            <Row>
                <Col sm={1}></Col>
                <Col sm={10}>
                    <div>
                        <div>
                            {plantReviews.map((review) => {
                                return (
                                    <div>
                                        <div>
                                            <h5>{review.user.userName}</h5>
                                            <p>{review.description}</p>
                                            <p>{rating}</p>
                                            )}
                                        </div>
                                    </div>
                                );
                                })}
                        </div>
                    </div>
                </Col>
                <Col sm = {1}></Col>
            </Row>
        </Container>
    )
}

export default ShowReviews