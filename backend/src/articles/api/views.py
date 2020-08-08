from django.shortcuts import render
from articles.models import Articles
from rest_framework import viewsets

from .serializers import ArticlesSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticlesSerializer
    queryset = Articles.objects.all()


# from rest_framework.generics import ListAPIView, RetrieveAPIView,CreateAPIView,DestroyAPIView,UpdateAPIView

# class ArticleListView(ListAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticlesSerializer
#
# class ArticleDetailView(RetrieveAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticlesSerializer
#
# class ArticleCreateView(CreateAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticlesSerializer
#
# class ArticleUpdateView(UpdateAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticlesSerializer
#
# class ArticleDeleteView(DestroyAPIView):
#     queryset = Articles.objects.all()
#     serializer_class = ArticlesSerializer

class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticlesSerializer
    queryset = Articles.objects.all()