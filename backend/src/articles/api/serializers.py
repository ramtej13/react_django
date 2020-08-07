from rest_framework import serializers


from articles.models import Articles

class ArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ('description','id',"title","content")