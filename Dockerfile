# My Django Project
# Version: 1.0

# FROM - Image to start building on.
FROM python:3.12-slim


# PROJECT SETUP
# ----------------

# sets the working directory
WORKDIR /usr/src/django-docker

# copy these two files from <src> to <dest>
# <src> = current directory on host machine
# <dest> = filesystem of the container
COPY Pipfile Pipfile.lock ./

# install pipenv on the container
RUN pip install -U pipenv

# install project dependencies
RUN pipenv install --system

# copy all files and directories from <src> to <dest>
COPY . .


# RUN SERVER
# ------------

# expose the port
EXPOSE 8000
EXPOSE 443

RUN python manage.py collectstatic

RUN python manage.py migrate

# Command to run
CMD ["gunicorn", "api.wsgi", "--bind", "0.0.0.0:8000", "--bind", "0.0.0.0:443"]