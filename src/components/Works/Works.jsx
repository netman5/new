import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectItems } from '../../features/projects/projectSlice';
import NoData from './NoData';

const Works = () => {
  const dispatch = useDispatch();
  const { data, error } = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(getProjectItems());
  }, [dispatch]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <NoData error={error} />;
  }

  return (
    <Element id="works" name="works">
      <div className="work-container">
        <div className="work-container__contents">
          <div className="work-container__contents__title">
            <h2>My recent Works</h2>
          </div>
          <div className="work-content__items">
            {data.map(({ id, attributes }) => (
              <div key={id} className="work-content__item">
                <h3>{attributes.name}</h3>
                <div className="content__item__top">
                  <div className="content__item__top__container">
                    <div>
                      <h5>{attributes.project_details.role}</h5>
                    </div>
                    <div className="stacks-lists">
                      {attributes
                        .tech.stacks.slice(0, 3).map((item) => <ul key={item}><li>{item}</li></ul>)}
                    </div>
                  </div>
                </div>
                <div className="work-content__item-image">
                  <img src={attributes.img_url} alt={attributes.name} />
                </div>
                <div>
                  <div className="work-content__item-description">{attributes.descriptions}</div>
                  <div className="work-content__item-projects__links">
                    <a href={attributes.live_Url} target="_blank" rel="noopener noreferrer" className="live">See here</a>
                    <a href={attributes.source_Url} target="_blank" rel="noopener noreferrer" className="repo">Source</a>
                  </div>
                </div>
              </div>
            )).sort((a, b) => b.updatedAt - a.updatedAt)}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Works;
