import React from 'react';
import './Management.scss';
import Panel from '../../Elements/Panel/Panel';
import ManageTable from '../../Elements/ManageTable/ManageTable';

const Management = () => {
  return(
    <div className='management__page'>
        <Panel/>
        <ManageTable/>
    </div>
  )
}

export default Management;


