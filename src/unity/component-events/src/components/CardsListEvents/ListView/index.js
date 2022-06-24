// @ts-check
import { FeedContext, Card } from '../../../../../components-core/src';
import React, { useContext } from 'react';

// import { formatDate, formatTime } from '../../../core/utils/date';
import { ListViewWrapper } from './index.styles';

const ListView = () => {
	const { events } = useContext( FeedContext ); // Reading the "events" object from the context

	return (
		<ListViewWrapper data-testid="list-view-container">
			{ events?.map( ( event ) => (
				<li key={ event.id }>
					<Card
						type="event"
						eventFormat="inline"
						horizontal
						eventTime={ event.dateDescription }
						eventLocation={ event.location }
						clickable={ false }
						// clickHref={  }
						title={ event.title }
						image={ event.imageUrl }
						imageAltText={ event.title }
						linkLabel={ event.eventButtonText }
						linkUrl={ event.eventButtonUrl }
					/>
				</li>
			) ) }
		</ListViewWrapper>
	);
};

export { ListView };
