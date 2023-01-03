import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Select from 'react-select';

import { useBrassring } from '../hooks/useBrassring';

const AsuCareers = ( props ) => {
	const { listType, depList } = props;

	const { payload, error, isLoading } = useBrassring( listType, depList );

	const jobs = payload?.jobs ?? [];

	const dropdownOptions = [
		{ value: 'none', label: '--Select--' },
		{ value: 'staff', label: 'Staff postings' },
		{ value: 'students', label: 'Student postings' },
	];

	return (
		<div className="uds-asu-careers-listing">
			{ 'user-choice' === listType && (
				<div className="uds-asu-careers-selection-wrapper">
					<Select options={ dropdownOptions } />
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

export { AsuCareers };
