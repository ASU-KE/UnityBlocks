// @ts-check

/**
 * Transformer data function provided to the high order component
 * @param {object} data
 */
const transformData = ( data ) => {
	return {
		id: data.id,
		title: data.title,
		imageUrl: data.headerImage?.mediaUrl,
		location: ( data.location || '' ).trim(),
		// interests: data.interests,
		startDate: data.startAt,
		endDate: data.endAt,
		dateDescription: data.dateDescription,
		// alias: data.alias,
		// audiences: data.audiences,
		// eventUnits: data.event_units,
		// eventTopics: data.event_topics,
		// eventTypes: data.event_types,
		// collegeUnit: data.college_unit,
		eventButtonUrl: data.registrationUrl,
		eventButtonText: 'Click to register',
		eventLink: data.eventLink,
	};
};
export { transformData };
