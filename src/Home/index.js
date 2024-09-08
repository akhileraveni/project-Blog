import React from 'react'
import Form from 'react-bootstrap/Form'
import CardItem from '../Card/card.jsx'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './index.css'
function Home() {
  const sample = [
    {
      title: 'intro to programming',
      description:
        'A programming language is a set of symbols, grammars and rules with the help of which one is able to translate algorithms to programs that will be executed by the computer',
      src: 'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg',
      category: 'programming',
    },
    {
      title: 'How AI will change the future',
      description:
        'Artificial intelligence (AI) is a set of technologies that enable computers to perform a variety of advanced functions, including the ability to see, understand and translate spoken and written language, analyze data, make recommendations, and more',
      src: 'https://d3g5ywftkpzr0e.cloudfront.net/wp-content/uploads/2023/07/13220529/Artificial-Intelligence-in-Indonesia-The-current-state-and-its-opportunities.jpeg',
      category: 'Technology',
    },
    {
      title: 'blackchain an overview',
      description:
        'A blockchain is a decentralized, distributed and public digital ledger that is used to record transactions across many computers so that the record cannot be altered retroactively without the alteration of all subsequent blocks and the consensus of the network.',
      src: 'https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg',
      category: 'Technology',
    },
  ]
  return (
    <>
      <div className='bg bg-primary high text-light'>
        <h1 className='font text-center'>Welcome to Akhil Blogs</h1>
        <p>Explore numbers of blogs</p>
        <Form.Control
          type='text'
          className='input'
          placeholder='Search your blogs here....'
        />
      </div>
      <div>
        <h1 className='text-center m-3'> All Blogs</h1>
        <Row xs={1} md={3} className='g-4'>
          {sample.map((item, key) => (
            <Col key={key}>
              <CardItem {...item} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}
export default Home
