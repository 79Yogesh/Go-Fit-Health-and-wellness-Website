
import { Col, Button, Row, Card } from "react-bootstrap";

export function Cardprogram() {

    const cardData = [
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        }, 
         {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        }, 
         {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        }, 
         {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        },
        {
            title: 'yoga', description: 'About Meditation: Meditation is one of the most effective tools to manage stress. If you carefully listen to the instructions of our instructor and do exactly as he says, you will completely forget that you were ever stressed out in the first place.',
            details: 'Details for Card 1', imageUrl: require('../../components/images/pexels-yan-krukau-8436627(3).jpg')
        }
    ];


    return (
        <Row>
            {
                cardData.map((a) => {
                    return (
                        <Col lg={4} className="mt-4">
                            <Card>
                                <Card.Img variant="top" src={a.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{a.title}</Card.Title>
                                    <Card.Text>
                                        {a.description}
                                    </Card.Text>
                                    <Button variant="primary">Explore</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })
            }
        </Row>
    );
}