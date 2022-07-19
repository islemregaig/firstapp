
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './image.jpg'

function App() {
  return (
    
    <div className="App">
    <img src={image} alt="" className="photo"/>
    <Form className="mb">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className="mb-1" >Email address</Form.Label>
        <Form.Control  type="email"   placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className="mb-1">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check className="btn" type="checkbox" label="Check me out"  />
      </Form.Group>
      <Button  variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default App;
