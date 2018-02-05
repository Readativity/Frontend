import React from "react";
import styled from "styled-components";

function Form() {
  return (
    <div>
      <UserForm id="CreateAccount" >
        <h2 className="form-title">Create Reader profile</h2>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" />

        <label htmlFor="password">Password</label>
        <input type="text" name="password" />

        <label htmlFor="name">Name</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email Address</label>
        <input type="text" name="email" />

        <ArticleCatagories>

          <label HTMLfor="general" >
            <input type="checkbox" name="general" value="valuable" id="general" />
            <img src="http://funwithbonus.com/wp-content/uploads/npr_news_icon.png" alt="some img" />
            <h3>GENERAL</h3>
          </label>

          <label HTMLfor="Technology" >
            <input type="checkbox" name="Technology" value="valuable" id="Technology" />
            <img src="http://thumbs.microstock.in/unsafe/http://microstock-in.s3.amazonaws.com/catalog/product/thumbnail/2/BUSINESS-AND-FINANCE/Business_10068862_thumbnail.jpg" alt="some img" />
            <h3>TECHNOLOGY</h3>
          </label>

          <label HTMLfor="Health" >
            <input type="checkbox" name="Health" value="valuable" id="Health" />
            <img src="https://cdn.kastatic.org/genfiles/topic-icons/icons/health.png-0b07ae-128c.png" alt="some img" />
            <h3>HEALTH</h3>
          </label>

          <label HTMLfor="Entertainment" >
            <input type="checkbox" name="Entertainment" value="valuable" id="Entertainment" />
            <img src="http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/yellow-road-sign-icons-sports-hobbies/048802-yellow-road-sign-icon-sports-hobbies-masks-sc37.png" alt="some img" />
            <h3>ENTERTAINMENT</h3>
          </label>

          <label HTMLfor="Business" >
            <input type="checkbox" name="Business" value="valuable" id="Business" />
            <img src="https://i.pinimg.com/736x/42/96/22/429622a0f8d1f1e45d6d0d59d25d5c14--job-posting-job-search.jpg" alt="some img" />
            <h3>BUSINESS</h3>
          </label>

          <label HTMLfor="Sports" >
            <input type="checkbox" name="Sports" value="valuable" id="Sports" />
            <img src="http://www.root6technology.com/wp-content/uploads/2014/08/BBC_Sport.jpg" alt="some img" />
            <h3>SPORTS</h3>
          </label>

          <label HTMLfor="Science" >
            <input type="checkbox" name="Science" value="valuable" id="Science" />
            <img src="https://pi.tedcdn.com/r/pf.tedcdn.com/images/playlists/how_were_fighting_cancer_1107183452.jpg?quality=89&w=256" alt="some img" />
            <h3>SCIENCE</h3>
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
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
 img {
    width: 100%; }


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
     top: 40%;
     left: 50%;
     transform: translate(-50%, -50%);
     background-color: rgba(201, 201, 201, 0.6);
     padding: .5rem;
    }

}
`;
