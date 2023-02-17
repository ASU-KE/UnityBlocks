import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Select from 'react-select';
import classNames from 'classnames';

import { useBrassring } from '../hooks/useBrassring';

const AsuCareers = ( props ) => {
	const { editorListType, deptList, titleText } = props;
	const selectedDeptList = deptList.split( ',' );
	const newS = [
		{
			value: deptList,
			label: 'All departments',
		},
	];
	selectedDeptList.map( ( departmentName ) => {
		newS.push( {
			value: departmentName,
			label: departmentName,
		} );
	} );

	// default current selection to the editor list setting
	const [ selection, setSelection ] = useState( editorListType );
	const [ newDeptList, setNewDeptList ] = useState( deptList );
	const [ icon, setIcon ] = useState();

	useEffect( () => {
		setSelection( 'staff' );
		setNewDeptList( deptList );
		setIcon( 'bg-maroon' );
	}, [] );

	const { payload, isError, isLoading, data } = useBrassring(
		selection,
		newDeptList
	);

	const jobs = payload?.jobs;

	return (
		<div
			className={ classNames(
				'uds-asu-careers-listing',
				'bg-white',
				'py-7',
				'px-12',
				'my-4'
			) }
		>
			{ titleText && (
				<h3 className="mb-6">
					<span className="highlight-gold">{ titleText }</span>
				</h3>
			) }

			{ 'user-choice' === editorListType && (
				<form
					className={ classNames(
						'uds-asu-careers-selection-wrapper',
						'row',
						'mb-4',
						'uds-form',
						'px-2'
					) }
				>
					<div className={ classNames( 'col-2', 'form-check' ) }>
						<input
							id="labelForStaff"
							type="radio"
							value="staff"
							name="listType"
							defaultChecked
							className="form-check-input"
							onChange={ ( event ) => {
								setSelection( event.target.value );
								setIcon( 'bg-maroon' );
							} }
						/>
						<label
							htmlFor="labelForStaff"
							className={ classNames(
								'form-check-label',
								'align-middle'
							) }
						>
							{ 'Staff jobs' }
						</label>
					</div>
					<div className={ classNames( 'col-2', 'form-check' ) }>
						<input
							id="labelForStudent"
							type="radio"
							value="students"
							name="listType"
							className="form-check-input"
							onChange={ ( event ) => {
								setSelection( event.target.value );
								setIcon( 'bg-gold' );
							} }
						/>
						<label
							htmlFor="labelForStudent"
							className={ classNames(
								'form-check-label',
								'align-middle'
							) }
						>
							{ 'Student jobs' }
						</label>
					</div>
					<div className={ classNames( 'col-8', 'form-check' ) }>
						<Select
							options={ newS }
							defaultValue={ deptList }
							onChange={ ( event ) => {
								setNewDeptList( event.value );
							} }
						/>
					</div>
				</form>
			) }

			{ isError && (
				<li>There has been a server error, please try again!</li>
			) }

			{ data && jobs?.length && (
				<div
					className={ classNames(
						`${ icon }`,
						'career-icon',
						'rounded-circle',
						'mb-4'
					) }
				>
					<FontAwesomeIcon
						icon="fa-solid fa-user-tie"
						size="lg"
						inverse
					/>
				</div>
			) }

			<ul className={ classNames( 'list-unstyled', 'w-50' ) }>
				<>
					{ data &&
						jobs?.length &&
						jobs.map( ( job ) => (
							<li key={ job.id } className="mb-6">
								<div className="single-job">
									<div className="mb-2">
										<strong>{ job.titleFull }</strong>
									</div>
									<div className="mb-2">
										<strong>Department: </strong>
										{ job.department }
									</div>
									<div className="mb-2">
										<strong>Close date: </strong>
										{ job.closeDate }
									</div>
									<div className="mb-2">
										<strong>Location: </strong>
										{ job.campus }
									</div>
									<div className="mb-4">
										<a
											target="_blank"
											rel="noreferrer"
											href={ job.postingLink }
										>
											Job details
										</a>
									</div>
								</div>
							</li>
						) ) }
					{ data && ! jobs?.length && (
						<li>No postings available at this time!</li>
					) }
				</>
			</ul>
		</div>
	);
};

AsuCareers.propTypes = {
	editorListType: PropTypes.oneOf( [ 'user-choice', 'staff', 'students' ] ),
	deptList: PropTypes.string.isRequired,
	titleText: PropTypes.string,
};

AsuCareers.defaultProps = {
	editorListType: 'user-choice',
};

export { AsuCareers };
