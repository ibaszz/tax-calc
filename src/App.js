// import logo from './logo.svg';
import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import callApi from './api';
import {getTaxReliefCode} from './helper/reliefCodeMapping'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      salary: 0,
      maritalStatus: 0,
      child: 0,
      annualTaxIncome: 0,
      annualTaxableIncome: 0
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const body = {
      salary: this.state.salary,
      reliefCode: getTaxReliefCode(this.state.maritalStatus, this.state.child)
    }
    callApi(body).then(r => {
      this.setState({
        annualTaxIncome: r.data.data.annualTaxIncome,
        annualTaxableIncome: r.data.data.annualTaxableIncome
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Container style={{maxWidth: '514px'}}>
          <Row className="justify-content-md-center">
            <Col>Tax Calculator</Col>
          </Row>
          <Row className="justify-content-md-center">
            <div className="form-container">
              <Form onSubmit={this.onSubmit}>
                <Form.Group>
                  <Form.Label>Salary</Form.Label>
                  <Form.Control type="number" placeholder="Enter Salary" onChange={(ev) => {this.setState({salary: ev.target.value})}} value={this.state.salary} />
                </Form.Group>
                <Form.Group controlId="maritalStatus">
                  <div key={`inline-radio-marital`} className="mb-3">
                    <Form.Check inline label="Single" name="maritalRadioGroup" type="radio" id={`inline-radio-marital-1`} value={0} onChange={(ev) => {this.setState({maritalStatus: 0})}} checked={this.state.maritalStatus === 0}/>
                    <Form.Check inline label="Married" name="maritalRadioGroup" type="radio" id={`inline-radio-marital-2`} value={1} onChange={(ev) => {this.setState({maritalStatus: 1})}} checked={this.state.maritalStatus === 1}/>
                  </div>
                </Form.Group>
                {this.state.maritalStatus === 1 && <Form.Group controlId="child">
                  <Form.Label>Child</Form.Label>
                  <div key={`inline-radio-child`} className="mb-3">
                    <Form.Check inline label="0" name="childRadioGroup" type="radio" id={`inline-radio-child-1`} onChange={(ev) => {this.setState({child: 0})}} checked={this.state.child === 0} />
                    <Form.Check inline label="1" name="childRadioGroup" type="radio" id={`inline-radio-child-2`} onChange={(ev) => {this.setState({child: 1})}} checked={this.state.child === 1} />
                    <Form.Check inline label="2" name="childRadioGroup" type="radio" id={`inline-radio-child-3`} onChange={(ev) => {this.setState({child: 2})}} checked={this.state.child === 2} />
                    <Form.Check inline label="3" name="childRadioGroup" type="radio" id={`inline-radio-child-4`} onChange={(ev) => {this.setState({child: 3})}} checked={this.state.child === 3} />
                  </div>
                </Form.Group>}
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Row>
          <Row>
            <Container>
              <Row className="justify-content-md-center">
                <Col>Result</Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col>Anual Taxable Income: {this.state.annualTaxableIncome}</Col>
              </Row>
              <Row className="justify-content-md-center">
                <Col>Anual Tax Income: {this.state.annualTaxIncome}</Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
