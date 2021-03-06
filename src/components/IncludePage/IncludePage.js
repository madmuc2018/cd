import React, { Component } from "react";
import api from "../../Data/api";
import FormRow from '../FormRow';
import AsyncAwareContainer from '../AsyncAwareContainer';
import { Container, Button, Modal, Row, Col, Table, Card } from 'react-bootstrap';
import "nouislider/distribute/nouislider.css";
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import StressSlider from '../StressSlider';

class IncludePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      estimatedHours: "",
      regulatedStartDate: null,
      regulatedEndDate: null,
      focusedInput: null,
      notes: "",
      estimatedStress: 5,
    };

    this.handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }

    this.validInput = () => this.state.name.trim().length > 0 
      && this.state.estimatedHours.trim().length > 0
      && !isNaN(parseFloat(this.state.estimatedHours.trim()))
      && this.state.regulatedStartDate
      && this.state.regulatedEndDate;

    this.submit = async event => {
      try {
        this.setState({loading: 'Including task'});
        const { name, estimatedHours, notes, estimatedStress } = this.state;
        await api.includeTask({ 
          name, estimatedHours: parseFloat(estimatedHours.trim()), notes, estimatedStress,
          regulatedStartDate: this.state.regulatedStartDate.valueOf(),
          regulatedEndDate: this.state.regulatedEndDate.valueOf()
        });
        this.props.history.push("/");
      } catch (error) {
        alert(error.message);
      } finally {
        if (!this.componentUnmounted)
          this.setState({loading: undefined});
      }
    }

    this.onEnd = () => (render, handle, value, un, percent) => {
      this.setState({
        estimatedStress: percent/10
      });
    };
  }

  componentWillUnmount() {
    this.componentUnmounted = true;
  }

  render() {
    if (window.FOR_INSTRUCTOR) {
      return (
        <div className="cdBack" style={{'margin': '5% 0 0 0'}}>
          <h1 className="text-center">Create a New Task</h1>
          <AsyncAwareContainer loading={this.state.loading}>
            <Container style={{
              'minWidth': '100vw',
              'margin': '7% 0 0 0'
            }}>
              <Row>
                <Col>
                  <FormRow name="name" placeholder="Activity Name" onChange={this.handleChange} />
                  <FormRow name="estimatedHours" placeholder="Estimated Hours" onChange={this.handleChange} />
                  <FormRow name="notes" placeholder="Notes" onChange={this.handleChange} />
                  <DateRangePicker
                    startDate={this.state.regulatedStartDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.regulatedEndDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => {
                      const regulatedStartDate = startDate ? startDate.startOf('day') : startDate;
                      const regulatedEndDate = endDate ? endDate.startOf('day') : endDate;
                      console.log(`regulatedStartDate: ${regulatedStartDate}, regulatedEndDate: ${regulatedEndDate}`);
                      this.setState({
                        regulatedStartDate,
                        regulatedEndDate
                      });
                    }} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    isOutsideRange={() => false} //For testing past dates
                  />
                  <h6 style={{'textAlign': 'right'}}>Selected stress score: {this.state.estimatedStress}</h6>
                </Col>


                <StressSlider start={this.state.estimatedStress} onEnd={this.onEnd} />


                <Col>
                  <Card className="text-center" body><b>What level of stress do you think your students may experience in completing this task?</b></Card>
                  <br/>
                  <h5>Interpretation of the stress scroll bar:</h5>
                  <Table className="cdBack" bordered>
                    <thead>
                      <tr>
                        <th>Score</th>
                        <th>Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1 - 4 = low stress</td>
                        <td>Student may <b>not</b> be distressed</td>
                      </tr>
                      <tr>
                        <td>4.1 - 7 = moderate stress</td>
                        <td>Student may be <b>mildly</b> distressed</td>
                      </tr>
                      <tr>
                        <td>7.1 - 10 = high stress</td>
                        <td>Student may  be <b>severely</b> distressed</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Container>
            <br/><br/>
            <div className="text-center">
              {
                this.validInput() ? <Button className="cdFore" variant="light" onClick={this.submit}> Create </Button> : <Guard/>
              }
            </div>
          </AsyncAwareContainer>
        </div>
      );
    }
    return (
      <div>
        
      </div>
    );
  }
}

function Guard() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="cdFore" variant="light" onClick={handleShow}>
        Create
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body> Do not leave name, Estimated Hours, and dates empty and make sure Estimated Hours is a number</Modal.Body>
        <Modal.Footer>
          <Button className="cdFore" variant="light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default IncludePage;