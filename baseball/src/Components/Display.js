import React from 'react';
import styled from 'styled-components';

const Board = styled.div`
  
`;

const CountWrapper = styled.div`

`;

const CountName = styled.p`

`;

const CountDisplay = styled.p`

`;

const Display = props => {
    return (
        <Board>
            <CountWrapper>
                <CountName>Balls</CountName>
                <CountDisplay>{props.balls}</CountDisplay>
            </CountWrapper>
            <CountWrapper>
                <CountName>Strikes</CountName>
                <CountDisplay>{props.strikes}</CountDisplay>
            </CountWrapper>
        </Board>
    );
};

export default Display;
