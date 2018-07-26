import React from 'react';
import Select from 'react-select';

class Recipient extends React.Component {
  constructor() {
    super();

    this.state = {
		checked: false,
		selectedOption: null
	};
	
    this.handleCheckedChange = this.handleCheckedChange.bind(this);
	this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  
  handleDropdownChange = (selectedOption) => {
    this.setState({ 
		selectedOption 
	}, () => {
		this.props.setSelectedRecipient(this.state.selectedOption);
	});
  }
  
  handleCheckedChange = () => {
    this.setState({
      checked: !this.state.checked
    }, () => {
		this.props.setBrodcast(this.state.checked);
	});
  }
  
  render() {
	return (
	<div className={'recipients'}>
		<Select
			isMulti={true}
			isDisabled={this.state.checked}
			value={this.state.selectedOption}
			onChange={this.handleDropdownChange}
			options={this.props.options}
		/>
		<input
			className={'broadcast-chkbox'}
			type='checkbox'
			checked={ this.state.checked } 
			onChange={ this.handleCheckedChange }
		/>
		<label className={'broadcast-label'}>{'Broadcast'}</label>
	</div>
    );
  }
}

export default Recipient;
