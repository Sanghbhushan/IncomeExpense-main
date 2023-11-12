from django.db import models
from Auth_api.models import User

# Create your models here.
class Expense(models.Model):
    CATEGORY_OPTIONS = [
        ("Others", "Others"),
        ("Food and Dining", "Food and Dining"),
        ("Shopping", "Shopping"),
        ("Travelling", "Travelling"),
        ("Entertainment", "Entertainment"),
        ("Medical", "Medical"),
        ("Personal Care", "Personal Care"),
        ("Education", "Education"),
        ("Bills and Utilities", "Bills and Utilities"),
        ("Rent", "Rent"),
        ("Taxes", "Taxes"),
        ("Insurance", "Insurance"),
        ("Gifts and Donation", "Gifts and Donation")
    ]
    
  
    owner = models.ForeignKey(to=User, on_delete=models.CASCADE)
    category = models.CharField(choices=CATEGORY_OPTIONS, max_length=500)
    amount = models.DecimalField(max_digits=10, decimal_places=2, max_length=255)
    note = models.TextField()
    date = models.DateField(null=False, blank=False)


    

    