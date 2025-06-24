export default async (req, context) => {
    console.log("req", req);
    console.log("context", context);
    return new Response(`BEGIN:VCALENDAR
PRODID:-//github.com/rianjs/ical.net//NONSGML ical.net 4.0//EN
VERSION:2.0
BEGIN:VEVENT
DTEND;VALUE=DATE:20180310
DTSTAMP:20180126T040745Z
DTSTART;VALUE=DATE:20180309
RRULE:FREQ=DAILY;COUNT=1
SEQUENCE:0
SUMMARY:22/1
UID:69c19e83-9a01-4c2d-9878-1c3eb1c11cfa
END:VEVENT
END:VCALENDAR`);
};
