import React from 'react';
import styled from 'styled-components';

const Board = styled.div`
  display: flex;
  justify-content: center;
  background-color: darkgreen;
`;

const CountWrapper = styled.div`
  margin: 2% 5%;
`;

const CountName = styled.h1`
  
`;

const CountDisplay = styled.h2`

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
