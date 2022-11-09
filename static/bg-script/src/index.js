import { events } from '@forge/bridge';

const getData = () => Math.random();
const initialData = getData();

// Emit the data for already existing gadgets
events.emit('app.initial-data', initialData);

// Listen to new gadgets requesting the data
events.on('app.request-initial-data', () => {
  events.emit('app.initial-data', initialData);
});

// Simulate data change
setInterval(() => {
  events.emit('app.data-changed', getData());
}, 1000);
