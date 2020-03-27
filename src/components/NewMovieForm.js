import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Form, Image, Message, MessageHeader } from "semantic-ui-react";

import InlineError from './InlineError';

class NewMovieForm extends Component {
    state={
        _id:this.props.editMovie ? this.props.editMovie._id : '',
        title:this.props.editMovie ? this.props.editMovie.title : '',
        cover:this.props.editMovie ? this.props.editMovie.cover : '',
        errors:{},
        redirect:false
    }

    static propTypes={
        onNewMovieSubmit:PropTypes.func.isRequired
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
      if(nextProps.newMovie.editMovie.title && nextProps.newMovie.title !== this.state.title){
        this.setState({
          title:nextProps.newMovie.editMovie.title,
          cover:nextProps.newMovie.editMovie.cover
        });
      }
    }
    

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = () => {
        const errors=this.validate();
        this.setState({
            errors:errors,
            redirect:true
        });

        const _id=this.state._id || this.props.newMovie.editMovie._id;

        //errors objesinde herhangi bir kayıt yoksa anlamına gelir
        if(Object.keys(errors).length === 0){
            if(!_id)
              this.props.onNewMovieSubmit(this.state);
            else
              this.props.onUpdateMovieSubmit({...this.state, _id});
        }
    }

    validate = () => {
        const errors={};
        if(!this.state.title)
            errors.title="Title cannot be blank!";
        
        if(!this.state.cover)
            errors.cover="Cover Url cannot be blank!";
        return errors;
    }

  render() {
      const errors=this.state.errors;
      const form=(
        <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.editMovie.fetching}>
            {/* !! -> string ifadeyi boolean'a çevirir. */}
          <Form.Field error={!!errors.title}>
            <label>Title</label>
            {errors.title ? <InlineError message={errors.title}/> : null}
            <input id="title" name="title" value={this.state.title} onChange={this.handleChange} placeholder="Title" />
          </Form.Field>
          <Form.Field error={!!errors.cover}>
            <label>Cover Url</label>
            {errors.cover ? <InlineError message={errors.cover}/> : null}
            <input id="cover" name="cover" value={this.state.cover} onChange={this.handleChange} placeholder="Cover Url" />
          </Form.Field>
          <Form.Field>
              <Image src={this.state.cover} size="small"/>
          </Form.Field>
          <Button type="submit">Submit</Button>

          {
              !this.props.newMovie.error.response ? null : 
              <Message negative>
                  <MessageHeader>We're Sorry!</MessageHeader>
                  <p>A problem occured while recording a new movie!</p>
              </Message>
          }
        </Form>
      )
    return (
      <div>
        {
            this.props.newMovie.done && this.state.redirect ? <Redirect to="/movies" /> : form
        }
      </div>
    );
  }
}

export default NewMovieForm;
