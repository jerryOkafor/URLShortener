# from rest_framework import serializers
#
# from shortener.models import Tag, Comment, Post
#
#
# class TagSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Tag
#         fields = ('name',)
#         read_only_fields = ('name',)
#
#
# class CommentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Comment
#         fields = ('id', 'post', 'text', 'created_at')
#         read_only_fields = ('id', 'created_at')
#
#
# class PostSerializer(serializers.ModelSerializer):
#     tags = TagSerializer(many=True, read_only=True)
#     # comments = CommentSerializer(many=True, read_only=True)
#
#     class Meta:
#         model = Post
#         fields = ('id', 'title', 'text', 'tags', 'created_at')
#         read_only_fields = ('id', 'created_at')
