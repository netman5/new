import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectItems } from '../../features/projects/projectSlice';

const Works = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.projects.data);

  useEffect(() => {
    dispatch(getProjectItems());
  }, [dispatch]);

  return (
    <div className="work-container">
      <div className="work-content__items">
        {console.log(data)}
      </div>
    </div>
  );
};

export default Works;
