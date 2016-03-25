import React, { PropTypes } from 'react';

const ListItemForm = React.createClass({
  displayName: 'ListItemForm',

  getInitialState() {
    return { formValue: '' };
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleAddItem(this.state.formValue);
    this.setState({ formValue: '' });
  },

  render() {
    return (
      <div>
        <input
          type='text'
          value={this.state.formValue}
          onChange={e => this.setState({ formValue: e.target.value })} />
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  },

  propTypes: {
    handleAddItem: PropTypes.func.isRequired
  }
});

export default ListItemForm;
