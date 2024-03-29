import React, {useContext, memo} from 'react';
import Tr from './Tr';
import { TableContext } from './MineSearch';

const Table = memo(() => {
  const {tableData} = useContext(TableContext);

  return (
    <table>
      <tbody>
        {Array(tableData.length).fill().map((tr, i)=>{
          return (
            <Tr key={i} rowIndex={i}></Tr>
          )
        })}
      </tbody>
    </table>
  );
});

export default Table;