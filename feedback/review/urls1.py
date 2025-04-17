from django.urls import path

from . import views

urlpatterns = [
    path("", views.review),
    path("thank-you", views.thank_you),  # This is the URL pattern for the thank you page.
]
