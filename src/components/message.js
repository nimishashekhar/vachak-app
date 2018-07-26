import React from 'react';
import Text from './text';
import Upload from './upload';

const Message = (props) => {
    return (
		<div className={'msg-cont'}>
			<Text setTextMessage={props.setTextMessage}/>
			<Upload/>
		</div>
	);
 }

export default Message;
