# Express.js Route Handler Bug

This repository demonstrates a common bug in Express.js route handlers: incorrectly handling the case where no data is found. The `/users` route should return a 404 status code if no users are found, but it currently returns a 204 status code. This is semantically incorrect and can lead to unexpected behavior in client applications.