from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from cars.views import CarViewSet
from inquiries.views import InquiryViewSet, TestDriveViewSet

router = DefaultRouter()
router.register(r'cars', CarViewSet, basename='car')
router.register(r'inquiry', InquiryViewSet, basename='inquiry')
router.register(r'test-drive', TestDriveViewSet, basename='test-drive')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
