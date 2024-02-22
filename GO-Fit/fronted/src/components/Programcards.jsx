
// import { Card, CardGroup, Row } from "react-bootstrap";
// import { Container } from "react-bootstrap";

// import card11 from "./images/card11.jpg";
// import card12 from "./images/card12.jpg";
// import card13 from "./images/card13.jpg";


// export function Programcards() {
//   return (
//     <Container>
//       <CardGroup>
//        <Card className="me-2">
                
//                     <Card.Img variant="top" src={card11} />
//                     <Card.Body>
//                         <Card.Title>WorkOut- physical activity can improve your muscle strength and boost your endurance</Card.Title>
//                         <Card.Text>
                           
//                         </Card.Text>
//                     </Card.Body>
        
//                 </Card>

//                 <Card className="me-2">
//                     <Card.Img variant="top" src={card12} />
//                     <Card.Body>
//                         <Card.Title>Yoga </Card.Title>
//                         <Card.Text>
//                         -Yoga improves strength, balance and flexibility.It uses physical postures, breathing exercises, and meditation to improve overall health.
//                         </Card.Text>
//                     </Card.Body>
            
//                 </Card>
//                 <Card className="me-2">
//                     <Card.Img variant="top" src={card13} />
//                     <Card.Body>
//                         <Card.Title>Meditation </Card.Title>
//                         <Card.Text>- Excellence to Godliness It's about training in awareness and getting a healthy sense of perspective.
                        
//                         </Card.Text>
//                     </Card.Body>
                    
//                 </Card>
//             </CardGroup>
           
//     </Container>
//   );
// }
// export default Programcards;



import { Card, CardGroup, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";

import card11 from "./images/card11.jpg";
import card12 from "./images/card12.jpg";
import card13 from "./images/card13.jpg";


export function Programcards() {
  const cardStyles = {
    yellow: {
      background: 'linear-gradient(45deg, #FFFFE0, #FFD700)', // Soft Yellow to Gold gradient
    },
    blue: {
      background: 'linear-gradient(45deg, #ADD8E6, #87CEEB)', // Light Blue to Sky Blue gradient
    },
    green: {
      background: 'linear-gradient(45deg, #98FB98, #32CD32)', // Pale Green to Lime Green gradient
    },
  };

  return (
    <Container>
      <CardGroup>
        <Card className="me-2" style={cardStyles.yellow}>
          <Card.Img variant="top" src={card11} />
          <Card.Body>
            <Card.Title>WorkOut</Card.Title>
            <Card.Text>
              - Physical activity can improve your muscle strength and boost your endurance.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="me-2" style={cardStyles.blue}>
          <Card.Img variant="top" src={card12} />
          <Card.Body>
            <Card.Title>Yoga</Card.Title>
            <Card.Text>
              - Yoga improves strength, balance, and flexibility. It uses physical postures to improve health.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="me-2" style={cardStyles.green}>
          <Card.Img variant="top" src={card13} />
          <Card.Body>
            <Card.Title>Meditation</Card.Title>
            <Card.Text>
              - Excellence to Godliness. It's about training in awareness and getting a healthy sense of perspective.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
  
export default Programcards;