from api.settings import WEB_BASE_URL


class URLServiceBase62:
    def __init__(self):
        self.ltos = {}
        self.stol = {}
        self.COUNTER = 10_000_000_0000  # 10 Billion
        self.elements = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        self.base_url = WEB_BASE_URL

    def long_to_short(self, url):
        short_code = self.base_10_to_base_62(self.COUNTER)
        self.ltos[url] = self.COUNTER
        self.stol[self.COUNTER] = url
        self.COUNTER += 1
        return self.base_url + short_code, short_code

    def short_to_long(self, url):
        short_code = url[len(self.base_url):]
        original_url = self.base_62_to_base_10(short_code)
        return self.stol.get(original_url)

    def base_62_to_base_10(self, s):
        n = 0
        for i in range(len(s)):
            n = n * 62 + self.convert(s[i])
        return n

    def convert(self, c):
        if '0' <= c <= '9':
            return ord(c) - ord('0')
        if 'a' <= c <= 'z':
            return ord(c) - ord('a') + 10
        if 'A' <= c <= 'Z':
            return ord(c) - ord('A') + 36
        return -1

    def base_10_to_base_62(self, n):
        sb = []
        while n != 0:
            sb.insert(0, self.elements[n % 62])
            n //= 62
        while len(sb) != 7:
            sb.insert(0, '0')
        return ''.join(sb)
