from django.db import models


class ShortUrl(models.Model):
    long_url = models.TextField()
    short_url = models.TextField()
    short_code = models.TextField()
    hit = models.BigIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
