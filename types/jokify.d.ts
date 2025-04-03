// Copyright (c) 2025 BlazeInferno64 --> https://github.com/blazeinferno64.
//
// Author(s) -> BlazeInferno64
//
// Last updated: 03/04/2025

// Type definitions for 'jokify'

/**
 * Exposes the 'JokifyClient' class which interacts with the dadjoke api.
 * 
 * @example
 * 
 * // Set this to JokifyClient class
 * const client = new JokifyClient();
 */
export class JokifyClient {
    /**
     * Fetches a random dadjoke
     *
     * @returns The joke as an object
     * @example
     * // Fetch a random dadjoke
     * const client = new JokifyClient();
     * 
     * // Call the client with fetchJoke() method
     * client.fetchJoke()
     *      .then(result => {
     *          // Logging the result
     *          console.log(result);
     *      })
     *      .catch(err => {
     *          // Catching any errors
     *          console.error(err);
     *      });
     */
    fetchJoke(): Promise<{
        joke: any;
        status: number;
        id: any;
    }>;
}
