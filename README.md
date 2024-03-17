# URL Shortener

## Description

This is a simple URL shortener that takes a long URL and returns a shortened version of it. The shortened URL is a
combination of the base URL and a unique identifier. The unique identifier is generated using a counter that is
incremented each time a new URL is shortened. The counter is then converted to a base 62 number and appended to the base
URL. The base 62 number is used to ensure that the shortened URL is as short as possible.

## Usage

[URL Shortner](https://urls-4b.web.app/)

## Run App Locally

### Run Django Server

```bash
./manage.py runserver localhost:8000
```

### Run Next JS Web UI

Read more about how to run the Web UI [Here](/web/README.md)

### Run Migration using the migration command

### Generate local api key using Django shell and the command below:

```
>>> from rest_framework_api_key.models import APIKey
>>> api_key, key = APIKey.objects.create_key(name="url_shortener_server_key")
>>> # Proceed with `api_key` and `key`...
```

## Api Doc:

[Link to API doc](http://localhost:8000/doc/)

### Sample API

### Retreive Short Lin URL

```
GET http://localhost:8000/api/v1/url/1L9zO9O
Accept: application/json
```

#### Test short link generator

```
POST http://localhost:8000/api/v1/url
Content-Type: application/json

{
  "long_url": "https://medium.com/@aarav.gupta9/simple-url-shortener-using-python-d433c2464062"
}
```

#### List all genrerated urls

```
GET http://localhost:8000/api/v1/url
Accept: application/json

```

More Doc [Here](URLShortener.http)

## Development

### Add a new app

```bash
./manage.py startapp api
```

### Run Migration

```bash
./manage.py makemigrations shortener && ./manage.py migrate
```

### Roll back migration

```bash
./manage.py migrate shortener zero 
```

### Start Django Shell

```bash
./manage.py shell -i python
```

## Installation

### Dependecies

- Lunchy - `brew install lunchy`, `lunchy ls`. More info [Here](https://github.com/eddiezane/lunchy)
- MemCached - `brew install memcached`. More
  info [Here](https://gist.github.com/tomysmile/ba6c0ba4488ea51e6423d492985a7953)

### Prerequisites

- Python 3.6 or higher
- pip
- virtualenv
- SQLite
- Django
- Django Rest Framework
- Django REST Framework API Key

### Run

- Start Memcached using lunchy:

```bash
lunchy start memcached
```

### Clean up

- Stop MemCached using lunchy:

```bash
lunchy stop memcached
```

### Todo

#### Milestone`0` - Setup

- [x] Create a new repository on GitHub
- [x] Add Web Framework to the repository
- [x] Add API Framework to the repository
- [x] Add GitHub actions to the repository (CI/CD)
- [x] Deploy Web app to Firebase or Varcel
- [ ] Deploy API to Heroku/Google App engine

#### Milestone`1`

- [x] Decide what to build
- [x] Create profile on GitHub
- [x] Create a new repository on GitHub
- [x] Add a README.md file
- [x] Share your project with the class

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
https://ericsysmin.com/2024/02/05/how-to-install-pyenv-on-macos/
pyenv virtualenv 3.8.0 my-env
https://ioflood.com/blog/pyenv/#:~:text=First%2C%20install%20pyenv%2Dvirtualenv%20using,pyenv%20virtualenv%203.8.

pyenv virtualenv 3.12.2 urlshortener
pyenv local urlshortener
pyenv which python
pyenv which pip
pyenv activate urlshortener
pyenv deactivate
pyenv uninstall venv
pip install --upgrade setuptools
pip install --upgrade distribute 

https://intellij-support.jetbrains.com/hc/en-us/articles/206544519-Directories-used-by-the-IDE-to-store-settings-caches-plugins-and-logs

https://auth0.com/blog/using-nextjs-server-actions-to-call-external-apis/

IconKitchen
https://icon.kitchen