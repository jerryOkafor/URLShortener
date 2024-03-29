from django.contrib.auth.models import User
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework_api_key.models import APIKey


# Create your tests here.

class AuthUserTest(TestCase):
    def setUp(self):
        self.test_user = User.objects.create_user(
            username="testUser",
            email="testemail@example.com",
            password="pa$$w0rd")
        # Create URL for the test user
        self.create_url = reverse("auth-register", kwargs={"version": "v1"})

        # Create API key for the test user
        self.api_key, self.key = APIKey.objects.create_key(name="test_key")

    def test_create_user(self):
        """
        Create new user and return user profile and access token
        """

        data = {
            "username": "foobar",
            "email": "foobar@example.com",
            "password": "pa$$w0rd"
        }
        headers = {"X-Api-Key": self.key}
        response = self.client.post(self.create_url, data=data, headers=headers)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(User.objects.count(), 2)
        self.assertIsNotNone(response.data.get("token"))

    def test_create_user_with_short_password(self):
        """
        Test creating a user with password less than 8 characters
        """
        data = {
            "username": "shortPass",
            "email": "shortPass@example.com",
            "password": "short"  # < 8
        }

        headers = {"X-Api-Key": self.key}
        response = self.client.post(self.create_url, data=data, headers=headers)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(response.data.get("password")[0].code, "min_length")
        self.assertEqual(len(response.data.get("password")), 1)

    def test_create_user_with_no_password(self):
        """
        Test creating a user with no password, this should fail
        """
        data = {
            "username": "noPass",
            "email": "noPass@example.com",
            "password": ""
        }

        headers = {"X-Api-Key": self.key}
        response = self.client.post(self.create_url, data=data, headers=headers)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(response.data.get("password")[0].code, "blank")
        self.assertEqual(len(response.data.get("password")), 1)

    def test_create_user_with_long_username(self):
        """
        Test creating a user with username that is too long
        """
        data = {
            "username": "foobar" * 151,
            "email": "foobarlong@example.com",
            "password": "pa$$w0rd"
        }

        headers = {"X-Api-Key": self.key}
        response = self.client.post(self.create_url, data=data, headers=headers)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data.get("username")), 1)
        self.assertEqual(response.data.get("username")[0].code, "max_length")

    def test_create_user_with_existing_username(self):
        """
        Test creating a user with an existing username
        """
        data = {
            "username": "testUser",
            "email": "foobarlong@example.com",
            "password": "pa$$w0rd"
        }

        headers = {"X-Api-Key": self.key}
        response = self.client.post(self.create_url, data=data, headers=headers)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data.get("username")), 1)
        self.assertEqual(response.data.get("username")[0].code, "unique")

    def test_create_user_with_existing_email(self):
        """
        Test creating a user with an existing email
        """
        data = {
            "username": "testUser",
            "email": "testemail@example.com",
            "password": "pa$$w0rd"
        }

        headers = {"X-Api-Key": self.key}
        response = self.client.post(self.create_url, data=data, headers=headers)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(User.objects.count(), 1)
        self.assertEqual(len(response.data.get("email")), 1)
        self.assertEqual(response.data.get("email")[0].code, "unique")
