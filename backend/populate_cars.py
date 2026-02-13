import os
import django
import requests
from pathlib import Path

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'toyota_backend.settings')
django.setup()

from cars.models import Car, CarImage

def download_image(url, filepath):
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(response.content)
            return True
    except:
        pass
    return False

# Create media directories
Path('media/cars/hero').mkdir(parents=True, exist_ok=True)
Path('media/cars/gallery').mkdir(parents=True, exist_ok=True)

# Toyota car data with image URLs
cars_data = [
    {
        'name': 'Toyota Land Cruiser',
        'category': 'SUV',
        'price': 85000,
        'horsepower': 409,
        'torque': 479,
        'acceleration': 6.7,
        'description': 'The legendary off-road SUV with unmatched capability and luxury.',
        'hero_image': 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&q=80',
    },
    {
        'name': 'Toyota GR Supra',
        'category': 'SPORTS',
        'price': 55000,
        'horsepower': 382,
        'torque': 368,
        'acceleration': 3.9,
        'description': 'Pure sports car performance with iconic design and thrilling dynamics.',
        'hero_image': 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1200&q=80',
    },
    {
        'name': 'Toyota Camry Hybrid',
        'category': 'HYBRID',
        'price': 32000,
        'horsepower': 208,
        'torque': 163,
        'acceleration': 7.6,
        'description': 'Efficient hybrid sedan combining comfort, technology, and fuel economy.',
        'hero_image': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=1200&q=80',
    },
    {
        'name': 'Toyota RAV4',
        'category': 'SUV',
        'price': 38000,
        'horsepower': 203,
        'torque': 184,
        'acceleration': 8.1,
        'description': 'Versatile compact SUV perfect for adventure and daily driving.',
        'hero_image': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=1200&q=80',
    },
    {
        'name': 'Toyota Avalon',
        'category': 'SEDAN',
        'price': 42000,
        'horsepower': 301,
        'torque': 267,
        'acceleration': 6.5,
        'description': 'Premium full-size sedan with refined comfort and powerful performance.',
        'hero_image': 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1200&q=80',
    },
    {
        'name': 'Toyota Prius',
        'category': 'HYBRID',
        'price': 28000,
        'horsepower': 121,
        'torque': 105,
        'acceleration': 9.8,
        'description': 'The hybrid pioneer delivering exceptional fuel efficiency and eco-friendly driving.',
        'hero_image': 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1200&q=80',
    },
]

print("Starting to populate database with Toyota cars...")

for car_data in cars_data:
    print(f"\nProcessing: {car_data['name']}")
    
    # Download hero image
    hero_filename = f"hero_{car_data['name'].replace(' ', '_').lower()}.jpg"
    hero_path = f'media/cars/hero/{hero_filename}'
    
    if download_image(car_data['hero_image'], hero_path):
        print(f"  [OK] Downloaded hero image")
        
        # Create car entry
        car = Car.objects.create(
            name=car_data['name'],
            category=car_data['category'],
            price=car_data['price'],
            horsepower=car_data['horsepower'],
            torque=car_data['torque'],
            acceleration=car_data['acceleration'],
            description=car_data['description'],
            hero_image=f'cars/hero/{hero_filename}'
        )
        print(f"  [OK] Created car entry in database")
    else:
        print(f"  [FAIL] Failed to download image")

print("\n[SUCCESS] Database population complete!")
print(f"Total cars added: {Car.objects.count()}")
