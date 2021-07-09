//////
// dependencies/imports
//////
import { StyledFooter } from "../styles";

export default function Footer(props) {
    return (
        <StyledFooter>
            <p>Footer &copy; All Rights Reserved {new Date().getFullYear}</p>
        </StyledFooter>
    )
}