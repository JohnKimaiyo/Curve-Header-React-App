import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import images from "./Images/usa.png";
function Home() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" href="https://www.bea.gov/" />
        <Card.Body>
          <Card.Title>USA Macro Econ News</Card.Title>

          <Button href="https://www.bea.gov/">
            Beurue of Economic Statistics
          </Button>
          <Button href="https://www.ft.com/us-economy">Financial Times</Button>
          <Button href="https://www.focus-economics.com/countries/united-states/">
            {" "}
            The Focus Economics
          </Button>
          <Button href="https://www.theguardian.com/business/useconomy">
            The Gurdian
          </Button>
          <Button href="https://www.bbc.com/news/topics/c1038wnxypvt">
            BBC US economy
          </Button>
          <Button href="https://www.bls.gov/eag/eag.us.htm">
            U.S. BUREAU OF LABOR STATISTICS
          </Button>
        </Card.Body>
      
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Canada Macro Econ News</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Brazil Macron News</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Home;
