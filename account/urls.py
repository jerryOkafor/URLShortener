from django.template.defaulttags import url
from django.urls import path

from account.views import AuthUserCreate, AuthUserLogin

urlpatterns = [
    path(r"auth/register", AuthUserCreate.as_view(), name="auth-register"),
    path(r"auth/login", AuthUserLogin.as_view(), name="auth-login"),
]
