import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Maps = styled.iframe``;

const Map = () => {
  return (
    <Container>
      <Maps>
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d325.853398533961!2d29.09601940880099!3d40.19340649893461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2str!4v1677955989173!5m2!1sen!2str"
        width="600" height="450" style="border:0;" allowfullscreen=""
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      </Maps>
    </Container>
  );
};

export default Map;
