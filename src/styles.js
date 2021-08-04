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
    justify-content: center;
    background-color: black;
    margin-top: 7px;
    color: white;
    max-height: 500px;
    .route {
        display: flex;
        flex-direction: row-reverse;
        padding: 50px;
        justify-content: space-between;
        align-items: center;
    }
    .routeInfo {
        display: flex;
        flex-direction: column;
        Padding: 30px;
    }
    .gymSearch {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .gymSearchComp {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        flex-direction: column;
        margin: 6rem;
    }
    .findYourGym{
        display: flex;
        flex-direction: column;

    }
    .text-muted {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
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
    height: 3rem;
    justify-content: center;
    align-items: center;
`;