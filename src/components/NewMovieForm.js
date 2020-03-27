import React, { Component } from "react";
import { Button, Form, Image } from "semantic-ui-react";

import InlineError from './InlineError';

class NewMovieForm extends Component {
    state={
        title:'',
        cover:'',
        errors:{}
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onSubmit = () => {
        const errors=this.validate();
        this.setState({
            errors:errors
        });
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
    return (
      <div>
          <h2>New Movie</h2>
        <Form onSubmit={this.onSubmit}>
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
        </Form>
      </div>
    );
  }
}

export default NewMovieForm;
