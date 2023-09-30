import React, { useContext } from "react";

import { Card, FeedContext } from "../../../../../components-core/src";

import { GridViewWrapper } from "./index.styles";

const GridView = () => {
  const { events } = useContext(FeedContext); // Reading the "events" object from the context

  return (
    <GridViewWrapper data-testid="grid-view-container">
      {events?.map((event) => (
        <li key={event.id}>
          <Card
            type="event"
            eventFormat="inline"
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
    </GridViewWrapper>
  );
};

export { GridView };
