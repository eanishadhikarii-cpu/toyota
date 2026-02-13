from rest_framework import serializers
from .models import Car, CarImage

class CarImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CarImage
        fields = ['id', 'image', 'order']

class CarListSerializer(serializers.ModelSerializer):
    hero_image = serializers.SerializerMethodField()
    
    class Meta:
        model = Car
        fields = ['id', 'name', 'category', 'price', 'horsepower', 'hero_image']
    
    def get_hero_image(self, obj):
        request = self.context.get('request')
        if obj.hero_image and request:
            return request.build_absolute_uri(obj.hero_image.url)
        return None

class CarDetailSerializer(serializers.ModelSerializer):
    gallery_images = CarImageSerializer(many=True, read_only=True)
    hero_image = serializers.SerializerMethodField()
    video = serializers.SerializerMethodField()
    
    class Meta:
        model = Car
        fields = '__all__'
    
    def get_hero_image(self, obj):
        request = self.context.get('request')
        if obj.hero_image and request:
            return request.build_absolute_uri(obj.hero_image.url)
        return None
    
    def get_video(self, obj):
        request = self.context.get('request')
        if obj.video and request:
            return request.build_absolute_uri(obj.video.url)
        return None
