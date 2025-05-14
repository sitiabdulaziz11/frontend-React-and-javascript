from django.urls import path

from . import views

urlpatterns = [
    # path("", views.review),
    path("", views.ReviewView.as_view()),
    # path("thank-you", views.thank_you),  # This is the URL pattern for the thank you page.
    path("thank-you", views.ThankYouViews.as_view()),
    path("reviews", views.ReviewsListView.as_view()),
    # path("reviews/<int:id>", views.ReviewsDetailView.as_view())
    path("reviews/favorite", views.AddFavoriteView.as_view()),
    path("reviews/<int:pk>", views.ReviewsDetailView.as_view())
]
