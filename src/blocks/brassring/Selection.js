import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from 'react';

function Selection() {
	const [ optionsState, setOptionsState ] = useState( 'none' );

	const handleChange = ( newValue ) => {
		setOptionsState( newValue );
	};

	return (
		<form id="jobTypeSelect">
			<SelectControl
				label={ __( 'Job type' ) }
				value={ optionsState }
				options={ [
					{ value: 'none', label: 'Filter by job type' },
					{ value: 'staff', label: 'Staff' },
					{ value: 'student', label: 'Student jobs' },
				] }
				onChange={ ( newValue ) => handleChange( newValue ) }
			/>
		</form>
	);
}

export default Selection;
