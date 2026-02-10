from django.urls import path
from .views import history, upload_csv

urlpatterns = [
    path('upload/', upload_csv),
    path('history/', history),
]
