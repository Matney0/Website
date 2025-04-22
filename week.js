// Class declaration for the Event class
class Event {
    constructor(name, date, location) {
        this.name = name;
        this.date = date;
        this.location = location;
    }

    getDetails() {
        return `${this.name} is happening on ${this.date} at ${this.location}.`;
    }

    isToday() {
        const today = new Date().toISOString().split('T')[0];
        const eventDate = new Date(this.date).toISOString().split('T')[0];
        return eventDate === today;
    }
}

// Creating instances of the Event class
const event1 = new Event("Music Concert", "2023-10-15", "City Hall");
const event2 = new Event("Art Exhibition", "2023-10-16", "Art Gallery");

// Using the methods
console.log(event1.getDetails()); // Output: Music Concert is happening on 2023-10-15 at City Hall.
console.log(event2.getDetails()); // Output: Art Exhibition is happening on 2023-10-16 at Art Gallery.

console.log(event1.isToday()); // Output: true or false depending on the current date
console.log(event2.isToday()); // Output: true or false depending on the current date