import React, { useState, useEffect } from 'react';
import styles from './Home.module.scss';
import { Header } from '../Header/Header';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';

export const Home = ({users}) => {
  const [randNum, setRandNum] = useState();
  useEffect(() => {
    const maxNum = users.length + 1;
    let randomize = () => setRandNum(Math.floor(Math.random() * maxNum));
    setInterval(randomize, 8000)
    return () => clearInterval(randomize)
  }, [users]);

  return (
      <div className={styles.container}>
        <Header />
        <DataTable value={users} paginator={true} rows={5}>
          <Column style={{width: '5%'}} field="id" header="Id" />
          <Column field="name" header="Name" />
          <Column field="surname" header="Surname" />
          <Column style={{width: '50%'}} field="desc" header="Description" />
        </DataTable>
        <h2>Random user:</h2>
        {randNum && users && users[randNum] ?
        <div className={styles.randomUser}>
          {users[randNum].name} {users[randNum].surname}
        </div> : ''}
      </div>
  );
};
