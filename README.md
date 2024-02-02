# URL Shortener

## Description

This is a simple URL shortener that takes a long URL and returns a shortened version of it. The shortened URL is a
combination of the base URL and a unique identifier. The unique identifier is generated using a counter that is
incremented each time a new URL is shortened. The counter is then converted to a base 62 number and appended to the base
URL. The base 62 number is used to ensure that the shortened URL is as short as possible.

## Usage

### Shorten a URL

To shorten a URL, send a POST request to the `/shorten` endpoint with the long URL in the request body. The response
will contain the shortened URL.

```bash

curl -X POST -H "Content-Type: application/json" -d '{"url": "https://www.google.com"}' http://localhost:5000/shorten

```

### Redirect to a URL

To redirect to a URL, send a GET request to the shortened URL. The server will respond with a 301 status code and
a `Location` header that contains the long URL.

```bash 

curl -I http://localhost:5000/1

``` 

## Installation

### Prerequisites

- Python 3.6 or higher
- pip
- virtualenv
- SQLite
- Django
- Django Rest Framework
- Django Rest Framework Simple JWT
- Django Rest Framework Simple JWT

### Todo

#### Milestone`0` - Setup

- [x] Create a new repository on GitHub
- [x] Add Web Framework to the repository
- [x] Add API Framework to the repository
- [x] Add GitHub actions to the repository (CI/CD)
- [ ] Deploy Web app to Firebase or Varcel
- [ ] Deploy API to Heroku/Google App engine

#### Milestone`1`

- [ ] Decide what to build
- [ ] Create profile on GitHub
- [ ] Create a new repository on GitHub
- [ ] Add a README.md file
- [ ] Share your project with the class

#### Milestone`2`

- [ ] Document the specifics of the project, framework, and libraries
- [ ] Include a section on how to run your application
- [ ] Share your project on the group Slack channel

#### Milestone`3`

- [ ] Add a project roadmap to the README.md file. Simple list of features that you wish to develop
- [ ] Indicate which features are in progress and which features are completed
- [ ] Review and update project to ensure that `How to run the application` section is up-to-date
- [ ] Share your project on the group Slack channel

#### Milestone`4`

- [ ] Update your readme file as needed. Ensure roadmap and other documentation are up-to-date
- [ ] Share your project on the group Slack channel and present a short summary of what you wish to present.

### CMDS

Generate a new requirements.txt file

```bash
pip freeze > requirements.txt
```