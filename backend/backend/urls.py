from django.urls import path,include
from rest_framework import routers
from .views import UserViewSet,GroupViewSet
from django.contrib import admin


router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'group', GroupViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
]
