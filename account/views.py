from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_api_key import permissions

from account.serializers.AuthUserSerializer import AuthUserSerializer


# Create your views here.


class AuthUserCreate(APIView):
    """
    Create a user given username, email and password
    """

    authentication_classes = []
    permission_classes = [permissions.HasAPIKey]

    @swagger_auto_schema(
        operation_id="Create a user account",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=["username", "email", "password"],
            properties={
                'username': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_SLUG),
                'email': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_EMAIL),
                'password': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_PASSWORD),
            },
        ),
        responses={200: AuthUserSerializer()},
        operation_description="Create user account using username, email and password",
        tags=["API"])
    def post(self, request, version, format="json"):
        serializer = AuthUserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            if user:
                response = serializer.data
                token = Token.objects.create(user=user)
                response["token"] = token.key
                return Response(response, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AuthUserLogin(APIView):
    """
    Login user using email and password.
    """
    permission_classes = [permissions.HasAPIKey]

    @swagger_auto_schema(
        operation_id="Login User",
        request_body=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            required=["email", "password"],
            properties={
                'email': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_EMAIL),
                'password': openapi.Schema(type=openapi.TYPE_STRING, format=openapi.FORMAT_PASSWORD),
            },
        ),
        responses={200: AuthUserSerializer()},
        operation_description="Login user using email and password",
        tags=["API"])
    def post(self, request, version, format="json"):
        return Response(f"Hello from login: {request} | {version}", status=status.HTTP_200_OK)
