"""
URL configuration for api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include, re_path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from rest_framework.exceptions import NotFound
from django.conf.urls import handler400, handler403, handler404, handler500

schema_view = get_schema_view(
    info=openapi.Info(
        title="Url Shortener API",
        default_version="v1",
        description="API doc for UrlShortener - Capstone project for comIT training.",
        terms_of_service="https://www.google.com/policies/terms/",
        contact=openapi.Contact(email="contact@snippets.local"),
        license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


def error404(request, exeption):
    raise NotFound(detail="Error 404, page not found", code=404)


handler404 = error404

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api-account/", include("rest_framework.urls")),
    path("doc/", schema_view.with_ui("redoc", cache_timeout=0), name="schema-redoc"),
    re_path(
        r"api/(?P<version>[v1|v2]+)/", include("account.urls"), name="accounts-urls"
    ),
    re_path(
        r"api/(?P<version>[v1|v2]+)/", include("shortener.urls"), name="shortener-urls"
    ),
]
