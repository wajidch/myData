'use strict';

const request = require('request');
const config = require('../../configs/config');


/**
 * This function is to get public holiday from google calendar
 * @param params will be holding country code to get holidays of specific country
 * @param reply will return the list of holidays in array
 */
module.exports = (params, reply) => {
    const calendarURL = `https://www.googleapis.com/calendar/v3/calendars/en.${params.countryCode}%23holiday%40group.v.calendar.google.com/events?key=${config.googleCalendarApiKey}`;
    request(calendarURL, (error, response) => {
        if (error) {
            return reply(error)
        } else {
            const holidaysList = [];
            const holidays = JSON.parse(response.body);
            holidays.items.forEach(holiday => {
                holidaysList.push({
                    name: holiday.summary,
                    date: holiday.start.date,
                    // country_id: params.countryId
                })
            });
            console.log("holidays",holidaysList)
            return reply(null, holidaysList)
        }
    })
};