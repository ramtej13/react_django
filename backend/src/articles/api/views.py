from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
# Create your views here.
from articles.models import Articles

from .serializers import ArticlesSerializer

class ArticleListView(ListAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializer




class ArticleDetailView(RetrieveAPIView):
    queryset = Articles.objects.all()
    serializer_class = ArticlesSerializer

