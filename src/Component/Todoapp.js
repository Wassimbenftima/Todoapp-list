import React,{Component} from 'react';
import { Card,InputGroup,FormControl,Button,ListGroup,Form} from "react-bootstrap";

export default class Todoapp extends Component {
    state = {
      list: [],
      x: ""
    };
  
    handelChange = e => {
      this.setState({
        x: e.target.value
      });
    };
  
    additem = (e) => {
        e.preventDefault()
      if (this.state.x) {
        this.setState({
          list: [...this.state.list, {items:this.state.x, isComplete: false }],
          x: ""
        });
      } else alert("mahah");
    };
  
    deleteitem = i => {
      this.setState({
        list: this.state.list.filter((el, index) => index !== i)
      });
    };
  
    complete = (i) => {
        this.setState({
            list: this.state.list.map((el,index)=> index===i?{...el, isComplete:!el.isComplete}: el)
        })
  
    };
  
    render() {
      return (
        <div>
          <Card bg="primary">
            <Card.Body className="box">
              <h1 className={"text-white"}>To-Do-App !</h1>
              <Form onSubmit={this.additem}>
              <Form.Group >
              <InputGroup className="mb-3">
                <FormControl
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={this.state.x}
                  onChange={this.handelChange}
                />
                <InputGroup.Append>
                  <Button variant="success" onClick={this.additem}>
                    Add
                  </Button>
                </InputGroup.Append>
              </InputGroup>
              </Form.Group>
              </Form>
            </Card.Body>
          </Card>
  
          <ListGroup>
            {this.state.list.map((el, key) => (
              <ListGroup.Item key={key}>
                <Button variant="secondary" onClick={()=>this.complete(key)}>{el.isComplete?"Undo" : "Complete"}</Button>
                <Button variant="danger" onClick={() => this.deleteitem(key)}>
                  Delete
                </Button>
                <p
                  style={{
                    display: "inline"
                  }}
                  className={el.isComplete?"complete":""}
                >
                  {el.items}
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      );
    }
  }
  