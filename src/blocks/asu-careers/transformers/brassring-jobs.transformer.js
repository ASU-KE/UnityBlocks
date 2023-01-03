/**
 * Transform raw job data from Brassring into a more readable schema.
 *
 * This is a function that is passed to a higher-order function to remap the api response.
 */
const transformBrassringJobs = ( job ) => ( {
	id: job.Question[ 0 ][ '#text' ],
	titleShort: job.Question[ 1 ][ '#text' ],
	titleFull: job.Question[ 2 ][ '#text' ],
	campus: job.Question[ 3 ][ '#text' ],
	unknown: job.Question[ 4 ][ '#text' ],
	department: job.Question[ 5 ][ '#text' ],
	salary: job.Question[ 6 ][ '#text' ],
	positionType: job.Question[ 7 ][ '#text' ],
	closeDate: job.Question[ 8 ][ '#text' ],
	isHotJob: job.HotJob,
	postingLink: job.JobDetailLink,
	lastUpdated: job.LastUpdated,
} );

export { transformBrassringJobs };
