import React from 'react';

const initialState = {
      file: null,
	  type: ''
    }; 

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = initialState;
	
	this.myRef = React.createRef();
    this.handleChange = this.handleChange.bind(this);
	this.reset = this.reset.bind(this);
  }
  
  reset() {
	  this.setState(initialState);
  }
  
  handleChange(event) {
	if(event.target.files[0]) {
		let type = event.target.files[0].type.substr(0, event.target.files[0].type.indexOf('/')); 
		
		this.setState({
			type
		});
	}
	
	if (this.state.type === 'audio' || this.state.type === 'video') {
		this.setState({
			file: URL.createObjectURL(event.target.files[0])
		}, () => {
			this.myRef.current.children[1].load();
		});
	} else {
		this.setState({
			file: URL.createObjectURL(event.target.files[0])
		});
	}
  }
  
  render() {
	const mediaType = this.state.type;
	
	if (this.state.file) {
		return (
			<div className={'preview-cont'}
				ref={this.myRef}
			>
					{
						mediaType === 'video' ? 
						<div className={'preview'}>
							<video controls="controls" height={'200'} width={'300'}>
								<source src={this.state.file}/>
							</video>
						</div>	: mediaType === 'audio' ? 
						<div className={'preview'}>
							<audio controls="controls" height={'200'} width={'300'}>
								<source src={this.state.file}/>
							</audio> 
						</div> : mediaType === 'image' ? 
						<div className={'preview'}>
							<img src={this.state.file} height={'200'} width={'300'}/>
						</div> : <div/>
					}
					<button
						className={'remove-btn'}
						onClick={this.reset}>{'Remove'}
					</button>
			</div>
		);
	} else {
		return (
		<div className={'dragLBELCont'}>
			<label className={'dragLBEL'} >{'Drag & Drop or'}</label>
			<input className={'box-upload'} type="file" onChange={this.handleChange}/>
		</div>
		);
	}
  }
}

export default Upload; 