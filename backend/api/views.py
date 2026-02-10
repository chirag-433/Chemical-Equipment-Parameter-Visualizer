from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import EquipmentDataset
from .utils import analyze_csv


@api_view(['POST'])
def upload_csv(request):
    file = request.FILES.get('file')

    if not file:
        return Response({"error": "No file uploaded"}, status=400)

    try:
        summary = analyze_csv(file)

        EquipmentDataset.objects.create(
            name=file.name,
            summary=summary
        )

        return Response(summary)

    except Exception as e:
        return Response({"error": str(e)}, status=500)


@api_view(['GET'])
def history(request):
    data = EquipmentDataset.objects.all().order_by('-uploaded_at')

    response = [
        {
            "id": d.id,
            "name": d.name,
            "uploaded_at": d.uploaded_at,
            "summary": d.summary,
        }
        for d in data
    ]

    return Response(response)
