import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from './logo.png';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import differenceInSeconds from 'date-fns/differenceInSeconds';

const Container = styled.div`
  min-height: 100vh;
  background: rgb(112, 56, 186);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  text-align: center;
`;

const Small = styled.p`
  font-size: 1.5rem;
`;

const App = () => {
  const startDate = new Date('2019-10-28T09:00:00');
  const timeUntil = formatDistanceToNow(startDate);
  const [seconds, setSeconds] = useState();
  useEffect(() => {
    const diffInSeconds = differenceInSeconds(startDate, new Date());
    setSeconds(diffInSeconds);
    setInterval(() => {
      setSeconds(differenceInSeconds(startDate, new Date()));
    }, 1000);
  }, []);
  return (
    <Container>
      <div>
        <img src={logo} alt="logo" />
        <p>{timeUntil}</p>
        <Small>{seconds}s</Small>
      </div>
    </Container>
  );
};

export default App;
