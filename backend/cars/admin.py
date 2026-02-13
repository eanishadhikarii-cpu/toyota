from django.contrib import admin
from .models import Car, CarImage

class CarImageInline(admin.TabularInline):
    model = CarImage
    extra = 3

@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price', 'horsepower', 'created_at']
    list_filter = ['category', 'created_at']
    search_fields = ['name', 'description']
    inlines = [CarImageInline]
