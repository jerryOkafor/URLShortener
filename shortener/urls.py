from django.urls import path

from shortener.views import long_to_short_url

# from .views import PostListCreateAPIView, PostDetailsAPIView


urlpatterns = [
    path("url", long_to_short_url, name="shortener")
]
