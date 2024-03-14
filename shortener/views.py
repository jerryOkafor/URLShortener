from django.http import HttpResponse
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from utils.URLServiceBase62 import URLServiceBase62


@swagger_auto_schema(
    operation_id="Generate short url",
    methods=['post'],
    operation_description="Generate a short url given a long url",
    responses={404: 'slug not found'},
    tags=['API'])
@api_view(['POST'])
def long_to_short_url(request, version):
    long_url = request.data.get('long_url')
    url_service = URLServiceBase62()
    short_url = url_service.long_to_short(long_url)
    response = {
        'long_url': long_url,
        'short_url': short_url
    }
    return Response(data=response, status=status.HTTP_200_OK)

# from django.shortcuts import render
# from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
#
# from shortener.models import Post
# from shortener.serializers.tag import PostSerializer
#
#
# # Create your views here.
#
# class PostListCreateAPIView(ListCreateAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
#
#
# class PostDetailsAPIView(RetrieveUpdateDestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializer
