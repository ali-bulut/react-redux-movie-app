import React from "react";
import {Link} from 'react-router-dom';

import { Card, GridColumn, Button, Icon, ButtonContent } from "semantic-ui-react";

const extra = movie => 
  
  <div className="ui two buttons">
    <Button animated as={Link} to={`/movies/${movie._id}`}>
      <ButtonContent visible>Edit</ButtonContent>
      <ButtonContent hidden>
        <Icon name="right arrow"></Icon>
      </ButtonContent>
    </Button>
    <Button animated='vertical'>
      <ButtonContent hidden>Delete</ButtonContent>
      <ButtonContent visible>
        <Icon name="trash"></Icon>
      </ButtonContent>
    </Button>
  </div>

const MovieCard = props => (
  <GridColumn>
    <Card image={props.movie.cover} header={props.movie.title} extra={extra(props.movie)} />
  </GridColumn>
);

export default MovieCard;
