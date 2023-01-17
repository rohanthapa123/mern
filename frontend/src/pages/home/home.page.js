import { Nav, Container, Row, Col, Card } from "react-bootstrap";
// import { users } from "../../mock/data";
import "./homepage.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/global.css"
import banner1 from "../../assets/images/banner1.webp";
import banner2 from "../../assets/images/banner2.webp";
import banner3 from "../../assets/images/banner3.webp";
import offer from "../../assets/images/offer.gif";
import cat1 from "../../assets/images/cat1.jpg";
import { NavBar } from "../../components/home/home.component";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Footerlayout } from "../../components/home/home.component";
const HomePage = () => {
  //   let [banner, setBanner] = useState()
  //   let [loading, setLoading] = useState(false)
  //   let data = users.result;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  let [banner,setBanner] = useState();
  let [loading,setLoading] = useState(true)
  //banner state craete
  //load => banner state null => skeleton/loading...
  //API call => Effefct ===> tate change/update
  // useEffect(()=>{
  //  console.log("i am alwasy")
  //   //this hooks always whenever any state variable of this compoenent loads/updates 
  // });
  useEffect(()=>{
    // console.log("on first mount")
    let bannerData =[{
      _id: "",
      title: "Bannere1",
      image: banner1,
      link:""
    },{
      _id: "",
      title: "Bannere2",
      image: banner2,
      link:""
    },{
      _id: "",
      title: "Bannere3",
      image: banner3,
      link:""
    }]
    setBanner(bannerData)
    setLoading(false)
    //this hooks calls once on the component first mount
  },[]);
  useEffect(()=>{
    // console.log("on loading")
    //this hooks calls once on the component first mount
  },[loading]);

  return (
    <>
      {
        loading ? "Loading..." :

        <Slider {...settings}>
          {
            banner && banner.map((item,index)=>(
              <div key={index}>
                <img src={item.image} alt={item.title} className="banner-img"/>
              </div>
            ))
          }
      </Slider>
      }
      {/* banner end * /}
      {/* offer */}
      <Container>
        <Row>
          <Col>
            <Nav.Link href="/">
              <img alt="offer" src={offer} className="img img-fluid my-3" />
            </Nav.Link>
          </Col>
        </Row>
      </Container>
      {/* offer ends */}
      {/* categories */}
      <div className="bg-light">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center text-success mb-2">Categories</h1>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Card>
                <NavLink to={"/category/id"}>
                  <Card.Img variant="top" src={cat1} />
                </NavLink>
                <Card.Body>
                  <NavLink to={"/category/id"}>
                  <Card.Title>Card Title</Card.Title>
                  </NavLink>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* categories end */}
      {/* Product Strat */}
      <div className="py-4 bg-light">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center text-primary">Products</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} className="mb-3" />
                <Card.Body>
                  <Card.Title className="my-2">
                    Foldable and Portable Multipurpose Laptop Table
                  </Card.Title>
                  <h3 className="text-danger">Rs 940</h3>
                  <Row>
                    <Col>
                      <p className="text-decoration-line-through">Rs 1,999 </p>
                    </Col>
                    <Col>
                      <span> -53%</span>
                    </Col>
                  </Row>
                  <p>⭐⭐⭐⭐⭐(5)</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} className="mb-3" />
                <Card.Body>
                  <Card.Title className="my-2">
                    Foldable and Portable Multipurpose Laptop Table
                  </Card.Title>
                  <h3 className="text-danger">Rs 940</h3>
                  <Row>
                    <Col>
                      <p className="text-decoration-line-through">Rs 1,999 </p>
                    </Col>
                    <Col>
                      <span> -53%</span>
                    </Col>
                  </Row>
                  <p>⭐⭐⭐⭐⭐(5)</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} className="mb-3" />
                <Card.Body>
                  <Card.Title className="my-2">
                    Foldable and Portable Multipurpose Laptop Table
                  </Card.Title>
                  <h3 className="text-danger">Rs 940</h3>
                  <Row>
                    <Col>
                      <p className="text-decoration-line-through">Rs 1,999 </p>
                    </Col>
                    <Col>
                      <span> -53%</span>
                    </Col>
                  </Row>
                  <p>⭐⭐⭐⭐⭐(5)</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} className="mb-3" />
                <Card.Body>
                  <Card.Title className="my-2">
                    Foldable and Portable Multipurpose Laptop Table
                  </Card.Title>
                  <h3 className="text-danger">Rs 940</h3>
                  <Row>
                    <Col>
                      <p className="text-decoration-line-through">Rs 1,999 </p>
                    </Col>
                    <Col>
                      <span> -53%</span>
                    </Col>
                  </Row>
                  <p>⭐⭐⭐⭐⭐(5)</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} className="mb-3" />
                <Card.Body>
                  <Card.Title className="my-2">
                    Foldable and Portable Multipurpose Laptop Table
                  </Card.Title>
                  <h3 className="text-danger">Rs 940</h3>
                  <Row>
                    <Col>
                      <p className="text-decoration-line-through">Rs 1,999 </p>
                    </Col>
                    <Col>
                      <span> -53%</span>
                    </Col>
                  </Row>
                  <p>⭐⭐⭐⭐⭐(5)</p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={cat1} className="mb-3" />
                <Card.Body>
                  <Card.Title className="my-2">
                    Foldable and Portable Multipurpose Laptop Table
                  </Card.Title>
                  <h3 className="text-danger">Rs 940</h3>
                  <Row>
                    <Col>
                      <p className="text-decoration-line-through">Rs 1,999 </p>
                    </Col>
                    <Col>
                      <span> -53%</span>
                    </Col>
                  </Row>
                  <p>⭐⭐⭐⭐⭐(5)</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Product End */}
    </>
  );
};
export default HomePage;
