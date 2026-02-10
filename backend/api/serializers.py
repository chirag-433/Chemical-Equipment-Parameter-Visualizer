from rest_framework import serializers
from .models import EquipmentDataset


class DatasetSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentDataset
        fields = "__all__"
from rest_framework import serializers
from .models import EquipmentDataset

class DatasetSerializer(serializers.ModelSerializer):
    class Meta:
        model = EquipmentDataset
        fields = "__all__"
