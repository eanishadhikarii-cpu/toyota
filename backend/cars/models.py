from django.db import models

class Car(models.Model):
    CATEGORY_CHOICES = [
        ('SUV', 'SUV'),
        ('SEDAN', 'Sedan'),
        ('HYBRID', 'Hybrid'),
        ('SPORTS', 'Sports'),
    ]
    
    name = models.CharField(max_length=200)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    horsepower = models.IntegerField()
    torque = models.IntegerField()
    acceleration = models.DecimalField(max_digits=4, decimal_places=2, help_text="0-100 km/h in seconds")
    description = models.TextField()
    hero_image = models.ImageField(upload_to='cars/hero/')
    video = models.FileField(upload_to='cars/videos/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.name

class CarImage(models.Model):
    car = models.ForeignKey(Car, related_name='gallery_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='cars/gallery/')
    order = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['order']
