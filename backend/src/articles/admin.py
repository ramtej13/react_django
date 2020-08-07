from django.contrib import admin
from .models import Articles
# Register your models here.

admin.site.register(Articles)


#
# from rest_framework import serializers
# from articles.models import Article
#
#
#
# class ArticlesSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Article
#         fields = ("title","content")