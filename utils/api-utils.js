export async function getEvents() {
    const res = await fetch('https://next-learn-493fd-default-rtdb.firebaseio.com/events.json');
    const data = await res.json();
    
    const events = [];

    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }

    return events;
}

export async function getFeaturedEvents() {
    const events = await getEvents();
    return events.filter(event => event.isFeatured);
}

export async function getEventById(id) {
    const events = await getEvents();
    return events.find((event) => event.id === id);
}

export async function getEventIdParams() {
    const events = await getEvents();
    return events.map(event => ({ params: { eventId: event.id }}))
}