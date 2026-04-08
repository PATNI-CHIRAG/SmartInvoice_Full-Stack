from django.db import models

class Invoice(models.Model):
    customer_name = models.CharField(max_length=100)
    customer_email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)

    subtotal = models.FloatField(default=0)
    tax = models.FloatField(default=0)
    total = models.FloatField(default=0)

    def __str__(self):
        return self.customer_name


class Item(models.Model):
    invoice = models.ForeignKey(Invoice, related_name='items', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    quantity = models.IntegerField()
    price = models.FloatField()

    def get_total(self):
        return self.quantity * self.price