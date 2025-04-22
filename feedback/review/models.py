from django.db import models

# Create your models here.

class Review(models.Model):
    """Review model. model is for storing data not fetching.
    """
    user_name = models.CharField(max_length=100)  # max_length is for counfiguring database setup not only for validation 
    review_text = models.TextField()
    rating = models.IntegerField()
    