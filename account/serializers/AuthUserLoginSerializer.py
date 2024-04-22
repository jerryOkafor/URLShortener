from django.contrib.auth import authenticate
from django.contrib.auth.models import update_last_login
from rest_framework import serializers
from rest_framework.authtoken.models import Token


class AuthUserLoginSerializer(serializers.Serializer):
    password = serializers.CharField(write_only=True)
    username = serializers.CharField(write_only=True)
    token = serializers.CharField(read_only=True)

    def validate(self, attrs):
        username = attrs.get("username")
        password = attrs.get("password")

        if username and password:
            # Try to authenticate the user using Django's authenticate auth framework
            user = authenticate(
                request=self.context.get("request"),
                username=username,
                password=password,
            )

            if not user:
                raise serializers.ValidationError(
                    "Invalid username or password", code="authorization"
                )

            update_last_login(None, user)

            token, created = Token.objects.get_or_create(user=user)

            attrs["token"] = token.key
            attrs["message"] = "Login successful!"
            exclude_fields = self.context.get("exlude_fields", [])

            for field in exclude_fields:
                attrs.pop(field, default=None)
            return attrs

        else:
            raise serializers.NotAuthenticated(
                "Username and password are required fields"
            )
