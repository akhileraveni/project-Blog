import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
function CardItem({src, title, description, category}) {
  return (
    <Card>
      <Card.Img variant='top' src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Badge bg='primary'>{category}</Badge>

        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}
export default CardItem
