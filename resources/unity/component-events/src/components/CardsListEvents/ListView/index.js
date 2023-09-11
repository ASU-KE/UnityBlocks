import React, { useContext } from "react";

import { Card, FeedContext } from "../../../../../components-core/src/";

// import { formatDate, formatTime } from '../../../core/utils/date';
import { ListViewWrapper } from "./index.styles";

const ListView = () => {
  const { events } = useContext(FeedContext); // Reading the "events" object from the context

  return (
    <ListViewWrapper data-testid="list-view-container">
      {events?.map((event) => (
        <li key={event.id}>
          <Card
            type="event"
            eventFormat="inline"
            horizontal
            eventTime={event.dateDescription}
            eventLocation={event.location}
            clickable={true}
            clickHref={event.eventLink}
            title={event.title}
            image={event.imageUrl}
            imageAltText={event.title}
            linkLabel={event.eventButtonText}
            linkUrl={event.eventButtonUrl}
          />
        </li>
      ))}
    </ListViewWrapper>
  );
};

export { ListView };
