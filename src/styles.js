import styled from "styled-components";

export const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
        padding-top: 50px;
        justify-content: center;
    }
    .routeInfo {
        Padding: 10px;
    }
`;


export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
    color: #ffffff;
    height: 3rem;
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
`;

export const StyledFooter = styled.footer`
    display: flex;
    height: 3rem;
    justify-content: center;
    align-items: center;
`;