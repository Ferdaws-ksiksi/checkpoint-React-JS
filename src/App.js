import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Nav, Card, CardColumns, Navbar,CardDeck, Form, Button, FormControl } from 'react-bootstrap';


function App() {
  return (
    <div className="App"  style={{
      backgroundImage: `url("/images/sky.png")`,backgroundRepeat: 'repeat', width:'100%', 
   }}> 
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">You & Me</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="#cards">Crushing it </Nav.Link>
      <Nav.Link href="#form">Let's be friends</Nav.Link>

    </Nav>
    <Nav>
      <Nav.Link href="https://www.facebook.com/ferdaws.ksiksi.79">Facebook</Nav.Link>
      <Nav.Link eventKey={2} href="https://www.instagram.com/ferdaws_ksiksi/?hl=fr">
        Instagram
      </Nav.Link>
      <Nav.Link eventKey={3} href="https://www.linkedin.com/in/ferdaws-ksiksi-b6a7a91b4/">
        Linkedin
      </Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<CardDeck id="aboutme">
  <Card>
    
    <Card.Body>
      <Card.Title>About me </Card.Title>
      <Card.Text>
       Hi ! I am Ferdaws ksiksi 22 years old girl who lives in Medenine, 
       right now I am studing at Go My Code and I am realy satisfied with the things I am doing, little facts about me :
        I love reading books ;I read books primarily to learn, grow, and feed my curiosities and love for good stories. 
        This means that I mostly read non-fiction books about great people, lifestyle, and business/marketing(crushing it -- Garyvee)
          in the end I wanna thank you for reading this and thank me for loving me and writing this.
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card>
    {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
    <Card.Body>
      <Card.Title>More ...</Card.Title>
      <Card.Text>
        Since it's a free space I'll talk about me again, this time I'll talke about the one of my favorite books : "Crushing it": 
        In this lively, practical, and inspiring book, Gary dissects every current major social media platform so that anyone, 
        from a plumber to a professional ice skater,
         will know exactly how to amplify his or her personal brand on each.
         He offers both theoretical and tactical advice on how to become the biggest thing on old standbys
         like Twitter, Facebook, YouTube, Instagram, Pinterest, and Snapchat; 
         podcast platforms like Spotify, Soundcloud, iHeartRadio, and iTunes; and other emerging platforms such as Musical.ly.
         For those with more experience, Crushing It! illuminates some little-known nuances and provides innovative tips 
         and clever tweaks proven to enhance more common tried-and-true strategies.
         Crushing It! is a state-of-the-art guide to building your own path to professional and financial success,
         but it’s not about getting rich. It’s a blueprint to living life on your own terms.
      </Card.Text>
      <a href="https://www.garyvaynerchuk.com/">here some extra informations about him </a>
    </Card.Body>

  </Card>
</CardDeck>

<CardColumns id="cards">
  <Card>
    
    <Card.Body>
      <Card.Title> SOME QUOTES FOR GARYVEE </Card.Title>
      <Card.Text>
      “Even if your ambitions are huge, start slow, start small, build gradually, build smart.”
      </Card.Text>
    </Card.Body>
  </Card>
  <Card className="p-3">
    <blockquote className="blockquote mb-0 card-body">
      <p>
      “Being unafraid of making mistakes makes everything easy for me. Not worrying about what people think frees you to do things, and doing things allows you to win or learn from your loss—which means you win either way. Hear me now: you are better off being wrong ten times and being right three than you are if you try only three times and always get it right.”
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
        Gary Vaynerchuk, Crushing It!: How Great Entrepreneurs Build Their Business and Influence—and How You Can,Too
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>OKAY ?</Card.Title>
      <Card.Text>
      Work to make yourself proud {' '}
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white" className="text-center p-3" >
    <blockquote  className="blockquote mb-0 card-body">
      <p >
      “Ideas are worthless without the execution; execution is pointless without the ideas.”
      </p>
      <footer className="blockquote-footer" >
        <small className="text-muted">
        Gary Vaynerchuk <cite title="Source Title"></cite>
        </small>
      </footer>
    </blockquote>
  </Card>
 
 
  <Card className="text-right">
    <blockquote className="blockquote mb-0 card-body">
      <p>
      “Developing your personal brand is key to monetizing your passion online.”
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
        Gary Vaynerchuk 
        </small>
      </footer>
    </blockquote>
  </Card>
  <Card>
    <Card.Body>
      <Card.Title>Enjoy this one </Card.Title>
      <Card.Text>
      “There no longer has to be a difference between who you are and what you do.”
      </Card.Text>
      <Card.Text>
      </Card.Text>
    </Card.Body>
  </Card>
</CardColumns>
<h1 className="title">
 Here some space to tell me more about you </h1>
 <Form id="form">
  
    <Form.Group >
      <Form.Label htmlFor="disabledTextInput" className="label">What people call you ?</Form.Label>
      <Form.Control id="disabledTextInput" placeholder="say something.."/>
    </Form.Group>
    <Form.Group>
      <Form.Label htmlFor="disabledTextInput" className="label">What do you do in your life ?</Form.Label>
      <Form.Control id="disabledTextInput" placeholder="say something.." />
    </Form.Group>
    <Form.Group>
      <Form.Label htmlFor="disabledTextInput" className="label">Tell me more about you !!</Form.Label>
    <FormControl as="textarea" aria-label="With textarea" placeholder="say something.." />

    </Form.Group>
    <Form.Group>
    </Form.Group>
    <Form.Group>

  
    </Form.Group>
    <Button variant="dark" type="button">Go Go and send it </Button>


</Form>
</div>
  );
}

export default App;
