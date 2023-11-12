from django.db import models
from Auth_api.models import User

# Create your models here.
class Income(models.Model):
    INCOME_OPTIONS = [
        ("Others", "Others"),
        ("Salary", "Salary"),
        ("Business", "Business"),
        ("Sold items", "Sold items"),
        ("Coupons", "Coupons")
        
    ]
    
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    source = models.CharField(choices=INCOME_OPTIONS, max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2, max_length=255)
    note = models.TextField()
    date = models.DateField(null=False, blank=False)