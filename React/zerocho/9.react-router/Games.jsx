import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes, Link} from 'react-router-dom';
import NumberBaseBall from '../3.BaseBall/NumberBaseBallClass';
import RSP from '../5.RSP/RSP';
import Lotto from '../6.lotto/Lotto';
import GameMatcher from './GameMatcher';

const Games = () => {
  return (
    <BrowserRouter>
    <Link to="/game/number-baseball">숫자야구</Link>&nbsp;
      <Link to="/game/rock-scissors-paper">가위바위보</Link>&nbsp;
      <Link to="/game/lotto-generator">로또생성기</Link>&nbsp;
      <Link to="/game/index">게임 매쳐</Link>
      <Routes>
        {/* <Route path='/number-baseball' element={<NumberBaseBall />}></Route>
        <Route path='/rock-scissors-paper' element={<RSP />}></Route>
        <Route path='/lotto-generator' element={<Lotto />}></Route> */}
        <Route path='/game/:name' element={<GameMatcher />}></Route>
      </Routes>      
    </BrowserRouter>
  );
};

export default Games;