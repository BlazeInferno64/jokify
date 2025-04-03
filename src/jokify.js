// Copyright (c) 2025 BlazeInferno64 --> https://github.com/blazeinferno64.
//
// Author(s) -> BlazeInferno64
//
// Last updated: 03/04/2024
"use strict";

const { getJoke } = require('./util/joke');

/**
 * Exposes the Client class which interacts with the dadjoke api.
 */

class JokifyClient {
    /**
     * Fetches a random dadjoke
     * 
     * @returns The joke as an object
     */
    async fetchJoke() {
        // Get the joke
        const result = await getJoke();
        // Finally return it if successfull
        return result;
    }
}

// Exporting the object properties
// For type definitions check '/types/jokify.d.ts'
module.exports = {
    JokifyClient
}