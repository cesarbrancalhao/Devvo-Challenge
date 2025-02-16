from django.urls import path, include
from rest_framework import routers as r
from .views import AnelViewSet

r = r.DefaultRouter()
r.register(r'aneis', AnelViewSet)

urlpatterns = [
    path('', include(r.urls)),
]