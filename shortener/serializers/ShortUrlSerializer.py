from rest_framework import serializers

from shortener.models import ShortUrl


class ShortUrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShortUrl
        fields = ('id', 'long_url', 'short_url', 'short_code', 'hit', 'created_at')
        read_only_fields = ('id', 'created_at')
