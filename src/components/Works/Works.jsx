import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectItems } from '../../features/projects/projectSlice';

const Works = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(getProjectItems());
  }, [dispatch]);

  if (loading) {
    return <div>{loading}</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <div className="work-container">
      <div className="work-container__contents">
        <div className="work-container__contents__title">
          <h2>My Works</h2>
        </div>
        <div className="work-content__items">
          {data.map(({ id, attributes }) => (
            <div key={id} className="work-content__item">
              <div className="content__item__top">
                <h3>{attributes.name}</h3>
                <div>
                  <span>{attributes.project_details.type}</span>
                  <span>{attributes.project_details.role}</span>
                  <span>{attributes.project_details.year}</span>
                </div>
              </div>
              <div className="stacks-lists">
                {attributes.tech.stacks.map((item) => <ul key={item}><li>{item}</li></ul>)}
              </div>
              <div className="work-content__item-image">
                <img src={attributes.img_url} alt={attributes.name} style={{ width: '10%' }} />
              </div>
              <div>
                <div className="work-content__item-description">{attributes.descriptions}</div>
                <div>
                  <a href={attributes.live_url} target="_blank" rel="noopener noreferrer">See here</a>
                  <a href={attributes.source_Url} target="_blank" rel="noopener noreferrer">Source</a>
                </div>
              </div>
            </div>
          )).reverse()}
        </div>
      </div>
    </div>
  );
};

export default Works;
