import React from "react";
import styled from "styled-components";

function Form(props) {
  return (
    <div>
      <UserForm id="CreateAccount" onSubmit={event => { props.submitHandlerSignUp(event); }} >
        <h2 className="form-title">Create Reader profile</h2>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />

        <label htmlFor="password">Password</label>
        <input type="text" name="password" />

        <label htmlFor="name">Name</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" />

        <h2>Choose 3 Interests</h2>
        <ArticleCatagories>
          <label htmlFor="general" >
            <input className="checkbox" type="checkbox" name="general" value="general" id="general" />
            <img src="http://funwithbonus.com/wp-content/uploads/npr_news_icon.png" alt="some img" />
            <h3>WORLD</h3>
          </label>

          <label htmlFor="Technology" >
            <input className="checkbox" type="checkbox" name="Technology" value="technology" id="Technology" />
            <img src="http://thumbs.microstock.in/unsafe/http://microstock-in.s3.amazonaws.com/catalog/product/thumbnail/2/BUSINESS-AND-FINANCE/Business_10068862_thumbnail.jpg" alt="some img" />
            <h3>TECH</h3>
          </label>

          <label htmlFor="Health" >
            <input className="checkbox" type="checkbox" name="Health" value="health" id="Health" />
            <img src="https://cdn.kastatic.org/genfiles/topic-icons/icons/health.png-0b07ae-128c.png" alt="some img" />
            <h3>HEALTH</h3>
          </label>

          <label htmlFor="Pop-culture" >
            <input className="checkbox" type="checkbox" name="Pop-culture" value="pop-culture" id="Pop-culture" />
            <img src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/yellow-road-sign-icons-sports-hobbies/048802-yellow-road-sign-icon-sports-hobbies-masks-sc37.png" alt="some img" />
            <h3>POP CULTURE</h3>
          </label>

          <label htmlFor="Business" >
            <input className="checkbox" type="checkbox" name="Business" value="business" id="Business" />
            <img src="https://i.pinimg.com/736x/42/96/22/429622a0f8d1f1e45d6d0d59d25d5c14--job-posting-job-search.jpg" alt="some img" />
            <h3>BUSINESS</h3>
          </label>

          <label htmlFor="Sports" >
            <input className="checkbox" type="checkbox" name="Sports" value="sports" id="Sports" />
            <img src="http://www.root6technology.com/wp-content/uploads/2014/08/BBC_Sport.jpg" alt="some img" />
            <h3>SPORTS</h3>
          </label>

          <label htmlFor="Science" >
            <input className="checkbox" type="checkbox" name="Science" value="science" id="Science" />
            <img src="https://pi.tedcdn.com/r/pf.tedcdn.com/images/playlists/how_were_fighting_cancer_1107183452.jpg?quality=89&w=256" alt="some img" />
            <h3>SCIENCE</h3>
          </label>

          <label htmlFor="Food" >
            <input className="checkbox" type="checkbox" name="Food" value="food" id="Food" />
            <img src="https://image.freepik.com/free-vector/food-background-design_1322-10.jpg" alt="some img" />
            <h3>FOOD</h3>
          </label>

          <label htmlFor="Politics" >
            <input className="checkbox" type="checkbox" name="Politics" value="politics" id="Politics" />
            <img src="http://www.caribbeanelections.com/images/sections/politcs.jpg" alt="some img" />
            <h3>POLITICS</h3>
          </label>

        </ArticleCatagories>

        <input type="submit" name="submit" value="Submit" />
      </UserForm>
    </div>
  );
}

export default Form;

const UserForm = styled.form`
display: flex;
  flex-flow: column;
  padding: 1rem;
  padding-top: 0rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const ArticleCatagories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
 img {
    width: 100%;
    border-radius: 15%;
  }


  input[type=checkbox] {
    position: absolute;


 }

 /* Default State */
 div {
    background: green;
    width: 400px;
    height: 100px;
    line-height: 100px;
    color: white;
    text-align: center;
 }

 /* Toggled State */
 input[type=checkbox]:checked ~ div {
    background: red;
 }
label {
  position: relative;
    text-align: center;
    h3 {
     position: absolute;
     border-radius: 10%;
     top: 27%;
     left: 50%;
     transform: translate(-50%, -50%);
     background-color: rgba(201, 201, 201, 0.7);
     padding: .5rem;
    }

}
`;
