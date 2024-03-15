import hashlib

from api.settings import WEB_BASE_URL


class URLServiceMd5:
    def __init__(self):
        self.url_mapping = {}
        self.base_url = WEB_BASE_URL

    def long_to_short(self, original_url: str):
        hash_value = hashlib.md5(original_url.encode()).hexdigest()[:6]
        short_url = self.base_url + hash_value
        return short_url

    def short_to_long(self, short_url: str):
        original_url = self.url_mapping.get(short_url)
        return original_url
