import { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";

const CardContainer = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Form.Control
        placeholder="Search Player..."
        type="search"
        className="w-50 m-auto"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Container className="card-container rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {data
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, i) => (
              <Col md="6" lg="4" xl="3" key={i}>
                <PlayerCard {...item} />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
