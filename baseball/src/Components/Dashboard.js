import React from 'react';
import styled from 'styled-components';

const ButtonsWrapper = styled.div`

`;

const Button = styled.button`

`;

const Dashboard = ({balls, strikes, setBalls, setStrikes}) => {
    const clearBoard = () => {
        setBalls(0);
        setStrikes(0);
    };

    const countIncrement = e => {
        if (e.target.name === 'ball') {
            if (balls < 3) {
                setBalls(balls + 1);
            } else {
                clearBoard();
            }
        } else if (e.target.name === 'foul') {
            if (strikes < 2) {
                setStrikes(strikes + 1);
            } else {
                setStrikes(strikes);
            }
        } else {
            if (strikes < 2) {
                setStrikes(strikes + 1);
            } else {
                clearBoard();
            }
        }
    };

    return (
        <ButtonsWrapper>
            <Button name='ball' onClick={countIncrement}>Ball</Button>
            <Button name='strike' onClick={countIncrement}>Strike</Button>
            <Button name='foul' onClick={countIncrement}>Foul</Button>
            <Button name='clear' onClick={clearBoard}>Hit</Button>
        </ButtonsWrapper>
    );
};

export default Dashboard;