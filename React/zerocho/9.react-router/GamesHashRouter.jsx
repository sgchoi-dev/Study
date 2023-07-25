import React from 'react';
import {HashRouter, Route, Routes, Link} from 'react-router-dom';
import NumberBaseBall from '../3.BaseBall/NumberBaseBallClass';
import RSP from '../5.RSP/RSP';
import Lotto from '../6.lotto/Lotto';

const Games = () => {
  return (
    <HashRouter>
      
      <Routes>
        {/* <Route path='/number-baseball' component={NumberBaseBall}></Route>
        <Route path='/rock-scissors-paper' component={RSP}></Route>
        <Route path='/lotto-generator' component={Lotto}></Route> */}

        <Route path='/number-baseball' element={<NumberBaseBall />}></Route>
        <Route path='/rock-scissors-paper' element={<RSP />}></Route>
        <Route path='/lotto-generator' element={<Lotto />}></Route>
      </Routes>
      <Link to="/number-baseball">숫자야구</Link>&nbsp;
      <Link to="/rock-scissors-paper">가위바위보</Link>&nbsp;
      <Link to="/lotto-generator">로또생성기</Link>
    </HashRouter>
  );
};

export default Games;