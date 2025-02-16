from rest_framework import viewsets as v
from rest_framework import status as stts, response as r
from .models import Anel
from .serializers import AnelSerializer as srl
from .services import AnelService as svc

class AnelViewSet(v.ModelViewSet):
    queryset = Anel.objects.all()
    serializer_class = srl

    def create(self, request):
        try:
            serializer = srl(data=request.data)
            if not serializer.is_valid():
                return r.Response(serializer.errors, status=stts.HTTP_400_BAD_REQUEST)
            
            anel = svc.create_or_update_anel(request.data)
            if isinstance(anel, str):
                return r.Response({'erro': anel}, status=stts.HTTP_400_BAD_REQUEST)
            
            return r.Response(srl(anel).data, status=stts.HTTP_201_CREATED)
        except Exception as e:
            return r.Response({'erro': str(e)}, status=stts.HTTP_400_BAD_REQUEST)

    def update(self, request):
        try:
            serializer = srl(data=request.data)
            if not serializer.is_valid():
                return r.Response(serializer.errors, status=stts.HTTP_400_BAD_REQUEST)
            
            anel = svc.create_or_update_anel(request.data)
            if isinstance(anel, str): 
                return r.Response({'erro': anel}, status=stts.HTTP_400_BAD_REQUEST)
            
            return r.Response(srl(anel).data, status=stts.HTTP_200_OK)
        except Exception as e:
            return r.Response({'erro': str(e)}, status=stts.HTTP_400_BAD_REQUEST)