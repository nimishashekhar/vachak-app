import React from 'react';


const Text = (props) => {
	function onChange(event) {
		props.setTextMessage(event.target.value);
	}
	
	return (
		<textarea
			className={'text'}
			onChange={onChange}
			placeholder={'Please enter your message'}
		/>
	);
 }

export default Text;





























/*import React from 'react';

class Text extends React.Component {
  constructor() {
    super();

    this.state = {
		messageValue: ''
	};
  }
  
  render() {
	
	return (
		<textarea
			className={'text'}
			placeholder={'Please enter your message'}
		/>
    );
  }
}

export default Text;
*/
