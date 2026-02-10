from django.db import models

class EquipmentDataset(models.Model):
    name = models.CharField(max_length=100)
    uploaded_at = models.DateTimeField(auto_now_add=True)
    summary = models.JSONField()
