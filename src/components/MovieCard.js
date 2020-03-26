import React from "react";
import { Card, GridColumn } from "semantic-ui-react";

const MovieCard = props => (
  <GridColumn>
    <Card image={props.movie.cover} header={props.movie.title} />
  </GridColumn>
);

export default MovieCard;
