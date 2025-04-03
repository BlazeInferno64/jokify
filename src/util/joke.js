// Copyright (c) 2025 BlazeInferno64 --> https://github.com/blazeinferno64.
//
// Author(s) -> BlazeInferno64
//
// Last updated: 03/04/2024

"use strict";

// Import 'blazed.js' http library
const blazed = require("blazed.js");


// Configure 'blazed.js' for the dadjoke api
blazed.configure({
    'Default-URL': 'http://icanhazdadjoke.com/',
    headers: {
        'X-Requested-With': false
    }
});

/**
 * Function to fetch dadjoke from the dadjoke api
 * 
 * @returns - Returns an object containing the joke info
 */
const getJoke = async () => {
    // Setting up a proper user agent to ensure the HTTP request is successfull
    // Or else it might be blocked by the api
    const agent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36";
    const response =  await blazed.request({
        method: "GET",
        headers: {
            Accept: 'application/json',
            'User-Agent': agent
        }
    });
    return {
        joke: response.data.joke,
        status: response.status,
        id: response.data.id
    }
}

// Exporting the necessary functions as object
// For type definitions check '/types/util/joke.d.ts'
module.exports = {
    getJoke
}