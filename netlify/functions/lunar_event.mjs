export default async (req, context) => {
    // console.log("req", req);
    // console.log("context", context);
    // console.log(Netlify.env.get("VI_LUNAR_CALENDAR_1"));
    return new Response(`BEGIN:VCALENDAR
PRODID:-//github.com/rianjs/ical.net//NONSGML ical.net 4.0//EN
VERSION:2.0
BEGIN:VEVENT
DTEND;VALUE=DATE:20250628
DTSTAMP:20180126T040745Z
DTSTART;VALUE=DATE:20250627
RRULE:FREQ=DAILY;COUNT=1
SEQUENCE:0
SUMMARY:test2
UID:a8e88636-f566-4d8c-9c56-2061eb1f92e9
END:VEVENT
END:VCALENDAR`);
};

export const config = {
    path: '/vi_lunar_calendar'
}