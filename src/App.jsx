import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';


function App() {
  const [ count, setCount ] = useState(0)

  return (
    <>
      <Container className='my-5'>
        <Card>
          <Card.Body>
            <Card.Title className='text-center'>Counter</Card.Title>
            
            <div className='text-center mt-4'>
              <h3>{count}</h3>

              <Button variant="success mx-2" 
                onClick={ ()=> setCount(count + 1)}
              > 
                Increment
              </Button>

              <Button variant="danger mx-2"  
                onClick={ ()=> setCount(count - 1)} 
                disabled={count === 0} 
              >
                Decrement 
              </Button>

              <Button variant="secondary mx-2"  
              onClick={ ()=> setCount(0) } 
              disabled={count === 0} 
              >
                Reset
              </Button>
              
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}

export default App
