from rest_framework import serializers
from .models import Inquiry, TestDrive

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'

class TestDriveSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestDrive
        fields = '__all__'
