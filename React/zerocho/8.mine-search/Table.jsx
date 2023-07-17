import React, {useContext} from 'react';
import Tr from './Tr';
import { TableContext } from './MineSearch';

const Table = () => {
  const {tableData} = useContext(TableContext);

  return (
    <table>
      <tbody>
        {Array(tableData.length).fill().map((tr, i)=>{
          return (
            <Tr key={i} rowIndex={i}></Tr>
          )
        })};
      </tbody>
    </table>
  );
};

export default Table;