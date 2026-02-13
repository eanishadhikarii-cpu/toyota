from django.contrib import admin
from .models import Inquiry, TestDrive

@admin.register(Inquiry)
class InquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'phone', 'car_model', 'created_at']
    list_filter = ['created_at', 'car_model']
    search_fields = ['name', 'email', 'message']
    readonly_fields = ['created_at']

@admin.register(TestDrive)
class TestDriveAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'car_model', 'preferred_date', 'created_at']
    list_filter = ['preferred_date', 'created_at', 'car_model']
    search_fields = ['name', 'email']
    readonly_fields = ['created_at']
