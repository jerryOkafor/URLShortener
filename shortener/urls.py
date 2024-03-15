from django.urls import path, re_path
from shortener.views import get_long_url, create_short_url

urlpatterns = [
    # path("url/", include(router.urls)),
    path("url", create_short_url),
    re_path("url/(?P<short_code>.+)", get_long_url),
]
