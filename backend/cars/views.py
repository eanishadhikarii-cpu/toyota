from rest_framework import viewsets, filters
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Car
from .serializers import CarListSerializer, CarDetailSerializer

class CarViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Car.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'category']
    
    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CarDetailSerializer
        return CarListSerializer
    
    @action(detail=False, methods=['get'])
    def by_category(self, request):
        category = request.query_params.get('category', None)
        if category:
            cars = self.queryset.filter(category=category.upper())
        else:
            cars = self.queryset.all()
        serializer = self.get_serializer(cars, many=True)
        return Response(serializer.data)
