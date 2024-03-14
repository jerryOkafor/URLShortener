from django.urls import path

from redirect.views import redirect

urlpatterns = [
    path('url/<str:short_url>', redirect, name='redirect')
]
