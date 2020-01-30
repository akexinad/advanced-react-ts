import styled from "styled-components";

interface StyledDivProps {
    backgroundColor: string;
}

const StyledDiv = styled.div<StyledDivProps>`
    text-align: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default StyledDiv;
