from rest_framework import serializers


class FormulaSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50, required=False)
    
    class Meta:
        # fields=['name']
        fields = ('name',)
        extra_kwargs = {'name': {'required': True}} 