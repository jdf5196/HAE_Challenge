# Candidate App

Built with Python 2.7.12, Django 1.10.8. Uses sqlite3.

## Install

### Dependencies

The only dependency to run this project is Docker. Instructions for installing Docker are here: https://docs.docker.com/install/

### Start API Server

First, build the Docker image and seed test data:

`docker build -t candidate-api .`

Then, start the dev server on port 8000:

`docker run -p 8000:8000 candidate-api`

## API Details

The API provides the following:

| action | URL | description |  
| ------ | --- | ----------- |  
| `GET` | `/candidates/` | list all candidates |
| `POST` | `/candidates/` | create a new candidate |
| `GET` | `/candidates/:id/` | retrieve candidate |
| `PATCH` | `/candidates/:id/` | update candidate |
| `DELETE` | `/candidates/:id/` | delete candidate |

> :information_source: All data is transferred with `Content-Type: application/json`. Requests made with `Content-Type: text/html` will result in 500 errors.

> :information_source: Also, note that all URLs end with a trailing `/`.

## Candidate Model Definition

* `id: int` (readonly)
* `name: string`
* `years_exp: int`
* `status: string`
  * Choices: "pending", "accepted", or "rejected"
  * Once a candidate has been `reviewed`, `status` can no longer set to "pending".
* `date_applied: datetime`
* `reviewed: boolean` (readonly)
  * Once a candidate has been accepted or rejected, this field will be set to `true`.
* `description: string`
* `created: datetime` (readonly)
* `updated: datetime` (readonly)

When creating a new Candidate, all non-readonly fields are required except for `status` which defaults to pending.
