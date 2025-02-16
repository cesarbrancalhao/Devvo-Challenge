from .models import Anel

class AnelService:
    @staticmethod
    def create_or_update_anel(data):
        forjador = data['forjadoPor']
        forjados = Anel.objects.filter(forjadoPor=forjador)

        if forjador == 'S' and forjados.count() > 0:
            return 'Sauron já forjou um anel!'
        
        if forjador == 'E' and forjados.count() > 2:
            return 'Os elfos já forjaram 3 anéis!'
        
        if forjador == 'A' and forjados.count() > 7:
            return 'Os anões já forjaram 7 anéis!'
        
        if forjador == 'H' and forjados.count() > 9:
            return 'Os homens já forjaram 9 anéis!'
        
        anel = Anel.objects.create(**data)
        return anel