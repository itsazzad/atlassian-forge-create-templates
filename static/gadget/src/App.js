import React, { useEffect, useState } from 'react';
import { events } from '@forge/bridge';

function App() {
  const [initialEventData, setInitialEventData] = useState();
  const [updatedEventData, setUpdatedEventData] = useState();

  const requestInitialData = () => events.emit('app.request-initial-data');
  const subscribeForInitialData = () => events.on('app.initial-data', setInitialEventData);
  const subscribeForChangedData = () => events.on('app.data-changed', setUpdatedEventData);

  useEffect(() => {
    requestInitialData();

    const subscriptions = [
      subscribeForInitialData(),
      subscribeForChangedData()
    ];

    return () => {
      subscriptions.forEach(subscription => subscription.then((subscription) => subscription.unsubscribe()));
    };
  }, []);

  return (
    <div>
      Initial data: {JSON.stringify(initialEventData)}
      <br/>
      Updated data: {JSON.stringify(updatedEventData)}
    </div>
  );
}

export default App;
