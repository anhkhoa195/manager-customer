import React from 'react';
import { Row, Form, Col, Button } from 'react-bootstrap';

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = {
            id: '',
            name: '',
            age: '',
            email: '',
            position: '',
            phone: '',
        }

        if (props.product) {
            this.state = props.product
        } else {
            this.state = this.initialState;
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {

        let pageTitle;
        if (this.state.id) {
            pageTitle = <h2>Edit Product</h2>
        } else {
            pageTitle = <h2>Add Product</h2>
        }

        return (
            <div>
                {pageTitle}
                <Row>
                    <Col sm={6}>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    placeholder="Name" />
                            </Form.Group>
                            <Form.Group controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="age"
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    placeholder="Age" />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="position">
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="position"
                                    value={this.state.position}
                                    onChange={this.handleChange}
                                    placeholder="Position" />
                            </Form.Group>
                            <Form.Group controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={this.state.phone}
                                    onChange={this.handleChange}
                                    placeholder="Phone" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="hidden" name="id" value={this.state.id} />
                                <Button variant="success" type="submit">Save</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AddProduct;