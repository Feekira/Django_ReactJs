from django.urls import path,include
from rest_framework import routers
from .views import UserViewSet,GroupViewSet
from django.contrib import admin
from core.views import ListViewSet,ItemViewSet
from rest_framework.authtoken import views


#Router endpoints

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'group', GroupViewSet)
router.register(r'list', ListViewSet, basename='lsit')
router.register(r'item', ItemViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-token-auth/', views.obtain_auth_token),
    path('', include(router.urls)),
]
