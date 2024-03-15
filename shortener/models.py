from django.db import models


class ShortUrl(models.Model):
    long_url = models.TextField(unique=True)
    short_url = models.TextField(unique=True)
    short_code = models.TextField(unique=True)
    hit = models.BigIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
