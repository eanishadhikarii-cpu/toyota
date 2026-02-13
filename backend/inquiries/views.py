from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Inquiry, TestDrive
from .serializers import InquirySerializer, TestDriveSerializer

class InquiryViewSet(viewsets.ModelViewSet):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer
    http_method_names = ['post']

class TestDriveViewSet(viewsets.ModelViewSet):
    queryset = TestDrive.objects.all()
    serializer_class = TestDriveSerializer
    http_method_names = ['post']
