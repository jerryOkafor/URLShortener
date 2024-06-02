#!/bin/sh

gpg --symmetric --cipher-algo AES256 ../prod.env
gpg --symmetric --cipher-algo AES256 ../web/prod.env
