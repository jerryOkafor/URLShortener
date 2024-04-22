from django.urls import path, re_path
from shortener.views import get_single_short_url, create_short_url_or_get_short_urls

urlpatterns = [
    # path("url/", include(router.urls)),
    path("url", create_short_url_or_get_short_urls, name="create-shorturl"),
    re_path(r"url/(?P<short_code>.+)", get_single_short_url, name="retrive-shorturl"),
]
