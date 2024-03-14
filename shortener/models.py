from django.db import models


# Create your models here.


# class Tag(models.Model):
#     name = models.CharField(max_length=100, unique=True)
#
#
# class Post(models.Model):
#     title = models.CharField(max_length=100)
#     text = models.TextField()
#     tags = models.ManyToManyField(Tag, related_name='posts', blank=True)
#     # image = models.ImageField(null=True, blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#
#
# class Comment(models.Model):
#     post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
#     text = models.TextField()
#     created_at = models.DateTimeField(auto_now_add=True)
