import React, { Fragment, useState } from "react";
import "../Pages.css";
import "./Products.css";
import Button from "react-bootstrap/Button";

import MyVerticallyCenteredModal from "../../components/Ecart/Modal/Modal";

const Products = (props) => {
  const{data} = props
  const [modalShow, setModalShow] = React.useState(false);
 const[modalContent , setModalContent] = useState({})
 
  const handleViewMoreBtn = (e) =>{
    const {value} = e.target ;
    data.map((item , i) => {
      if(value == i) {
        // console.log(data[i].title) ;
        console.log(data[i])
        // console.log(value , i) ;
        setModalContent(data[i]) ;
      
     }
    }
    )
  }

  // console.log(modalContent) ;

  return (
    <>
      <div className="pages-container">
        <div className="products-container">
          {data.map((item ,index) => (
            <Fragment key={item.id}>
              <div className="product-card">
                <Button
                  variant="primary"
                  onClick={(e) => {setModalShow(true)
                    handleViewMoreBtn(e)
                  }}
                  className="view-more-btn"
                  value={index}
                >
                  View More
                </Button>

                <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  modalcontent = {modalContent}
                />

                <img src={item.image} className="card-image-top" alt="..." />

                <div className="card-box">
                  <h5 className="category">{item.category}</h5>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
