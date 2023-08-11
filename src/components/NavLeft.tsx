import { Link } from "react-router-dom";

import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Name = styled(Link)`
    &:hover {
        color: rgb(238, 226, 222);
    }
`;    

const NavLeft = () => {
    return (
        <StyledDiv>
            <li>
                <Name to="/">Scott Hall</Name>
            </li>
        </StyledDiv>
    )
};

export default NavLeft;