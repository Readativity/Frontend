import React from "react";
import styled from "styled-components";

class Categories extends React.Component {
  render() {
    return (
      <ArticleCatagories>
        <button><img src="http://via.placeholder.com/293x293" /></button>
        <button><img src="http://via.placeholder.com/293x293" /></button>
        <button><img src="http://via.placeholder.com/293x293" /></button>
        <button><img src="http://via.placeholder.com/293x293" /></button>
        <button><img src="http://via.placeholder.com/293x293" /></button>
        <button><img src="http://via.placeholder.com/293x293" /></button>
        <button><img src="http://via.placeholder.com/293x293" /></button>
      </ArticleCatagories>
    );
  }
}

export default Categories;

const ArticleCatagories = styled.div`

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
 img {
    width: 100%; }
`;
