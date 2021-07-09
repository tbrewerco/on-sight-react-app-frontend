import styled from "styled-components";

export const StyledLayout = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

export const StyledMain = styled.main`
    flex-grow: 1;   
    display: flex;
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
`;

export const StyledFooter = styled.footer`
    display: flex;
    height: 3rem;
    justify-content: center;
    align-items: center;
`;