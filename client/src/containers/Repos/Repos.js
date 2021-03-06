import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Repo from "../../components/Repo";
import "./Repos.css";
import _ from 'lodash';

const Repo_Information = ({ data }) => {
  if (!data) {
    return <div>Fetching Repositories</div>;
  }

  return (
    <div className="container">
      <span>
        <Grid container spacing={24}>
          {_.map(data.repos, repo => {
            return (
              <Repo 
                key={repo.name}
                name={repo.name}
                link={repo.html_url}
              />
            );
          })}
        </Grid>
      </span>
    </div>
  );
};

export default Repo_Information;