from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_api_key.permissions import HasAPIKey

from shortener.models import ShortUrl
from shortener.serializers.ShortUrlSerializer import ShortUrlSerializer
from utils.URLServiceMd5 import URLServiceMd5

short_url_response = openapi.Response("Shor URL response", ShortUrlSerializer)


@swagger_auto_schema(
    operation_id="Generate short url",
    method="post",
    operation_description="Generate a short url",
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=["long_url"],
        properties={
            "long_url": openapi.Schema(type=openapi.TYPE_STRING),
        },
    ),
    responses={200: short_url_response, 404: "[...shortCode] not found"},
    tags=["API"],
)
@swagger_auto_schema(
    operation_id="List all generated short url",
    method="get",
    operation_description="Returns list all short urls",
    responses={200: ShortUrlSerializer(many=True), 404: "[...shortCode] not found"},
    tags=["API"],
)
@api_view(["POST", "GET"])
@permission_classes([HasAPIKey | IsAuthenticated])
def create_short_url_or_get_short_urls(request, version):
    if request.method == "POST":
        long_url = request.data.get("long_url")

        if ShortUrl.objects.filter(long_url=long_url).exists():
            query = ShortUrl.objects.get(long_url=long_url)
            serializer = ShortUrlSerializer(query, many=False)
            return Response(data=serializer.data, status=status.HTTP_200_OK)

        url_service = URLServiceMd5()
        short_url, short_code = url_service.long_to_short(long_url)

        data = {"long_url": long_url, "short_url": short_url, "short_code": short_code}

        serializer = ShortUrlSerializer(data=data)
        serializer.is_valid()
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    else:
        queryset = ShortUrl.objects.all()
        serializer = ShortUrlSerializer(queryset, many=True)
        return Response(serializer.data)


@swagger_auto_schema(
    operation_id="Retrieve long url",
    method="get",
    operation_description="Generate short url details",
    responses={200: short_url_response, 404: "Short URL not found"},
    tags=["API"],
)
@api_view(["GET"])
@permission_classes([HasAPIKey | IsAuthenticated])
def get_single_short_url(request, version, short_code):
    print(f"{request} | {version} | {short_code}")
    shortenedUrl = ShortUrl.objects.filter(short_code=short_code)
    is_shortened = shortenedUrl.exists()
    if is_shortened:
        url = shortenedUrl.get()

        # increase the hit count
        url.hit = url.hit + 1
        url.save()

        serializer = ShortUrlSerializer(url, many=False)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    return Response(data={}, status=status.HTTP_404_NOT_FOUND)
