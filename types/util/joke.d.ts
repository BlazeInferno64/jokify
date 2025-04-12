// Copyright (c) 2025 BlazeInferno64 --> https://github.com/blazeinferno64.
//
// Author(s) -> BlazeInferno64
//
// Last updated: 12/04/2025

// Type definitions for 'jokify'

/**
 * Function to fetch dadjoke from the dadjoke api
 *
 * @returns - Returns an object containing the joke info
 * @example
 */
export function getJoke(): Promise<{
    joke: any;
    status: number;
    statusText: number;
    id: any;
}>;
