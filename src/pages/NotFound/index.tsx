import { Row, Col } from "antd";
import notFoundPage from '../../content/NotFound.json';
import styled, { keyframes } from "styled-components";
import { Suspense } from 'react';


const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const CenteredSection = styled("section")`
  display: flex;
  justify-content: center;
  align-items: flex;
  justify-content: flex-center;
  padding-top: 10%;
  height: 100vh;
  background: url('/img/ErrorPage.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: white;
  font-size: 2em;
  @media only screen and (max-width: 600px) {
    padding: 25% 10% 0 10%; 
    font-size: 15px;
  }
`;

const Title = styled("h1")`
  font-size: 4em;
  text-shadow: 2px 2px 4px white;
  text-shadow: 0 0 5px white, 0 0 10px white;
  animation: 1s ${fadeIn} ease-out;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    text-align: center;
    text-shadow: 1px 1px 2px white;
  }
`;

const Text = styled("p")`
  font-size: 2.5em;
  text-shadow: 2px 2px 4px white;
  text-shadow: 0 0 5px white, 0 0 10px white;
  animation: 1s ${fadeIn} ease-out;
  @media only screen and (max-width: 600px) {
    font-size: 15px;
    text-align: center;
    text-shadow: 1px 1px 2px white;
  }
`;

const NotFoundPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CenteredSection>
          <Row justify="center" align="middle">
            <div>
              <Col lg={24} md={11} sm={11} xs={24}>
                  <Title>{notFoundPage.title}</Title>
                  <Text>{notFoundPage.text}</Text>
              </Col>
            </div>
          </Row>
        </CenteredSection>
      </Suspense>
    </div>
  );
};

export default NotFoundPage;

