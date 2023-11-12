from django.db import models
from Auth_api.models import User

# Create your models here.
class Todo(models.Model):
    
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    
    title = models.CharField(max_length=250)
    description = models.TextField(blank=True)
    is_completed = models.BooleanField(default=False)
    in_process = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    


    def __str__(self):
        return self.title