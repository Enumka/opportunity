import React from 'react';
import WorkersItem from '../WorkersItem/WorkersItem';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

function WorkersList() {
  const [fetching, setFetching] = useState(true);
  const [workers, setWorkers] = useState([]);
  const [curPag, setCurPag] = useState(0);
  const [totalPage, setTotalPage] = useState(null);

  console.log('1', totalPage, curPag);
  useEffect(() => {
    if (fetching) {
      console.log('fetching');
      axios
        .get(`/workers/${curPag}`)
        .then((responce) => {
          console.log(responce.data);
          setTotalPage(responce.data.totalPages);
          setWorkers([...workers, ...responce.data.content]);
          setCurPag((prevState) => prevState + 1);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHadnler);

    return function () {
      document.removeEventListener('scroll', scrollHadnler);
    };
  }, []);

  const scrollHadnler = (e) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
        100 &&
      totalPage < curPag
    ) {
      console.log('scroll');
      setFetching(true);
    }
  };

  return (
    <Grid container spacing={2}>
      {workers?.map((worker) => (
        <WorkersItem key={worker.id} worker={worker} />
      ))}
    </Grid>
  );
}

export default WorkersList;
