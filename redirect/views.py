from django.http import HttpResponse
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from api.settings import WEB_BASE_URL
from utils.URLServiceBase62 import URLServiceBase62


# Create your views here.

@swagger_auto_schema(
    operation_id="Redirect short url",
    method='get',
    operation_description="Redirects the user to the long url corresponding to the the given short url ",
    responses={404: 'slug not found'},
    tags=['API'])
@api_view(['GET'])
def redirect(request, version, short_url):
    url_service = URLServiceBase62()
    long_url = url_service.short_to_long(WEB_BASE_URL + short_url)
    data = {
        "long_url": long_url
    }
    return Response(data, status=status.HTTP_200_OK)
