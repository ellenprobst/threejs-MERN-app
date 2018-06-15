import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';
import Slider from '@material-ui/lab/Slider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

import './form.css';

const styles = {
  container: {
    width: 150,
  }
};

class Form extends Component {

  state = {
    title: '',
    value: 3
  }

  handleChange = title => event => {
    this.setState({
      [title]: event.target.value,
    });
  };

  handleSelect = (event, value) => this.setState({ value });

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <form autoComplete="off">
        <TextField
          id="title"
          label="Title"
          value={this.state.title}
          onChange={this.handleChange('name')}
          margin="normal"
        />

        <div className={classes.container}>
          <Slider value={value} min={0} max={6} step={1} onChange={this.handleSelect} />
          <Slider value={value} min={0} max={6} step={1} onChange={this.handleSelect} />
        </div>

        <Button variant="fab" color="secondary" aria-label="edit" className={classes.button}>
          <AddIcon/>
        </Button>
      </form>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
