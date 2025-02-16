from rest_framework import serializers as s
from .models import Anel

class AnelSerializer(s.ModelSerializer):
    class Meta:
        model = Anel
        fields = '__all__'
        read_only_fields = ['dataCriacao']

    def validate(self, data):
        required_fields = ['nome', 'poder', 'portador', 'forjadoPor', 'imagem']
        
        for field in required_fields:
            if not data.get(field) or str(data.get(field)).strip() == '':
                raise s.ValidationError({field: f'O campo {field} não pode estar vazio'})
        
        return data