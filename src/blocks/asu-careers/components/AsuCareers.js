import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';
import Select from 'react-select';

import { useBrassring } from '../hooks/useBrassring';

const AsuCareers = ( props ) => {
	const { listType, deptList } = props;

	// default list type selection is user-choice.
	// If Editor overrides this, then use our Select dropdown to ask user for their choice.
	const [ selected, setSelected ] = useState( 'user-choice' );

	const { payload, error, isLoading } = useBrassring( listType, deptList );

	const jobs = payload?.jobs ?? [];

	const dropdownOptions = [
		{ value: 'user-choice', label: '-- Choose Listing --' },
		{ value: 'staff', label: 'Staff postings' },
		{ value: 'students', label: 'Student postings' },
	];

	const handleSelection = ( selectedOption ) => {
		setSelected( selectedOption );
		console.log( `Option selected:`, selectedOption );
	};

	return (
		<div className="uds-asu-careers-listing">
			{ 'user-choice' === listType && (
				<div className="uds-asu-careers-selection-wrapper">
					<Select
						options={ dropdownOptions }
						defaultValue={ dropdownOptions[ 0 ] }
						onChange={ handleSelection }
					/>
				</div>
			) }
			<ul className="list-unstyled">
				<>
					{ error && (
						<li>
							There has been a server error, please try again!
						</li>
					) }
					{ isLoading && (
						<RotatingLines
							strokeColor="grey"
							strokeWidth="5"
							animationDuration="0.75"
							width="96"
							visible={ true }
						/>
					) }

					{ ! isLoading && ! jobs?.length && (
						<div>No postings available at this time!</div>
					) }

					{ ! isLoading &&
						jobs?.length &&
						jobs.map( ( job ) => (
							<li key={ job.id }>
								<div>
									<div>
										<a
											target="_blank"
											rel="noreferrer"
											href={ job.postingLink }
										>
											{ job.titleFull }
										</a>
									</div>
									<div>
										<strong>Department: </strong>
										{ job.department }
									</div>
									<div>
										<strong>Close date: </strong>
										{ job.closeDate }
									</div>
								</div>
							</li>
						) ) }
				</>
			</ul>
		</div>
	);
};

AsuCareers.propTypes = {
	listType: PropTypes.oneOf( [ 'user-choice', 'staff', 'students' ] ),
	deptList: PropTypes.string.isRequired,
};

AsuCareers.defaultProps = {
	listType: 'user-choice',
};

export { AsuCareers };
