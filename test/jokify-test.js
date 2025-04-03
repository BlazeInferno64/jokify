// Copyright (c) 2025 BlazeInferno64 --> https://github.com/blazeinferno64.
//
// Author(s) -> BlazeInferno64
//
// Last updated: 03/04/2024

// Note:- This is just a simple test file for 'jokify'
//        You can run this file by doing 'npm test' in your terminal

// Requiring the necessary libraries
const { JokifyClient } = require("../index");
const { describe, test, expect } = require("@jest/globals");

describe("Random dadlokes fetcher function", () => {
    test("Fetches a random dadjoke from the dadjoke api", async () => {
        const client = new JokifyClient();
        const response = await client.fetchJoke();
        expect(response.status).toBe(200);
        expect(response.id).toBeTruthy();
        expect(response.joke).toBeTruthy();
        return response;
    });
})