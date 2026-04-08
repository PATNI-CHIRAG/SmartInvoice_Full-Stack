from rest_framework import serializers
from .models import Invoice, Item

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['name', 'quantity', 'price']


class InvoiceSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True)

    class Meta:
        model = Invoice
        fields = '__all__'

    def create(self, validated_data):
        items_data = validated_data.pop('items')

        invoice = Invoice.objects.create(**validated_data)

        subtotal = 0

        for item in items_data:
            obj = Item.objects.create(invoice=invoice, **item)
            subtotal += obj.get_total()

        tax = subtotal * 0.18
        total = subtotal + tax

        invoice.subtotal = subtotal
        invoice.tax = tax
        invoice.total = total
        invoice.save()

        return invoice