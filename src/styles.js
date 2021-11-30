import styled from "styled-components";

export const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
`;

export const StyledMain = styled.main`
 flex-grow: 1;   
    display: flex;
    flex-direction: column;
    /* flex-flow: center; */
    justify-content: center;
    background-color: black;
    margin-top: 7px;
    color: white;
    /* max-height: 700px;  */
    /* justify-content: space-between; */
  .route {
        display: flex;
        flex-direction: column;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
    }
    .tick {
        padding: 10px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .routeInfo {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 30px;
    }
    .gymSearch {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        margin: 20px;
        justify-content: space-between;
    }
    .gymSearchComp {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px;
    }
    .gymSearchContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .findYourGymText {
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    .form-data {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .DropDown {
        display: flex;
        flex-direction: row;
        margin: 2rem;
        padding: 30px;
        align-items: center;
        align-content: center;
        .tooltip2 {
            padding: 10px
            display: flex;
            flex-direction: column;
            align-content: flex-start;
            border-radius: 15px;
            align-items: center;
            /* width: 10px; */
        }
        .select {
            padding: 10px;
        }

    }
    .findYourGym{
        display: flex;
        flex-direction: column;
        margin: 20px;
        margin-top: 50px;
    }
    .text-muted {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }
    .gymShowContainer {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        padding: 100px;
    }
    .gymShow {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px;
    }
    .gymShowComp {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px;
        
    } 
    .gymImage {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 50px;
    }
    .homePage {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    }
    .placeHolderImage {
        display: flex;
        flex-direction: row;
        margin: 70px;
    } */

.starButton {
    button {
      background-color: transparent;
      border: none;
      outline: none;
      cursor: pointer;
  }
}
.updateStarRatingDiv {
    display: flex;
}
.updateStarButton {
    button {
        background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
    }
}
.on {
  color: #e3cc24;
}
.off {
  color: #bababa;
}
    .starRatingDiv {
        display: flex;
    }
    .addTick-top-row {
        display: flex;
        align-items: center;
        align-content: space-around;
    }
    .modalContainer {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba($color: #000000, $alpha: 1.0);
    }
    .editModal {
        background-color: rgba($color: #555252, $alpha: .35);
        width: calc(15rem + 15vm);
        height: auto;
        padding: 2rem;
        border: solid black 20px;
        border-radius: 20px;


    }
`;

export const StyledHeader = styled.header`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    background-color: #000000;
    color: white;
    height: 3rem;
    justify-items: baseline;
    box-shadow: 1px 1px 3px 1px #808080;
    ul {
        display: flex;
        list-style: none;
    }
    li {
        margin-right: 1rem;
        &.logout {
            cursor: pointer;
        }
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    h1 {
        padding-left: 1rem;
    }
    h2 {
        font-size:20px;
    }
`;

export const StyledFooter = styled.footer`
    display: flex;
    height: 10px;
    justify-content: center;
    align-items: center;
    p {
        margin-top: 30vh;
    }
`;