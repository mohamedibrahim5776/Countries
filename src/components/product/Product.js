import Card from 'react-bootstrap/Card';
import React from 'react';
import './Product.css'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // let Asia = this.props.data.region="Asia"
    // let data = this.props.data==Asia  ? console.log(this.props.data) : console.log(false)
      // console.log(this.state.stateData)
    let data = this.props.data
    // console.log(this.props.data==Asia)
      return (
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={data.flag} />
              <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <h5>population : <span>{data.population}</span> </h5> 
                    <h5>region : <span>{data.region}</span> </h5>
                    <h5>capital : <span>{data.capital}</span> </h5>
              </Card.Body>
            </Card>
          );
        }
  }



export default Product