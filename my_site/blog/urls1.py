from django.urls import path

from . import views

urlpatterns = [
    path("", views.starting_page, name="starting"),
    path("posts", views.posts, name="posts"),
    path("posts/<slug:slug>", views.posts_detail, name="detail")  # /posts/my-first-post called slug. and slug is checker for this as str check for string.
    
]
