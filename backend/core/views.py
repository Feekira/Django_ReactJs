from .models import List,Item
from rest_framework import permissions,viewsets,authentication
from .serializers import ListSerializer,ItemSerializer

# Create your views here.
class ListViewSet(viewsets.ModelViewSet):
    # queryset = List.objects.all()
    serializer_class = ListSerializer
    permission_classes = [permissions.IsAuthenticated]

    # API auth token
    authentication_classes = [authentication.TokenAuthentication,authentication.SessionAuthentication]

    def get_queryset(self):
        user = self.request.user
        return List.objects.filter(owner=user)

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer
    
    # API auth token
    authentication_classes = [authentication.TokenAuthentication,authentication.SessionAuthentication]