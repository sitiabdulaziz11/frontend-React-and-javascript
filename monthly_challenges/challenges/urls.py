from django.urls import path

from . import views

urlpatterns = [
    # path("january", views.january), # this is called url config/conf
    # path("february", views.february),
    # path("march", views.march),
   path("<int:month>", views.monthly_challenge_by_number),
   path("<str:month>", views.monthly_challenge, name="month-challenge") # placeholder that use built in syntax
    ] 
