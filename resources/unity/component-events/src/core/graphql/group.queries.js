export const LIST_GROUPS_QUERY = `
	query AllGroups(
		$pagination: PaginationOptions
		$sort: SortOptions
		$filter: GroupFilterDTO
	) {
		allGroups(pagination: $pagination, sort: $sort, filter: $filter) {
			total
			data {
				id
				slug
				name
			}
		}
	}
`;
