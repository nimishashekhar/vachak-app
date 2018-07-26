import React from 'react';
import './App.css';
import Recipient from './components/recipient';
import Message from './components/message';
import facebookLogo from './logo.png';

const recipients = [
  { value: '1', label: 'John' },
  { value: '2', label: 'Peter' },
  { value: '3', label: 'Ram' }
];


function isSaveEnable(state) {
	return ((state.selectedRecipient.length > 0 || state.isBroadcast === true) && state.textMessage.length > 0) ;
}

class App extends React.Component {
	constructor(props){
		super(props)
		
		this.state = {
			isSaved: false,
			selectedRecipient: [],
			isBroadcast: false,
			textMessage: ''
		};

		this.onSave = this.onSave.bind(this);
		this.setSelectedRecipient = this.setSelectedRecipient.bind(this);
		this.setBrodcast = this.setBrodcast.bind(this);
		this.setTextMessage = this.setTextMessage.bind(this);
	}
	
	setSelectedRecipient(selectedValue) {
		this.setState({
			selectedRecipient: selectedValue
		});
	}
	
	setBrodcast(isChecked) {
		this.setState({
			isBroadcast: isChecked
		});
	}
	
	setTextMessage(textMessage) {
		this.setState({
			textMessage
		});
	}
	
	onSave() {
		this.setState({
			isSaved: true
		}, () => {
			setTimeout(() => {
			window.location.reload();
		});
		});
	}
	
	render() {
		const saveEnable = isSaveEnable(this.state);
		
		return (
		  <div className={'app'}>
			<div className={'facebook-banner'}>
				<img className={'logo'} src={facebookLogo}/>
			</div>
			<Recipient options={recipients} setSelectedRecipient={this.setSelectedRecipient} setBrodcast={this.setBrodcast}/>
			<Message setTextMessage={this.setTextMessage}/>
			<button
				className={'save-btn'}
				disabled={!saveEnable}
				onClick={this.onSave}
				value='Save'
			>
				{'Save'}
			</button>
			{
				this.state.isSaved ? alert('Saved Successfully!') : <span/>
			}
		  </div>
		);
	}
}

export default App;
