from django.db import models as m

RACA = [('E', 'Elfos'),
        ('A', 'Anões'),
        ('H', 'Homens'),
        ('S', 'Sauron')]

class Anel(m.Model):
    nome = m.CharField(max_length=100)
    poder = m.TextField()
    portador = m.CharField(max_length=100)
    forjadoPor = m.CharField(max_length=1, choices=RACA)
    imagem = m.URLField(max_length=2000)
    dataCriacao = m.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nome