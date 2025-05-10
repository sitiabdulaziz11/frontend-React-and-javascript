from django.urls import path

from . import views

urlpatterns = [
    # path("profiles", views.CreateProfileView.as_view()),
    path("", views.CreateProfileView.as_view()),
    # path("list", views.ProfilesView.as_view(), name="create_profile")
    path("list", views.ProfilesView.as_view())
]