export const GET_EVENT_QUERY = `
  query Event($id: ID!) {
    Event(id: $id, loadAttachments: true, loadHeadliners: true) {
      id
      createdAt
      updatedAt
      slug
      title
      content
      excerpt
      dateDescription
      location
      startAt
      endAt
      publishAt
      registrationUrl
      headliners {
        id
        weight
        slug
        name
        hideName
        description
        mediaUrl
        mediaMimeType
      }
      headerImage {
        name
        mediaUrl
      }
      flyer {
        name
        caption
        flyerPdfUrl
        flyerLargeImageUrl
        flyerThumbnailUrl
      }
    }
  }
`;

export const GET_EVENT_BY_SLUG_QUERY = `
  query EventBySlug($slug: String!) {
    EventBySlug(slug: $slug, loadAttachments: true, loadHeadliners: true) {
      id
      createdAt
      updatedAt
      slug
      title
      content
      excerpt
      dateDescription
      location
      startAt
      endAt
      publishAt
      registrationUrl
      headliners {
        id
        weight
        slug
        name
        hideName
        description
        mediaUrl
        mediaMimeType
      }
      headerImage {
        name
        mediaUrl
      }
      flyer {
        name
        caption
        flyerPdfUrl
        flyerLargeImageUrl
        flyerThumbnailUrl
      }
    }
  }
`;

export const LIST_EVENTS_QUERY = `
  query AllEvents(
    $pagination: PaginationOptions
    $sort: SortOptions
    $filter: EventFilterDTO
  ) {
    allEvents(
      loadAttachments: true
      loadHeadliners: true
      pagination: $pagination
      sort: $sort
      filter: $filter
    ) {
      data {
        id
        createdAt
        updatedAt
        slug
        title
        content
        excerpt
        dateDescription
        location
        startAt
        endAt
        publishAt
        registrationUrl
        headliners {
          id
          weight
          slug
          name
          hideName
          description
          mediaUrl
          mediaMimeType
        }
        headerImage {
          name
          mediaUrl
        }
        flyer {
          name
          caption
          flyerPdfUrl
          flyerLargeImageUrl
          flyerThumbnailUrl
        }
      }
      pageCount
      previous
      next
    }
  }
`;

export const TEST_EVENTS_QUERY = `
  query AllEvents(
    $pagination: PaginationOptions
  ) {
    allEvents(
      loadAttachments: true
      loadHeadliners: true
      pagination: $pagination
    ) {
      data {
        id
        createdAt
        updatedAt
        slug
        title
        content
        excerpt
        dateDescription
        location
        startAt
        endAt
        publishAt
        registrationUrl
        headliners {
          id
          weight
          slug
          name
          hideName
          description
          mediaUrl
          mediaMimeType
        }
        headerImage {
          name
          mediaUrl
        }
        flyer {
          name
          caption
          flyerPdfUrl
          flyerLargeImageUrl
          flyerThumbnailUrl
        }
      }
      pageCount
      previous
      next
    }
  }
`;
